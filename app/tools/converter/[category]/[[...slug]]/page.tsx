import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CONVERTERS } from "@/config/converters";
import { SITE_CONFIG } from "@/config/site";
import ConverterClient from "./ConverterClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";

type Props = {
    params: Promise<{
        category: string;
        slug?: string[];
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const { category } = resolvedParams;
    const slug = resolvedParams.slug || [];
    const catData = CONVERTERS[category];

    if (!catData) return notFound();

    if (slug.length === 0) {
        const title = `${catData.name} Converter | ${SITE_CONFIG.name}`;
        const description = `Free online ${catData.name.toLowerCase()} converter. Instantly convert between ${catData.units.map(u => u.name).join(', ')} and other measurements.`;
        const cleanUrl = `${SITE_CONFIG.url}/tools/converter/${category}`;

        return {
            title,
            description,
            alternates: {
                canonical: cleanUrl,
            },
            openGraph: {
                title,
                description,
                url: cleanUrl,
                siteName: SITE_CONFIG.name,
                locale: "en_US",
                type: "website",
            },
        };
    }

    let value = 1;
    let fromStr = "";
    let toStr = "";

    if (slug.length === 1) {
        const valMatch = slug[0].match(/^(-?\d+(?:\.\d+)?)-(.*)-to-(.*)$/);
        const textMatch = slug[0].match(/^(?!-?\d)(.*)-to-(.*)$/);

        if (valMatch) {
            value = parseFloat(valMatch[1]);
            fromStr = valMatch[2];
            toStr = valMatch[3];
        } else if (textMatch) {
            fromStr = textMatch[1];
            toStr = textMatch[2];
        } else {
            return notFound();
        }
    } else {
        return notFound();
    }

    const fromUnit = catData.units.find((u) => u.id === fromStr || u.name.toLowerCase() === fromStr.toLowerCase());
    const toUnit = catData.units.find((u) => u.id === toStr || u.name.toLowerCase() === toStr.toLowerCase());

    if (!fromUnit || !toUnit) return notFound();

    const isSpecificValue = slug[0].includes("-") && !isNaN(parseFloat(slug[0].split("-")[0]));

    const title = isSpecificValue 
        ? `Convert ${value} ${fromUnit.name} to ${toUnit.name} | precise calculation`
        : `${fromUnit.name} to ${toUnit.name} Converter | ${SITE_CONFIG.name}`;

    const description = isSpecificValue
        ? `Exactly how much is ${value} ${fromUnit.name} in ${toUnit.name}? Fast, free, and accurate conversion calculator for ${value} ${fromUnit.symbol} to ${toUnit.symbol}.`
        : `Free online ${fromUnit.name} to ${toUnit.name} converter. Instantly convert ${fromUnit.symbol} to ${toUnit.symbol} and other ${catData.name.toLowerCase()} measurements.`;

    const cleanUrl = `${SITE_CONFIG.url}/tools/converter/${category}/${slug[0]}`;

    return {
        title,
        description,
        alternates: {
            canonical: cleanUrl,
        },
        openGraph: {
            title,
            description,
            url: cleanUrl,
            siteName: SITE_CONFIG.name,
            locale: "en_US",
            type: "website",
        },
    };
}

export default async function ConverterPage({ params }: Props) {
    const resolvedParams = await params;
    const { category } = resolvedParams;
    const slug = resolvedParams.slug || [];
    const catData = CONVERTERS[category];

    if (!catData) return notFound();

    let initialValue = 1;
    let fromUnitId = catData.baseUnit;
    let toUnitId = catData.units.find(u => u.id !== catData.baseUnit)?.id || catData.baseUnit;
    
    let isSpecificValue = false;

    if (slug.length > 0) {
        const valMatch = slug[0].match(/^(-?\d+(?:\.\d+)?)-(.*)-to-(.*)$/);
        const textMatch = slug[0].match(/^(?!-?\d)(.*)-to-(.*)$/);

        if (valMatch) {
            initialValue = parseFloat(valMatch[1]);
            fromUnitId = valMatch[2];
            toUnitId = valMatch[3];
            isSpecificValue = true;
        } else if (textMatch) {
            fromUnitId = textMatch[1];
            toUnitId = textMatch[2];
        }
    }

    const fromUnitDef = catData.units.find((u) => u.id === fromUnitId || u.name.toLowerCase() === fromUnitId.toLowerCase());
    const toUnitDef = catData.units.find((u) => u.id === toUnitId || u.name.toLowerCase() === toUnitId.toLowerCase());

    if (!fromUnitDef || !toUnitDef) return notFound();

    // JSON-LD Schemas for Rich Snippets (FAQ & SoftwareApp)
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": `${fromUnitDef.name} to ${toUnitDef.name} Converter`,
                "operatingSystem": "All",
                "applicationCategory": "UtilitiesApplication",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                },
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `How to convert ${fromUnitDef.name} to ${toUnitDef.name}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `To convert ${fromUnitDef.name} to ${toUnitDef.name}, simply enter the value in ${fromUnitDef.symbol} into the converter above. The formula is applied instantly to give you the precise ${toUnitDef.symbol} output.`,
                        }
                    },
                    ...(isSpecificValue ? [{
                        "@type": "Question",
                        "name": `How much is ${initialValue} ${fromUnitDef.symbol} in ${toUnitDef.symbol}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Our real-time calculator above determines the exact conversion for ${initialValue} ${fromUnitDef.name} into ${toUnitDef.name}.`,
                        }
                    }] : [])
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="page-wrapper">
                <main className="tool-page">
                    <div className="tool-container">
                        <nav className="breadcrumb">
                            <a href="/">Home</a><span className="breadcrumb-sep">›</span>
                            <a href="/tools/converter">Converters</a><span className="breadcrumb-sep">›</span>
                            <span aria-current="page">{catData.name} Converter</span>
                        </nav>

                        <header className="tool-header">
                            <div className="tool-header-icon">{catData.icon}</div>
                            <h1>
                                {isSpecificValue ? (
                                    <>Convert {initialValue} {fromUnitDef.name} to {toUnitDef.name}</>
                                ) : (
                                    <>{fromUnitDef.name} to {toUnitDef.name} Converter</>
                                )}
                            </h1>
                            <p>
                                {isSpecificValue
                                    ? `Find exactly how much ${initialValue} ${fromUnitDef.symbol} is in ${toUnitDef.symbol} with our highly accurate ${catData.name.toLowerCase()} calculator.`
                                    : `Instantly transform ${fromUnitDef.name} (${fromUnitDef.symbol}) to ${toUnitDef.name} (${toUnitDef.symbol}) and other ${catData.name.toLowerCase()} units.`}
                            </p>
                        </header>

                        <AdSlot type="banner" />

                        {/* The interactive client component component */}
                        <ConverterClient 
                            category={catData} 
                            initialFromUnit={fromUnitDef.id} 
                            initialToUnit={toUnitDef.id} 
                            initialValue={initialValue} 
                        />

                        <AdSlot type="box" />

                        <section className="how-to">
                            <h2>About the {fromUnitDef.name} to {toUnitDef.name} conversion</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                                <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                                    <h3 style={{ margin: '0 0 10px 0', fontSize: '1.25rem', color: 'var(--text-primary)' }}>📏 What is a {fromUnitDef.name}?</h3>
                                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                                        The {fromUnitDef.name} (symbol: {fromUnitDef.symbol}) is a unit of {catData.name.toLowerCase()} used globally. Understanding its precise conversion to {toUnitDef.name} is critical for accurate calculations in science, engineering, and everyday life.
                                    </p>
                                </div>
                                <div style={{ background: 'var(--bg-elevated)', padding: '20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                                    <h3 style={{ margin: '0 0 10px 0', fontSize: '1.25rem', color: 'var(--text-primary)' }}>📐 What is a {toUnitDef.name}?</h3>
                                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                                        The {toUnitDef.name} (symbol: {toUnitDef.symbol}) is another essential unit of {catData.name.toLowerCase()}. Utilizing this converter ensures you don't make critical errors when translating values from {fromUnitDef.symbol}.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
