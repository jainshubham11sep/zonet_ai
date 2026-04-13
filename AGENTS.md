<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# UI/UX Design Rules

This project uses the `ui-ux-pro-max` skill for all design decisions.

- **Source of Truth**: Always consult `.agents/skills/ui-ux-pro-max/SKILL.md` before starting any UI work.
- **Design System**: Use `python3 .agents/skills/ui-ux-pro-max/scripts/search.py --design-system` to generate and follow consistent design patterns.
- **Iconography**: Use **Phosphor Icons** (`@phosphor-icons/react`) or **Lucide** (`lucide-react`). NEVER use emojis for structural icons.
- **Spacing**: Follow an 8px spacing rhythm.
- **Accessibility**: Maintain a minimum contrast ratio of 4.5:1 for body text.
- **Interactions**: Provide clear visual feedback for all tappable elements.
