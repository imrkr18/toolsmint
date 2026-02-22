'use client';
import Link from 'next/link';
import { useState } from 'react';
import { SITE_CONFIG } from '@/config/site';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="container nav-inner">

        {/* Logo — always left */}
        <Link href="/" className="nav-logo" aria-label={`${SITE_CONFIG.name} home`}>
          <span className="dot" aria-hidden="true" />
          {SITE_CONFIG.name}
        </Link>

        {/* Center nav links (desktop) */}
        <ul className={`nav-links${open ? ' open' : ''}`} role="list">
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/#tools" onClick={() => setOpen(false)}>All Tools</Link></li>
          <li><span className="nav-badge">✦ Free Forever</span></li>
        </ul>

        {/* Right side — toggle always visible + hamburger only on mobile */}
        <div className="nav-right">
          <ThemeToggle />
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>

      </div>
    </nav>
  );
}
