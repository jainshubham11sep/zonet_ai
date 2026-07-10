import type { AuditCheck, AuditMetric, SectionResult } from '../../types/audit';
import { impactFor } from './impact.templates';
import type { PsiData } from './psi.engine';
import { statusFromPsiScore } from './scoring';

function pct(score: number | null): string {
  return score === null ? '—' : `${Math.round(score * 100)}/100`;
}

export function buildPerformanceSection(psi: PsiData): SectionResult {
  const m = psi.mobile;
  const d = psi.desktop;

  const metrics: AuditMetric[] = [];
  const metricDefs: Array<{ id: string; label: string; auditId: string }> = [
    { id: 'lcp', label: 'Largest Contentful Paint', auditId: 'largest-contentful-paint' },
    { id: 'cls', label: 'Cumulative Layout Shift', auditId: 'cumulative-layout-shift' },
    { id: 'inp', label: 'Interaction to Next Paint', auditId: 'interaction-to-next-paint' },
    { id: 'weight', label: 'Total Page Weight', auditId: 'total-byte-weight' },
  ];
  for (const def of metricDefs) {
    const audit = m.audits[def.auditId];
    if (audit?.displayValue) {
      metrics.push({
        id: def.id,
        label: def.label,
        value: audit.displayValue,
        score: Math.round((audit.score ?? 0) * 100),
      });
    }
  }

  const checks: AuditCheck[] = [];
  const push = (id: string, label: string, score: number | null | undefined, value?: string) => {
    const status = statusFromPsiScore(score);
    checks.push({
      id,
      label,
      status,
      value,
      impact: status === 'pass' ? undefined : impactFor(id),
    });
  };

  push(
    'perf-mobile',
    'Mobile performance score',
    m.categories.performance,
    pct(m.categories.performance)
  );
  push(
    'perf-desktop',
    'Desktop performance score',
    d.categories.performance,
    pct(d.categories.performance)
  );

  const imgScores = ['uses-optimized-images', 'modern-image-formats', 'uses-responsive-images']
    .map((id) => m.audits[id]?.score)
    .filter((s): s is number => s !== null && s !== undefined);
  push('img-optim', 'Images optimized', imgScores.length ? Math.min(...imgScores) : null);
  push('lazy', 'Offscreen images lazy-loaded', m.audits['offscreen-images']?.score);
  push(
    'render-block',
    'Render-blocking resources',
    m.audits['render-blocking-resources']?.score,
    m.audits['render-blocking-resources']?.displayValue
  );

  const unusedScores = ['unused-css-rules', 'unused-javascript']
    .map((id) => m.audits[id]?.score)
    .filter((s): s is number => s !== null && s !== undefined);
  push(
    'unused-code',
    'Unused CSS/JS kept low',
    unusedScores.length ? Math.min(...unusedScores) : null
  );
  push(
    'speed-index',
    'Speed Index',
    m.audits['speed-index']?.score,
    m.audits['speed-index']?.displayValue
  );
  push(
    'lcp',
    'Main content appears quickly (LCP)',
    m.audits['largest-contentful-paint']?.score,
    m.audits['largest-contentful-paint']?.displayValue
  );

  const perfScores = [m.categories.performance, d.categories.performance].filter(
    (s): s is number => s !== null
  );
  const score = perfScores.length
    ? Math.round((perfScores.reduce((a, b) => a + b, 0) / perfScores.length) * 100)
    : null;

  return { key: 'performance', status: 'complete', score, checks, metrics };
}
