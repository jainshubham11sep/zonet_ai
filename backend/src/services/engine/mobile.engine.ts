import type { AuditCheck, AuditMetric, SectionResult } from '../../types/audit';
import { impactFor } from './impact.templates';
import type { PsiData } from './psi.engine';
import { scoreFromChecks, statusFromPsiScore } from './scoring';

export function buildMobileSection(psi: PsiData): SectionResult {
  const m = psi.mobile;

  const checks: AuditCheck[] = [];
  const push = (id: string, label: string, auditId: string) => {
    const audit = m.audits[auditId];
    const status = statusFromPsiScore(audit?.score);
    checks.push({
      id,
      label,
      status,
      value: audit?.displayValue,
      impact: status === 'pass' ? undefined : impactFor(id),
    });
  };

  push('viewport', 'Viewport meta tag', 'viewport');
  push('tap-targets', 'Tap targets sized correctly', 'tap-targets');
  push('font-size', 'Legible font sizes', 'font-size');
  push('contrast', 'Color contrast', 'color-contrast');
  push('labels', 'Form fields have labels', 'label');
  push('img-alt', 'Images have alt text', 'image-alt');

  const a11y =
    m.categories.accessibility !== null ? Math.round(m.categories.accessibility * 100) : null;
  const mobilePerf =
    m.categories.performance !== null ? Math.round(m.categories.performance * 100) : null;
  const desktopPerf =
    psi.desktop.categories.performance !== null
      ? Math.round(psi.desktop.categories.performance * 100)
      : null;

  const metrics: AuditMetric[] = [];
  if (a11y !== null) {
    metrics.push({ id: 'a11y', label: 'Accessibility Score', value: `${a11y}/100`, score: a11y });
  }
  if (mobilePerf !== null && desktopPerf !== null) {
    const gap = mobilePerf - desktopPerf;
    metrics.push({
      id: 'gap',
      label: 'Mobile vs Desktop Gap',
      value: `${gap >= 0 ? '+' : ''}${gap} pts`,
      score: Math.max(0, Math.min(100, 100 + gap * 2)),
    });
  }

  // Blend usability checks with the accessibility category score
  const checkScore = scoreFromChecks(checks);
  const score = a11y !== null ? Math.round(checkScore * 0.5 + a11y * 0.5) : checkScore;

  return { key: 'mobile', status: 'complete', score, checks, metrics };
}
