import type { AuditCheck, CheckStatus } from '../../types/audit';

const WEIGHTS: Record<CheckStatus, number> = { pass: 1, warn: 0.5, fail: 0 };

/** Section score = weighted pass ratio of its checks, 0–100. */
export function scoreFromChecks(checks: AuditCheck[]): number {
  if (checks.length === 0) return 0;
  const total = checks.reduce((sum, c) => sum + WEIGHTS[c.status], 0);
  return Math.round((total / checks.length) * 100);
}

/** Map a PSI audit score (0–1 or null) to a check status. */
export function statusFromPsiScore(score: number | null | undefined): CheckStatus {
  if (score === null || score === undefined) return 'warn';
  if (score >= 0.9) return 'pass';
  if (score >= 0.5) return 'warn';
  return 'fail';
}
