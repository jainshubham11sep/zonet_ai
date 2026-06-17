# ZoneTech Design System

**Last Updated:** 2026-04-24  
**Source:** Figma - Premium Editorial SaaS Design System  
**Version:** 1.0

---

## Overview

This design system ensures consistent, premium design across all ZoneTech products. Every component, color, and interaction follows these guidelines.

---

## 1. Color Palette

### Base Colors
| Usage | Color | Hex | RGB |
|-------|-------|-----|-----|
| Primary Background | Light Cream | #F7F6F3 | rgb(247, 246, 243) |
| Secondary Background | White | #FFFFFF | rgb(255, 255, 255) |
| Text Primary | Dark Black | #1A1A1A | rgb(26, 26, 26) |
| Text Secondary | Gray | #686B6B | rgb(104, 107, 107) |
| Border Subtle | Light Gray | #E6E4DF | rgb(230, 228, 223) |

### Accent Colors
| Usage | Color | Hex |
|-------|-------|-----|
| Accent Yellow (Primary CTA) | Yellow | #E8C547 |
| Accent Dark Blue | Blue | #686BAB |
| Dark Shade | Black | #111111 |

### Usage Rules
- **Background stays off-white** (#F7F6F3) - use serif only for headlines
- **Black used for primary contrast** 
- **Yellow only for:** underline accents, small highlights, CTA buttons
- **Avoid gradients** - use solid colors
- **High contrast** - light vs dark (4.5:1 minimum for accessibility)

---

## 2. Typography System

### Font Families
| Role | Font | Fallback | Usage |
|------|------|----------|-------|
| Headings | Playfair Display / DM Serif Display | serif | H1, H2, H3 |
| Body | Inter / Helvetica Now / Satoshi | sans-serif | Paragraphs, labels |

### Type Scale (px)
| Size | Hero | H1 | H2 | H3 | Body | Small |
|------|------|----|----|----|----|-------|
| Font Size | 72-110 | 48-72 | 32-48 | 24-32 | 16 | 14 |
| Line Height | 100% | 110% | 120% | 130% | 150% | 140% |
| Weight | 600-700 | 600 | 600 | 500 | 400 | 400 |
| Letter Spacing | -0.5px to -1px | -0.5px | Normal | Normal | Normal | Normal |

### Typography Rules
- **Use serif ONLY for headlines** - apply italic to highlight key 1-2 word phrases
- **Body text is neutral spacing** - no tight letter spacing
- **Headings:** tight letter spacing (-0.5px to -1px)
- **Max 2-3 font sizes** per page
- **Never use more than 2 font families** per design
- **Apply italic to accent key phrases** in headlines only

---

## 3. Spacing System

### Base Unit: 8px

All spacing follows multiples of 8px for consistency.

| Name | Value | Usage |
|------|-------|-------|
| xs | 4px | Micro spacing |
| sm | 8px | Small gaps |
| md | 16px | Default padding |
| lg | 24px | Card padding |
| xl | 32px | Section gaps |
| 2xl | 48px | Large sections |
| 3xl | 64px | Hero spacing |
| 4xl | 96px | Section breaks |

### Layout Rules
- **Sections:** 80-120px vertical spacing
- **Hero spacing:** Large (96px) top/bottom
- **Keep consistent rhythm** - avoid random gaps
- **Max width:** 1200-1280px for desktop
- **Grid:** 12-column layout (gutter: 24px)
- **Margin:** 80px desktop, adjust for mobile

---

## 4. Components

### Buttons
```
Height: 44-48px
Padding: 0-20px (adjust based on text length)
Border Radius: 999px (fully rounded)
Background: #111111 (dark) or #E8C547 (yellow)
Text Color: #FFFFFF (white) or #1A1A1A (dark)
Font Size: 14px
Font Weight: 500
Hover: Slight lift (translateY(-2px)) + subtle shadow
Transition: 200-300ms ease
```

### Cards
```
Border Radius: 16px
Padding: 20-24px
Border: 1px solid #E6E4DF
Box Shadow: 0 10px 30px rgba(0,0,0,0.05)
Background: #FFFFFF
Hover: Scale 1.02 + slight shadow increase
Transition: 200-300ms ease
```

### Navbar
```
Height: 72-80px
Padding: 24px horizontal
Background: #FFFFFF or transparent
Links: 14px, weight 500
CTA Button: Dark button (#111111)
Minimal links, no heavy borders
Light background, no heavy borders
```

### Input Fields
```
Height: 44-48px
Padding: 12-16px
Border: 1px solid #E6E4DF
Border Radius: 8px
Font Size: 14px
Focus: Border color #E8C547
Transition: 150ms ease
```

---

## 5. Micro-Interactions

| Interaction | Trigger | Animation | Duration | Easing |
|-------------|---------|-----------|----------|--------|
| Link Underline | Hover | Underline fade in | 200-300ms | ease |
| Button Lift | Hover | translateY(-2px) | 200-300ms | ease |
| Button Elevation | Hover | Subtle shadow | 200-300ms | ease |
| Card Hover | Hover | Scale 1.02 + shadow | 200-300ms | ease |
| Page Transition | Route change | Fade 200-300ms | 200-300ms | ease |

### Rules
- **No jarring animations**
- **Keep transitions 200-300ms**
- **Use ease or ease-in-out**
- **Provide clear visual feedback** for all tappable elements
- **Underline animation on text links**
- **Slight scale (1.02) on hover** for interactive cards

---

## 6. Design Language

### Visual Style
- **Architectural/Abstract Geometry** - use clean geometric shapes
- **High Contrast** - light vs dark (avoid mid-tones)
- **Crop Aggressively** - cut off images for impact
- **Avoid Clutter** - minimal UI, maximum clarity
- **Whitespace as Design Element** - premium feel through restraint

### Imagery & Icons
- Use **Phosphor Icons** (`@phosphor-icons/react`) or **Lucide** (`lucide-react`)
- **NEVER use emojis** for structural icons
- Prefer architectural/geometric imagery
- Crop images to show strong geometric shapes
- High contrast between light and dark imagery

### Quick Rules (Most Important)
- ✅ Big serif headline → hero focus
- ✅ 2 fonts max
- ✅ 3 colors max (dark, light, accent)
- ✅ Use whitespace as a design element
- ✅ No visual noise
- ✅ Premium feel through simplicity & restraint

---

## 7. Implementation Checklist

Before shipping any component:
- [ ] Colors match design tokens (no custom colors)
- [ ] Typography follows type scale
- [ ] Spacing is multiple of 8px
- [ ] Hover states implemented with 200-300ms transition
- [ ] Buttons are 44-48px minimum height
- [ ] Contrast ratio ≥ 4.5:1
- [ ] Icons are Phosphor or Lucide (no emojis)
- [ ] Max width respected (1200-1280px)
- [ ] Mobile responsive tested
- [ ] No visual clutter

---

## References
- Source: Figma - Premium Editorial SaaS Design System
- Spacing Grid: 8px base unit
- Layout: 12-column grid
- Font: Playfair Display + Inter
- Accent: #E8C547 (yellow)
