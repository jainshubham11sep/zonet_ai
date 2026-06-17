# Zonet — Project Instructions

## Overview
Digital agency website + AI Website Audit Tool (lead-gen feature).
**Current state**: Frontend only (Next.js). Backend (Express) not yet bootstrapped.

## Monorepo layout
```
zonet/
├── frontend/     ← Next.js 15, active
├── backend/      ← Express (to be created)
├── CLAUDE.md
└── .claude/
```

## Commands
```bash
cd frontend && npm run dev      # localhost:3307
cd frontend && npm run build
cd frontend && npx biome check  # lint
cd frontend && npx biome format # format
```

## Tech stack
- **Frontend**: Next.js 15, TypeScript strict, Tailwind only, Biome, Node v22.12.0
- **Icons**: `@phosphor-icons/react` or `lucide-react`
- **Fonts**: Playfair Display (headings) + Inter (body) — no others
- **Backend** (planned): Express, TypeScript, axios, cheerio, redis, nodemailer

## Design tokens (memorize these)
```
Colors:  #F7F6F3 (bg) · #1A1A1A (text/dark) · #686B6B (secondary)
         #E8C547 (yellow CTA) · #686BAB (blue) · #E6E4DF (border)
Fonts:   font-serif = headings · font-sans = body
Spacing: 8px grid — p-2 p-4 p-6 p-8 p-12 py-24 only
Button:  h-11 px-5 rounded-full transition-all duration-200
Card:    rounded-2xl border border-[#E6E4DF] hover:scale-[1.02] transition-all duration-200
```
Full tokens → `.claude/design/design-tokens.json`

## Code conventions
- Functional components only, explicit props interface, PascalCase filenames
- Tailwind only — no CSS modules, no inline styles
- Mobile-first responsive, `'use client'` only when needed
- Import order: React/Next → external → local components → utils → types
- No `any` types, no nested ternaries, no components >300 lines
- Comments explain WHY not WHAT

## Git
```
feat: · fix: · chore: · refactor:
Branches: feature/name · fix/name · chore/name
```

## Environment variables
```bash
# frontend/.env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3307
NEXT_PUBLIC_API_URL=http://localhost:4000

# backend/.env (when bootstrapped)
PSI_API_KEY=
GOOGLE_SHEETS_WEBHOOK_URL=
REDIS_URL=
```

## Audit Tool — active feature
Full spec → `plan/AUDIT-TOOL-PLAN.md`

Quick summary:
- URL input → PSI API + cheerio scraper → score + issues
- Teaser (score + issue count only) → lead gate (email + WhatsApp) → full report
- Scoring: Performance 35% + SEO 30% + Accessibility 15% + Best Practices 20%
- Lead → webhook → Google Sheet
- No AI in v1 — business impact via pre-written template strings
- Node.js only (no Python)

## Never do
- Hardcode colors/fonts/spacing
- CSS modules or inline styles
- `any` TypeScript types
- Class components
- Emojis as icons
- Puppeteer in main Express process (use BullMQ worker)
- `rm -rf` or `git push --force`
