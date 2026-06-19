import { StatusCodes } from 'http-status-codes';
import { deleteCachedAudit, getCachedAudit, setCachedAudit } from '../cache/audit.cache';
import { AppError } from '../errors';
import { IAudit } from '../models/audit.model';
import {
  createAudit,
  findAuditById,
  unlockAudit,
  updateAuditStatus,
} from '../repository/audit.repository';
import { RunAuditInput, UnlockAuditInput } from '../schemas/audit.schema';

export async function startAudit(input: RunAuditInput): Promise<IAudit> {
  const audit = await createAudit(input.url);

  // Kick off async audit work here (BullMQ enqueue goes here later)
  // For now, mark as running immediately
  await updateAuditStatus(String(audit._id), 'running');

  return audit;
}

export async function getAudit(id: string): Promise<IAudit> {
  const cached = await getCachedAudit(id);
  if (cached) return cached;

  const audit = await findAuditById(id);
  if (!audit) throw new AppError('Audit not found', StatusCodes.NOT_FOUND);

  if (audit.status === 'complete') {
    await setCachedAudit(audit);
  }

  return audit;
}

export async function unlockAuditReport(
  id: string,
  input: UnlockAuditInput
): Promise<IAudit> {
  const audit = await findAuditById(id);
  if (!audit) throw new AppError('Audit not found', StatusCodes.NOT_FOUND);
  if (audit.status !== 'complete')
    throw new AppError('Audit is not complete yet', StatusCodes.BAD_REQUEST);

  const updated = await unlockAudit(id, input.email, input.name);
  if (!updated) throw new AppError('Failed to unlock audit', StatusCodes.INTERNAL_SERVER_ERROR);

  await deleteCachedAudit(id);

  return updated;
}
