---
name: Component Structure & Conventions
description: Code organization, naming, and component patterns for consistency
type: project
paths:
  - "src/components/**/*.tsx"
---

# Component Structure & Conventions

Follow these patterns for creating consistent, maintainable components.

## File Naming

- **Component files**: `PascalCase.tsx` (e.g., `Hero.tsx`, `Header.tsx`)
- **Utilities**: `camelCase.ts` (e.g., `formatDate.ts`, `getColors.ts`)
- **Styles**: Co-located with components (Tailwind inline, no separate CSS)
- **Type files**: `types.ts` or `[Component].types.ts`

## Component Structure

```tsx
// src/components/landing-page/Hero.tsx

import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
}

/**
 * Hero section component
 * Displays large heading and call-to-action buttons
 */
export function Hero({ title, subtitle, imageSrc }: HeroProps) {
  return (
    <section className="py-24 px-6 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h1 className="font-serif text-7xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-base text-[#686B6B] mb-8">
            {subtitle}
          </p>
          <div className="flex gap-4">
            <button className="px-5 py-2.5 bg-black text-white rounded-full">
              Learn More
            </button>
          </div>
        </div>

        {/* Visual */}
        {imageSrc && (
          <div>
            <img src={imageSrc} alt="Hero" className="w-full" />
          </div>
        )}
      </div>
    </section>
  );
}
```

## Import Order

Always organize imports in this order:

```tsx
// 1. React/Next.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 2. External libraries
import { Heart } from '@phosphor-icons/react';

// 3. Local components
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';

// 4. Local utilities
import { formatDate } from '@/utils/date';

// 5. Types
import type { UserProps } from '@/types';
```

## Props Interface Pattern

```tsx
// Always define props interface explicitly
interface ComponentNameProps {
  title: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  children?: React.ReactNode;
}

export function ComponentName({
  title,
  onClick,
  variant = 'primary',
  className,
  children,
}: ComponentNameProps) {
  return (
    // Component JSX
  );
}
```

## Comments - Keep Minimal

Only comment WHY, never WHAT:

```tsx
// ❌ DON'T - obvious from code
// Set the title
const title = props.title;

// ✅ DO - explains the reasoning
// Only show CTA if user is authenticated (API returns null otherwise)
{authenticated && <CallToAction />}

// ✅ DO - explains a non-obvious constraint
// Limit to 3 items: mobile viewport only allows 3 without overflow
const MAX_ITEMS = 3;
```

## Functional Components Only

```tsx
// ✅ DO - Functional component with hooks
export function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// ❌ DON'T - Class component
export class Counter extends React.Component {
  state = { count: 0 };
  render() {
    return <button>{this.state.count}</button>;
  }
}
```

## Tailwind Only - No CSS Modules

```tsx
// ✅ DO - Tailwind classes
<div className="p-6 rounded-lg bg-white shadow-sm hover:shadow-lg">
  Content
</div>

// ❌ DON'T - Separate CSS file (except globals)
// import styles from './Button.module.css';
// <button className={styles.primary} />

// ❌ DON'T - Inline styles
<div style={{ padding: '24px', borderRadius: '8px' }} />
```

## Responsive Design - Mobile First

```tsx
// Mobile-first approach using Tailwind breakpoints
<div className="
  px-4 py-6      /* Mobile: 16px padding, 24px top/bottom */
  sm:px-6 sm:py-8  /* Small: 24px padding */
  lg:px-8 lg:py-12 /* Large: 32px padding, 48px top/bottom */
">
  Content
</div>
```

## Component Composition

Keep components small and focused:

```tsx
// ✅ Good - Small, focused components
export function HeroContent({ title, subtitle }: HeroContentProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export function HeroVisual({ imageSrc }: HeroVisualProps) {
  return <img src={imageSrc} alt="Hero" />;
}

export function Hero({ title, subtitle, imageSrc }: HeroProps) {
  return (
    <section>
      <HeroContent title={title} subtitle={subtitle} />
      <HeroVisual imageSrc={imageSrc} />
    </section>
  );
}

// ❌ Avoid - Monolithic component
export function Hero({ title, subtitle, imageSrc, /* ... 20 more props */ }: HeroProps) {
  // 500+ lines of code
}
```

## Conditional Rendering

Use early returns or ternary operators:

```tsx
// ✅ Early return - clean and readable
export function Card({ data }: CardProps) {
  if (!data) return null;

  return (
    <div className="p-6">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}

// ✅ Inline ternary - when condition is simple
<div className={data ? 'opacity-100' : 'opacity-50'}>

// ❌ Nested ternaries - hard to read
<div>{condition1 ? (condition2 ? <A /> : <B />) : <C />}</div>
```

## Default Props

Use parameter defaults, not defaultProps:

```tsx
// ✅ DO
export function Button({ 
  variant = 'primary', 
  size = 'md' 
}: ButtonProps) {
  // ...
}

// ❌ DON'T
export function Button(props: ButtonProps) {
  // ...
}
Button.defaultProps = { variant: 'primary' };
```

## File Directory Rules

```
src/
├── components/
│   ├── common/                 # Reusable across entire app
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Header.tsx
│   ├── landing-page/          # Landing page specific
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── CTA.tsx
│   └── [feature]/             # Feature-specific components
│
├── styles/
│   ├── globals.css            # Global Tailwind directives
│   └── fonts.css              # Font imports
│
├── utils/
│   ├── cn.ts                  # Classname utility
│   ├── formatDate.ts
│   └── api.ts
│
├── types/
│   └── index.ts               # Shared type definitions
│
└── app/
    ├── layout.tsx
    ├── page.tsx
    └── [feature]/
        └── page.tsx
```

## Re-exports - Index Files

Use index files to simplify imports:

```tsx
// src/components/index.ts
export { Hero } from './landing-page/Hero';
export { Button } from './common/Button';
export { Card } from './common/Card';

// Usage
import { Hero, Button, Card } from '@/components';
```

## Props Spread - Use with Care

```tsx
// ✅ OK - props object spread when necessary
<div {...divProps} className={cn(baseClass, divProps.className)}>

// ❌ Avoid - unclear what props are being used
<Component {...allProps} />  // Where did allProps come from?
```

## Performance - Memoization

Only memoize when necessary:

```tsx
// ✅ Memoize if component re-renders frequently with same props
export const Card = React.memo(function Card({ data }: CardProps) {
  return <div>{data.title}</div>;
});

// ❌ DON'T - premature optimization
export const Button = React.memo(Button); // Rarely memoize simple components
```

## TypeScript - Strict Mode

Always use strict TypeScript:

```tsx
// ✅ DO - Explicit types
function getData(id: string): Promise<Data> {
  return fetch(`/api/data/${id}`).then(r => r.json());
}

// ❌ DON'T - Implicit any
function getData(id): Promise<any> {
  return fetch(`/api/data/${id}`).then(r => r.json());
}
```

## Checklist

- [ ] Component uses PascalCase filename
- [ ] Props interface defined explicitly
- [ ] Imports organized in correct order
- [ ] Only Tailwind for styling (no CSS modules/inline styles)
- [ ] Mobile-first responsive design
- [ ] Hover/interactive states implemented
- [ ] TypeScript strict mode compliant
- [ ] No class components
- [ ] Comments explain WHY, not WHAT
- [ ] No unused imports or code
