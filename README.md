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

- Worker name: `kuiken-site`
- Worker entry: `.open-next/worker.js`
- Static assets: `.open-next/assets`
- Compatibility date: `2026-07-23`
- Required compatibility flag: `nodejs_compat`
- Additional current OpenNext flag: `global_fetch_strictly_public`

### Contact form and Resend

Project inquiries are validated on the server and delivered through Resend. Copy
`.env.example` to `.env.local` for local Next.js development and replace every
placeholder. Never commit the completed file.

| Variable | Purpose | Production value |
| --- | --- | --- |
| `RESEND_API_KEY` | Server-only Resend credential | API key created in Resend |
| `CONTACT_TO_EMAIL` | Inquiry destination | `brady@kuikengroup.com` |
| `CONTACT_FROM_EMAIL` | Verified sender | `website@kuikengroup.com` |

None of these variables may use the `NEXT_PUBLIC_` prefix.

To configure the production Worker from the repository root:

```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put CONTACT_TO_EMAIL
npx wrangler secret put CONTACT_FROM_EMAIL
```

The same values can be added in **Cloudflare Dashboard → Workers & Pages →
kuiken-site → Settings → Variables and Secrets** as encrypted secrets. These
are runtime secrets, not Workers Builds variables.

#### Resend setup

1. Create a Resend account, open **API Keys**, and create a key with sending
   access. Store it only in `RESEND_API_KEY`.
2. In **Domains**, add `kuikengroup.com`.
3. Add the exact DNS records Resend displays for the domain. Resend requires
   DKIM and SPF; its SPF setup includes the generated TXT and MX records. The
   names and values are account-specific, so copy them from Resend rather than
   using example values. Add a DMARC record if the domain does not already have
   one.
4. Wait for Resend to show the domain as verified before using
   `website@kuikengroup.com` as `CONTACT_FROM_EMAIL`.

If the preferred sender is not ready, set `CONTACT_FROM_EMAIL` to another
address on a domain already verified in the same Resend account. No code change
is required.

#### Test contact delivery

For a successful test, configure valid local values, run `npm run dev`, submit
all required fields at `/contact`, and confirm that the browser reaches
`/contact/success`, the message appears in Resend's email log, and the inquiry
arrives at the configured destination. Replying to that message should address
the visitor because the form sets `Reply-To` to the submitted email.

For a safe failure test, use an invalid `RESEND_API_KEY` in `.env.local` only,
restart the local server, and submit the form. The form must remain on
`/contact`, preserve every entered value, and show the inline delivery error.
Restore the valid key after testing. Never test failure by changing a production
secret.

The form includes a honeypot, strict server-side validation, and best-effort
per-instance request throttling. Cloudflare Turnstile is not required for the
current design; it can be added later if production traffic shows the need for
a distributed challenge.

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

The deploy command must not be `npx wrangler deploy`. OpenNext's deploy phase
expects the compiled configuration generated by `npm run cf-build`. Using the
dashboard's default Wrangler command without an OpenNext build produces:

```text
Could not find compiled Open Next config, did you run the build command?
```

If that error appears, update the Workers Builds settings above and trigger a
new deployment with a cleared build cache. `npm run deploy` is intentionally
self-contained and rebuilds the OpenNext output before deploying it.

Generated `.next`, `.open-next`, `.wrangler`, and `node_modules` directories are intentionally ignored and must not be committed.

## Supabase client portal

The `/portal` application uses Supabase Auth, Postgres, and a private Storage
bucket. Apply `supabase/migrations/20260730000000_client_portal.sql` in the
Supabase SQL editor or with the Supabase CLI before enabling portal access.
The migration creates the normalized schema, indexes, trigger, RLS policies,
private helper functions, and `project-files` bucket.

Required variables:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
SUPABASE_SERVICE_ROLE_KEY
PORTAL_MAX_UPLOAD_BYTES
PORTAL_SITE_URL
```

The URL and publishable key are intentionally browser-readable and are secured
by RLS. `SUPABASE_SERVICE_ROLE_KEY` is server-only and is used exclusively for
Supabase Auth administration; never prefix it with `NEXT_PUBLIC_`.

Setup:

1. Create a Supabase project and run the migration.
2. In Auth URL Configuration, set the production site URL to
   `https://kuikengroup.com` and allow
   `https://kuikengroup.com/auth/callback`.
3. Configure SMTP and update the invitation/recovery templates to return to the
   callback URL. Enable email/password authentication.
4. Create Brady's Auth user, then set the corresponding `profiles.role` to
   `ADMIN` in the SQL editor. All later clients can be invited from
   `/portal/admin`.
5. Add the four variables above to `.env.local` for development. In Cloudflare,
   add all four under **Worker → Settings → Variables and Secrets**; store the
   service-role key as an encrypted secret.
6. Keep `project-files` private. Its 50 MB migration default must not exceed the
   Supabase global Storage limit. Keep `PORTAL_MAX_UPLOAD_BYTES` aligned with
   the bucket limit.

Security verification should use two client accounts assigned to different
projects. Confirm each account can see only its assigned rows and Storage
paths, cannot open `/portal/admin`, and receives a redirect when signed out.
Also verify admin invitation, disable/enable, password recovery, project
assignment, and logout before production launch.

The portal currently uses `middleware.ts` only for Supabase cookie refresh and
early redirects. Next.js 16 labels that filename deprecated in favor of
`proxy.ts`, but OpenNext does not yet support Node middleware. The
adapter-compatible middleware is therefore intentional; every protected page
and mutation also performs server-side authorization, and RLS remains the
authoritative data boundary.
