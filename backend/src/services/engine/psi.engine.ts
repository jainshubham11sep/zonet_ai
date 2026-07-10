import { StatusCodes } from 'http-status-codes';
import { ENV } from '../../config/env';
import { AppError } from '../../errors';

const PSI_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

/** Only the audit ids we actually consume — keeps the cached payload small. */
const AUDIT_IDS = [
  'largest-contentful-paint',
  'cumulative-layout-shift',
  'interaction-to-next-paint',
  'first-contentful-paint',
  'speed-index',
  'total-blocking-time',
  'total-byte-weight',
  'render-blocking-resources',
  'unused-css-rules',
  'unused-javascript',
  'uses-optimized-images',
  'modern-image-formats',
  'uses-responsive-images',
  'offscreen-images',
  'viewport',
  'tap-targets',
  'font-size',
  'color-contrast',
  'label',
  'image-alt',
] as const;

export interface PsiAudit {
  score: number | null;
  displayValue?: string;
}

export interface PsiStrategyData {
  categories: {
    performance: number | null;
    seo: number | null;
    accessibility: number | null;
    bestPractices: number | null;
  };
  audits: Record<string, PsiAudit>;
}

export interface PsiData {
  mobile: PsiStrategyData;
  desktop: PsiStrategyData;
}

interface RawPsiResponse {
  lighthouseResult?: {
    categories?: Record<string, { score: number | null }>;
    audits?: Record<string, { score: number | null; displayValue?: string }>;
  };
  error?: { message?: string };
}

function distill(raw: RawPsiResponse): PsiStrategyData {
  const lh = raw.lighthouseResult;
  if (!lh) {
    throw new AppError(
      raw.error?.message || 'PageSpeed Insights returned no result for this URL',
      StatusCodes.BAD_GATEWAY
    );
  }
  const cat = (name: string): number | null => lh.categories?.[name]?.score ?? null;
  const audits: Record<string, PsiAudit> = {};
  for (const id of AUDIT_IDS) {
    const a = lh.audits?.[id];
    if (a) audits[id] = { score: a.score, displayValue: a.displayValue };
  }
  return {
    categories: {
      performance: cat('performance'),
      seo: cat('seo'),
      accessibility: cat('accessibility'),
      bestPractices: cat('best-practices'),
    },
    audits,
  };
}

async function callPsi(url: string, strategy: 'mobile' | 'desktop'): Promise<PsiStrategyData> {
  const params = new URLSearchParams({ url, strategy });
  for (const c of ['performance', 'seo', 'accessibility', 'best-practices']) {
    params.append('category', c);
  }
  if (ENV.PSI_API_KEY) params.set('key', ENV.PSI_API_KEY);

  const res = await fetch(`${PSI_ENDPOINT}?${params}`, {
    signal: AbortSignal.timeout(75_000),
  });
  const json = (await res.json()) as RawPsiResponse;
  if (!res.ok) {
    throw new AppError(
      json.error?.message || `PageSpeed Insights failed (${res.status})`,
      StatusCodes.BAD_GATEWAY
    );
  }
  return distill(json);
}

/** Mobile + desktop in parallel — hard rule from CLAUDE.md. */
export async function runPsi(url: string): Promise<PsiData> {
  const [mobile, desktop] = await Promise.all([callPsi(url, 'mobile'), callPsi(url, 'desktop')]);
  return { mobile, desktop };
}
