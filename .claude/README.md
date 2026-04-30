# .claude Directory - Project Configuration

This directory contains all Claude Code configuration for the ZoneTech web platform project.

---

## 📁 Directory Structure

```
.claude/
├── CLAUDE.md                  # Main project instructions (loaded every session)
├── settings.json              # Permissions, hooks, environment variables
├── settings.local.json        # Your personal overrides (gitignored)
├── README.md                  # This file
│
├── design/                    # Design system (single source of truth)
│   ├── design-system.md      # Complete design guidelines
│   ├── design-tokens.json    # Colors, fonts, spacing in JSON
│   ├── COMPONENTS-GUIDE.md   # How to build UI components
│   ├── QUICK-REFERENCE.md    # One-page cheat sheet
│   └── README.md             # Design system overview
│
├── rules/                     # Topic-scoped instructions (optional, load on demand)
│   ├── design-consistency.md # Enforce design system rules
│   └── component-structure.md # Code organization patterns
│
└── [future]                   # Future: skills/, agents/, output-styles/
```

---

## 🎯 How to Use This Directory

### 1. **CLAUDE.md** - Read First
This is loaded at the start of every Claude Code session. It contains:
- Project overview and tech stack
- Essential commands (dev, build, test)
- Development conventions
- Common tasks and workflows
- Anti-patterns to avoid

**When to update**: When project conventions change, new commands are added, or team decides on new guidelines.

### 2. **design/** - Single Source of Truth for Styling
Everything design-related lives here. Never hardcode colors, fonts, or spacing.

**Before building ANY component**:
1. Check `design/QUICK-REFERENCE.md` (2-min read)
2. Reference `design/COMPONENTS-GUIDE.md` (copy-paste examples)
3. Use values from `design/design-tokens.json` (colors, spacing, etc.)

**When to update**: When design system changes (colors, fonts, spacing, patterns).

### 3. **rules/** - Topic-Scoped Instructions
Rules load automatically when you edit matching files:
- `design-consistency.md` → enforces color/font/spacing rules
- `component-structure.md` → enforces code organization when editing `.tsx` files

**When to add a rule**: When you have conventions specific to a file type or feature.

### 4. **settings.json** - Permissions & Hooks
Defines what Claude can and cannot do in this project.

```json
{
  "permissions": { ... },    // What tools Claude can use
  "hooks": { ... },          // Scripts to run on tool use
  "env": { ... }             // Environment variables
}
```

### 5. **settings.local.json** - Your Personal Overrides
Personal, not committed to git. Use when you need different permissions than the team.

---

## ⚡ Quick Start for New Sessions

Every session:
1. **CLAUDE.md** is automatically loaded → you get project context
2. **rules/** are loaded → topic-specific guidance appears when needed
3. **design/** is available for reference → always check before building UI

**You don't need to do anything** — just start coding! Claude will have full context.

---

## 📊 File Load Order

| File | When | Scope |
|------|------|-------|
| CLAUDE.md | Session start | Entire session |
| rules/*.md (without paths) | Session start | Entire session |
| rules/*.md (with paths) | When matching file edited | Only matching files |
| design/* | On demand (you reference it) | Reference only |
| settings.json | Session start | Enforced permissions |
| settings.local.json | Session start | Your personal overrides |

---

## ✅ Before Committing Changes

### Design System Changes
If you update `.claude/design/`:
```bash
# All three must be updated together
1. design-system.md       (main reference)
2. design-tokens.json     (programmatic values)
3. COMPONENTS-GUIDE.md    (implementation examples)

git add .claude/design/
git commit -m "update design system: [what changed]"
```

### Project Conventions
If you update `CLAUDE.md` or `rules/`:
```bash
git add .claude/CLAUDE.md .claude/rules/
git commit -m "update project conventions: [what changed]"
```

### Personal Settings
If you update `settings.local.json`:
```bash
# DON'T commit - it's gitignored
# Just save locally for your own use
```

---

## 🚫 What NOT to Do

- ❌ Don't edit `settings.json` for personal preferences → use `settings.local.json`
- ❌ Don't create hardcoded colors → use `design/design-tokens.json`
- ❌ Don't add component examples to CLAUDE.md → reference them from `design/`
- ❌ Don't commit design changes in separate commits → update all 3 files together
- ❌ Don't create new rules without documenting them → update this README

---

## 📝 Common Tasks

### Add a New Design Token
1. Update `design/design-system.md` (add to tables)
2. Update `design/design-tokens.json` (add JSON value)
3. Update `design/COMPONENTS-GUIDE.md` (show usage example)
4. Commit all three

### Update a Development Convention
1. Update `CLAUDE.md` (main guidance)
2. If needed, create a new rule in `rules/` (specific guidance)
3. Commit and notify team

### Add a New Rule
1. Create `rules/my-rule.md` with frontmatter:
   ```markdown
   ---
   name: Rule Name
   description: Short description
   type: project
   paths: ["**/*.tsx"]  # Optional: scope to specific files
   ---
   ```
2. Add content explaining the rule
3. Update this README with description
4. Commit to share with team

### Enable Project Permissions
Edit `settings.json`:
```json
{
  "permissions": {
    "allow": ["Bash(npm run *)", "Bash(git status)"]
  }
}
```

---

## 🔗 Related Files (Outside .claude/)

| File | Purpose |
|------|---------|
| `CLAUDE.md` (root) | Alternative: can also be at project root |
| `.mcp.json` (root) | MCP server configuration (if needed) |
| `.worktreeinclude` (root) | Files to copy to git worktrees |
| `tailwind.config.js` | Tailwind theme (add custom colors here) |
| `tsconfig.json` | TypeScript strict mode |
| `next.config.js` | Next.js configuration |

---

## 👥 Team Collaboration

**What's committed to git** (shared with team):
- `CLAUDE.md`
- `design/*` (all design system files)
- `rules/*` (project conventions)
- `settings.json` (team permissions)

**What's gitignored** (personal only):
- `settings.local.json` (your overrides)

When team conventions change → update in git → everyone gets them automatically in next session.

---

## 📚 Official Claude Code Docs

For more advanced features:
- [Memory & Instructions](https://code.claude.com/docs/en/memory)
- [Settings & Permissions](https://code.claude.com/docs/en/settings)
- [Skills & Workflows](https://code.claude.com/docs/en/skills)
- [Subagents](https://code.claude.com/docs/en/sub-agents)

---

## 🆘 Troubleshooting

**Rules not loading?**
- Check `paths:` glob pattern matches your file path
- Reload the session (`/clear` then start new task)

**Design tokens not showing?**
- Make sure `design/design-tokens.json` is valid JSON
- Reference the file explicitly or use `.claude/design/` in queries

**Permissions blocking me?**
- Check `settings.json` `permissions.deny` list
- Add to `permissions.allow` if needed
- Or use `settings.local.json` for personal overrides

**CLAUDE.md not updating?**
- It loads at session start only
- Start a new session to see updates

---

**Last Updated**: 2026-04-24  
**Version**: 1.0  
**Maintained By**: ZoneTech Team
