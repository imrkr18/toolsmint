'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const SunIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Prevents hydration flash — render placeholder same size
  if (!mounted) return <div style={{ width: 52, height: 28 }} />;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      role="switch"
      aria-checked={!isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      style={{
        position:        'relative',
        width:           52,
        height:          28,
        borderRadius:    14,
        border:          `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)'}`,
        background:      isDark ? '#1C2640' : '#E2EAF4',
        cursor:          'pointer',
        flexShrink:       0,
        transition:      'background 0.25s ease, border-color 0.25s ease',
        outline:         'none',
        padding:         0,
      }}
      onFocus={e   => (e.currentTarget.style.boxShadow = '0 0 0 3px var(--brand-glow)')}
      onBlur={e    => (e.currentTarget.style.boxShadow = 'none')}
    >
      {/* Thumb */}
      <span
        aria-hidden="true"
        style={{
          position:        'absolute',
          top:              4,
          left:             isDark ? 4 : 24,
          width:            18,
          height:           18,
          borderRadius:     '50%',
          background:       isDark
            ? 'linear-gradient(135deg, #00C896, #00A3FF)'
            : 'linear-gradient(135deg, #F6A623, #F5A623)',
          boxShadow:        isDark
            ? '0 0 8px rgba(0,200,150,0.45)'
            : '0 0 8px rgba(246,166,35,0.4)',
          transition:       'left 0.22s cubic-bezier(0.4,0,0.2,1), background 0.25s ease',
          display:          'flex',
          alignItems:       'center',
          justifyContent:   'center',
          color:            '#fff',
        }}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
