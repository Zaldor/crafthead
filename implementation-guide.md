# ASTRO AI AGENT - IMPLEMENTATION GUIDE & EXAMPLES
## Companion Document to the System Prompt

---

## 🎯 HOW TO USE THIS SYSTEM PROMPT

### For AI Model Trainers / Fine-Tuners
1. Use the main system prompt as the **core system message**
2. This implementation guide provides **reference examples** for training data
3. Combine both documents for comprehensive agent behavior

### For Prompt Engineers Using Existing Models
1. Load the main system prompt into your AI agent's system/context window
2. Reference this guide for specific implementation patterns
3. Start conversations with `/discovery` command

### For Developers Building AI Coding Tools
1. Use main prompt as agent instructions
2. Implement the `/commands` as callable functions
3. Store design tokens and templates from this guide in your codebase


- For multilingual projects, always instruct the agent to:
  - Enable Astro i18n routing.
  - Use suffix-based content files (`slugBase.locale.mdx`).
  - Add language switcher + hreflang SEO.


---

## 🚀 QUICK START SCENARIOS

### Scenario 1: Simple Blog
**User:** "I want to create a personal blog about web development"

**Expected Agent Flow:**
```
Agent: Hello! I'm ASTRO ARCHITECT, your expert AI coding agent specialized in building high-performance websites with Astro and modern web technologies.

I'd love to help you create your web development blog! Let me gather some information to build exactly what you need.

## 📋 Discovery Questions (Part 1/3)

**Content & Audience:**
1. Do you have blog posts ready to migrate, or will we start with placeholder content?
2. Will you be the only author, or will there be multiple contributors?
3. How often do you plan to publish? (Daily/Weekly/Monthly)

**Design & Feel:**
4. Do you have design preferences or sites you admire? (Please share URLs if any)
5. What's your preferred aesthetic? (Options: Minimal & Clean, Bold & Colorful, Technical & Code-focused, Professional, Creative)

Please answer these questions, and I'll follow up with technical details.
```

**After User Responds:**
```
Agent: Great! Based on your answers, here's the architecture I recommend:

## 🏗️ PROJECT ARCHITECTURE PROPOSAL

### Site Structure
- **Homepage**: Featured posts, recent articles, about section
- **Blog Index**: Paginated list of all posts with filters by category/tag
- **Blog Post Template**: Full MDX support for code examples, images, embeds
- **About Page**: Your bio, social links, contact form
- **RSS Feed**: Automatic generation for subscribers

### Technical Stack
- **Framework**: Astro 6.x (SSG for blog posts, SSR for search)
- **CMS**: Decap CMS (Git-based, perfect for solo developer workflow)
- **Styling**: Tailwind CSS + Custom design tokens
- **Deployment**: Cloudflare Pages (free tier, global CDN)
- **Analytics**: Plausible (privacy-focused, optional)

### Content Collections
1. **Blog Posts**: MDX files with frontmatter (title, date, excerpt, tags, category)
2. **Authors**: JSON files (in case you add guest authors later)

### Features Included
✅ Syntax highlighting for code blocks
✅ Reading time estimation
✅ Tag and category filtering
✅ Search functionality (Pagefind)
✅ Dark mode support
✅ SEO optimized (Open Graph, Twitter Cards, Schema.org)
✅ RSS feed
✅ Newsletter signup form
✅ Share buttons

### Performance Targets
- Lighthouse Score: 98-100
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s

**Does this structure work for you? Any changes or additions?**
```

---

### Scenario 2: Agency Portfolio
**User:** "Create a portfolio site for my design agency"

**Expected Agent Flow:**
```
Agent: Perfect! A design agency portfolio needs to showcase your work beautifully while being blazingly fast. Let me understand your needs.

## 📋 Discovery Questions (Part 1/3)

**Projects & Work:**
1. How many projects do you want to showcase initially? (Approximate number)
2. For each project, what information do you want to display? (e.g., client name, year, services provided, images, case study, testimonials)
3. Do you want projects organized by category/service type?

**Services & Team:**
4. Do you want a dedicated Services page describing what you offer?
5. Do you have a team page showcasing your designers/developers?

**Lead Generation:**
6. What's your primary conversion goal? (Contact form, Schedule consultation, Download portfolio PDF, etc.)

I'll ask about design preferences and technical needs in the next round.
```

---

### Scenario 3: Documentation Site
**User:** "I need documentation for my open-source library"

**Expected Agent Flow:**
```
Agent: Excellent! Documentation sites require excellent organization, search, and developer experience. Let's build something that makes your library easy to learn.

## 📋 Discovery Questions (Part 1/2)

**Documentation Structure:**
1. What are the main sections? (e.g., Getting Started, API Reference, Guides, Examples, FAQ)
2. Do you need version switching? (Multiple versions of docs for different library versions)
3. Will documentation be in multiple languages?

**Technical Context:**
4. Is your library for JavaScript/TypeScript, Python, another language?
5. Do you need interactive code examples or live playgrounds?
6. Do you want automatic API documentation generation from code comments?

**Existing Content:**
7. Do you have existing markdown files, or are we starting fresh?

Let me know, and I'll propose the perfect documentation architecture!
```

---

### Scenario 4: Bilingual Marketing Site (en + it, suffix-based)

User: "I need my site in English and Italian, with a language switcher and SEO-friendly URLs."

Expected agent flow:
1. Ask:
   - Do you need multiple languages? → Yes.
   - Which locales? → ["en","it"].
   - Should default language use URL prefix? → No ("/" is English, "/it" is Italian).
   - Use suffix-based files? → Yes (`about.en.mdx`, `about.it.mdx`).
2. Configure `astro.config.mjs` with `i18n` block (defaultLocale "en", locales ["en","it"], `prefixDefaultLocale: false`). [web:72]
3. Define content collections with `locale` and `slugBase`.
4. Generate sibling content files for each page.
5. Implement `<LanguageSwitcher />` in the header.
6. Add hreflang tags in `<head>` for both locales.
7. Configure Decap CMS to use `slug: '{{slugBase}}.{{locale}}'`.


## 🎨 COMPLETE DESIGN TOKEN EXAMPLES

### Example 1: SaaS Product Design System

```css
/* Design Tokens - SaaS Product Theme */
:root {
  /* Brand Colors */
  --color-brand-50: #f0f9ff;
  --color-brand-100: #e0f2fe;
  --color-brand-500: #0ea5e9;
  --color-brand-600: #0284c7;
  --color-brand-700: #0369a1;
  --color-brand-900: #0c4a6e;
  
  /* Semantic Tokens */
  --color-primary: var(--color-brand-500);
  --color-primary-hover: var(--color-brand-600);
  --color-primary-active: var(--color-brand-700);
  
  /* Product-Specific Tokens */
  --sidebar-width: 16rem;
  --header-height: 4rem;
  --content-max-width: 1280px;
  
  /* Component Tokens */
  --dashboard-card-padding: var(--space-6);
  --dashboard-card-radius: var(--border-radius-lg);
  --dashboard-card-shadow: var(--shadow-lg);
  
  /* Status Colors */
  --status-active: var(--color-green-500);
  --status-pending: var(--color-amber-500);
  --status-inactive: var(--color-gray-400);
  --status-error: var(--color-red-500);
}
```

### Example 2: Creative Agency Design System

```css
/* Design Tokens - Creative Agency Theme */
:root {
  /* Bold Brand Palette */
  --color-electric-blue: #0066FF;
  --color-neon-pink: #FF006E;
  --color-cyber-yellow: #FFBE0B;
  --color-deep-purple: #3A0CA3;
  
  /* Large, Bold Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  
  --font-size-hero: 4.5rem;      /* 72px */
  --font-size-heading: 3rem;     /* 48px */
  --font-size-subheading: 2rem;  /* 32px */
  
  /* Generous Spacing */
  --space-section: 8rem;  /* 128px */
  --space-element: 4rem;  /* 64px */
  
  /* Agency-Specific */
  --project-card-aspect: 16/10;
  --hero-min-height: 90vh;
  --transition-page: 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Example 3: Technical Blog Design System

```css
/* Design Tokens - Technical Blog Theme */
:root {
  /* Monochromatic with Accent */
  --color-slate-50: #f8fafc;
  --color-slate-900: #0f172a;
  --color-accent: #8b5cf6;  /* Purple accent for links/highlights */
  
  /* Typography - Optimized for Reading */
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --font-heading: 'Cal Sans', sans-serif;
  
  --line-height-prose: 1.75;
  --prose-max-width: 65ch;
  
  /* Code Block Styling */
  --code-bg: var(--color-slate-900);
  --code-padding: var(--space-6);
  --code-radius: var(--border-radius-lg);
  --code-line-height: 1.6;
  
  /* Blog-Specific */
  --article-header-spacing: var(--space-12);
  --table-of-contents-width: 16rem;
}
```
### Scenario 4: Bilingual Marketing Site (en + it, suffix-based)

User: "I need my site in English and Italian, with a language switcher and SEO-friendly URLs."

Expected agent flow:
1. Ask:
   - Do you need multiple languages? → Yes.
   - Which locales? → ["en","it"].
   - Should default language use URL prefix? → No ("/" is English, "/it" is Italian).
   - Use suffix-based files? → Yes (`about.en.mdx`, `about.it.mdx`).
2. Configure `astro.config.mjs` with `i18n` block (defaultLocale "en", locales ["en","it"], `prefixDefaultLocale: false`). [web:72]
3. Define content collections with `locale` and `slugBase`.
4. Generate sibling content files for each page.
5. Implement `<LanguageSwitcher />` in the header.
6. Add hreflang tags in `<head>` for both locales.
7. Configure Decap CMS to use `slug: '{{slugBase}}.{{locale}}'`.

## Examples
---
// src/content/pages/about.en.mdx
---
title: "About us"
description: "We build modern web experiences."
locale: "en"
slugBase: "about"
---

Welcome to our studio. We help companies ship fast, accessible websites with Astro.

// src/content/pages/about.it.mdx
---
title: "Chi siamo"
description: "Creiamo esperienze web moderne."
locale: "it"
slugBase: "about"
---

Benvenuto nel nostro studio. Aiutiamo le aziende a realizzare siti veloci e accessibili con Astro.

## Route example 
```typescript
// src/pages/[...slug].astro
---
import { getCollection } from 'astro:content';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, getLocalizedUrl } from '@/utils/i18n';

const pages = await getCollection('pages');

export async function getStaticPaths() {
  return pages.map((entry) => {
    const { locale, slugBase } = entry.data as any;
    const isDefault = locale === DEFAULT_LOCALE;

    return {
      params: {
        slug: isDefault ? [slugBase] : [locale, slugBase],
      },
      props: { entry },
    };
  });
}

const { entry } = Astro.props;
const { Content } = await entry.render();
const { locale, slugBase } = entry.data as any;
---

<html lang={locale}>
  <head>
    <!-- hreflang using helpers -->
    {SUPPORTED_LOCALES.map((loc) => (
      <link
        rel="alternate"
        hreflang={loc}
        href={getLocalizedUrl(slugBase, loc)}
      />
    ))}
    <link
      rel="alternate"
      hreflang="x-default"
      href={getLocalizedUrl(slugBase, DEFAULT_LOCALE)}
    />
  </head>
  <body>
    <LanguageSwitcher slugBase={slugBase} currentLocale={locale} />
    <Content />
  </body>
</html>


```

## 🏗️ COMPLETE COMPONENT LIBRARY EXAMPLES

### Atom: Badge Component

```typescript
// src/components/atoms/Badge.astro
---
/**
 * @fileoverview Badge atom component
 * Displays status, category, or tag information in a compact pill format
 * 
 * @example
 * <Badge variant="success">Published</Badge>
 * <Badge variant="warning" size="sm">Draft</Badge>
 */

interface Props {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  outlined?: boolean;
}

const {
  variant = 'default',
  size = 'md',
  rounded = false,
  outlined = false,
} = Astro.props;
---

<span
  class={`badge badge--${variant} badge--${size}`}
  class:list={[
    { 'badge--rounded': rounded },
    { 'badge--outlined': outlined },
  ]}
>
  <slot />
</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    font-weight: var(--font-weight-medium);
    border-radius: var(--border-radius-md);
    white-space: nowrap;
  }
  
  /* Sizes */
  .badge--sm {
    padding: var(--space-1) var(--space-2);
    font-size: var(--font-size-xs);
  }
  
  .badge--md {
    padding: var(--space-1) var(--space-3);
    font-size: var(--font-size-sm);
  }
  
  .badge--lg {
    padding: var(--space-2) var(--space-4);
    font-size: var(--font-size-base);
  }
  
  /* Variants - Filled */
  .badge--default {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }
  
  .badge--primary {
    background: var(--interactive-primary);
    color: white;
  }
  
  .badge--success {
    background: rgba(var(--color-success-rgb), var(--status-bg-opacity));
    color: var(--feedback-success);
    border: 1px solid rgba(var(--color-success-rgb), var(--status-border-opacity));
  }
  
  .badge--warning {
    background: rgba(var(--color-warning-rgb), var(--status-bg-opacity));
    color: var(--feedback-warning);
    border: 1px solid rgba(var(--color-warning-rgb), var(--status-border-opacity));
  }
  
  .badge--error {
    background: rgba(var(--color-error-rgb), var(--status-bg-opacity));
    color: var(--feedback-error);
    border: 1px solid rgba(var(--color-error-rgb), var(--status-border-opacity));
  }
  
  .badge--info {
    background: rgba(var(--color-info-rgb), var(--status-bg-opacity));
    color: var(--feedback-info);
    border: 1px solid rgba(var(--color-info-rgb), var(--status-border-opacity));
  }
  
  /* Modifiers */
  .badge--rounded {
    border-radius: var(--border-radius-full);
  }
  
  .badge--outlined {
    background: transparent !important;
    border: 1px solid currentColor;
  }
</style>
```

### Molecule: Search Bar Component

```typescript
// src/components/molecules/SearchBar.astro
---
/**
 * @fileoverview Search bar molecule
 * Combines input field with search icon and optional clear button
 * 
 * @example
 * <SearchBar
 *   placeholder="Search articles..."
 *   onSearch={(query) => console.log(query)}
 * />
 */

interface Props {
  placeholder?: string;
  value?: string;
  name?: string;
  id?: string;
  ariaLabel?: string;
  showClearButton?: boolean;
}

const {
  placeholder = 'Search...',
  value = '',
  name = 'search',
  id = 'search-input',
  ariaLabel = 'Search',
  showClearButton = true,
} = Astro.props;
---

<div class="search-bar">
  <svg class="search-bar__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
  <input
    type="search"
    {id}
    {name}
    class="search-bar__input"
    {placeholder}
    {value}
    aria-label={ariaLabel}
    autocomplete="off"
    spellcheck="false"
  />
  
  {showClearButton && (
    <button
      type="button"
      class="search-bar__clear"
      aria-label="Clear search"
      data-clear-search
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
  )}
</div>

<script>
  // Clear button functionality
  document.querySelectorAll('[data-clear-search]').forEach(button => {
    button.addEventListener('click', () => {
      const searchBar = button.closest('.search-bar');
      const input = searchBar?.querySelector('input') as HTMLInputElement;
      if (input) {
        input.value = '';
        input.focus();
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });
  });
  
  // Hide clear button when input is empty
  document.querySelectorAll('.search-bar__input').forEach(input => {
    const updateClearButton = () => {
      const clearButton = input.parentElement?.querySelector('.search-bar__clear') as HTMLElement;
      if (clearButton) {
        clearButton.style.display = (input as HTMLInputElement).value ? 'flex' : 'none';
      }
    };
    
    input.addEventListener('input', updateClearButton);
    updateClearButton(); // Initial state
  });
</script>

<style>
  .search-bar {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 32rem;
  }
  
  .search-bar__icon {
    position: absolute;
    left: var(--space-3);
    color: var(--text-secondary);
    pointer-events: none;
  }
  
  .search-bar__input {
    width: 100%;
    padding: var(--space-2) var(--space-12) var(--space-2) var(--space-10);
    font-size: var(--font-size-base);
    color: var(--text-primary);
    background: var(--bg-elevated);
    border: 1px solid var(--border-default);
    border-radius: var(--border-radius-lg);
    transition: border-color var(--transition-fast);
  }
  
  .search-bar__input:focus {
    outline: none;
    border-color: var(--border-focus);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
  }
  
  .search-bar__input::placeholder {
    color: var(--text-muted);
  }
  
  /* Remove default search input styling */
  .search-bar__input::-webkit-search-cancel-button {
    display: none;
  }
  
  .search-bar__clear {
    position: absolute;
    right: var(--space-2);
    display: none;
    align-items: center;
    justify-content: center;
    padding: var(--space-2);
    color: var(--text-secondary);
    background: transparent;
    border: none;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    transition: background var(--transition-fast);
  }
  
  .search-bar__clear:hover {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }
  
  .search-bar__clear:focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }
</style>
```

### Organism: Blog Post Card

```typescript
// src/components/organisms/BlogPostCard.astro
---
/**
 * @fileoverview Blog post card organism
 * Displays blog post preview with image, metadata, and excerpt
 * 
 * @example
 * <BlogPostCard
 *   title="Introduction to Astro"
 *   excerpt="Learn how to build fast websites with Astro"
 *   slug="intro-to-astro"
 *   publishDate={new Date('2024-01-15')}
 *   author="Jane Doe"
 *   category="Tutorial"
 *   tags={['Astro', 'Web Development']}
 *   readingTime="5 min read"
 *   heroImage="/images/astro-hero.jpg"
 * />
 */

import { Image } from 'astro:assets';
import Badge from '../atoms/Badge.astro';

interface Props {
  title: string;
  excerpt: string;
  slug: string;
  publishDate: Date;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  heroImage: string;
  featured?: boolean;
}

const {
  title,
  excerpt,
  slug,
  publishDate,
  author,
  category,
  tags,
  readingTime,
  heroImage,
  featured = false,
} = Astro.props;

const formattedDate = publishDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
---

<article class="blog-card" class:list={{ 'blog-card--featured': featured }}>
  <a href={`/blog/${slug}`} class="blog-card__link" aria-label={`Read article: ${title}`}>
    <div class="blog-card__image-wrapper">
      <img
        src={heroImage}
        alt=""
        class="blog-card__image"
        loading="lazy"
        width="600"
        height="400"
      />
      {featured && (
        <div class="blog-card__featured-badge">
          <Badge variant="primary">Featured</Badge>
        </div>
      )}
    </div>
    
    <div class="blog-card__content">
      <div class="blog-card__meta">
        <Badge variant="default">{category}</Badge>
        <span class="blog-card__divider">·</span>
        <time datetime={publishDate.toISOString()} class="blog-card__date">
          {formattedDate}
        </time>
      </div>
      
      <h3 class="blog-card__title">{title}</h3>
      
      <p class="blog-card__excerpt">{excerpt}</p>
      
      <div class="blog-card__tags">
        {tags.slice(0, 3).map(tag => (
          <span class="blog-card__tag">#{tag}</span>
        ))}
      </div>
      
      <div class="blog-card__footer">
        <span class="blog-card__author">{author}</span>
        <span class="blog-card__divider">·</span>
        <span class="blog-card__reading-time">{readingTime}</span>
      </div>
    </div>
  </a>
</article>

<style>
  .blog-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--bg-elevated);
    border: 1px solid var(--border-default);
    border-radius: var(--border-radius-xl);
    overflow: hidden;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  }
  
  .blog-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
  
  .blog-card--featured {
    border: 2px solid var(--interactive-primary);
  }
  
  .blog-card__link {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
  
  .blog-card__image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--bg-secondary);
  }
  
  .blog-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }
  
  .blog-card:hover .blog-card__image {
    transform: scale(1.05);
  }
  
  .blog-card__featured-badge {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
  }
  
  .blog-card__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-6);
    flex: 1;
  }
  
  .blog-card__meta {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
  }
  
  .blog-card__divider {
    color: var(--text-muted);
  }
  
  .blog-card__date {
    font-size: var(--font-size-sm);
  }
  
  .blog-card__title {
    margin: 0;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
    color: var(--text-primary);
  }
  
  .blog-card__excerpt {
    margin: 0;
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
    color: var(--text-secondary);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .blog-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  
  .blog-card__tag {
    font-size: var(--font-size-sm);
    color: var(--text-link);
    font-weight: var(--font-weight-medium);
  }
  
  .blog-card__footer {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-top: auto;
    padding-top: var(--space-4);
    border-top: 1px solid var(--border-default);
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
  }
  
  .blog-card__author {
    font-weight: var(--font-weight-medium);
  }
  
  .blog-card__reading-time {
    color: var(--text-muted);
  }
</style>
```

---

## 📦 COMPLETE PAGE EXAMPLES

### Example: Blog Index Page

```typescript
// src/pages/blog/index.astro
---
/**
 * Blog index page with filtering, search, and pagination
 */

import { getCollection } from 'astro:content';
import Layout from '@/layouts/Layout.astro';
import BlogPostCard from '@/components/organisms/BlogPostCard.astro';
import SearchBar from '@/components/molecules/SearchBar.astro';
import Badge from '@/components/atoms/Badge.astro';
import { getReadingTime } from '@/utils/dates';

// Get all published blog posts
const allPosts = await getCollection('blog', ({ data }) => !data.draft);

// Sort by publish date (newest first)
const posts = allPosts.sort(
  (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
);

// Get unique categories for filter
const categories = [...new Set(posts.map(post => post.data.category))];

// Get featured posts
const featuredPosts = posts.filter(post => post.data.featured);

// SEO
const seoTitle = 'Blog | Your Site Name';
const seoDescription = 'Read our latest articles on web development, design, and technology.';
---

<Layout title={seoTitle} description={seoDescription}>
  <main class="blog-index">
    <div class="container">
      <!-- Header -->
      <header class="blog-index__header">
        <h1 class="blog-index__title">Blog</h1>
        <p class="blog-index__description">
          Thoughts on web development, design, and everything in between.
        </p>
      </header>

      <!-- Search and Filters -->
      <div class="blog-index__filters">
        <SearchBar placeholder="Search articles..." id="blog-search" />
        
        <div class="blog-index__categories" role="group" aria-label="Filter by category">
          <button
            class="category-filter category-filter--active"
            data-category="all"
            type="button"
          >
            All Posts
          </button>
          {categories.map(category => (
            <button
              class="category-filter"
              data-category={category}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <!-- Featured Posts -->
      {featuredPosts.length > 0 && (
        <section class="blog-index__featured" aria-labelledby="featured-heading">
          <h2 id="featured-heading" class="blog-index__section-title">Featured Posts</h2>
          <div class="blog-grid blog-grid--featured">
            {featuredPosts.slice(0, 2).map(post => (
              <BlogPostCard
                title={post.data.title}
                excerpt={post.data.description}
                slug={post.slug}
                publishDate={post.data.publishDate}
                author={post.data.author}
                category={post.data.category}
                tags={post.data.tags}
                readingTime={getReadingTime(post.body)}
                heroImage={post.data.heroImage}
                featured
              />
            ))}
          </div>
        </section>
      )}

      <!-- All Posts -->
      <section class="blog-index__all-posts" aria-labelledby="all-posts-heading">
        <h2 id="all-posts-heading" class="blog-index__section-title">All Posts</h2>
        <div class="blog-grid" id="blog-posts-grid">
          {posts.map(post => (
            <BlogPostCard
              title={post.data.title}
              excerpt={post.data.description}
              slug={post.slug}
              publishDate={post.data.publishDate}
              author={post.data.author}
              category={post.data.category}
              tags={post.data.tags}
              readingTime={getReadingTime(post.body)}
              heroImage={post.data.heroImage}
            />
          ))}
        </div>
        
        <!-- No results message (hidden by default) -->
        <div class="blog-index__no-results" id="no-results" hidden>
          <p>No posts found matching your search.</p>
        </div>
      </section>
    </div>
  </main>
</Layout>

<script>
  // Client-side filtering logic
  const searchInput = document.getElementById('blog-search') as HTMLInputElement;
  const categoryButtons = document.querySelectorAll('.category-filter');
  const postsGrid = document.getElementById('blog-posts-grid');
  const noResults = document.getElementById('no-results');
  const allPosts = Array.from(postsGrid?.querySelectorAll('.blog-card') || []);

  let currentCategory = 'all';
  let currentSearch = '';

  function filterPosts() {
    let visibleCount = 0;

    allPosts.forEach(post => {
      const postElement = post as HTMLElement;
      const title = postElement.querySelector('.blog-card__title')?.textContent?.toLowerCase() || '';
      const excerpt = postElement.querySelector('.blog-card__excerpt')?.textContent?.toLowerCase() || '';
      const category = postElement.querySelector('[data-category]')?.textContent?.trim() || '';

      const matchesCategory = currentCategory === 'all' || category === currentCategory;
      const matchesSearch = !currentSearch ||
        title.includes(currentSearch) ||
        excerpt.includes(currentSearch);

      if (matchesCategory && matchesSearch) {
        postElement.removeAttribute('hidden');
        visibleCount++;
      } else {
        postElement.setAttribute('hidden', '');
      }
    });

    // Show/hide no results message
    if (noResults) {
      if (visibleCount === 0) {
        noResults.removeAttribute('hidden');
      } else {
        noResults.setAttribute('hidden', '');
      }
    }
  }

  // Search input handler
  searchInput?.addEventListener('input', (e) => {
    currentSearch = (e.target as HTMLInputElement).value.toLowerCase();
    filterPosts();
  });

  // Category filter handler
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      categoryButtons.forEach(btn => btn.classList.remove('category-filter--active'));
      button.classList.add('category-filter--active');

      currentCategory = button.getAttribute('data-category') || 'all';
      filterPosts();
    });
  });
</script>

<style>
  .blog-index {
    padding: var(--space-16) 0;
    min-height: 100vh;
  }

  .container {
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--space-6);
  }

  .blog-index__header {
    text-align: center;
    margin-bottom: var(--space-12);
  }

  .blog-index__title {
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--space-4);
  }

  .blog-index__description {
    font-size: var(--font-size-xl);
    color: var(--text-secondary);
    max-width: 48rem;
    margin: 0 auto;
  }

  .blog-index__filters {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    margin-bottom: var(--space-12);
    align-items: center;
  }

  .blog-index__categories {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    justify-content: center;
  }

  .category-filter {
    padding: var(--space-2) var(--space-4);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    background: var(--bg-secondary);
    color: var(--text-primary);
    border: 1px solid var(--border-default);
    border-radius: var(--border-radius-full);
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .category-filter:hover {
    background: var(--interactive-primary);
    color: white;
    border-color: var(--interactive-primary);
  }

  .category-filter--active {
    background: var(--interactive-primary);
    color: white;
    border-color: var(--interactive-primary);
  }

  .blog-index__section-title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-8);
  }

  .blog-index__featured {
    margin-bottom: var(--space-16);
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: var(--space-8);
  }

  .blog-grid--featured {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }

  .blog-index__no-results {
    text-align: center;
    padding: var(--space-16);
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .blog-grid,
    .blog-grid--featured {
      grid-template-columns: 1fr;
    }
  }
</style>
```

---

## 🎯 PROMPT ENGINEERING BEST PRACTICES SUMMARY

### 1. **Structured Discovery** (Always First)
- Never start coding without understanding requirements
- Ask 3-5 questions at a time
- Adapt questions based on responses
- Confirm understanding before proposing architecture

### 2. **Architecture Proposal** (Before Implementation)
- Present complete structure for approval
- Include rationale for technical decisions
- Show performance targets
- Get explicit user approval

### 3. **Incremental Generation** (Atomic Design Order)
- Design tokens first
- Atoms → Molecules → Organisms → Templates → Pages
- Request feedback after each major component
- Allow iteration and refinement

### 4. **Self-Documentation** (Always Included)
- File-level docblocks
- Function/component documentation
- Inline comments for complex logic
- Usage examples in comments

### 5. **Chain-of-Thought** (Show Reasoning)
- Explain architectural decisions
- Discuss trade-offs considered
- Highlight accessibility features
- Note performance optimizations

### 6. **Validation Loops** (Built-in Quality)
- Run mental checklists before output
- Offer self-critique and improvements
- Suggest optimizations proactively
- Request user feedback systematically

### 7. **Adaptive Communication** (Match User Level)
- Detect user expertise from questions
- Adjust technical depth accordingly
- Provide context for beginners
- Skip basics for experts

---

## 🚀 IMPLEMENTATION CHECKLIST FOR AI TRAINERS

If you're training/fine-tuning a model with this system prompt:

### Data Preparation
- [ ] Include diverse project types (blog, portfolio, docs, SaaS, e-commerce)
- [ ] Cover all atomic design levels (atoms through pages)
- [ ] Include accessibility examples (ARIA, keyboard nav, screen reader)
- [ ] Add performance optimization examples
- [ ] Include error handling patterns
- [ ] Cover SEO implementation examples

### Behavior Training
- [ ] Discovery question flows for 10+ project types
- [ ] Architecture proposal templates
- [ ] Component generation with full documentation
- [ ] Self-critique and improvement suggestions
- [ ] User feedback acknowledgment and iteration

### Knowledge Domains
- [ ] Astro 6.x features and API
- [ ] Decap CMS configuration
- [ ] Cloudflare Pages deployment
- [ ] Design token systems (W3C standard)
- [ ] Atomic design methodology
- [ ] WCAG 2.2 AA standards
- [ ] SEO best practices
- [ ] TypeScript patterns

### Quality Assurance
- [ ] Test with beginner, intermediate, and expert users
- [ ] Verify accessibility compliance in generated code
- [ ] Validate performance of generated sites
- [ ] Check SEO implementation completeness
- [ ] Test adaptive communication style

---

## 📚 ADDITIONAL RESOURCES

### Recommended Reading
1. **Atomic Design** by Brad Frost
2. **W3C Design Tokens** specification
3. **Astro Documentation** (docs.astro.build)
4. **WCAG 2.2 Guidelines** (w3.org/WAI/WCAG22)
5. **Web.dev** performance guides

### Tools to Integrate
- **Lighthouse CI** for performance monitoring
- **axe DevTools** for accessibility testing
- **Pagefind** for client-side search
- **Storybook** for component documentation
- **Playwright** for E2E testing

### Community Patterns
- **Astro Themes** showcase for inspiration
- **Tailwind UI** for component patterns
- **Radix UI** for accessible primitives
- **Cloudflare Workers** examples

---

**END OF IMPLEMENTATION GUIDE**

This companion document provides concrete examples and implementation guidance for the main Astro AI Agent system prompt. Use both together for comprehensive AI agent behavior.
