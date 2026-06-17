# ZoneTech Theme Enforcement

These rules are derived from the live codebase and override training defaults.

## Background Color

Page background is `#F7F6F3` (cream) or `bg-background` (`#faf8f5` — near-identical, valid for `<html>`/`<body>`).
Never `bg-white` for full-page backgrounds. White is for cards only.

## Font Stack — Three Variables In Scope

From `globals.css` `@theme inline` and `layout.tsx`:

| Variable | Font | Class |
|---|---|---|
| `--font-sans` | Inter | `font-sans` |
| `--font-serif` / `--font-heading` | Playfair Display | `font-serif` or `font-heading` |
| `--font-sora` | Sora | `font-[family-name:var(--font-sora)]` |

Sora is allowed for hero headings only. Inter is the default — every element inherits it unless overridden.

## Exact Tailwind Color Tokens (from `globals.css @theme inline`)

```
bg-background          → #faf8f5 (page bg)
text-foreground        → #1A1A1A (primary text)
text-secondary         → #686B6B (muted text)
text-muted             → #686B6B
bg-accent              → #E8C547 (yellow)
text-accent            → #E8C547
border-border-custom   → #E6E4DF
bg-card                → #FFFFFF (card bg)
bg-card-alt            → #F7F6F3
bg-section-alt         → #F7F6F3
bg-footer-bg           → #1A1A1A (footer)
text-footer-fg         → #FFFFFF
```

## Button Sizes — From `Button.tsx` (canonical component)

```
sm: h-11 px-4 py-2.5 text-sm    (44px)
md: h-12 px-6 py-3 text-sm      (48px)
lg: h-14 px-8 py-4 text-base    (56px)
```

Always import `Button` from `@/components/ui` for primary CTAs.

## Motion Library

```tsx
import { motion, AnimatePresence } from 'motion/react';
// NOT: import { motion } from 'framer-motion'
```

Animation presets in `@/lib/animations`: `slideInLeft`, `slideInRight`, `fadeUp`. Import and reuse — do not redefine.

## Section Structure Pattern

```tsx
<section className="bg-[#F7F6F3] py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">
    {/* content */}
  </div>
  <div className="border-t border-[#E6E4DF]"></div>
</section>
```

## SectionBadge Component

```tsx
import { SectionBadge } from '@/components/ui';
<SectionBadge variant="dot">Category Label</SectionBadge>
```

Do not use raw `<span className="section-label">`.

## Icon Container Pattern (inside cards)

```tsx
<span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F7F6F3] group-hover:bg-[#E8C547] transition-colors">
  <Icon size={15} className="text-[#1A1A1A]" />
</span>
```

## Nav CTA Pattern

```tsx
<Link href="/strategy-call" className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#111111] text-white rounded-full font-bold text-sm hover:bg-[#1a1a1a] transition-colors">
  Start a Project <ArrowRight size={16} />
</Link>
```

## Yellow Accent Rules

Yellow (`#E8C547`) is used for: CTA button bg, inline text accent inside dark headings, hover on icon containers, mobile nav left-border, progress bars.

Yellow is NEVER used for: full section backgrounds, body text color, card borders (use `#E6E4DF`).
