# Kuiken Group Website

## Positioning

Kuiken Group is a principal-led premium marketing firm. It helps ambitious businesses make their value easier to recognize through:

- Brand strategy and messaging
- Brand identity
- Website design and development
- Digital marketing
- Lead generation
- Creative direction

Clients work directly with Brady Kuiken. Copy must describe that structure accurately and must not imply a large internal team.

## Product Goal

The website should create trust before the first conversation. It must feel quiet, deliberate, and useful—not ornamental. Every page should demonstrate the same clarity, restraint, and craftsmanship Kuiken Group offers clients.

## Architecture

- `app/` contains App Router pages and global styling.
- `app/components/animations/` contains focused client-side motion utilities.
- `app/components/layout/` contains shared layout primitives such as `Container`.
- `app/components/sections/` contains reusable page sections.
- `app/components/ui/` contains smaller presentational components.
- `app/data/projects.ts` contains typed project facts shared across portfolio surfaces and case-study navigation.
- `app/work/` contains case-study routes.
- `public/work/` contains optimized portfolio imagery.

Pages and layouts remain Server Components unless browser APIs, state, or event handling require a narrow Client Component boundary.

## Current Routes

- `/` — flagship marketing homepage
- `/about` — firm story, positioning, principal-led model, and working principles
- `/services` — detailed capabilities, deliverables, working model, process, and FAQ
- `/work` — editorial portfolio index
- `/work/lawn-fadez` — Lawn Fadez case study
- `/work/kuiken-group` — Kuiken Group case study
- `/login` — Supabase-authenticated portal entry and password recovery
- `/portal` — authenticated client dashboard
- `/portal/projects/[id]` — RLS-scoped project workspace
- `/portal/admin` — server-authorized administration

## Completed Milestones

- Milestone 1: homepage foundation, navigation, footer, and design system
- Milestone 2.1: editorial Featured Work and responsive device presentation
- Milestone 2.2: premium motion, realistic work imagery, cohesive About page, expanded case studies, accessibility polish, and brand-consistency documentation
- Milestone 3.0: editorial Work index, detailed Services page, typed shared project data, and a complete portfolio-to-conversation path
- Milestone 3.2: conversion-focused homepage trust narrative, standardized calls to action, verified project summaries, service FAQs, route-level SEO, sitemap and robots controls, accessibility improvements, and performance cleanup
- Milestone 4.0: shared premium motion system, reusable editorial case-study patterns, refined route transitions, richer galleries, sticky project context, and site-wide interaction consistency
- Milestone 5: Supabase-authenticated client portal, role-based access, normalized project data, private storage policies, admin controls, and secure legacy-route migration

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

Use the version-specific guidance in `node_modules/next/dist/docs/` before changing Next.js APIs or conventions.
