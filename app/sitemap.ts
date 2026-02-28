import type { MetadataRoute } from 'next';
import { SITE_CONFIG, TOOLS } from '@/config/site';
import { CONVERTERS, SITEMAP_VALUES } from '@/config/converters';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // Core Tools
    const toolUrls: MetadataRoute.Sitemap = TOOLS.map(tool => ({
        url: `${SITE_CONFIG.url}/tools/${tool.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Generate Converter URLs
    const converterUrls: MetadataRoute.Sitemap = [];

    // 1. Add the main converter directory
    converterUrls.push({
        url: `${SITE_CONFIG.url}/tools/converter`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.9,
    });

    // 2. Add all dynamic permutations for Programmatic SEO
    for (const categoryId in CONVERTERS) {
        const category = CONVERTERS[categoryId];
        const units = category.units;

        for (let i = 0; i < units.length; i++) {
            for (let j = 0; j < units.length; j++) {
                if (i === j) continue; // Skip same-unit conversions

                const fromUnitStr = units[i].id;
                const toUnitStr = units[j].id;

                // A. Base conversion route (e.g. /tools/converter/weight/kg-to-lbs)
                converterUrls.push({
                    url: `${SITE_CONFIG.url}/tools/converter/${categoryId}/${fromUnitStr}-to-${toUnitStr}`,
                    lastModified: now,
                    changeFrequency: 'monthly',
                    priority: 0.7, // High priority for base keywords
                });

                // B. Value-specific routes (e.g. /tools/converter/weight/10-kg-to-lbs)
                for (const value of SITEMAP_VALUES) {
                    converterUrls.push({
                        url: `${SITE_CONFIG.url}/tools/converter/${categoryId}/${value}-${fromUnitStr}-to-${toUnitStr}`,
                        lastModified: now,
                        changeFrequency: 'monthly',
                        priority: 0.5, // Lower priority for long-tail variations
                    });
                }
            }
        }
    }

    return [
        {
            url: SITE_CONFIG.url,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        ...toolUrls,
        ...converterUrls,
    ];
}
