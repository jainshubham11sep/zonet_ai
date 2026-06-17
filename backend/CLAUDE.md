# Backend — Express API

@../.claude/rules/backend.md

## Stack

- Node.js + Express, TypeScript strict, Biome
- mongoose · ioredis · zod · http-status-codes
- axios · cheerio · nodemailer · BullMQ (planned)
- No Python, no Puppeteer in main process

## Agents for this area

- **backend-builder** — all backend work: routes, controllers, services, repositories, cache, models, middleware
- **code-reviewer** — review after any backend change

## Commands

```bash
npm run dev        # tsx watch src/server.ts → localhost:4000
npm run build      # tsup → dist/
npx biome check src/
```

## API routes (v1)

```
GET  /api/health
POST /api/v1/audit              → { auditId, status }
GET  /api/v1/audit/:id          → { status, overallScore, issueCount }
POST /api/v1/audit/:id/unlock   → full report JSON
```

## Hard rules

- Puppeteer: BullMQ worker ONLY — NEVER in main Express process
- Both PSI strategies in parallel: `Promise.all([callPSI(url,'mobile'), callPSI(url,'desktop')])`
- Webhook fires AFTER lead saved; failure must not block report — log, never throw
- Redis TTL: 30 min for audit results; leads stored permanently
- Broken links: max 20, concurrency 5, timeout 3s each

## Env vars

```bash
PORT=4000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/zonet_ai
REDIS_URL=redis://localhost:6379
PSI_API_KEY=
GOOGLE_SHEETS_WEBHOOK_URL=
CLIENT_URL=http://localhost:3307
```
