# 🎨 Design System Quick Reference Card

Print this or bookmark it. Use before building anything.

---

## 🎯 3 Most Important Rules

1. **Colors:** Only use #1A1A1A, #F7F6F3, #E8C547, #FFFFFF, #686B6B, #E6E4DF
2. **Fonts:** Playfair Display (headings only) + Inter (everything else)
3. **Spacing:** Always multiples of 8px

---

## 🌈 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Dark Black | #1A1A1A | Text, dark button |
| Cream | #F7F6F3 | Background |
| Yellow | #E8C547 | CTA button, accents |
| White | #FFFFFF | Cards, secondary bg |
| Gray | #686B6B | Secondary text |
| Light Gray | #E6E4DF | Borders |
| Dark Blue | #686BAB | Optional accent |

---

## 📝 Typography Quick Size

| Use | Size | Font | Weight |
|-----|------|------|--------|
| Hero H1 | 72px | Serif | 600 |
| H2 | 48px | Serif | 600 |
| H3 | 24px | Serif | 500 |
| Body | 16px | Sans | 400 |
| Small | 14px | Sans | 400 |

**Rule:** Serif for headings ONLY. Italic to highlight key words.

---

## 📏 Spacing Grid (8px base)

```
4px   = xs
8px   = sm
16px  = md
24px  = lg
32px  = xl
48px  = 2xl
64px  = 3xl
96px  = 4xl (hero gaps)
```

---

## 🔘 Component Quick Setup

### Button
```
Height: 44px
Padding: 0 20px
Radius: 999px
Hover: -2px lift + shadow
Color: #111111 or #E8C547
```

### Card
```
Radius: 16px
Padding: 20-24px
Border: 1px #E6E4DF
Hover: scale 1.02 + shadow
```

### Input
```
Height: 44px
Padding: 12px 16px
Radius: 8px
Border: 1px #E6E4DF
```

### Navbar
```
Height: 72px
Padding: 24px
Links: 14px, weight 500
CTA: Primary button right
```

---

## ⚡ Tailwind Shortcuts

```
Text: text-zt-dark (use custom colors)
BG: bg-zt-cream
Yellow: bg-zt-yellow
Serif: font-serif
Sans: font-sans
Hover: hover:shadow-lg hover:-translate-y-0.5
Button: px-5 py-2.5 rounded-full
```

---

## ✨ Hover States (Copy-Paste)

### Button
```jsx
className="hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
```

### Card
```jsx
className="hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
```

### Link
```jsx
className="hover:underline underline-offset-4 transition-all duration-300"
```

---

## 🚀 Checklist (Before Shipping)

- [ ] Only colors from palette
- [ ] Font is Serif or Sans (not both)
- [ ] Spacing = multiple of 8
- [ ] Button ≥ 44px height
- [ ] Hover animations 200-300ms
- [ ] Contrast ≥ 4.5:1
- [ ] Icons = Phosphor/Lucide (no emoji)
- [ ] Mobile tested

---

## ❌ Never Do This

🚫 Use custom colors  
🚫 Mix more than 2 fonts  
🚫 Use emojis for icons  
🚫 Spacing not 8px multiple  
🚫 Buttons < 44px  
🚫 Animations > 300ms  
🚫 Use gradients  
🚫 Clutter UI  

---

## 📖 Full Docs

- **Complete System:** `.claude/design/design-system.md`
- **Implementation:** `.claude/design/COMPONENTS-GUIDE.md`
- **Tokens (JSON):** `.claude/design/design-tokens.json`

---

## 🎨 Color Preview

```
🟫 #1A1A1A (Dark - Text & Buttons)
🟨 #E8C547 (Yellow - Accent & CTA)
⬜ #F7F6F3 (Cream - Background)
⬜ #FFFFFF (White - Cards)
🟦 #686B6B (Gray - Secondary Text)
⬜ #E6E4DF (Light Gray - Borders)
```

---

**Remember:** Simplicity is premium. Less is more. Use whitespace.

**Last Updated:** 2026-04-24
