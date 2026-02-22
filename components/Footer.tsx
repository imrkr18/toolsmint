import Link from 'next/link';
import { SITE_CONFIG, TOOLS } from '@/config/site';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            {SITE_CONFIG.name}<span>.</span>
          </div>
          <ul className="footer-links" role="list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#tools">All Tools</Link></li>
            {TOOLS.slice(0, 4).map(t => (
              <li key={t.id}><Link href={`/tools/${t.slug}`}>{t.name}</Link></li>
            ))}
          </ul>
        </div>
        <p className="footer-copy">
          © {SITE_CONFIG.year} {SITE_CONFIG.name} — {SITE_CONFIG.tagline}.<br />
          Free tools for everyone, everywhere, forever.
        </p>
      </div>
    </footer>
  );
}
