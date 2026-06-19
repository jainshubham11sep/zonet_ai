import { AuditModel, IAudit } from '../models/audit.model';

export async function createAudit(url: string): Promise<IAudit> {
  return AuditModel.create({ url, status: 'pending' });
}

export async function findAuditById(id: string): Promise<IAudit | null> {
  return AuditModel.findById(id).lean<IAudit>();
}

export async function updateAuditById(
  id: string,
  patch: Partial<IAudit>
): Promise<IAudit | null> {
  return AuditModel.findByIdAndUpdate(id, patch, { new: true }).lean<IAudit>();
}

export async function updateAuditStatus(
  id: string,
  status: IAudit['status'],
  extra?: Partial<IAudit>
): Promise<IAudit | null> {
  return AuditModel.findByIdAndUpdate(id, { status, ...extra }, { new: true }).lean<IAudit>();
}

export async function unlockAudit(
  id: string,
  email: string,
  name: string
): Promise<IAudit | null> {
  return AuditModel.findByIdAndUpdate(
    id,
    { unlocked: true, leadEmail: email, leadName: name },
    { new: true }
  ).lean<IAudit>();
}
