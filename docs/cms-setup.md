# CMS setup (Decap CMS + GitHub backend + Cloudflare Pages)

This project uses **Decap CMS** served from [`public/admin/index.html`](public/admin/index.html:1) and configured by [`public/admin/config.yml`](public/admin/config.yml:1).

## Cloudflare Pages configuration

### Environment variables / secrets

Add these in **Cloudflare Dashboard → Pages → crafthead-studio → Settings → Environment variables**.

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
- **Homepage URL**: `https://crafthead-studio.pages.dev`
- **Authorization callback URL**: `https://crafthead-studio.pages.dev/api/cms-oauth/callback`

Copy the generated **Client ID** + **Client secret** into Cloudflare Pages env vars.

## Accessing the CMS

- URL: `https://crafthead-studio.pages.dev/admin`
- The `/admin` route is provided by [`src/pages/admin.astro`](src/pages/admin.astro:1).

## Notes

- The Decap config is already set to GitHub backend + OAuth proxy:
  - `repo: Zaldor/crafthead`
  - `base_url: https://crafthead-studio.pages.dev`
  - `auth_endpoint: api/cms-oauth/auth`
  See [`public/admin/config.yml`](public/admin/config.yml:1).
- Your GitHub user must have write access to `Zaldor/crafthead` for editing/publishing.

