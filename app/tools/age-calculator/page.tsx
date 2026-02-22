import type { Metadata } from 'next';
import { SITE_CONFIG, TOOLS } from '@/config/site';
import AgeCalculatorClient from './AgeCalculatorClient';

const tool = TOOLS.find(t => t.id === 'age-calculator')!;
const url  = `${SITE_CONFIG.url}/tools/${tool.slug}`;

export const metadata: Metadata = {
  title: `${tool.name} — Free Online ${tool.name}`,
  description: tool.longDesc,
  keywords: tool.keywords,
  alternates: { canonical: url },
  openGraph: { url, title: `${tool.name} | ${SITE_CONFIG.name}`, description: tool.longDesc },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: `${tool.name} — ${SITE_CONFIG.name}`,
  description: tool.longDesc,
  url,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: tool.keywords,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AgeCalculatorClient />
    </>
  );
}
