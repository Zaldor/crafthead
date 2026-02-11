/**
 * @fileoverview i18n helpers for locale-aware routing and content lookup
 */

export const SUPPORTED_LOCALES = ['en', 'it'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export interface LocaleLink {
  locale: Locale;
  url: string;
  label: string;
}

export function parseLocaleFromFilename(filename: string): {
  slugBase: string;
  locale: Locale;
} {
  const match = filename.match(/^(?<base>.*)\.(?<locale>[a-z]{2})$/);

  if (!match || !match.groups) {
    return {
      slugBase: filename.replace(/\.[^.]+$/, ''),
      locale: DEFAULT_LOCALE,
    };
  }

  const { base, locale } = match.groups;
  if (!SUPPORTED_LOCALES.includes(locale as Locale)) {
    return {
      slugBase: base,
      locale: DEFAULT_LOCALE,
    };
  }

  return {
    slugBase: base,
    locale: locale as Locale,
  };
}

export function getLocalizedUrl(slugBase: string, locale: Locale): string {
  if (!slugBase || slugBase === 'index') {
    return locale === DEFAULT_LOCALE ? '/' : `/${locale}`;
  }

  return locale === DEFAULT_LOCALE ? `/${slugBase}` : `/${locale}/${slugBase}`;
}

export function getAlternateLocales(slugBase: string): LocaleLink[] {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
    url: getLocalizedUrl(slugBase, locale),
    label: locale.toUpperCase(),
  }));
}
