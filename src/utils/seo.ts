/**
 * @fileoverview SEO utilities for Crafthead Studio
 */

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishDate?: string | Date;
  modifiedDate?: string | Date;
  author?: string;
  tags?: string[];
  locale?: string;
}

export function generateSEOTags(metadata: SEOMetadata) {
  const {
    title,
    description,
    canonical,
    ogImage = '/og-default.svg',
    ogType = 'website',
    publishDate,
    modifiedDate,
    author,
    tags,
    locale = 'en_US',
  } = metadata;

  return {
    title,
    description,
    canonical,
    openGraph: {
      basic: {
        title,
        type: ogType,
        image: ogImage,
      },
      optional: {
        description,
        siteName: 'Crafthead',
        locale,
      },
      article:
        ogType === 'article' && publishDate
          ? {
              publishedTime: new Date(publishDate).toISOString(),
              modifiedTime: modifiedDate ? new Date(modifiedDate).toISOString() : undefined,
              author,
              tags,
            }
          : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@craftheadstudio',
      creator: '@craftheadstudio',
      title,
      description,
      image: ogImage,
    },
  };
}
