---
description: Scaffold a new React component. Pass the name and which section it belongs to.
---

**Folder routing**
- Reusable UI primitive → `src/components/ui/`
- Audit feature → `src/components/audit/`
- Page section → `src/components/sections/[page]/`
- Full page → `src/components/pages/`

**Template**
```tsx
'use client' // only if needed

import React from 'react'

interface ComponentNameProps {
  // explicit props
}

export function ComponentName({ }: ComponentNameProps) {
  return (
    <div className="">
    </div>
  )
}
```

**Verify before done**
- Colors from tokens only (`#F7F6F3` `#1A1A1A` `#686B6B` `#E8C547` `#E6E4DF`)
- Spacing 8px grid (p-2 p-4 p-6 p-8 p-12 py-24)
- Hover states on all interactive elements (200-300ms)
- Mobile-first responsive
- TypeScript strict, no `any`
- Export from `index.ts` if one exists
