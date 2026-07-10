import crypto from 'node:crypto';
import { StatusCodes } from 'http-status-codes';
import { deleteCachedAudit, getCachedAudit, setCachedAudit } from '../cache/audit.cache';
import { getCachedPsi, setCachedPsi } from '../cache/psi.cache';
import { ENV } from '../config/env';
import { AppError } from '../errors';
import type { IAudit } from '../models/audit.model';
import {
  createAudit,
  findAuditById,
  markUnlocked,
  setSectionResult,
  setUnlockToken,
} from '../repository/audit.repository';
import { markLeadVerified, upsertLead } from '../repository/lead.repository';
import type { RunAuditInput, UnlockAuditInput } from '../schemas/audit.schema';
import {
  type AuditStatePayload,
  type GatedSectionResult,
  SECTION_KEYS,
  type SectionKey,
  type SectionResult,
} from '../types/audit';
import { runConversionSection } from './engine/conversion.engine';
import { buildMobileSection } from './engine/mobile.engine';
import { buildPerformanceSection } from './engine/performance.engine';
import { type PsiData, runPsi } from './engine/psi.engine';
import { runQuickScan } from './engine/quick.engine';
import { runSecuritySection } from './engine/security.engine';
import { runSeoSection } from './engine/seo.engine';
import { sendMail } from './mail/mail.service';
import { renderMagicLinkEmail } from './mail/templates/magic-link';

const TOKEN_TTL_MS = 24 * 60 * 60 * 1000; // magic link valid 24h

// ---------------------------------------------------------------------------
// Payload building — teaser gating happens HERE, server-side
// ---------------------------------------------------------------------------

const EMPTY_SECTION = (key: SectionKey): GatedSectionResult => ({
  key,
  status: 'idle',
  score: null,
  checks: [],
  metrics: [],
  locked: false,
  hiddenCount: 0,
});

/** Until unlocked, only the first half of a section's findings leave the server. */
function gateSection(section: SectionResult, unlocked: boolean): GatedSectionResult {
  if (unlocked) return { ...section, locked: false, hiddenCount: 0 };
  const visible = Math.ceil(section.checks.length / 2);
  return {
    ...section,
    checks: section.checks.slice(0, visible),
    metrics: section.metrics.slice(0, 1),
    locked: true,
    hiddenCount: section.checks.length - visible,
  };
}

function buildPayload(audit: IAudit): AuditStatePayload {
  const completed = SECTION_KEYS.map((k) => audit.sections?.[k]).filter((s): s is SectionResult =>
    Boolean(s && s.status === 'complete')
  );

  const scores = completed.map((s) => s.score).filter((s): s is number => s !== null);
  const overallScore = scores.length
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    : null;

  // Issue count reflects the FULL results — revealing the count is the teaser hook
  const issueCount =
    audit.quick.filter((c) => c.status !== 'pass').length +
    completed.reduce((n, s) => n + s.checks.filter((c) => c.status !== 'pass').length, 0);

  const sections = Object.fromEntries(
    SECTION_KEYS.map((k) => {
      const stored = audit.sections?.[k];
      return [k, stored ? gateSection(stored, audit.unlocked) : EMPTY_SECTION(k)];
    })
  ) as Record<SectionKey, GatedSectionResult>;

  return {
    auditId: String(audit._id),
    url: audit.url,
    unlocked: audit.unlocked,
    overallScore,
    issueCount,
    quick: audit.quick,
    sections,
  };
}

async function requireAudit(id: string): Promise<IAudit> {
  const cached = await getCachedAudit(id);
  if (cached) return cached;
  const audit = await findAuditById(id);
  if (!audit) throw new AppError('Audit not found', StatusCodes.NOT_FOUND);
  await setCachedAudit(audit);
  return audit;
}

// ---------------------------------------------------------------------------
// Public service API
// ---------------------------------------------------------------------------

export async function startAudit(input: RunAuditInput): Promise<AuditStatePayload> {
  const quick = await runQuickScan(input.url);
  const audit = await createAudit(input.url, quick);
  return buildPayload(audit);
}

export async function getAuditState(id: string): Promise<AuditStatePayload> {
  return buildPayload(await requireAudit(id));
}

async function getPsiData(audit: IAudit): Promise<PsiData> {
  const id = String(audit._id);
  const cached = await getCachedPsi(id);
  if (cached) return cached;
  const psi = await runPsi(audit.url);
  await setCachedPsi(id, psi);
  return psi;
}

export async function runSection(id: string, key: SectionKey): Promise<AuditStatePayload> {
  const audit = await requireAudit(id);

  // Idempotent — a completed section is served, never re-run within the audit
  if (audit.sections?.[key]?.status === 'complete') {
    return buildPayload(audit);
  }

  let result: SectionResult;
  try {
    switch (key) {
      case 'performance':
        result = buildPerformanceSection(await getPsiData(audit));
        break;
      case 'mobile':
        result = buildMobileSection(await getPsiData(audit));
        break;
      case 'seo':
        result = await runSeoSection(audit.url);
        break;
      case 'security':
        result = await runSecuritySection(audit.url);
        break;
      case 'conversion':
        result = await runConversionSection(audit.url);
        break;
    }
  } catch (err) {
    if (err instanceof AppError) throw err;
    throw new AppError(
      'Could not audit this section — the site may be blocking automated checks',
      StatusCodes.BAD_GATEWAY
    );
  }

  const updated = await setSectionResult(id, key, result);
  if (!updated) throw new AppError('Audit not found', StatusCodes.NOT_FOUND);
  await deleteCachedAudit(id);
  return buildPayload(updated);
}

export async function unlockAuditReport(
  id: string,
  input: UnlockAuditInput
): Promise<{ message: string }> {
  const audit = await requireAudit(id);
  const name = input.name?.trim() || null;

  // Lead is saved FIRST — even if the email fails we keep the contact
  await upsertLead({ auditId: id, url: audit.url, email: input.email, name });

  const token = crypto.randomBytes(24).toString('hex');
  const expiry = new Date(Date.now() + TOKEN_TTL_MS);
  const updated = await setUnlockToken(id, input.email, name, token, expiry);
  if (!updated) throw new AppError('Audit not found', StatusCodes.NOT_FOUND);
  await deleteCachedAudit(id);

  const magicLink = `${ENV.CLIENT_URL}/audit/${id}?token=${token}`;
  const { issueCount } = buildPayload(updated);
  const email = renderMagicLinkEmail({
    name: name ?? 'there',
    siteUrl: audit.url.replace(/^https?:\/\//, ''),
    magicLink,
    issueCount,
  });

  try {
    await sendMail({ to: input.email, ...email });
  } catch (err) {
    console.error('[mail] failed to send magic link:', err);
    throw new AppError(
      'We could not send the email — check the address and try again',
      StatusCodes.BAD_GATEWAY
    );
  }

  return {
    message: `We sent a secure link to ${input.email}. Open it to unlock your full report.`,
  };
}

export async function verifyAuditToken(id: string, token: string): Promise<AuditStatePayload> {
  const audit = await findAuditById(id);
  if (!audit) throw new AppError('Audit not found', StatusCodes.NOT_FOUND);

  if (audit.unlocked) return buildPayload(audit);

  const tokenMatches =
    audit.unlockToken !== null &&
    audit.unlockToken.length === token.length &&
    crypto.timingSafeEqual(Buffer.from(audit.unlockToken), Buffer.from(token));

  const valid =
    tokenMatches &&
    audit.unlockTokenExpiry !== null &&
    new Date(audit.unlockTokenExpiry).getTime() > Date.now();

  if (!valid) {
    throw new AppError(
      'This link is invalid or has expired — request a new one',
      StatusCodes.UNAUTHORIZED
    );
  }

  const updated = await markUnlocked(id);
  if (!updated) throw new AppError('Audit not found', StatusCodes.NOT_FOUND);
  if (audit.leadEmail) await markLeadVerified(id, audit.leadEmail);
  await deleteCachedAudit(id);

  return buildPayload(updated);
}
