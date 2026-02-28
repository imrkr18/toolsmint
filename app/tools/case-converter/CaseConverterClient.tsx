'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

const CASES = ['UPPERCASE', 'lowercase', 'Title Case', 'Sentence case', 'camelCase', 'snake_case'] as const;
type CaseType = typeof CASES[number];

function convert(text: string, c: CaseType): string {
  switch (c) {
    case 'UPPERCASE':    return text.toUpperCase();
    case 'lowercase':    return text.toLowerCase();
    case 'Title Case':   return text.replace(/\w\S*/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase());
    case 'Sentence case':
      return text.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, m => m.toUpperCase());
    case 'camelCase':
      return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
    case 'snake_case':
      return text.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
  }
}

export default function CaseConverterClient() {
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState<CaseType>('UPPERCASE');
  const [copied, setCopied] = useState(false);

  const output = convert(input, selected);

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <main className="tool-page">
          <div className="tool-container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="breadcrumb-sep" aria-hidden="true">›</span>
              <span aria-current="page">Case Converter</span>
            </nav>
            <header className="tool-header">
              <div className="tool-header-icon" aria-hidden="true">🔡</div>
              <h1>Case Converter</h1>
              <p>Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, or snake_case instantly.</p>
            </header>

            <AdSlot type="banner" />

            <div className="form-group">
              <label htmlFor="case-input">Enter your text</label>
              <textarea
                id="case-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Paste or type your text here..."
                rows={6}
              />
            </div>

            <div className="form-group">
              <label>Select case type</label>
              <div className="checkbox-group" role="group" aria-label="Case options">
                {CASES.map(c => (
                  <label key={c} className="checkbox-item">
                    <input
                      type="radio"
                      name="case"
                      checked={selected === c}
                      onChange={() => setSelected(c)}
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>

            {input && (
              <div aria-live="polite" className="mt-6">
                <div className="output-row-header">
                  <label className="mb-0">Converted Result</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setInput('')}
                      aria-label="Clear input"
                    >
                      Clear
                    </button>
                    <button
                      className={`btn btn-secondary btn-sm ${copied ? 'success' : ''}`}
                      onClick={copy}
                      aria-label="Copy result"
                    >
                      {copied ? '✓' : '📋'} {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className="output-panel">
                  {output}
                </div>
              </div>
            )}

            <AdSlot type="box" />

            <section className="how-to">
              <h2>How to use the Case Converter</h2>
              <ol className="steps-list">
                {[
                  ['Type or paste', 'your text in the input box.'],
                  ['Select a case', 'pick from UPPERCASE, lowercase, Title Case, Sentence case, camelCase or snake_case.'],
                  ['Copy the result', 'click the Copy button to copy to clipboard.'],
                ].map(([b, rest], i) => (
                  <li className="step-item" key={i}>
                    <span className="step-num">{i + 1}</span>
                    <p className="step-text"><strong>{b}</strong> — {rest}</p>
                  </li>
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
