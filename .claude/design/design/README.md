# ZoneTech Design System

**Consistent, Premium Design Across All Products**

---

## 📁 Files in This Directory

| File | Purpose |
|------|---------|
| **design-system.md** | Complete design system documentation (colors, typography, spacing, components, interactions) |
| **design-tokens.json** | JSON tokens for programmatic reference (use in code/configs) |
| **COMPONENTS-GUIDE.md** | Quick implementation guide for building UI components |
| **QUICK-REFERENCE.md** | One-page cheat sheet |
| **README.md** | This file |

---

## 🚀 How to Use

### 1. **Before Building Any Component**
Read: `design-system.md`
- Understand the color palette
- Review typography rules
- Check spacing system
- Learn micro-interactions

### 2. **While Building Components**
Reference: `COMPONENTS-GUIDE.md`
- Copy button, card, navbar implementations
- Check Tailwind mappings
- Verify spacing values
- Use color quick reference

### 3. **In Your Code**
Import: `design-tokens.json`
```json
{
  "colors": { "accent-yellow": "#E8C547", ... },
  "spacing": { "lg": "24px", ... },
  "components": { "button": { ... } }
}
```

---

## 🎨 Quick Design Rules (Golden)

### Colors
```
Primary Background: #F7F6F3 (cream)
Text: #1A1A1A (dark black)
Accent: #E8C547 (yellow)
Use only these 3 + white/grays
```

### Typography
```
Headings: Playfair Display (serif)
Body: Inter (sans-serif)
Heading italic = accent highlight
Max 2 fonts per design
```

### Spacing
```
Base: 8px grid
Sections: 96px gaps
Components: 16-24px padding
Always multiples of 8
```

### Interactions
```
Buttons: Hover lift + shadow
Cards: Hover scale 1.02
Transitions: 200-300ms ease
Underline on text links
```

---

## ✅ Component Checklist

Before shipping ANY component:

- [ ] Colors from design-tokens.json only
- [ ] Font is Playfair or Inter (no others)
- [ ] Spacing is multiple of 8px
- [ ] Button hover state (lift + shadow)
- [ ] Card hover state (scale + shadow)
- [ ] Contrast ratio ≥ 4.5:1
- [ ] Icons are Phosphor/Lucide (no emojis)
- [ ] Mobile responsive
- [ ] Tested in light + dark (if applicable)

---

## 🔧 Setup Instructions

### 1. Install Fonts

Add to your project's `globals.css` or layout file:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
```

### 2. Install Icons

```bash
npm install @phosphor-icons/react lucide-react
```

### 3. Tailwind Configuration

Add to `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'zt-dark': '#1A1A1A',
        'zt-cream': '#F7F6F3',
        'zt-yellow': '#E8C547',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    }
  }
}
```

---

## 📋 Design Principles

1. **Premium Through Simplicity** - Less is more. Use whitespace as design element.
2. **High Contrast** - Light vs dark. Clear visual hierarchy.
3. **Consistent Interactions** - Every hover/click feels predictable.
4. **Accessibility First** - 4.5:1 contrast, 44px buttons, semantic HTML.
5. **Geometric Imagery** - Abstract shapes, cropped for impact.
6. **Minimal UI** - No clutter. No unnecessary borders/shadows.

---

## 🎯 Common Patterns

### Hero Section
- H1: 72px serif, weight 600
- Subheading: 16px sans-serif
- Two CTA buttons (dark + yellow)
- Geometric visual on right

### Card Component
- 16px border-radius
- 1px subtle border
- 20-24px padding
- Hover: scale 1.02 + shadow

### Navigation
- 72px height
- Minimal links (no dropdowns)
- CTA button on right
- Light background

### Button States
- Default: solid color
- Hover: -2px translate + shadow
- Active: color darken
- Disabled: 50% opacity

---

## 🚫 Anti-Patterns (Avoid)

❌ Custom colors not in design-tokens.json  
❌ Using emojis for icons  
❌ Mixing more than 2 fonts  
❌ Spacing not multiple of 8px  
❌ Buttons smaller than 44px  
❌ Clashing color combinations  
❌ Jarring animations (>300ms)  
❌ Low contrast text (<4.5:1)  
❌ Unnecessary shadows/borders  
❌ Gradient backgrounds  

---

## 📚 Resources

- **Design Source:** Figma - Premium Editorial SaaS Design System
- **Icon Library:** Phosphor Icons (@phosphor-icons/react)
- **CSS Framework:** Tailwind CSS
- **Fonts:** Playfair Display + Inter (Google Fonts)

---

## 🔄 Updating This System

When changes to design are needed:

1. Update `design-system.md` (main source of truth)
2. Update `design-tokens.json` (programmatic reference)
3. Update `COMPONENTS-GUIDE.md` (implementation examples)
4. Commit all three files together
5. Notify team of changes

---

## 💡 Tips for Consistency

- Bookmark `design-system.md`
- Before starting a new component, read the relevant section
- Copy-paste button/card/navbar from COMPONENTS-GUIDE.md
- Use design-tokens.json values (don't hardcode colors)
- Test every hover/active state
- Check mobile responsiveness

---

## 📞 Questions?

Refer to:
1. `design-system.md` - Comprehensive docs
2. `COMPONENTS-GUIDE.md` - Implementation examples
3. `design-tokens.json` - Token values

**Version:** 1.0  
**Last Updated:** 2026-04-24  
**Maintained By:** ZoneTech Design System
