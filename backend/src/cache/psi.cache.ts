import { redis } from '../lib/redis';
import type { PsiData } from '../services/engine/psi.engine';

const TTL = 60 * 30; // 30 minutes — same window as audit results

function key(auditId: string): string {
  return `psi:${auditId}`;
}

export async function getCachedPsi(auditId: string): Promise<PsiData | null> {
  const raw = await redis.get(key(auditId));
  if (!raw) return null;
  return JSON.parse(raw) as PsiData;
}

export async function setCachedPsi(auditId: string, data: PsiData): Promise<void> {
  await redis.set(key(auditId), JSON.stringify(data), 'EX', TTL);
}
