'use client';
import { useState, useRef, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

// Lightweight QR using Google Charts API (no npm package needed)
function qrUrl(text: string, size: number) {
  return `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${encodeURIComponent(text)}&choe=UTF-8`;
}

export default function QRGeneratorClient() {
  const [text, setText] = useState('');
  const [size, setSize] = useState(256);
  const [generated, setGenerated] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = useCallback(() => {
    if (!text.trim()) return;
    setLoading(true);
    setGenerated(qrUrl(text.trim(), size));
  }, [text, size]);

  const download = () => {
    const a = document.createElement('a');
    a.href = generated;
    a.download = 'qrcode.png';
    a.click();
  };

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <main className="tool-page">
          <div className="tool-container">
            <nav className="breadcrumb"><a href="/">Home</a><span className="breadcrumb-sep">›</span><span aria-current="page">QR Code Generator</span></nav>
            <header className="tool-header">
              <div className="tool-header-icon">📱</div>
              <h1>QR Code Generator</h1>
              <p>Create QR codes instantly for any URL, text, email or phone number. Download as PNG, ready for print or digital use.</p>
            </header>

            <AdSlot type="banner" />

            <div className="form-group">
              <label htmlFor="qr-text">Enter URL or Text</label>
              <textarea id="qr-text" value={text} onChange={e => setText(e.target.value)} placeholder="https://example.com or any text..." rows={4} />
            </div>

            <div className="form-group">
              <label htmlFor="qr-size">QR Code Size: <strong style={{ color: 'var(--brand)' }}>{size}×{size}px</strong></label>
              <input type="range" id="qr-size" min={128} max={512} step={64} value={size} onChange={e => setSize(+e.target.value)} />
            </div>

            <button className="btn btn-primary btn-full mb-6" onClick={generate} disabled={!text.trim()}>
              Generate QR Code
            </button>

            {generated && (
              <div style={{ textAlign: 'center', padding: '32px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }} aria-live="polite">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={generated} alt="Generated QR Code"
                  width={size} height={size}
                  style={{ margin: '0 auto 20px', borderRadius: '8px', background: '#fff', padding: '12px' }}
                  onLoad={() => setLoading(false)}
                />
                {!loading && (
                  <button className="btn btn-secondary" onClick={download}>⬇ Download PNG</button>
                )}
              </div>
            )}

            <AdSlot type="box" />

            <section className="how-to">
              <h2>How to use the QR Code Generator</h2>
              <ol className="steps-list">
                {[['Enter your content', 'type or paste a URL, text, email or phone number.'],['Set size', 'drag the slider to choose the QR code resolution.'],['Generate', 'click Generate QR Code.'],['Download', 'click Download PNG to save the QR code image.']].map(([b,r],i)=>(
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
