---
paths:
  - "frontend/src/components/**/*.tsx"
  - "frontend/src/app/**/*.tsx"
---

# Component Structure

## Required pattern
```tsx
'use client' // only when using hooks, events, or browser APIs

import React from 'react'
import Link from 'next/link'
import { Icon } from '@phosphor-icons/react'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import type { SomeType } from '@/types'

interface ComponentNameProps {
  requiredProp: string
  optionalProp?: boolean
  className?: string
}

export function ComponentName({ requiredProp, optionalProp = false, className }: ComponentNameProps) {
  return <div className={cn('base-classes', className)} />
}
```

## Rules
- Functional components only — no class components
- Props interface always explicitly defined
- No `any` — use explicit types or `unknown`
- No CSS modules or inline styles — Tailwind only
- `'use client'` only when actually needed
- Components >300 lines → split
- Parameter defaults, not `defaultProps`
- No nested ternaries — use early returns

## Import order
1. React / Next.js
2. External libraries
3. Local components
4. Utilities / lib
5. Types

## Tailwind class order
Layout → Spacing → Size → Typography → Color → Border → Effects → Transitions → Hover states
