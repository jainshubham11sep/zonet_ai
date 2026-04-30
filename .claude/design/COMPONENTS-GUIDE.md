# Component Guidelines

Quick reference for building components with the ZoneTech design system.

---

## Button Component

### Variants

**Primary (Dark)**
```
Background: #111111
Text Color: #FFFFFF
Border Radius: 999px
Height: 44px
Padding: 0 20px
Font Size: 14px
Font Weight: 500
```

**Secondary (Yellow)**
```
Background: #E8C547
Text Color: #1A1A1A
Border Radius: 999px
Height: 44px
Padding: 0 20px
Font Size: 14px
Font Weight: 500
```

### States
- **Default**: Base styling
- **Hover**: `translateY(-2px)` + subtle shadow
- **Active**: Slight color darken
- **Disabled**: 50% opacity

### Implementation
```jsx
<button 
  className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium 
             hover:shadow-lg hover:translate-y-[-2px] transition-all duration-200"
>
  Button Label
</button>
```

---

## Card Component

### Structure
```
Border Radius: 16px
Padding: 20-24px
Border: 1px solid #E6E4DF
Background: #FFFFFF
Box Shadow: 0 10px 30px rgba(0,0,0,0.05)
```

### Hover State
```
Transform: scale(1.02)
Box Shadow: 0 15px 40px rgba(0,0,0,0.08)
Transition: 200ms ease
```

### Implementation
```jsx
<div 
  className="rounded-2xl p-6 border border-[#E6E4DF] bg-white
             shadow-sm hover:shadow-lg hover:scale-[1.02] 
             transition-all duration-200"
>
  Card content here
</div>
```

---

## Navbar Component

### Structure
```
Height: 72px
Padding: 24px horizontal
Background: #FFFFFF
Display: flex
Align Items: center
Justify Between: space-between
```

### Elements
- **Logo**: Left side
- **Links**: Center (minimal, no heavy borders)
- **CTA Button**: Right side (primary dark button)

### Navigation Links
```
Font Size: 14px
Font Weight: 500
Color: #1A1A1A
Hover: Underline animation (#E8C547)
```

### Implementation
```jsx
<nav className="h-[72px] px-6 flex items-center justify-between bg-white">
  <div>Logo</div>
  <div className="flex gap-8">
    <a href="/" className="text-sm font-medium hover:underline">Link</a>
  </div>
  <button className="px-5 py-2.5 bg-black text-white rounded-full">CTA</button>
</nav>
```

---

## Hero Section

### Structure
```
Padding: 96px top/bottom
Background: #F7F6F3
Display: grid (2 columns on desktop)
Gap: 48px
```

### Content Side
```
H1: 72px, serif, weight 600
Subheading: 16px, sans-serif, weight 400
CTA Buttons: 2x primary + secondary buttons
Spacing: 24px between elements
```

### Visual Side
```
Geometric shapes with high contrast
Yellow (#E8C547), Black (#111111), Blue (#686BAB)
Images cropped for impact
Align right
```

### Implementation
```jsx
<section className="py-24 px-6 bg-[#F7F6F3]">
  <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
    {/* Content */}
    <div>
      <h1 className="font-serif text-7xl font-bold leading-tight mb-6">
        We turn bold ideas into <em>digital products</em> that scale.
      </h1>
      <p className="text-base text-[#686B6B] mb-8">
        ZoneTech is a digital product agency...
      </p>
      <div className="flex gap-4">
        <button className="px-5 py-2.5 bg-black text-white rounded-full">See Our Work</button>
        <button className="px-5 py-2.5 bg-[#E8C547] text-black rounded-full">Explore Services</button>
      </div>
    </div>
    
    {/* Visual */}
    <div>
      {/* Geometric shapes or image */}
    </div>
  </div>
</section>
```

---

## Typography Styles

### Heading (H1)
```css
font-family: 'Playfair Display', serif;
font-size: 72px;
font-weight: 600;
line-height: 100%;
letter-spacing: -1px;
color: #1A1A1A;
```

### Heading (H2)
```css
font-family: 'Playfair Display', serif;
font-size: 48px;
font-weight: 600;
line-height: 110%;
letter-spacing: -0.5px;
color: #1A1A1A;
```

### Body Text
```css
font-family: 'Inter', sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 150%;
color: #1A1A1A;
```

### Small Text
```css
font-family: 'Inter', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 140%;
color: #686B6B;
```

### Accent (Italic in Headlines)
```css
font-style: italic;
color: #E8C547;
```

---

## Spacing Examples

```
Section Gap: 96px (gap-24 in Tailwind)
Card Padding: 24px (p-6 in Tailwind)
Button Padding: 0 20px vertical, 10px horizontal (px-5 py-2.5)
Input Padding: 12-16px (px-4 py-3)
```

**Tailwind Mapping:**
- 8px = 2
- 16px = 4
- 24px = 6
- 32px = 8
- 48px = 12
- 96px = 24

---

## Color Quick Reference

| Use Case | Color | Hex |
|----------|-------|-----|
| Dark Button | Dark | #111111 |
| Yellow Button | Accent | #E8C547 |
| Card Background | White | #FFFFFF |
| Page Background | Cream | #F7F6F3 |
| Text | Dark | #1A1A1A |
| Text Secondary | Gray | #686B6B |
| Borders | Light Gray | #E6E4DF |

---

## Interaction Patterns

### Underline Animation (Links)
```jsx
className="hover:underline underline-offset-4 transition-all duration-300"
```

### Button Lift (Hover)
```jsx
className="hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
```

### Card Scale (Hover)
```jsx
className="hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
```

---

## Do's and Don'ts

✅ **Do:**
- Use serif only for headlines
- Keep animations 200-300ms
- Use whitespace as design element
- High contrast light vs dark
- Buttons 44px minimum height
- Spacing in multiples of 8px

❌ **Don't:**
- Use emojis for structural icons
- Mix more than 2 fonts
- Use more than 3 colors
- Add unnecessary shadows
- Use gradients
- Clutter the UI

---

## Tailwind Configuration

Add to `tailwind.config.js`:

```js
module.exports = {
  theme: {
    colors: {
      'zt-dark': '#1A1A1A',
      'zt-cream': '#F7F6F3',
      'zt-yellow': '#E8C547',
      'zt-blue': '#686BAB',
      'zt-gray': '#686B6B',
      'zt-border': '#E6E4DF',
    },
    fontFamily: {
      'serif': ['Playfair Display', 'serif'],
      'sans': ['Inter', 'Helvetica Now', 'Satoshi', 'sans-serif'],
    },
    spacing: {
      'xs': '4px',
      'sm': '8px',
      'md': '16px',
      'lg': '24px',
      'xl': '32px',
      '2xl': '48px',
      '3xl': '64px',
      '4xl': '96px',
    }
  }
}
```

---

## When in Doubt

Reference: `.claude/design/design-system.md` → `.claude/design/design-tokens.json`
