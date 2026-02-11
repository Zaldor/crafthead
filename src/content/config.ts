import { defineCollection, z } from 'astro:content';

const baseSeoSchema = z
  .object({
    metaTitle: z.string().max(70).optional(),
    metaDescription: z.string().max(160).optional(),
    ogImage: z.string().optional(),
  })
  .optional();

const pageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    locale: z.enum(['en', 'it']).default('en'),
    slugBase: z.string(),
    title: z.string(),
    description: z.string().optional(),
    hero: z
      .object({
        eyebrow: z.string().optional(),
        heading: z.string(),
        subheading: z.string().optional(),
        primaryCtaLabel: z.string().optional(),
        primaryCtaUrl: z.string().optional(),
        secondaryCtaLabel: z.string().optional(),
        secondaryCtaUrl: z.string().optional(),
      })
      .optional(),
    sections: z
      .array(
        z.discriminatedUnion('type', [
          z.object({
            type: z.literal('richCopy'),
            heading: z.string(),
            body: z.string(),
          }),
          z.object({
            type: z.literal('featureGrid'),
            heading: z.string(),
            features: z.array(
              z.object({
                title: z.string(),
                description: z.string(),
              })
            ),
          }),
        ])
      )
      .optional(),
    seo: baseSeoSchema,
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    locale: z.enum(['en', 'it']).default('en'),
    slugBase: z.string(),
    title: z.string(),
    summary: z.string().max(200),
    client: z.string(),
    industry: z.string(),
    services: z.array(z.string()),
    projectDate: z.coerce.date(),
    location: z.string().optional(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    deliverables: z.array(z.string()).optional(),
    toolsUsed: z.array(z.string()).optional(),
    keyResults: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          description: z.string().optional(),
        })
      )
      .optional(),
    sections: z
      .array(
        z.discriminatedUnion('type', [
          z.object({
            type: z.literal('narrative'),
            heading: z.string(),
            body: z.string(),
          }),
          z.object({
            type: z.literal('gallery'),
            images: z.array(
              z.object({
                image: z.string(),
                alt: z.string(),
                caption: z.string().optional(),
              })
            ),
          }),
        ])
      )
      .optional(),
    relatedTestimonials: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    seo: baseSeoSchema,
  }),
});

const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    clientName: z.string(),
    clientRole: z.string(),
    company: z.string(),
    quote: z.string(),
    projectSlugBase: z.string(),
    weight: z.number().optional(),
  }),
});

const clientsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    logo: z.string(),
    logoAlt: z.string(),
    category: z.string(),
    website: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  pages: pageCollection,
  projects: projectCollection,
  testimonials: testimonialsCollection,
  clients: clientsCollection,
};
