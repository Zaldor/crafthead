# CMS setup (Decap CMS + GitHub backend + Cloudflare Pages)

This project uses **Decap CMS** served from [`public/admin/index.html`](public/admin/index.html:1) and configured by [`public/admin/config.yml`](public/admin/config.yml:1).

## Cloudflare Pages configuration

## Recommended deployment approach

Use **Cloudflare Pages Git integration** (no custom deploy command).

- Build command: `npm run build`
- Build output directory: `dist`
- Deploy command: **none**

If your Pages UI requires a deploy command, you’re effectively using a Direct Upload flow.
In that case you must provide Cloudflare API credentials and use Wrangler’s Pages deploy
command (see “Direct upload alternative” below).

### Environment variables / secrets

Add these in your **Cloudflare Worker/Pages environment variables** for the deployed host.

#### Required (CMS OAuth)

- `GITHUB_CLIENT_ID` — from your GitHub OAuth App
- `GITHUB_CLIENT_SECRET` — from your GitHub OAuth App

These are read by the Pages Functions endpoints:
- [`GET /api/cms-oauth/auth`](functions/api/cms-oauth/auth.js:1)
- [`GET /api/cms-oauth/callback`](functions/api/cms-oauth/callback.js:1)

#### Recommended (site config)

- `PUBLIC_SITE_URL` = `https://crafthead-studio.pages.dev`

Optional:
- `PUBLIC_GTM_ID`
- `CONTACT_EMAIL`
- `RESEND_API_KEY`

### GitHub OAuth App settings

Create a GitHub OAuth App (GitHub → Settings → Developer settings → OAuth Apps).

Set:
- **Homepage URL**: `https://site0.crafthead.workers.dev`
- **Authorization callback URL**: `https://site0.crafthead.workers.dev/api/cms-oauth/callback`

Copy the generated **Client ID** + **Client secret** into Cloudflare Pages env vars.

## Accessing the CMS

- URL: `https://site0.crafthead.workers.dev/admin`
- The `/admin` route is provided by [`src/pages/admin.astro`](src/pages/admin.astro:1).

## Notes

- The Decap config is already set to GitHub backend + OAuth proxy:
  - `repo: Zaldor/crafthead`
  - `base_url: https://crafthead-studio.pages.dev`
  - `auth_endpoint: api/cms-oauth/auth`
  See [`public/admin/config.yml`](public/admin/config.yml:1).
- Your GitHub user must have write access to `Zaldor/crafthead` for editing/publishing.

## Direct upload alternative (only if deploy command is required)

If you must use a deploy command in Pages:

1) Set deploy command to:
`npx wrangler pages deploy dist --project-name crafthead-studio`

2) Add Cloudflare credentials as env vars:
- `CLOUDFLARE_API_TOKEN` (API token with Pages permissions)
- `CLOUDFLARE_ACCOUNT_ID`

Without these, Wrangler will fail with API auth errors.
