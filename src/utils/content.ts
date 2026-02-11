/**
 * @fileoverview Utilities for manipulating content collections
 */

import type { CollectionEntry } from 'astro:content';

export function sortProjectsByDate<T extends CollectionEntry<'projects'>>(projects: T[]): T[] {
  return [...projects].sort((a, b) => {
    const dateA = new Date(a.data.projectDate ?? a.data.publishDate ?? 0).valueOf();
    const dateB = new Date(b.data.projectDate ?? b.data.publishDate ?? 0).valueOf();
    return dateB - dateA;
  });
}

export function filterFeaturedProjects<T extends CollectionEntry<'projects'>>(projects: T[]): T[] {
  return projects.filter((project) => project.data.featured);
}
