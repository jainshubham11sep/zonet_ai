import { AuditModel, type IAudit } from '../models/audit.model';
import type { AuditCheck, SectionKey, SectionResult } from '../types/audit';

export async function createAudit(url: string, quick: AuditCheck[]): Promise<IAudit> {
  return AuditModel.create({ url, status: 'complete', quick });
}

export async function findAuditById(id: string): Promise<IAudit | null> {
  return AuditModel.findById(id).lean<IAudit>();
}

export async function setSectionResult(
  id: string,
  key: SectionKey,
  result: SectionResult
): Promise<IAudit | null> {
  return AuditModel.findByIdAndUpdate(
    id,
    { $set: { [`sections.${key}`]: result } },
    { new: true }
  ).lean<IAudit>();
}

export async function setUnlockToken(
  id: string,
  email: string,
  name: string | null,
  token: string,
  expiry: Date
): Promise<IAudit | null> {
  return AuditModel.findByIdAndUpdate(
    id,
    { leadEmail: email, leadName: name, unlockToken: token, unlockTokenExpiry: expiry },
    { new: true }
  ).lean<IAudit>();
}

export async function markUnlocked(id: string): Promise<IAudit | null> {
  return AuditModel.findByIdAndUpdate(
    id,
    { unlocked: true, unlockToken: null, unlockTokenExpiry: null },
    { new: true }
  ).lean<IAudit>();
}
