'use client';
import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

export default function JSONFormatterClient() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError]   = useState('');
  const [indent, setIndent] = useState(2);
  const [copied, setCopied] = useState(false);

  const format = useCallback((raw: string, spaces: number) => {
    if (!raw.trim()) { setOutput(''); setError(''); return; }
    try {
      const parsed = JSON.parse(raw);
      setOutput(JSON.stringify(parsed, null, spaces));
      setError('');
    } catch (e: unknown) {
      setError((e as Error).message);
      setOutput('');
    }
  }, []);

  const minify = useCallback(() => {
    if (!input.trim()) return;
    try {
      setOutput(JSON.stringify(JSON.parse(input)));
      setError('');
    } catch (e: unknown) { setError((e as Error).message); }
  }, [input]);

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clear = () => { setInput(''); setOutput(''); setError(''); };

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <main className="tool-page">
          <div className="tool-container">
            <nav className="breadcrumb"><a href="/">Home</a><span className="breadcrumb-sep">›</span><span aria-current="page">JSON Formatter</span></nav>
            <header className="tool-header">
              <div className="tool-header-icon">🧩</div>
              <h1>JSON Formatter &amp; Validator</h1>
              <p>Paste raw or minified JSON to beautify it with proper indentation and syntax validation. Also supports minification.</p>
            </header>

            <AdSlot type="banner" />

            <div className="form-group">
              <div className="output-row-header">
                <label htmlFor="json-input" className="mb-0">Paste JSON</label>
                <button type="button" className="btn btn-secondary btn-sm" onClick={clear}>Clear</button>
              </div>
              <textarea
                id="json-input" value={input}
                onChange={e => { setInput(e.target.value); format(e.target.value, indent); }}
                placeholder={'{\n  "name": "ToolMint",\n  "free": true\n}'}
                rows={10}
                spellCheck={false}
                style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}
              />
            </div>

            {error && <div className="alert alert-error" role="alert">⚠ {error}</div>}

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                <label htmlFor="indent" style={{ margin: 0, whiteSpace: 'nowrap', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Indent: {indent}</label>
                <input type="range" id="indent" min={1} max={8} value={indent} onChange={e => { setIndent(+e.target.value); format(input, +e.target.value); }} style={{ flex: 1 }} />
              </div>
              <button className="btn btn-secondary btn-sm" onClick={minify}>Minify</button>
              <button className={`btn btn-sm ${copied ? 'btn-primary' : 'btn-secondary'}`} onClick={copy} disabled={!output}>
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>

            {output && (
              <div className="mt-6">
                <div className="output-row-header">
                  <label className="mb-0">
                    Formatted JSON {!error && <span style={{ color: 'var(--success)', fontWeight: 600 }}>✓ Valid</span>}
                  </label>
                </div>
                <div
                  className="output-panel mono"
                  aria-live="polite"
                  aria-label="Formatted JSON output"
                  style={{ maxHeight: '420px', overflowY: 'auto' }}
                >
                  {output}
                </div>
              </div>
            )}

            <AdSlot type="box" />

            <section className="how-to">
              <h2>How to use the JSON Formatter</h2>
              <ol className="steps-list">
                {[['Paste JSON', 'paste your raw or minified JSON into the input above.'],['Auto-format', 'the JSON is validated and formatted instantly as you type.'],['Adjust indent', 'drag the indent slider to change spacing (1–8 spaces).'],['Minify or Copy', 'click Minify to compact it, or Copy to clipboard.']].map(([b,r],i)=>(
                  <li className="step-item" key={i}><span className="step-num">{i+1}</span><p className="step-text"><strong>{b}</strong> — {r}</p></li>
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
