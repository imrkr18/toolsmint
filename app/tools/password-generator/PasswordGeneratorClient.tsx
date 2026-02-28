'use client';
import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

const CHARS = {
  upper:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower:   'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{}|;:,.<>?',
};

function generatePassword(
  length: number, upper: boolean, lower: boolean,
  numbers: boolean, symbols: boolean
): string {
  let pool = '';
  if (upper)   pool += CHARS.upper;
  if (lower)   pool += CHARS.lower;
  if (numbers) pool += CHARS.numbers;
  if (symbols) pool += CHARS.symbols;
  if (!pool) pool = CHARS.lower;
  const arr = new Uint32Array(length);
  crypto.getRandomValues(arr);
  return Array.from(arr, n => pool[n % pool.length]).join('');
}

function strength(pw: string): { label: string; color: string; width: string } {
  let score = 0;
  if (pw.length >= 12) score++;
  if (pw.length >= 16) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[a-z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 2) return { label: 'Weak', color: '#EF4444', width: '25%' };
  if (score <= 4) return { label: 'Fair', color: '#F59E0B', width: '55%' };
  if (score <= 5) return { label: 'Strong', color: '#00C896', width: '80%' };
  return { label: 'Very Strong', color: '#00C896', width: '100%' };
}

export default function PasswordGeneratorClient() {
  const [length, setLength]   = useState(16);
  const [upper, setUpper]     = useState(true);
  const [lower, setLower]     = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState(() => generatePassword(16, true, true, true, true));
  const [copied, setCopied]   = useState(false);

  const generate = useCallback(() => {
    setPassword(generatePassword(length, upper, lower, numbers, symbols));
    setCopied(false);
  }, [length, upper, lower, numbers, symbols]);

  const copy = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const str = strength(password);

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <main className="tool-page">
          <div className="tool-container">
            <nav className="breadcrumb"><a href="/">Home</a><span className="breadcrumb-sep">›</span><span aria-current="page">Password Generator</span></nav>
            <header className="tool-header">
              <div className="tool-header-icon">🔐</div>
              <h1>Password Generator</h1>
              <p>Generate strong, cryptographically secure passwords. All generation happens in your browser — nothing is sent to any server.</p>
            </header>

            <AdSlot type="banner" />

            {/* Output */}
            <div className="result-card" style={{ textAlign: 'left' }}>
              <div className="output-row-header">
                <span className="text-secondary font-medium">Generated Password</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className={`btn-icon ${copied ? 'success' : ''}`} onClick={copy} aria-label="Copy password">
                    {copied ? '✓' : '📋'}
                  </button>
                  <button className="btn-icon" onClick={generate} aria-label="Refresh password">↻</button>
                </div>
              </div>
              
              <div className="output-panel mono mb-4" style={{ fontSize: '1.15rem' }}>
                {password}
              </div>

              {/* Strength bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Security Strength</span>
                  <span style={{ fontSize: '0.75rem', color: str.color, fontWeight: 600 }}>{str.label}</span>
                </div>
                <div style={{ height: '6px', background: 'var(--bg-input)', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: str.width, background: str.color, borderRadius: '99px', transition: 'width 0.4s ease' }} />
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="form-group">
              <label htmlFor="pw-length">Password Length: <strong style={{ color: 'var(--brand)' }}>{length}</strong></label>
              <input type="range" id="pw-length" min={6} max={64} value={length} onChange={e => setLength(+e.target.value)} />
            </div>

            <div className="form-group">
              <label>Include Characters</label>
              <div className="checkbox-group">
                {[
                  { label: 'Uppercase (A-Z)', val: upper, set: (v: boolean) => { if (!v && !lower && !numbers && !symbols) return; setUpper(v); } },
                  { label: 'Lowercase (a-z)', val: lower, set: (v: boolean) => { if (!v && !upper && !numbers && !symbols) return; setLower(v); } },
                  { label: 'Numbers (0-9)',   val: numbers, set: (v: boolean) => { if (!v && !upper && !lower && !symbols) return; setNumbers(v); } },
                  { label: 'Symbols (!@#)',   val: symbols, set: (v: boolean) => { if (!v && !upper && !lower && !numbers) return; setSymbols(v); } },
                ].map(o => (
                  <label key={o.label} className="checkbox-item">
                    <input type="checkbox" checked={o.val} onChange={e => o.set(e.target.checked)} />
                    {o.label}
                  </label>
                ))}
              </div>
            </div>

            <button className="btn btn-primary btn-full" onClick={generate}>Generate New Password</button>

            <AdSlot type="box" />

            <section className="how-to">
              <h2>How to use the Password Generator</h2>
              <ol className="steps-list">
                {[
                  ['Set length', 'drag the slider to choose password length (6–64 characters).'],
                  ['Pick character types', 'select which types of characters to include.'],
                  ['Generate', 'click the button or the refresh icon to generate a new password.'],
                  ['Copy', 'click Copy to copy the password to your clipboard.'],
                ].map(([b, rest], i) => (
                  <li className="step-item" key={i}><span className="step-num">{i + 1}</span><p className="step-text"><strong>{b}</strong> — {rest}</p></li>
                ))}
              </ol>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
