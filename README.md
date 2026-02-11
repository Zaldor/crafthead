# Crafthead Studio Website

Astro-powered marketing and portfolio site for Crafthead, a strategic design agency. The stack prioritises speed, accessibility, and editorial control via Decap CMS.

## Tech Stack

- [Astro](https://astro.build/) with static output
- Decap CMS for git-based content management
- Tailwind integration (utility support) with custom design tokens
- TypeScript + Zod content schemas
- Cloudflare Pages for hosting (default)
- Google Tag Manager for analytics (optional)

## Getting Started

```bash
npm install
npm run dev
```

### Environment Variables

Duplicate `.env.example` to `.env` and update values:

- `PUBLIC_SITE_URL` – canonical site URL (defaults to production domain)
- `PUBLIC_GTM_ID` – Google Tag Manager container ID (optional)
- `CONTACT_EMAIL` – where contact form submissions should be delivered
- `RESEND_API_KEY` – API key for Resend email delivery (optional during local dev)

## Content Model Overview

Content lives in `src/content` and is validated with `src/content/config.ts`:

- `pages` – marketing page copy, hero data, section blocks
- `projects` – case studies with key results, narrative sections, galleries
- `clients` – supporting data for logo showcases
- `testimonials` – client praise linked to projects via `projectSlugBase`

All content files follow the suffix-based i18n pattern (`slugBase.locale.mdx`) to simplify localisation when Italian is added.

## CMS

Decap CMS is preconfigured under `/admin` with editorial workflow enabled. Update `public/admin/config.yml` with your Uploadcare or preferred media library credentials.

## Deployment

GitHub Actions workflow `.github/workflows/deploy.yml` ships the site to Cloudflare Pages after linting, type-checking, testing, and building.

## Accessibility & Performance

- Design tokens ensure accessible colour contrast and consistent spacing
- Components follow atomic design (atoms → molecules → organisms → templates)
- Contact form includes aria-live status messaging and progressive enhancement
- Base layout injects canonical, hreflang, and OG/Twitter metadata by default

## Next Steps

- Replace placeholder imagery in `public/images` with production assets
- Populate Decap CMS content collections with real copy and case studies
- Configure environment secrets for deployment and email handling
- Add Italian translations by duplicating content files with `.it.mdx` suffix
