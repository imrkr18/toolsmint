import { SITE_CONFIG } from "@/config/site";
import { CONVERTERS } from "@/config/converters";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: `Unit Converters | ${SITE_CONFIG.name}`,
    description: "Free online unit converters for weight, mass, length, distance, and temperature. Fast, accurate, and easy to use.",
    alternates: {
        canonical: `${SITE_CONFIG.url}/tools/converter`,
    },
};

export default function ConverterDirectoryPage() {
    const categories = Object.values(CONVERTERS);

    return (
        <>
            <Navbar />
            <div className="page-wrapper">
                <main className="tool-page">
                    <div className="tool-container">
                        <nav className="breadcrumb">
                            <a href="/">Home</a><span className="breadcrumb-sep">›</span>
                            <span aria-current="page">Converters</span>
                        </nav>
                        
                        <header className="tool-header">
                            <div className="tool-header-icon">🔄</div>
                            <h1>Unit Converters</h1>
                            <p>Fast and accurate conversion tools for thousands of units. Select a category below to get started.</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {categories.map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/tools/converter/${category.id}`}
                                    className="group flex flex-col justify-between rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    
                                    <div className="relative z-10 flex items-start gap-4 mb-4">
                                        <span className="text-4xl bg-muted p-3 rounded-xl shadow-inner group-hover:scale-110 transition-transform">
                                            {category.icon}
                                        </span>
                                        <div>
                                            <h2 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                                {category.name}
                                            </h2>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                Convert between {category.units.map(u => u.name).slice(0, 3).join(', ')} and more.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex items-center text-sm font-medium text-primary mt-auto">
                                        <span>Open Converter</span>
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        <section className="how-to" style={{ marginTop: '40px' }}>
                            <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>Popular Conversions</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Hardcoded high-value internal links to pass PageRank to deep dynamic pages */}
                                <Link href="/tools/converter/weight/kg-to-lbs" className="bg-card hover:bg-muted border rounded-xl p-4 text-center transition-colors font-medium">kg to lbs</Link>
                                <Link href="/tools/converter/weight/1-kg-to-grams" className="bg-card hover:bg-muted border rounded-xl p-4 text-center transition-colors font-medium">1 kg to grams</Link>
                                <Link href="/tools/converter/length/meters-to-feet" className="bg-card hover:bg-muted border rounded-xl p-4 text-center transition-colors font-medium">meters to feet</Link>
                                <Link href="/tools/converter/length/100-cm-to-inches" className="bg-card hover:bg-muted border rounded-xl p-4 text-center transition-colors font-medium">100 cm to inches</Link>
                                <Link href="/tools/converter/temperature/celsius-to-fahrenheit" className="bg-card hover:bg-muted border rounded-xl p-4 text-center transition-colors font-medium">Celsius to Fahrenheit</Link>
                                <Link href="/tools/converter/temperature/100-celsius-to-fahrenheit" className="bg-card hover:bg-muted border rounded-xl p-4 text-center transition-colors font-medium">100 °C to °F</Link>
                                <Link href="/tools/converter/weight/grams-to-ounces" className="bg-card hover:bg-muted border rounded-xl p-4 text-center transition-colors font-medium">grams to ounces</Link>
                                <Link href="/tools/converter/length/km-to-miles" className="bg-card hover:bg-muted border rounded-xl p-4 text-center transition-colors font-medium">km to miles</Link>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
