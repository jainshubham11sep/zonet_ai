# Backend — Express API

@../.claude/rules/audit-tool.md

## Stack

- Node.js + Express, TypeScript strict, Biome
- axios · cheerio · redis · nodemailer · BullMQ
- No Python, no Puppeteer in main process

## Agents for this area

- **audit-tool-builder** — all audit API work (`src/routes/audit*`, `src/workers/*`, `src/scrapers/*`)

## Commands

```bash
npm run dev      # localhost:4000
npx biome check
```

## Audit API routes

```
POST /api/audit              → { auditId, overallScore, issueCount }
GET  /api/audit/:id          → { status, overallScore, issueCount }
POST /api/audit/:id/unlock   → full report JSON
```

## Hard rules

- Puppeteer: BullMQ worker only — NEVER in main Express process
- Both PSI strategies in parallel: `Promise.all([callPSI(url,'mobile'), callPSI(url,'desktop')])`
- Webhook fires AFTER lead saved; failure must not block report — log, never throw
- Redis TTL: 30 min for audit results; leads stored permanently
- Broken links: max 20, concurrency 5, timeout 3s each
- Error shape: `{ error: 'audit_failed', message: '...' }`

## Env vars

```bash
PSI_API_KEY=
GOOGLE_SHEETS_WEBHOOK_URL=
REDIS_URL=
```
