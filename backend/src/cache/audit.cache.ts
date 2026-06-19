import { redis } from '../lib/redis';
import { IAudit } from '../models/audit.model';

const TTL = 60 * 30; // 30 minutes per CLAUDE.md

function key(id: string): string {
  return `audit:${id}`;
}

export async function getCachedAudit(id: string): Promise<IAudit | null> {
  const raw = await redis.get(key(id));
  if (!raw) return null;
  return JSON.parse(raw) as IAudit;
}

export async function setCachedAudit(audit: IAudit): Promise<void> {
  await redis.set(key(String(audit._id)), JSON.stringify(audit), 'EX', TTL);
}

export async function deleteCachedAudit(id: string): Promise<void> {
  await redis.del(key(id));
}
