# Design Consistency

Always use these exact values. Never hardcode anything else.

## Colors
```
#F7F6F3  bg primary (cream)
#FFFFFF  bg secondary
#1A1A1A  text primary / dark button
#686B6B  text secondary
#E8C547  yellow CTA / accent
#686BAB  blue accent
#E6E4DF  border subtle
#111111  button dark
```
✅ `bg-[#F7F6F3]` `text-[#1A1A1A]` `border-[#E6E4DF]`
❌ `bg-gray-100` `text-red-500` `bg-[#FFD700]`

## Fonts
- `font-serif` → Playfair Display (headings only)
- `font-sans` → Inter (body, UI, buttons)

❌ Never `font-mono`, never serif on body text

## Spacing — 8px grid only
✅ p-2 p-4 p-6 p-8 p-12 p-16 p-24
❌ p-3 p-5 p-7 p-10 p-14 p-20

## Buttons
```tsx
// Dark
"h-11 px-5 rounded-full bg-[#111111] text-white font-sans text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
// Yellow CTA
"h-11 px-5 rounded-full bg-[#E8C547] text-[#1A1A1A] font-sans text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
// Outline
"h-11 px-5 rounded-full border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-200"
```
Min height: 44px always.

## Cards
```tsx
"rounded-2xl p-6 border border-[#E6E4DF] bg-white hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
```

## Hover states required on all interactive elements
- Buttons: `hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200`
- Cards: `hover:scale-[1.02] hover:shadow-lg transition-all duration-200`
- Links: `hover:underline underline-offset-4 transition-all duration-300`

## Icons
✅ `@phosphor-icons/react` or `lucide-react`
❌ emojis, custom SVG files

## Audit score colors
```
red    (<50):  text-red-500 bg-red-50 border-red-200
yellow (<80):  text-yellow-600 bg-yellow-50 border-yellow-200
green  (80+):  text-green-600 bg-green-50 border-green-200
```
