import type { MetadataRoute } from 'next';

import { source } from '@/lib/source';

// Absolute base URL for the generated sitemap. Override per deployment with
// NEXT_PUBLIC_SITE_URL; the default is a sensible placeholder for the docs site.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docs.temetro.com';

// Generates /sitemap.xml — the home page plus every docs page from the
// Fumadocs source.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const docs = source.getPages().map((page) => ({
    url: new URL(page.url, baseUrl).toString(),
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: new URL('/', baseUrl).toString(),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...docs,
  ];
}
