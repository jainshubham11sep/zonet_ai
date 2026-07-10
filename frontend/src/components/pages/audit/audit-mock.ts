import type { AuditCheck, AuditMetric, SectionKey } from "./audit-types";

/**
 * Mock section results used when the backend is not reachable.
 * Shapes match the real API exactly so swapping to live data is a no-op.
 */

export const MOCK_QUICK_CHECKS: AuditCheck[] = [
  { id: "reachable", label: "Website is reachable", status: "pass" },
  { id: "https", label: "Served over HTTPS", status: "pass" },
  {
    id: "title",
    label: "Title tag present",
    status: "pass",
    value: "48 chars",
  },
  {
    id: "meta-desc",
    label: "Meta description",
    status: "fail",
    impact:
      "Google writes its own snippet for you — you lose control of your first impression in search results.",
  },
  { id: "favicon", label: "Favicon present", status: "warn" },
];

export const MOCK_SECTIONS: Record<
  SectionKey,
  { score: number; checks: AuditCheck[]; metrics: AuditMetric[] }
> = {
  performance: {
    score: 54,
    metrics: [
      {
        id: "lcp",
        label: "Largest Contentful Paint",
        value: "4.2s",
        score: 38,
      },
      { id: "cls", label: "Cumulative Layout Shift", value: "0.02", score: 95 },
      {
        id: "inp",
        label: "Interaction to Next Paint",
        value: "310ms",
        score: 52,
      },
      { id: "weight", label: "Total Page Weight", value: "3.8 MB", score: 40 },
    ],
    checks: [
      {
        id: "perf-mobile",
        label: "Mobile performance score",
        status: "fail",
        value: "42/100",
        impact:
          "More than half of Indian traffic is mobile — a slow mobile site silently turns those visitors away before they see your offer.",
      },
      {
        id: "perf-desktop",
        label: "Desktop performance score",
        status: "warn",
        value: "68/100",
      },
      {
        id: "img-optim",
        label: "Images optimized",
        status: "fail",
        value: "11 oversized",
        impact:
          "Every extra second of load time costs roughly 7% of conversions. Your images alone add ~2s.",
      },
      { id: "lazy", label: "Lazy loading enabled", status: "warn" },
      {
        id: "render-block",
        label: "Render-blocking resources",
        status: "fail",
        value: "6 files",
        impact:
          "Visitors stare at a blank screen while these files load — most leave within 3 seconds.",
      },
      {
        id: "unused-code",
        label: "Unused CSS/JS",
        status: "warn",
        value: "410 KB",
      },
      {
        id: "requests",
        label: "HTTP request count",
        status: "pass",
        value: "48",
      },
      {
        id: "speed-index",
        label: "Speed Index",
        value: "5.1s",
        status: "warn",
      },
    ],
  },
  seo: {
    score: 61,
    metrics: [
      {
        id: "alt-coverage",
        label: "Image Alt Coverage",
        value: "40%",
        score: 40,
      },
      {
        id: "word-count",
        label: "Content Depth",
        value: "620 words",
        score: 75,
      },
    ],
    checks: [
      {
        id: "title-len",
        label: "Title tag length (30–60 chars)",
        status: "pass",
        value: "48 chars",
      },
      {
        id: "meta-desc",
        label: "Meta description",
        status: "fail",
        impact:
          "Pages without meta descriptions get up to 6% fewer clicks from search results.",
      },
      { id: "h1", label: "Exactly one H1 heading", status: "pass" },
      {
        id: "heading-order",
        label: "Heading hierarchy correct",
        status: "warn",
        value: "H2 → H4 skip",
        impact:
          "Search engines use heading order to understand your page — skips weaken your ranking signals.",
      },
      { id: "canonical", label: "Canonical tag present", status: "pass" },
      { id: "robots", label: "robots.txt valid", status: "pass" },
      {
        id: "sitemap",
        label: "sitemap.xml found",
        status: "fail",
        impact:
          "Without a sitemap Google may take weeks to discover new pages — your updates stay invisible.",
      },
      {
        id: "schema",
        label: "Structured data (JSON-LD)",
        status: "fail",
        impact:
          "No schema means no rich results — competitors with stars and FAQs push you down the page.",
      },
      {
        id: "og-tags",
        label: "WhatsApp/Facebook share preview",
        status: "fail",
        impact:
          "Your link shows no image or title when shared on WhatsApp — shared links get ignored.",
      },
      { id: "twitter-card", label: "Twitter card tags", status: "warn" },
    ],
  },
  mobile: {
    score: 58,
    metrics: [
      { id: "a11y", label: "Accessibility Score", value: "71/100", score: 71 },
      {
        id: "gap",
        label: "Mobile vs Desktop Gap",
        value: "-26 pts",
        score: 45,
      },
    ],
    checks: [
      { id: "viewport", label: "Viewport meta tag", status: "pass" },
      {
        id: "tap-targets",
        label: "Tap targets sized correctly",
        status: "fail",
        value: "9 too small",
        impact:
          "Buttons too close together cause mis-taps — frustrated mobile users abandon rather than retry.",
      },
      {
        id: "font-size",
        label: "Legible font sizes",
        status: "warn",
        value: "82% legible",
      },
      {
        id: "contrast",
        label: "Color contrast",
        status: "fail",
        value: "14 elements",
        impact:
          "Low-contrast text is unreadable in sunlight — where most mobile browsing in India happens.",
      },
      { id: "labels", label: "Form fields have labels", status: "warn" },
      {
        id: "img-alt",
        label: "Images have alt text",
        status: "fail",
        value: "12 missing",
      },
    ],
  },
  security: {
    score: 72,
    metrics: [
      { id: "ssl-days", label: "SSL Expires In", value: "64 days", score: 80 },
      { id: "headers", label: "Security Headers", value: "2/5", score: 40 },
    ],
    checks: [
      {
        id: "ssl",
        label: "SSL certificate valid",
        status: "pass",
        value: "expires in 64 days",
      },
      {
        id: "https-redirect",
        label: "HTTP redirects to HTTPS",
        status: "pass",
      },
      {
        id: "hsts",
        label: "HSTS header",
        status: "fail",
        impact:
          "Browsers may still try insecure connections — attackers on public Wi-Fi can intercept them.",
      },
      {
        id: "xframe",
        label: "Clickjacking protection (X-Frame-Options)",
        status: "fail",
        impact:
          "Your site can be embedded invisibly on scam pages that hijack your visitors’ clicks.",
      },
      { id: "csp", label: "Content Security Policy", status: "warn" },
      { id: "mixed", label: "No mixed content", status: "pass" },
      { id: "privacy", label: "Privacy policy linked", status: "pass" },
      {
        id: "broken-links",
        label: "Broken links",
        status: "warn",
        value: "3 of 20 checked",
        impact:
          "Dead links tell both Google and customers that the site is unmaintained.",
      },
    ],
  },
  conversion: {
    score: 45,
    metrics: [
      { id: "cta", label: "CTA Visibility", value: "Below fold", score: 30 },
      { id: "tracking", label: "Tracking Setup", value: "0/3 tools", score: 0 },
    ],
    checks: [
      {
        id: "whatsapp",
        label: "WhatsApp click-to-chat",
        status: "fail",
        impact:
          "Indian customers strongly prefer WhatsApp — without a chat link you lose the easiest enquiry channel.",
      },
      {
        id: "tel",
        label: "Clickable phone number",
        status: "fail",
        impact:
          "Mobile visitors must copy-paste your number to call — most won’t bother.",
      },
      {
        id: "cta-fold",
        label: "CTA above the fold",
        status: "fail",
        impact:
          "Visitors decide in 5 seconds — with no visible action button, that decision is to leave.",
      },
      { id: "form", label: "Contact form present", status: "pass" },
      {
        id: "social",
        label: "Social media links",
        status: "pass",
        value: "3 found",
      },
      { id: "maps", label: "Google Maps / address", status: "warn" },
      {
        id: "proof",
        label: "Testimonials / social proof",
        status: "fail",
        impact:
          "92% of buyers read reviews first — no social proof means no reason to trust you over competitors.",
      },
      {
        id: "ga4",
        label: "Google Analytics installed",
        status: "fail",
        impact:
          "You have no idea where visitors come from or where they leave — every marketing rupee is spent blind.",
      },
      {
        id: "pixel",
        label: "Meta Pixel installed",
        status: "fail",
        impact:
          "Without a pixel you cannot retarget the 97% of visitors who don’t convert on the first visit.",
      },
    ],
  },
};

export function mockOverallScore(
  completed: { score: number | null }[],
): number | null {
  const scores = completed
    .map((s) => s.score)
    .filter((s): s is number => s !== null);
  if (scores.length === 0) return null;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}
