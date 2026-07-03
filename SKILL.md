---
name: gurdharam-portfolio
description: Use this skill when working on the Gurdharam Jeet Singh portfolio project, especially for React/Vite UI edits, Spline hero positioning, responsive portfolio sections, animation-heavy layout, build verification, and project-specific agent behavior.
---

# Gurdharam Portfolio

## Use When

- Editing `/root/gurdharam-portfolio`.
- Fixing hero, bot/Spline, slide, animation, responsive, portfolio, project-card, AI-bot, or contact-section UI.
- Creating project-specific docs, agent instructions, or implementation notes.

## Project Map

- `src/main.tsx`: page structure, portfolio sections, React components, data arrays.
- `src/styles.css`: primary visual system, layout, responsive breakpoints, Spline hero positioning.
- `src/components/ui/`: reusable animation/UI components.
- `public/assets/portfolio/`: source assets loaded by Vite.
- `dist/`: generated production build. Do not hand edit.

## Design Direction

Keep the site as a premium AI engineer portfolio:

- Dark background with restrained gold, blue, and green accents.
- Large editorial display type for identity and section moments.
- Dense but polished proof of work, not a generic landing page.
- AI-native interaction patterns: Spline/3D hero, smooth scroll, motion reveals, glass panels, telemetry-style labels.
- Cards should stay compact with 8px-or-less radii unless existing CSS already requires otherwise.

## Implementation Workflow

1. Read the relevant source before editing. Most visual fixes are in `src/styles.css`.
2. For Spline hero alignment, adjust `--spline-shift`, `--spline-fit`, and related `.hero-spline-shell` rules rather than changing the React structure.
3. Preserve existing breakpoints:
   - Base desktop rules.
   - `@media (max-width: 1100px)`
   - `@media (max-width: 860px)`
   - `@media (max-width: 760px)`
   - `@media (max-width: 640px)`
   - `@container hero-visual` rules for the hero visual.
4. Run `npm run build`.
5. Preview with `npm run preview -- --port 4173` when visual inspection is needed.

## Guardrails

- Do not edit `dist/` directly.
- Do not introduce secrets.
- Do not add broad refactors for one visual adjustment.
- Do not remove motion libraries or Spline unless explicitly asked.
- If screenshot tooling is blocked, report the blocker and verify source/build output.

