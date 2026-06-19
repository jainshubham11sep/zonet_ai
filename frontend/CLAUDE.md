# Frontend — Next.js 15

@../.claude/rules/design-consistency.md
@../.claude/rules/component-structure.md
@../.claude/rules/theme-enforcement.md

## Stack

- Next.js 15, TypeScript strict, Tailwind only, Biome, Node v22.12.0
- Icons: `@phosphor-icons/react` · `lucide-react`
- Motion: `motion/react` — NEVER `framer-motion`
- Fonts: Playfair Display (headings) + Inter (body)

## Next.js warning

APIs differ from training data. Check `node_modules/next/dist/docs/` before writing any routing, layout, or data-fetching code. Follow deprecation notices.

## Design tokens (memorize)

```
#F7F6F3 bg · #1A1A1A text · #111111 dark-btn · #E8C547 yellow
#E6E4DF border · #686B6B secondary · #686BAB blue · #FFFFFF cards only
font-serif/font-heading = Playfair (h1–h3 ONLY) · font-sans = Inter (everything else)
Spacing: 8px grid — p-1 p-2 p-4 p-6 p-8 p-12 p-16 p-24 only
Button: h-11 min · px-6 · rounded-full · duration-200
```

Full tokens: `../.claude/design/design-tokens.json`

## Agents for this area

- **code-reviewer** — review any component or page after changes
- **audit-tool-builder** — all work under `src/app/audit/` and `src/components/audit/`

## Commands

```bash
npm run dev      # localhost:3307
npm run build
npx biome check  # lint
npx biome format
```

## Audit Tool — frontend rules

Spec: `../plan/AUDIT-TOOL-PLAN.md`

- Teaser: score + issue count ONLY (no details before unlock)
- Locked sections: `blur-sm pointer-events-none select-none`
- Every metric needs raw value AND business consequence sentence
- Loading: animated progress, show "~15-20 seconds"
