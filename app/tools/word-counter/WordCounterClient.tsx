'use client';
import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

export default function WordCounterClient() {
  const [text, setText] = useState('');

  const words     = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const chars     = text.length;
  const charsNoSp = text.replace(/\s/g, '').length;
  const sentences = text.trim() === '' ? 0 : (text.match(/[.!?]+/g) || []).length;
  const paragraphs= text.trim() === '' ? 0 : text.split(/\r?\n/).filter(p => p.trim()).length;
  const readTime  =
    words === 0     ? '0s' :
    words < 30      ? `${Math.ceil((words / 225) * 60)}s` :
                      `${Math.ceil(words / 225)}m`;

  const [copied, setCopied] = useState(false);

  const clear = useCallback(() => setText(''), []);
  const copy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
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
              <span aria-current="page">Word Counter</span>
            </nav>

            <header className="tool-header">
              <div className="tool-header-icon" aria-hidden="true">📝</div>
              <h1>Word Counter</h1>
              <p>Count words, characters, sentences and reading time instantly. Paste or type any text below.</p>
            </header>

            <AdSlot type="banner" />

            <div className="form-group">
              <label htmlFor="text-input">Enter or paste your text</label>
              <textarea
                id="text-input"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Start typing or paste your text here..."
                rows={10}
                aria-label="Text to analyze"
              />
            </div>

            <div className="btn-actions-group">
              <button className="btn btn-secondary btn-sm" onClick={clear} aria-label="Clear text">
                Clear
              </button>
              <button className={`btn btn-secondary btn-sm ${copied ? 'text-primary' : ''}`} onClick={copy} aria-label="Copy text">
                {copied ? '✓' : '📋'} {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="result-grid" role="region" aria-label="Results">
              {[
                { value: words,      label: 'Words' },
                { value: chars,      label: 'Characters' },
                { value: charsNoSp,  label: 'No Spaces' },
                { value: sentences,  label: 'Sentences' },
                { value: paragraphs, label: 'Paragraphs' },
                { value: readTime,   label: 'Read Time' },
              ].map(s => (
                <div className="result-stat" key={s.label}>
                  <div className="result-stat-value">{s.value}</div>
                  <div className="result-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <AdSlot type="box" />

            <section className="how-to" aria-label="How to use">
              <h2>How to use the Word Counter</h2>
              <ol className="steps-list">
                {[
                  ['Type or paste', 'your text into the text area above.'],
                  ['Instant results', 'word count, character count, sentences, and reading time update live.'],
                  ['Clear', 'use the Clear button to reset and start fresh.'],
                ].map(([b, rest], i) => (
                  <li className="step-item" key={i}>
                    <span className="step-num" aria-hidden="true">{i + 1}</span>
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
