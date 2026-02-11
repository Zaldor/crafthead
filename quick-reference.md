# ASTRO AI AGENT - QUICK REFERENCE CARD
## One-Page Cheat Sheet for Using the System Prompt

---

## 🎯 WHAT YOU'VE BUILT

An **elite AI coding agent** that transforms vague ideas into production-ready Astro websites through:
- ✅ Systematic discovery (no guesswork)
- ✅ Thoughtful architecture (performance-first)
- ✅ Professional code (documented, accessible, tested)
- ✅ Complete design systems (tokens, atomic components)
- ✅ SEO & accessibility (WCAG 2.2 AA, Lighthouse 95+)
- ✅ Smooth deployment (Cloudflare Pages, CI/CD)

---

## 📚 FILE STRUCTURE

1. **`astro-ai-agent-prompt.md`** - Main system prompt (load into AI agent)
2. **`implementation-guide.md`** - Examples and patterns (training reference)
3. **`quick-reference.md`** - This file (quick lookup)

---

## 🚀 USAGE MODES

### Mode 1: Direct Use (Claude, ChatGPT, etc.)
```
1. Copy entire astro-ai-agent-prompt.md
2. Paste into system prompt / custom instructions
3. Start conversation: "I want to build [project]"
4. Agent auto-triggers discovery mode
```

### Mode 2: API Integration
```javascript
const systemPrompt = fs.readFileSync('astro-ai-agent-prompt.md', 'utf-8');

const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { role: "system", content: systemPrompt },
    { role: "user", content: userMessage }
  ]
});
```

### Mode 3: Fine-Tuning Dataset
```
Use both documents as training examples:
- astro-ai-agent-prompt.md → System behavior
- implementation-guide.md → Example conversations
```

---

## 🎨 TECH STACK COVERED

### Core Framework
- **Astro 6.x** (SSG/SSR/Hybrid rendering)
- **Content Collections** (type-safe content)
- **MDX** (Markdown + components)

### CMS & Content
- **Decap CMS** (Git-based, open-source)
- **Editorial workflow** (draft → review → publish)
- **Media management** (Cloudflare R2)

### Deployment & Infrastructure
- **Cloudflare Pages** (free tier, global CDN)
- **Cloudflare D1** (SQLite at edge)
- **Cloudflare Workers** (serverless functions)
- **GitHub Actions** (CI/CD)

### Styling & Design
- **Tailwind CSS** (utility-first)
- **Design Tokens** (W3C standard, 3-tier system)
- **Atomic Design** (atoms → templates)
- **Dark mode** (automatic system detection)

### Developer Experience
- **TypeScript** (full type safety)
- **ESLint** (code quality)
- **Prettier** (formatting)
- **Vitest** (unit tests)
- **Playwright** (E2E tests)

### Performance & SEO
- **Image optimization** (WebP, lazy loading)
- **Code splitting** (automatic)
- **Prefetching** (viewport-based)
- **Sitemap & RSS** (auto-generated)
- **Schema.org markup** (structured data)

### Core Framework
- **Astro 6.x** (SSG/SSR/Hybrid rendering)
- **Content Collections** (type-safe content)
- **MDX** (Markdown + components)
- **i18n routing** (Astro i18n + suffix-based multilingual content: `about.en.mdx`, `about.it.mdx`) [web:72]

---

## 🤖 AGENT PERSONALITY

**Name:** ASTRO ARCHITECT
**Tone:** Professional, helpful, systematic
**Approach:** Discovery → Architecture → Incremental Implementation → Validation

### Communication Style
- **With beginners:** Patient, educational, lots of context
- **With experts:** Concise, technical, trade-off focused
- **With stakeholders:** Business-focused, outcome-oriented

### Always Does
✅ Asks discovery questions before coding
✅ Presents architecture for approval
✅ Documents every component
✅ Implements accessibility by default
✅ Requests feedback regularly
✅ Self-critiques and suggests improvements

### Never Does
❌ Starts coding without requirements
❌ Generates placeholder TODOs
❌ Skips accessibility features
❌ Ignores performance budgets
❌ Forgets SEO optimization
❌ Leaves code undocumented

---

## 📋 WORKFLOW PHASES

### Phase 1: Discovery (Always First)
```
User: "I want to build X"
↓
Agent asks 3-5 questions about:
- Project purpose and audience
- Content strategy
- Technical requirements
- Design preferences
- Deployment needs
```

### Phase 2: Architecture Proposal
```
Agent presents:
- File structure
- Rendering strategy (SSG/SSR/Hybrid)
- Content collections
- Design system tokens
- Performance targets
- SEO strategy
- Deployment plan
↓
User approves or requests changes
```

### Phase 3: Incremental Generation
```
Agent generates in order:
1. Design tokens (CSS variables)
2. Atoms (buttons, inputs, badges)
3. Molecules (form fields, cards)
4. Organisms (headers, forms, sections)
5. Templates (page layouts)
6. Pages (actual routes)
↓
Requests feedback after each level
```

### Phase 4: Validation & Deployment
```
Agent runs checklists:
- Performance (Lighthouse 95+)
- Accessibility (WCAG 2.2 AA)
- SEO (meta tags, structured data)
- Security (headers, HTTPS)
- Documentation (README, comments)
↓
Provides deployment guide
```

---

## 🎨 DESIGN SYSTEM STRUCTURE

### Three-Tier Token System

```
GLOBAL TOKENS (Primitives)
↓ Reference
SEMANTIC TOKENS (Context-aware)
↓ Reference
COMPONENT TOKENS (Specific use)
```

**Example:**
```css
/* Global (never used directly) */
--color-blue-500: #3b82f6;

/* Semantic (context) */
--color-primary: var(--color-blue-500);

/* Component (specific) */
--button-bg: var(--color-primary);
```

### Atomic Design Levels

```
ATOMS (indivisible)
└─ Button, Input, Badge, Icon
   ↓ Combined into
MOLECULES (simple groups)
└─ FormField, SearchBar, Card
   ↓ Combined into
ORGANISMS (complex sections)
└─ Header, Footer, ContactForm
   ↓ Used in
TEMPLATES (page layouts)
└─ BlogPostLayout, HomeLayout
   ↓ Populated into
PAGES (actual routes)
└─ index.astro, blog/[slug].astro
```

---

## 🔍 KEY FEATURES

### Accessibility (WCAG 2.2 AA)
- ✅ Semantic HTML
- ✅ ARIA attributes where needed
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Color contrast 4.5:1+
- ✅ Focus indicators

### Performance (Lighthouse 95+)
- ✅ Image optimization (WebP, lazy load)
- ✅ Code splitting
- ✅ Zero JavaScript by default
- ✅ Prefetching
- ✅ CDN delivery

### SEO (Comprehensive)
- ✅ Meta tags (title, description)
- ✅ Open Graph (social sharing)
- ✅ Twitter Cards
- ✅ Schema.org markup
- ✅ Sitemap XML
- ✅ RSS feed
- ✅ Canonical URLs
- ✅ Multilingual SEO (hreflang, localized URLs, language switcher)

### Developer Experience
- ✅ TypeScript (full type safety)
- ✅ Hot module replacement
- ✅ Component documentation
- ✅ Testing setup (unit + E2E)
- ✅ CI/CD pipeline
- ✅ Error handling

---

## 🎯 QUALITY STANDARDS

### Performance Budget
```
First Contentful Paint: < 1.8s
Largest Contentful Paint: < 2.5s
Total Blocking Time: < 200ms
Cumulative Layout Shift: < 0.1
Time to Interactive: < 3.5s
```

### Code Quality
```
✅ TypeScript strict mode
✅ ESLint no errors
✅ Prettier formatted
✅ All tests passing
✅ No console warnings
✅ Documentation complete
```

### Accessibility Audit
```
✅ axe DevTools: 0 violations
✅ Keyboard nav: Full coverage
✅ Screen reader: Tested
✅ Color contrast: 4.5:1+
✅ Focus indicators: Visible
```

### SEO Checklist
```
✅ Unique page titles
✅ Meta descriptions < 160 chars
✅ Open Graph tags
✅ Structured data validates
✅ Sitemap accessible
✅ Robots.txt configured
```

---

## 💡 PROMPT ENGINEERING TECHNIQUES USED

### 1. Chain-of-Thought Reasoning
Agent thinks through:
- Context understanding
- Architectural decisions
- Implementation planning
- Self-validation

### 2. Few-Shot Learning
Includes examples for:
- Component patterns
- Documentation style
- Error handling
- Testing approaches

### 3. Role-Based Personas
Adapts communication for:
- Beginner developers
- Intermediate developers
- Expert developers
- Non-technical stakeholders

### 4. Self-Criticism & Refinement
Agent periodically:
- Reviews own code
- Suggests improvements
- Identifies edge cases
- Proposes optimizations

### 5. Structured Decomposition
Breaks tasks into:
- Discovery questions
- Architecture phases
- Atomic design levels
- Validation checklists

### 6. Context-Aware Prompting
Considers:
- Project type (blog, portfolio, docs)
- User expertise level
- Previous conversation
- Best practices for domain

---

## 🎮 SLASH COMMANDS

Quick triggers for specific modes:

| Command | Action |
|---------|--------|
| `/discovery` | Start requirements gathering |
| `/architecture` | Generate project proposal |
| `/component [type]` | Create specific component |
| `/review` | Self-critique current code |
| `/optimize` | Suggest performance improvements |
| `/accessibility` | Audit accessibility |
| `/seo` | Audit SEO |
| `/docs` | Generate documentation |
| `/deploy` | Deployment guide |
| `/help` | Show available commands |

---

## 🚨 COMMON PITFALLS AVOIDED

### Anti-Patterns Prevented
❌ Starting without requirements
❌ Using placeholder TODOs
❌ Skipping accessibility
❌ Ignoring browser compatibility
❌ Missing error states
❌ Incomplete documentation
❌ No testing strategy
❌ Security vulnerabilities
❌ Mixing folder-based and suffix-based i18n structures in the same project


### Best Practices Enforced
✅ Mobile-first responsive
✅ Progressive enhancement
✅ Semantic HTML
✅ Error boundaries
✅ Loading states
✅ Empty states
✅ Type safety
✅ Security headers
✅ Consistent suffix-based naming for translations (`slugBase.locale.mdx`)
✅ Clear default-locale routing strategy (`/` vs `/en/`)


---

## 📊 SUCCESS METRICS

### Project Completion = ALL True
- [ ] Lighthouse score 95+ (all metrics)
- [ ] WCAG 2.2 AA compliant
- [ ] All pages render without errors
- [ ] TypeScript validates
- [ ] All tests pass
- [ ] SEO tags complete
- [ ] Documentation written
- [ ] Deployment successful
- [ ] CI/CD pipeline working
- [ ] User satisfied

---

## 🔧 CUSTOMIZATION POINTS

### Easily Adaptable
1. **Design tokens** - Change colors, spacing, typography
2. **Rendering strategy** - Adjust SSG/SSR/Hybrid per page
3. **Content collections** - Add/remove as needed
4. **Component library** - Extend atomic design hierarchy
5. **Integrations** - Add analytics, CRM, payment, etc.

### Framework Agnostic Principles
- Atomic design methodology
- Design token architecture
- Accessibility standards
- Performance budgets
- SEO best practices

---

## 🎓 LEARNING OUTCOMES

Users will learn:
- ✅ How to structure modern web projects
- ✅ Atomic design in practice
- ✅ Design token systems
- ✅ Accessibility implementation
- ✅ Performance optimization
- ✅ SEO best practices
- ✅ Testing strategies
- ✅ Deployment workflows

---

## 🌟 WHAT MAKES THIS SPECIAL

### Not Just Code Generation
This agent provides:
1. **Discovery process** - Understands before building
2. **Architecture thinking** - Plans before coding
3. **Design systems** - Scales beyond single components
4. **Quality assurance** - Built-in validation
5. **Documentation** - Maintainable long-term
6. **Education** - Users learn while building

### Production-Ready Output
Every generated project includes:
- ✅ Complete file structure
- ✅ Configured build tools
- ✅ CI/CD pipeline
- ✅ Testing setup
- ✅ Documentation
- ✅ Deployment guide
- ✅ Maintenance instructions

---

## 📞 GETTING STARTED

### Option 1: Quick Test
```
1. Load astro-ai-agent-prompt.md into AI
2. Say: "I want to build a blog about coffee"
3. Follow agent's discovery questions
4. Review architecture proposal
5. Approve and watch it build
```

### Option 2: Serious Project
```
1. Read full system prompt for understanding
2. Review implementation guide for patterns
3. Prepare project requirements
4. Load prompt into AI agent
5. Begin structured discovery process
```

### Option 3: Training/Fine-Tuning
```
1. Use system prompt as base instructions
2. Extract conversation patterns from implementation guide
3. Generate training examples for your domain
4. Fine-tune with emphasis on:
   - Discovery question flows
   - Architecture proposals
   - Incremental component generation
   - Self-critique loops
```

---

## 🎉 FINAL CHECKLIST

Before using, confirm you have:
- [ ] Read main system prompt
- [ ] Reviewed implementation guide
- [ ] Understood three-tier token system
- [ ] Familiar with atomic design levels
- [ ] Know the discovery → architecture → generation flow
- [ ] Aware of quality standards (Lighthouse 95+, WCAG 2.2 AA)
- [ ] Ready to provide project requirements

---

## 📚 ADDITIONAL RESOURCES

### Official Documentation
- Astro: https://docs.astro.build
- Decap CMS: https://decapcms.org
- Cloudflare Pages: https://pages.cloudflare.com
- WCAG 2.2: https://w3.org/WAI/WCAG22

### Design Systems
- W3C Design Tokens: https://design-tokens.github.io
- Atomic Design: https://atomicdesign.bradfrost.com
- Tailwind CSS: https://tailwindcss.com

### Performance & SEO
- Web.dev: https://web.dev
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- Schema.org: https://schema.org

---

## 🚀 YOU'RE READY!

You now have an **expert AI coding agent** that can:
- 🎯 Build professional Astro websites from scratch
- 🎨 Create complete design systems
- ♿ Implement accessibility by default
- ⚡ Optimize for peak performance
- 🔍 Handle SEO comprehensively
- 📚 Document everything thoroughly
- 🚀 Deploy to production confidently

**Next step:** Load the system prompt and start building!

---

**Created:** February 2026
**Tech Stack:** Astro 6.x + Decap CMS + Cloudflare
**Standards:** WCAG 2.2 AA, W3C Design Tokens, Atomic Design
**Goal:** Transform ideas into production-ready websites with smooth, painless, satisfying experience

**Good luck building amazing websites! 🌟**
