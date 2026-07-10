export type CheckStatus = 'pass' | 'warn' | 'fail';

export type SectionKey = 'performance' | 'seo' | 'mobile' | 'security' | 'conversion';

export const SECTION_KEYS: SectionKey[] = [
  'performance',
  'seo',
  'mobile',
  'security',
  'conversion',
];

export type SectionRunStatus = 'idle' | 'running' | 'complete' | 'failed';

export interface CheckExplainer {
  what: string;
  how: string;
  fix: string;
  /** Official documentation only — Google Search Central, web.dev, MDN, OWASP. */
  docs: Array<{ label: string; url: string }>;
}

export interface AuditCheck {
  id: string;
  label: string;
  status: CheckStatus;
  value?: string;
  impact?: string;
  explainer?: CheckExplainer;
}

export interface AuditMetric {
  id: string;
  label: string;
  value: string;
  score: number; // 0–100
}

/** Full section result as produced by an engine and stored on the audit doc. */
export interface SectionResult {
  key: SectionKey;
  status: SectionRunStatus;
  score: number | null;
  checks: AuditCheck[];
  metrics: AuditMetric[];
}

/** Section as returned by the API — teaser-gated until the audit is unlocked. */
export interface GatedSectionResult extends SectionResult {
  locked: boolean;
  hiddenCount: number;
}

/** Response payload for GET /audit/:id and section runs. */
export interface AuditStatePayload {
  auditId: string;
  url: string;
  unlocked: boolean;
  overallScore: number | null;
  issueCount: number;
  quick: AuditCheck[];
  sections: Record<SectionKey, GatedSectionResult>;
}
