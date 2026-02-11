import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://crafthead.studio',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark-dimmed',
      },
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
    build: {
      cssMinify: 'lightningcss',
    },
  },
  image: {
    domains: ['images.unsplash.com'],
  },});
