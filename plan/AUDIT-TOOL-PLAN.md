# Plan: AI Website Audit Tool

**Status**: Frontend UI — next to build  
**Created**: 2026-06-17  
**Last updated**: 2026-06-17

---

## Overview

Lead-generation tool on Zonet agency website. User enters URL → automated audit runs → teaser score shown → email + WhatsApp captured to unlock full report → lead sent to Google Sheet.

---

## Phase 1 — Frontend UI (current)

- [ ] `/audit` page — URL input form (AuditForm.tsx)
- [ ] Loading state component (AuditLoading.tsx)
- [ ] Teaser screen — score + locked cards (AuditTeaser.tsx)
- [ ] Lead gate form — email + WhatsApp (inside AuditTeaser)
- [ ] Full report layout (AuditReport.tsx)
- [ ] Score gauge UI component (ScoreGauge.tsx)
- [ ] Check item component — ✅/❌ rows (CheckItem.tsx)
- [ ] Metric bar component — progress bars (MetricBar.tsx)
- [ ] Locked card component — blurred overlay (LockedCard.tsx)
- [ ] Report sections:
  - [ ] OverviewScore.tsx
  - [ ] PerformanceSection.tsx
  - [ ] SeoSection.tsx
  - [ ] MobileSection.tsx
  - [ ] SecuritySection.tsx
  - [ ] ContentSection.tsx
  - [ ] TrustScore.tsx

**Frontend uses mock/static data until backend is ready.**

---

## Phase 2 — Backend Bootstrap

- [ ] Init Express project (`/backend`)
- [ ] Folder structure: `src/routes`, `src/services`, `src/utils`, `src/types`
- [ ] Health check route
- [ ] Stub routes: `POST /api/audit`, `GET /api/audit/:id`, `POST /api/audit/:id/unlock`
- [ ] Redis connection (TTL-based audit cache)
- [ ] DB connection (lead storage)

---

## Phase 3 — Core Audit Engine

- [ ] PSI API integration (mobile + desktop, parallel)
- [ ] Scoring formula: Performance 35% + SEO 30% + Accessibility 15% + Best Practices 20%
- [ ] Issue count from PSI audits (score < 1)
- [ ] Cheerio scraper — SEO checks
- [ ] Cheerio scraper — security + trust checks
- [ ] Cheerio scraper — WhatsApp / CTA / social proof detection
- [ ] Broken link checker (HEAD requests, p-limit)
- [ ] Business impact template engine (~60 pre-written strings)
- [ ] Audit result storage (Redis, 30min TTL)
- [ ] `/api/audit` route live

---

## Phase 4 — Lead Gate + Webhook

- [ ] Lead capture on `/api/audit/:id/unlock`
- [ ] Lead saved to DB
- [ ] Google Sheets webhook (Apps Script Web App)
- [ ] Email notification (Nodemailer)
- [ ] Full report returned after unlock

---

## Phase 5 — Enhancements

- [ ] Puppeteer screenshot worker (BullMQ queue)
- [ ] Desktop vs mobile screenshot side-by-side
- [ ] SSL/domain age check (Node tls + WHOIS)
- [ ] Competitor comparison (optional user input)
- [ ] Revenue leakage estimator (visitors × order value × load penalty formula)

---

## Scoring Formula

```
overallScore = (psiPerformance * 0.35) + (psiSEO * 0.30) + (psiAccessibility * 0.15) + (psiBestPractices * 0.20)
```

All PSI scores are 0-100 (multiply raw 0-1 values by 100).

Score bands:
- 80-100 → green — "Good"
- 50-79  → yellow — "Needs Work"  
- 0-49   → red — "Critical Issues"

---

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/audit` | Start audit. Body: `{ url }`. Returns: `{ auditId, overallScore, issueCount }` |
| GET | `/api/audit/:id` | Poll status. Returns: `{ status, overallScore, issueCount }` |
| POST | `/api/audit/:id/unlock` | Submit lead. Body: `{ email, whatsapp }`. Returns: full report JSON |

---

## Data Shapes

```typescript
// Audit result (stored in Redis, TTL 30min)
interface AuditResult {
  auditId: string
  url: string
  status: 'pending' | 'completed' | 'failed'
  overallScore: number
  subScores: {
    performance: number
    seo: number
    accessibility: number
    bestPractices: number
    mobile: number
  }
  issues: Array<{
    category: string
    title: string
    description: string  // business impact language
    severity: 'critical' | 'warning' | 'info'
  }>
  createdAt: string
}

// Lead (permanent)
interface Lead {
  auditId: string
  url: string
  overallScore: number
  issueCount: number
  email: string
  whatsapp: string
  createdAt: string
}
```

---

## Notes / Decisions

- No AI in v1 — business impact strings are pre-written templates with real values injected
- Puppeteer is optional (phase 5) — main value is in PSI + scraper
- Python not used — Node.js only
- Report delivered as hosted page (`/audit/[id]`), not PDF email — PDF download button optional
- Cheerio over Puppeteer for scraping — faster, lighter, all needed checks are on static HTML
