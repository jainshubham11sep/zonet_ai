---
description: Diagnose and fix a bug or error. Pass the error message or describe the issue.
---

1. Read the error message carefully — understand what failed and where
2. Locate the file and line
3. Read surrounding code to understand intent
4. Fix minimally — change only what's needed
5. Run `npx biome check` and `npm run build` to confirm clean

**Rules**
- Fix root cause, not symptom
- Don't introduce new dependencies for simple fixes
- Add a comment only if the fix is non-obvious (explain WHY)
- If the fix touches a component, verify design system compliance

**Output**
```
## Issue
[what was wrong]

## Root cause
[why it happened]

## Fix
[what changed, which file]

## Verified
[lint/build result]
```
