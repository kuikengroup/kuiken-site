# Kuiken Group Website

Production website for Kuiken Group, a principal-led premium marketing firm specializing in brand strategy, identity, web design and development, digital marketing, lead generation, and creative direction.

See [PROJECT.md](./PROJECT.md), [ROADMAP.md](./ROADMAP.md), and [STYLEGUIDE.md](./STYLEGUIDE.md) before making material product or design changes.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Validation

Before shipping changes:

```bash
npm run lint
npm run build
```

This project uses Next.js 16. Read the relevant local guide in `node_modules/next/dist/docs/` before changing framework APIs or conventions.

## Cloudflare Workers deployment

This application is deployed as a Cloudflare Worker through the official `@opennextjs/cloudflare` adapter. It is not configured as a static Cloudflare Pages export.

### Requirements

- Node.js `22.12.0` or a newer compatible Node 22 release
- npm
- A Cloudflare account with Workers enabled

Install dependencies:

```bash
npm install
```

Run the normal Next.js development server:

```bash
npm run dev
```

Build and preview the application in the local Cloudflare `workerd` runtime:

```bash
npm run preview
```

Build the OpenNext Worker without deploying:

```bash
npm run cf-build
```

Deploy the Worker:

```bash
npm run deploy
```

The Worker configuration is in `wrangler.jsonc`. It uses:

- Worker name: `kuiken-group`
- Worker entry: `.open-next/worker.js`
- Static assets: `.open-next/assets`
- Compatibility date: `2026-07-23`
- Required compatibility flag: `nodejs_compat`
- Additional current OpenNext flag: `global_fetch_strictly_public`

### Environment variables

The application currently references no runtime or build-time environment variables. No application variables or secrets need to be configured in Cloudflare.

Do not create `NEXT_PUBLIC_` variables for secrets. If server-side secrets are introduced later, configure them as encrypted Worker secrets or Cloudflare dashboard secrets and document them here.

CLI deployment requires Cloudflare authentication through `wrangler login` or appropriately scoped CI credentials such as `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. These are deployment credentials, not application runtime variables.

### Cloudflare dashboard settings

Configure the connected Workers repository with these exact settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run cf-build` |
| Deploy command | `npm run deploy` |
| Root directory | Repository root |
| Node.js version | `22.12.0` |

Do not select a static Next.js Pages preset and do not add `output: "export"` to `next.config.ts`.

Generated `.next`, `.open-next`, `.wrangler`, and `node_modules` directories are intentionally ignored and must not be committed.
