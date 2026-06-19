# Zonet AI

Digital agency website + AI Website Audit Tool (lead-gen).

## What lives where

```
zonet_ai/
├── frontend/       Next.js 15 — localhost:3307  →  see frontend/CLAUDE.md
├── backend/        Express (planned) — localhost:4000  →  see backend/CLAUDE.md
├── plan/           All big-change plans live here (PLAN-*.md)
└── .claude/
    ├── agents/     Subagent definitions
    ├── rules/      Scoped rule files (loaded per-area, NOT here)
    └── design/     Design tokens + system docs (frontend only)
```

## Routing — read this first

- Working in `frontend/` → Claude loads `frontend/CLAUDE.md` automatically when it reads files there
- Working in `backend/` → Claude loads `backend/CLAUDE.md` automatically
- Cross-cutting task → start from repo root, reference both files explicitly

## Behavioral rules (always active)

**Token efficiency**
- Do not search broadly — read only files directly relevant to the task
- Do not explain what code does unless asked
- Do not run `tsc`, `npm run build`, or the test suite unless explicitly told to
- Responses: result first, explanation only if asked

**Planning — mandatory for big changes**
- Any change touching >2 files or >1 system = write a plan first
- Plan file goes in `plan/PLAN-<feature>.md`
- Wait for approval before implementing
- "Big change" = new feature, refactor, new route, schema change, new component section

**Git**
```
feat: · fix: · chore: · refactor:
Branches: feature/name · fix/name · chore/name
```

**Never**
- `rm -rf` · `git push --force` · `git reset --hard`
- Amend published commits
