'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

export default function PercentageCalculatorClient() {
  // Calculator 1: X% of Y
  const [p1, setP1] = useState(''); const [n1, setN1] = useState('');
  const r1 = p1 && n1 ? ((+p1 / 100) * +n1).toFixed(4).replace(/\.?0+$/, '') : '';

  // Calculator 2: X is what % of Y
  const [n2, setN2] = useState(''); const [total2, setTotal2] = useState('');
  const r2 = n2 && total2 && +total2 !== 0 ? ((+n2 / +total2) * 100).toFixed(4).replace(/\.?0+$/, '') : '';

  // Calculator 3: % change
  const [from3, setFrom3] = useState(''); const [to3, setTo3] = useState('');
  const r3 = from3 && to3 && +from3 !== 0 ? (((+to3 - +from3) / Math.abs(+from3)) * 100).toFixed(4).replace(/\.?0+$/, '') : '';
  const isIncrease = r3 !== '' && +r3 >= 0;



  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <main className="tool-page">
          <div className="tool-container">
            <nav className="breadcrumb"><a href="/">Home</a><span className="breadcrumb-sep">›</span><span aria-current="page">Percentage Calculator</span></nav>
            <header className="tool-header">
              <div className="tool-header-icon">💯</div>
              <h1>Percentage Calculator</h1>
              <p>Three powerful percentage calculators: find a percentage of a number, calculate what percent one number is of another, and compute percentage change.</p>
            </header>

            <AdSlot type="banner" />

            {/* Calc 1 */}
            <div className="result-card" style={{ textAlign: 'left', padding: '24px' }}>
              <h2 className="mb-4" style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                What is <span style={{ color: 'var(--brand)' }}>X%</span> of a number?
              </h2>
              <div className="input-row">
                <div className="form-group mb-0">
                  <label htmlFor="p1">Percentage (%)</label>
                  <input type="number" id="p1" value={p1} onChange={e => setP1(e.target.value)} placeholder="e.g. 20" />
                </div>
                <div className="form-group mb-0">
                  <label htmlFor="n1">Of Number</label>
                  <input type="number" id="n1" value={n1} onChange={e => setN1(e.target.value)} placeholder="e.g. 500" />
                </div>
              </div>
              {r1 && (
                <div className="alert alert-info mt-4" aria-live="polite">
                  {p1}% of {n1} = <strong>{r1}</strong>
                </div>
              )}
            </div>

            {/* Calc 2 */}
            <div className="result-card" style={{ textAlign: 'left', padding: '24px' }}>
              <h2 className="mb-4" style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                <span style={{ color: 'var(--brand)' }}>X</span> is what % of <span style={{ color: 'var(--brand)' }}>Y</span>?
              </h2>
              <div className="input-row">
                <div className="form-group mb-0">
                  <label htmlFor="n2">Number (X)</label>
                  <input type="number" id="n2" value={n2} onChange={e => setN2(e.target.value)} placeholder="e.g. 45" />
                </div>
                <div className="form-group mb-0">
                  <label htmlFor="t2">Total (Y)</label>
                  <input type="number" id="t2" value={total2} onChange={e => setTotal2(e.target.value)} placeholder="e.g. 200" />
                </div>
              </div>
              {r2 && (
                <div className="alert alert-info mt-4" aria-live="polite">
                  {n2} is <strong>{r2}%</strong> of {total2}
                </div>
              )}
            </div>

            {/* Calc 3 */}
            <div className="result-card" style={{ textAlign: 'left', padding: '24px' }}>
              <h2 className="mb-4" style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                Percentage <span style={{ color: 'var(--brand)' }}>Increase / Decrease</span>
              </h2>
              <div className="input-row">
                <div className="form-group mb-0">
                  <label htmlFor="from3">From</label>
                  <input type="number" id="from3" value={from3} onChange={e => setFrom3(e.target.value)} placeholder="e.g. 80" />
                </div>
                <div className="form-group mb-0">
                  <label htmlFor="to3">To</label>
                  <input type="number" id="to3" value={to3} onChange={e => setTo3(e.target.value)} placeholder="e.g. 100" />
                </div>
              </div>
              {r3 !== '' && (
                <div 
                  className="alert mt-4" 
                  style={{ 
                    color: isIncrease ? 'var(--success)' : 'var(--error)', 
                    borderColor: isIncrease ? 'rgba(0,200,150,0.2)' : 'rgba(239,68,68,0.2)', 
                    background: isIncrease ? 'var(--brand-glow)' : 'rgba(239,68,68,0.1)' 
                  }} 
                  aria-live="polite"
                >
                  {isIncrease ? '▲' : '▼'} {Math.abs(+r3)}% {isIncrease ? 'increase' : 'decrease'}
                </div>
              )}
            </div>

            <AdSlot type="box" />

            <section className="how-to">
              <h2>How to use the Percentage Calculator</h2>
              <ol className="steps-list">
                {[['Pick a calculator', 'choose from the three percentage calculators above.'],['Enter your numbers', 'fill in the input fields.'],['Read the result', 'the answer appears instantly below the inputs.']].map(([b,r],i)=>(
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
