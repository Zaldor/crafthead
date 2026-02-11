/**
 * @fileoverview Structured data generators for Crafthead
 */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeAgency',
    name: 'Crafthead',
    url: 'https://crafthead.studio',
    logo: 'https://crafthead.studio/logo-mark.svg',
    sameAs: [
      'https://www.linkedin.com/company/crafthead',
      'https://www.instagram.com/crafthead.studio',
    ],
  };
}

export function projectSchema(project: {
  title: string;
  description: string;
  url: string;
  image: string;
  client: string;
  projectDate?: string | Date;
  services?: string[];
  results?: Array<{ label: string; value: string }>;
}) {
  const { title, description, url, image, client, projectDate, services, results } = project;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description,
    url,
    image,
    creator: {
      '@type': 'Organization',
      name: 'Crafthead',
    },
    customer: {
      '@type': 'Organization',
      name: client,
    },
    datePublished: projectDate ? new Date(projectDate).toISOString() : undefined,
    about: services,
    additionalType: 'https://schema.org/CaseStudy',
    identifier: url,
    subjectOf: results?.map((item) => ({
      '@type': 'PropertyValue',
      propertyID: item.label,
      value: item.value,
    })),
  };
}
