---
paths:
  - "frontend/src/app/audit/**"
  - "frontend/src/components/audit/**"
  - "backend/src/**"
---

# Audit Tool Rules

## Frontend

**Teaser screen**
- Show ONLY: overall score, color band, one-line verdict, issue count badge
- Category cards: pass/fail icon only — no scores, no descriptions before unlock
- Locked sections: `blur-sm pointer-events-none select-none` with overlay
- CTA must be above the fold on mobile

**Every metric needs two parts**
1. Raw value ("4.2s")
2. Business consequence ("Most visitors leave after 3s — you're losing mobile traffic")

Never show a raw number without business context.

**Loading**
- Animated progress during PSI call (~10-30s)
- Show "Analysing your website... (~15-20 seconds)"
- Progress bar or skeleton — not a full-page block

## Backend

**PSI call**
```typescript
// Always run both strategies in parallel
const [mobile, desktop] = await Promise.all([
  callPSI(url, 'mobile'),
  callPSI(url, 'desktop')
])
```

**Scraper limits**
- Single axios fetch, 10s timeout, browser User-Agent
- Broken links: max 20, concurrency 5, timeout 3s each
- Internal page crawl: max 5 pages for duplicate-meta checks

**Storage**
- Audit results: Redis TTL 30 minutes
- Lead records: permanent DB storage
- Never store raw PSI response permanently

**Webhook**
- Fire AFTER lead is saved to DB
- Failure must NOT block the user from seeing the report
- Log failures, don't throw

**Error shape**
```typescript
res.status(500).json({ error: 'audit_failed', message: 'Could not analyse this URL. Please try again.' })
```

**Issue severity**
- `critical`: directly hurts ranking or conversions
- `warning`: should be fixed
- `info`: missing enhancement

**Puppeteer**
- Always in separate BullMQ worker
- Never in main Express process
