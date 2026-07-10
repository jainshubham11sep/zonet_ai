# Plan: AI Website Audit Tool v2 — Section-Based Audits + Email Magic-Link Gate

**Status**: Approved — building
**Created**: 2026-06-17
**Last updated**: 2026-07-10

---

## User Flow

```
1. /audit            → user enters URL
2. POST /api/v1/audit → quick scan runs instantly (cheap checks) → auditId
3. /audit/[id]       → dashboard with 5 section cards
4. Click a section   → triggers ONLY that section's audit (heavy work is on-demand)
5. Results render in TEASER mode — top ~50% visible, rest blurred + locked
6. "Unlock full report" → email form → lead saved to DB
7. Branded email sent (Zonet logo) with magic link: /audit/[id]?token=xxx
8. User opens link from email → token verified → ALL sections fully visible
```

Key decisions:
- **On-demand sections** — heavy audits (PSI) never run unless the user clicks that section. One PSI run is shared by Performance + Mobile sections (cached raw in Redis).
- **Unlock only via email link** — entering email alone does NOT unlock; visiting the magic link does. This verifies the email is real.
- **Mail service is transport-independent** — `sendMail()` interface + pluggable SMTP transport (Nodemailer). Swap any SMTP provider via .env only.

---

## Audit Sections (each combines 2–3 audit areas)

### 1. Performance & Speed  `[heavy — PSI API]`
- Performance score: mobile + desktop (parallel `Promise.all`)
- Core Web Vitals: LCP, CLS, INP with good/needs-work/poor bands
- Speed Index, TBT, FCP
- Total page weight + request count
- Unoptimized images (format, sizing, lazy-load)
- Render-blocking resources, unused CSS/JS bytes

### 2. SEO & Content  `[Cheerio + HTTP]`
- Title tag: present, 30–60 chars
- Meta description: present, 120–160 chars
- H1: exactly one; heading hierarchy (no level skips)
- Image alt coverage %
- Canonical tag, favicon
- robots.txt exists + not blocking all
- sitemap.xml exists
- Structured data (JSON-LD) detected
- Open Graph tags — "WhatsApp/FB share preview" check
- Twitter card tags
- Word count / thin-content flag (<300 words)

### 3. Mobile & Accessibility  `[reuses PSI run — cached]`
- PSI accessibility score + top failed audits (contrast, labels, alt)
- Viewport meta tag
- Tap target sizing (PSI)
- Legible font sizes (PSI)
- Mobile vs desktop performance gap

### 4. Security & Trust  `[Node tls + headers + Cheerio]`
- SSL certificate valid + days-to-expiry
- HTTPS enforced (http→https redirect)
- Security headers: HSTS, X-Frame-Options, CSP, X-Content-Type-Options
- Mixed content (http:// assets on https page)
- Privacy policy / terms pages linked
- Broken links (max 20, concurrency 5, timeout 3s)

### 5. Conversion & Lead-Gen  `[Cheerio — Zonet differentiator]`
- WhatsApp click-to-chat link present
- Clickable phone (`tel:`)
- CTA above the fold
- Contact form present
- Social media links
- Google Maps / address (local signal)
- Testimonials / social proof section
- Analytics installed: GA4, Meta Pixel, GTM — "flying blind" pitch

### Quick scan (runs on submit, free)
Reachability, HTTPS, title, meta description, favicon → instant issue count for the dashboard header.

Each check returns: `{ id, label, status: 'pass'|'warn'|'fail', value?, impact }` —
`impact` = pre-written business-impact string (no AI in v1).

---

## Scoring

- Section score = weighted pass ratio of its checks (0–100)
- Overall = mean of completed section scores (null until ≥1 section run)
- Bands: 80–100 green "Good" · 50–79 yellow "Needs Work" · 0–49 red "Critical"

---

## API

| Method | Route | Description |
|---|---|---|
| POST | `/api/v1/audit` | Body `{url}`. Creates audit + quick scan. → `{auditId, quick, status}` |
| GET | `/api/v1/audit/:id` | Full audit state (sections gated by `unlocked`) |
| POST | `/api/v1/audit/:id/section/:section` | Run ONE section (`performance`\|`seo`\|`mobile`\|`security`\|`conversion`) |
| POST | `/api/v1/audit/:id/unlock` | Body `{email, name?}`. Saves lead + sends magic-link email |
| GET | `/api/v1/audit/:id/verify?token=` | Validates token → sets `unlocked: true` |

Teaser gating: until `unlocked`, GET returns each section with only the first ~50% of checks + scores; the rest replaced by `{ locked: true, hiddenCount }` — **server-side gating, not CSS-only**.

---

## Backend structure (new files)

```
src/
├── services/
│   ├── audit.service.ts          (extend: runSection, unlock→mail, verifyToken)
│   ├── engine/
│   │   ├── fetch-page.ts         shared HTML fetcher (timeout, UA, size cap)
│   │   ├── quick.engine.ts
│   │   ├── psi.engine.ts         one PSI call, raw cached in Redis 30min
│   │   ├── performance.engine.ts derives from PSI
│   │   ├── seo.engine.ts
│   │   ├── mobile.engine.ts      derives from PSI + viewport check
│   │   ├── security.engine.ts    tls + headers + broken links
│   │   ├── conversion.engine.ts
│   │   └── impact.templates.ts   business-impact strings
│   └── mail/
│       ├── mail.service.ts       transport-agnostic sendMail()
│       ├── smtp.transport.ts     Nodemailer SMTP impl (any provider via env)
│       └── templates/magic-link.ts  branded HTML, Zonet logo
├── models/lead.model.ts
├── repository/lead.repository.ts
├── cache/psi.cache.ts
```

Audit model additions: `sections: Record<name, SectionResult|null>`, `unlockToken`, `unlockTokenExpiry` (24h).

New deps: `cheerio`, `nodemailer`, `@types/nodemailer`.

New env: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `PSI_API_KEY` (exists).

---

## Frontend structure (new files)

```
src/app/audit/page.tsx                    → AuditLandingPage
src/app/audit/[id]/page.tsx               → AuditDashboardPage
src/components/pages/audit/
├── AuditLandingPage.tsx    URL form + what-you-get
├── AuditDashboardPage.tsx  header score + 5 SectionCards + email gate
├── SectionCard.tsx         idle → running → results states, click-to-run
├── ScoreGauge.tsx          circular score
├── CheckItem.tsx           pass/warn/fail row + impact text
├── MetricBar.tsx           CWV-style bars
├── LockedOverlay.tsx       blur + hiddenCount + unlock CTA
├── EmailGateModal.tsx      email+name → unlock → "check your email"
└── audit-types.ts          shared types
src/lib/audit-api.ts        fetch client → NEXT_PUBLIC_API_URL (mock fallback)
```

UI is testable with mock data (`?mock=1` or missing API) before backend is wired.

---

## Build order

1. ✅ Plan (this file)
2. ✅ Frontend UI complete w/ mock data — user can test at `/audit`
3. ✅ Backend engines: quick → seo → security → conversion → psi (perf+mobile)
4. ✅ Section routes + server-side teaser gating
5. ✅ Lead model + mail service + magic-link email + verify route
6. ✅ Wire frontend to real API (`frontend/.env.local` → `NEXT_PUBLIC_API_URL`; mock fallback stays)

## Later (post-MVP)

Puppeteer screenshots (BullMQ), competitor comparison, revenue leakage estimator, Google Sheets webhook, WHOIS domain age, Safe Browsing blacklist, PDF export.
