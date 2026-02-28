import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import { SITE_CONFIG, TOOLS, TOOL_CATEGORIES } from '@/config/site';
import ToolDirectory from '@/components/ToolDirectory';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Free Online Tools for Everyday Tasks`,
  description: SITE_CONFIG.description,
  alternates: { canonical: SITE_CONFIG.url },
  openGraph: {
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} — Free Online Tools for Everyday Tasks`,
    description: SITE_CONFIG.description,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${SITE_CONFIG.name} Tools`,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  itemListElement: TOOLS.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    description: t.description,
    url: `${SITE_CONFIG.url}/tools/${t.slug}`,
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="page-wrapper">
        {/* ─── HERO ─── */}
        <section className="hero">
          <div className="container">
            <div className="hero-eyebrow fade-up">
              <span className="pulse" aria-hidden="true" />
              {TOOLS.length}+ Free Tools · No Signup Required
            </div>
            <h1 className="hero-title fade-up d1">
              Every Tool You Need,<br />
              <span className="gradient-text">Completely Free</span>
            </h1>
            <p className="hero-sub fade-up d2">
              Fast, beautifully crafted utility tools for everyday tasks.
              No registration, no limits — just open and use.
            </p>
            <div className="hero-cta fade-up d3">
              <Link href="#tools" className="btn btn-primary btn-lg">Browse All Tools ↓</Link>
              <Link href="#why" className="btn btn-secondary btn-lg">Why {SITE_CONFIG.name}?</Link>
            </div>
            <div className="hero-stats fade-up d4">
              {[
                { v: `${TOOLS.length}+`, l: 'Free Tools' },
                { v: '100%', l: 'Free Forever' },
                { v: '0', l: 'Signups Needed' },
                { v: '<1s', l: 'Load Time' },
              ].map(s => (
                <div key={s.l}>
                  <div className="stat-value">{s.v}</div>
                  <div className="stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── AD BANNER ─── */}
        <div className="container">
          <AdSlot type="banner" />
        </div>

        {/* ─── TOOLS GRID ─── */}
        <section className="section" id="tools" style={{ paddingTop: '60px' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">All Tools</span>
              <h2>Pick Your Tool, Get It Done</h2>
              <p>From text and math to QR codes and JSON — everything you need in one place.</p>
            </div>
            <ToolDirectory tools={TOOLS} categories={TOOL_CATEGORIES} />
          </div>
        </section>

        {/* ─── WHY US ─── */}
        <section
          className="section"
          id="why"
          style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Why {SITE_CONFIG.name}</span>
              <h2>Built for Speed &amp; Simplicity</h2>
              <p>Every tool is blazing fast, private and works perfectly on any device.</p>
            </div>
            <div className="features-grid">
              {[
                { icon: '⚡', title: 'Instant Results', desc: 'All tools run locally in your browser — no server trips, no delays.' },
                { icon: '🔒', title: 'Private & Secure', desc: "Your data never leaves your device. We don't store or share anything you type." },
                { icon: '📱', title: 'Works on Anything', desc: 'Designed mobile-first. Seamless on phones, tablets, and desktops.' },
                { icon: '🆓', title: 'Forever Free', desc: 'No paywalls, no trial limits, no credit card. Ever.' },
              ].map(f => (
                <div className="feature-card" key={f.title}>
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-title">{f.title}</div>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section">
          <div className="container">
            <div className="cta-card">
              <h2>Ready to Get Things Done?</h2>
              <p>Pick any tool and start instantly — no account, no waiting.</p>
              <Link href="#tools" className="btn btn-primary btn-lg">Explore All Tools →</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
