# Design System: Gurdharam Jeet Singh Portfolio

## 1. Visual Theme & Atmosphere
A cinematic, high-variance developer portfolio built around SIGNAL x SILENCE: blackened charcoal depth, warm Punjabi gold, surgical typography, analog grain, responsive light fields, and tactile interactions. Density is gallery-balanced, variance is asymmetric, motion is cinematic but purposeful.

## 2. Color Palette & Roles
- **Void Charcoal** (#080808) - primary canvas, never pure black
- **Carbon Surface** (#111111) - cards, panels, overlays
- **Warm Paper White** (#F0EDE6) - primary text
- **Muted Stone** (#8A8680) - metadata and supporting copy
- **Victory Gold** (#D4A853) - single dominant accent for identity, CTA, active states
- **Machine Blue** (#5B8FD4) - constrained AI/project technical accent only
- **Live Green** (#4ADE80) - availability status only

## 3. Typography Rules
- **Display:** Syne - huge, tight, confident, editorial-technical personality
- **Body:** Syne - readable, warm, max 65ch for paragraphs
- **Mono:** DM Mono - labels, counters, metadata, technical proof
- No Inter, no pure system-default feel, no generic serif.

## 4. Component Stylings
- **Buttons:** Gold outline, dark fill, magnetic offset, elastic snap-back, icon-led actions.
- **Cards:** Tall cinematic objects with spotlight tracking, mask-grid reveal, app image/icon stage, and click/hover affordances.
- **Cursor:** Custom dot/ring with project state and velocity skew on fine pointers only.
- **Loaders:** Counter, monogram line draw, phrase reveal, curtain exit.
- **Status:** Pulse dot only for live availability or project status.

## 5. Layout Principles
Asymmetric hero, full-bleed sections, sticky project stack, restrained panels, clear spatial separation. Mobile collapses to single-column, disables heavy hover-only behavior, keeps tap targets above 44px.

## 6. Motion & Interaction
GSAP + Lenis orchestration. Transform/opacity only. Staggered masked text reveals. Canvas constellation reacts to pointer. Project cards track pointer light. Reduced-motion mode disables movement-heavy effects.

## 7. Anti-Patterns
No emojis, no pure black, no purple/neon gradient bias, no fake metrics, no generic 3-card SaaS rows, no filler slogans, no overlapping unreadable text, no hover-only critical actions, no stock-looking visuals.
