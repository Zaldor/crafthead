/**
 * @fileoverview Date formatting utilities
 */

export function formatDate(date: Date | string, locale = 'en-GB'): string {
  const value = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(value);
}
