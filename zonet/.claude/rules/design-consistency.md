---
name: Design Consistency Rules
description: Enforce design system consistency across all components and pages
type: project
---

# Design Consistency Rules

Every component and page must follow the ZoneTech design system to ensure a cohesive premium experience.

## Colors - Single Source of Truth

**Required**: All colors must come from `.claude/design/design-tokens.json`

✅ DO:
```tailwind
bg-[#1A1A1A]        /* Dark button */
text-[#1A1A1A]      /* Dark text */
border-[#E6E4DF]    /* Light border */
bg-[#E8C547]        /* Yellow accent */
```

❌ DON'T:
```tailwind
bg-gray-800         /* Random gray */
text-red-500        /* Undefined color */
border-blue-200     /* Not in palette */
bg-[#FFD700]        /* Custom color */
```

**Palette** (must memorize):
- Primary: `#F7F6F3` (cream background)
- Dark: `#1A1A1A` (text, dark button)
- Yellow: `#E8C547` (CTA, accents)
- White: `#FFFFFF` (cards, secondary bg)
- Gray: `#686B6B` (secondary text)
- Light Gray: `#E6E4DF` (borders)

---

## Typography - Never Mix Fonts

**Required**: Only 2 fonts: Playfair Display (headings) + Inter (body)

✅ DO:
```tsx
<h1 className="font-serif text-7xl font-bold">
<p className="font-sans text-base">
```

❌ DON'T:
```tsx
<h1 className="font-mono text-6xl">        {/* Wrong font */}
<p className="font-serif text-sm">         {/* Body can't be serif */}
<div className="font-[custom-font]">      {/* Custom fonts banned */}
```

**Type Scale** (from design system):
- Hero: 72px, serif, weight 600
- H1: 48px, serif, weight 600
- H2: 32px, serif, weight 600
- H3: 24px, serif, weight 500
- Body: 16px, sans-serif, weight 400
- Small: 14px, sans-serif, weight 400

---

## Spacing - Always 8px Grid

**Required**: All spacing must be multiples of 8px

✅ DO:
```tailwind
p-4     /* 16px */
p-6     /* 24px */
gap-8   /* 32px */
py-24   /* 96px */
```

❌ DON'T:
```tailwind
p-5     /* 20px - not multiple of 8 */
p-7     /* 28px - not multiple of 8 */
gap-10  /* 40px - not multiple of 8 */
py-20   /* 80px - not multiple of 8 */
```

**Common Mappings**:
- 8px = `p-2`, `gap-2`
- 16px = `p-4`, `gap-4`
- 24px = `p-6`, `gap-6`
- 32px = `p-8`, `gap-8`
- 48px = `p-12`, `gap-12`
- 96px = `py-24`, `gap-24`

---

## Components - Hover States Required

**Required**: All interactive elements must have hover states with 200-300ms transition

### Buttons
```tsx
<button className="
  px-5 py-2.5 rounded-full bg-black text-white
  hover:shadow-lg hover:-translate-y-0.5 
  transition-all duration-200
">
  Button
</button>
```

### Cards
```tsx
<div className="
  rounded-2xl p-6 border border-[#E6E4DF]
  hover:scale-[1.02] hover:shadow-lg
  transition-all duration-200
">
  Card content
</div>
```

### Links
```tsx
<a href="/" className="
  hover:underline underline-offset-4
  transition-all duration-300
">
  Link
</a>
```

---

## Icons - Phosphor or Lucide Only

**Required**: No emojis or custom SVGs for structural icons

✅ DO:
```tsx
import { Heart, Copy } from '@phosphor-icons/react';
import { Menu, X } from 'lucide-react';

<Heart weight="fill" />
<Menu size={24} />
```

❌ DON'T:
```tsx
❤️ {/* Emoji - banned */}
🍕 {/* Emoji - banned */}
<img src="custom-icon.svg" /> {/* Custom icon - use Phosphor/Lucide */}
```

---

## Buttons - Minimum Size Required

**Required**: All buttons must be at least 44px in height

✅ DO:
```tailwind
h-11 px-5 py-2.5 rounded-full      /* 44px height */
```

❌ DON'T:
```tailwind
h-8 px-3 py-1 rounded              /* 32px - too small */
h-10 px-4 py-1.5                   /* 40px - too small */
```

---

## Contrast - Accessibility Required

**Required**: Text contrast must be ≥ 4.5:1 (WCAG AA)

✅ Good contrast:
```
Dark text (#1A1A1A) on light background (#F7F6F3)  ✓
White text (#FFFFFF) on dark button (#111111)       ✓
Gray text (#686B6B) on light background is okay    ✓
```

❌ Bad contrast:
```
Light gray on light background   ✗
#686B6B text on #F7F6F3 background (close - borderline)
```

---

## Checklist - Before Component is "Done"

- [ ] All colors from design palette
- [ ] Only Playfair (headings) + Inter (body) fonts used
- [ ] All spacing is 8px multiples
- [ ] Buttons are 44px+ height
- [ ] Hover/active states implemented (200-300ms)
- [ ] Icons are Phosphor/Lucide (no emojis)
- [ ] Text contrast ≥ 4.5:1
- [ ] Mobile responsive tested
- [ ] No custom CSS (Tailwind only)
- [ ] No unused classes

---

## Remember

The design system IS NOT a suggestion. It's the foundation of premium, cohesive design. Every deviation makes the product feel less professional.

When in doubt → Check `.claude/design/design-system.md`
