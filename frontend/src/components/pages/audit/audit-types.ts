export type CheckStatus = "pass" | "warn" | "fail";

export type SectionKey =
  | "performance"
  | "seo"
  | "mobile"
  | "security"
  | "conversion";

export type SectionRunStatus = "idle" | "running" | "complete" | "failed";

export interface AuditCheck {
  id: string;
  label: string;
  status: CheckStatus;
  value?: string;
  impact?: string;
}

export interface AuditMetric {
  id: string;
  label: string;
  value: string;
  score: number; // 0–100
}

export interface SectionResult {
  key: SectionKey;
  status: SectionRunStatus;
  score: number | null;
  checks: AuditCheck[];
  metrics: AuditMetric[];
  locked: boolean;
  hiddenCount: number;
}

export interface AuditState {
  auditId: string;
  url: string;
  unlocked: boolean;
  overallScore: number | null;
  issueCount: number;
  quick: AuditCheck[];
  sections: Record<SectionKey, SectionResult>;
}

export interface UnlockResult {
  message: string;
  /** Present only in mock mode — lets you simulate clicking the email link */
  devVerifyUrl?: string;
}

export const SECTION_KEYS: SectionKey[] = [
  "performance",
  "seo",
  "mobile",
  "security",
  "conversion",
];

export const SECTION_META: Record<
  SectionKey,
  { title: string; tagline: string; includes: string[]; heavy: boolean }
> = {
  performance: {
    title: "Performance & Speed",
    tagline: "How fast your site loads for real visitors",
    includes: [
      "Core Web Vitals",
      "Mobile + desktop speed",
      "Page weight & images",
    ],
    heavy: true,
  },
  seo: {
    title: "SEO & Content",
    tagline: "How well Google understands your site",
    includes: [
      "Meta tags & headings",
      "Sitemap, robots & schema",
      "WhatsApp share preview",
    ],
    heavy: false,
  },
  mobile: {
    title: "Mobile & Accessibility",
    tagline: "The experience on the devices most visitors use",
    includes: [
      "Mobile usability",
      "Tap targets & font sizes",
      "Accessibility score",
    ],
    heavy: true,
  },
  security: {
    title: "Security & Trust",
    tagline: "Signals that make visitors trust you",
    includes: ["SSL certificate & HTTPS", "Security headers", "Broken links"],
    heavy: false,
  },
  conversion: {
    title: "Conversion & Lead-Gen",
    tagline: "Whether your site turns visitors into enquiries",
    includes: [
      "WhatsApp & call buttons",
      "CTAs & contact forms",
      "Analytics & pixels",
    ],
    heavy: false,
  },
};

export function scoreBand(score: number): "green" | "yellow" | "red" {
  if (score >= 80) return "green";
  if (score >= 50) return "yellow";
  return "red";
}

export function scoreLabel(score: number): string {
  if (score >= 80) return "Good";
  if (score >= 50) return "Needs Work";
  return "Critical Issues";
}
