# Kuiken Group Style Guide

## Brand Character

Kuiken Group communicates trust, sophistication, quiet confidence, executive-level professionalism, precision, and premium craftsmanship.

Luxury comes from restraint. The site should feel composed and specific—not busy, glossy, or trend-dependent.

## Approved Palette

| Role | Value | Usage |
| --- | --- | --- |
| Primary background | `#0D0D0D` | Page canvas and deepest surfaces |
| Raised card | `#252625` | Select panels and interactive surfaces |
| Secondary surface | `#171817` | Subtle section and card separation |
| Accent gold | `#C6A972` | Eyebrows, focus rings, controlled highlights |
| Primary text | `#E7DCC1` | Headlines and essential content |

Bright colors and high-saturation gradients are not part of the core Kuiken Group system.

## Typography

- Use oversized, tightly tracked headlines for decisive statements.
- Keep supporting copy smaller, quieter, and highly legible.
- Maintain logical heading order: one `h1` per page, followed by section-level `h2` elements.
- Avoid center alignment for long-form editorial copy.
- Preserve readable line lengths and use balanced wrapping only for display text.

## Layout

- Use generous whitespace between major sections.
- Default to the shared `Container` for horizontal alignment.
- Prefer asymmetry and editorial grids over repeated template cards.
- Empty space is structural; do not fill it with decoration.
- Test at 375, 768, 1024, 1440, and large desktop widths.

## Copy Rules

- Describe Kuiken Group as a premium marketing firm or creative partner.
- Use direct, grounded language.
- State that clients work directly with Brady Kuiken.
- Use “we” for the firm’s point of view, not to imply a large internal team.
- Prefer specific business value over broad superlatives.
- Never return to language about advisory services, investors, capital, transitions, strategic counsel, or private advisory.
- Never invent performance metrics or testimonials.

## Motion

- Approved behaviors: fade, short slide, stagger, restrained parallax, image reveal, hover lift, line movement, and subtle background glow.
- Motion should support hierarchy and orientation.
- Avoid elastic motion, aggressive scaling, continuous distraction, or effects that delay access to content.
- Scroll work must be passive or animation-frame throttled.
- Every animation requires a usable `prefers-reduced-motion` state.

## Interaction

- All actionable elements require a visible keyboard focus state.
- Important information cannot be hover-only.
- Cards may look clickable only when the entire card has a valid destination.
- External destinations must be identified through behavior and use safe link attributes.
- Decorative imagery uses an empty `alt`; meaningful project imagery uses concise descriptive alternatives.

## Accessibility

- Maintain strong contrast against dark surfaces.
- Use semantic landmarks, headings, articles, navigation labels, and lists.
- Preserve minimum practical touch targets on mobile.
- Forms need visible labels and focus states.
- Avoid horizontal overflow at every supported breakpoint.
