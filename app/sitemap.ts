import type { MetadataRoute } from 'next';
import { SITE_CONFIG, TOOLS } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const toolUrls = TOOLS.map(tool => ({
        url: `${SITE_CONFIG.url}/tools/${tool.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: SITE_CONFIG.url,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        ...toolUrls,
    ];
}
