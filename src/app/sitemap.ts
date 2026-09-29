import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

const baseUrl = SITE.url.replace(/\/$/, '');
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; freq?: string }[] = [
    { path: '/', priority: 1.0 },
    { path: '/features', priority: 0.9 },
    { path: '/download', priority: 0.9 },
    { path: '/help', priority: 0.7 },
    { path: '/faq', priority: 0.7 },
    { path: '/about', priority: 0.6 },
    { path: '/changelog', priority: 0.5 },
    { path: '/privacy', priority: 0.3 },
  ];
  const now = new Date().toISOString();
  return routes.map((r) => ({
    url: `${baseUrl}${r.path === '/' ? '' : r.path}`,
    lastModified: now,
    changeFrequency: (r.freq ?? 'weekly') as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: r.priority,
  }));
}