'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

type Unit = 'metric' | 'imperial';

const CATEGORIES = [
  { max: 18.5, label: 'Underweight', color: '#3B82F6', tip: 'Consider speaking with a nutritionist.' },
  { max: 25,   label: 'Normal', color: '#00C896', tip: 'Great! Maintain a balanced diet and exercise.' },
  { max: 30,   label: 'Overweight', color: '#F59E0B', tip: 'Consider light exercise and a balanced diet.' },
  { max: Infinity, label: 'Obese', color: '#EF4444', tip: 'Consult a healthcare professional.' },
];

export default function BMICalculatorClient() {
  const [unit, setUnit] = useState<Unit>('metric');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');

  let bmi: number | null = null;
  if (unit === 'metric') {
    const w = parseFloat(weight), h = parseFloat(height) / 100;
    if (w > 0 && h > 0) bmi = w / (h * h);
  } else {
    const w = parseFloat(weight), h = (parseFloat(heightFt) * 12) + parseFloat(heightIn || '0');
    if (w > 0 && h > 0) bmi = (w / (h * h)) * 703;
  }

  const cat = bmi ? CATEGORIES.find(c => bmi! < c.max) : null;

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <main className="tool-page">
          <div className="tool-container">
            <nav className="breadcrumb"><a href="/">Home</a><span className="breadcrumb-sep">›</span><span aria-current="page">BMI Calculator</span></nav>
            <header className="tool-header">
              <div className="tool-header-icon">⚖️</div>
              <h1>BMI Calculator</h1>
              <p>Calculate your Body Mass Index using metric or imperial units and see which health category you fall into.</p>
            </header>

            <AdSlot type="banner" />

            <div className="form-group">
              <label>Unit System</label>
              <div className="checkbox-group">
                {(['metric', 'imperial'] as Unit[]).map(u => (
                  <label key={u} className="checkbox-item">
                    <input type="radio" name="unit" checked={unit === u} onChange={() => setUnit(u)} />
                    {u === 'metric' ? 'Metric (kg / cm)' : 'Imperial (lbs / ft)'}
                  </label>
                ))}
              </div>
            </div>

            <div className="input-row">
              <div className="form-group">
                <label htmlFor="weight">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                <input type="number" id="weight" value={weight} onChange={e => setWeight(e.target.value)} placeholder={unit === 'metric' ? '70' : '154'} min="1" />
              </div>
              {unit === 'metric' ? (
                <div className="form-group">
                  <label htmlFor="height-cm">Height (cm)</label>
                  <input type="number" id="height-cm" value={height} onChange={e => setHeight(e.target.value)} placeholder="175" min="1" />
                </div>
              ) : (
                <div className="form-group">
                  <label>Height (ft / in)</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input type="number" value={heightFt} onChange={e => setHeightFt(e.target.value)} placeholder="5" min="0" style={{ width: '50%' }} />
                    <input type="number" value={heightIn} onChange={e => setHeightIn(e.target.value)} placeholder="9" min="0" max="11" style={{ width: '50%' }} />
                  </div>
                </div>
              )}
            </div>

            {bmi && cat && (
              <div aria-live="polite" style={{ marginTop: '8px' }}>
                <div style={{ background: 'var(--bg-elevated)', border: `1px solid ${cat.color}33`, borderRadius: 'var(--radius-lg)', padding: '28px', textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: cat.color, lineHeight: 1, marginBottom: '8px' }}>
                    {bmi.toFixed(1)}
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: cat.color, marginBottom: '10px' }}>{cat.label}</div>
                  <div style={{ height: '8px', background: 'var(--bg-input)', borderRadius: '99px', margin: '16px auto', maxWidth: '320px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min((bmi / 40) * 100, 100)}%`, background: cat.color, borderRadius: '99px', transition: 'width 0.5s ease' }} />
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{cat.tip}</p>
                </div>
                <div className="result-grid">
                  {[{ range: '< 18.5', label: 'Underweight', c: '#3B82F6' }, { range: '18.5–24.9', label: 'Normal', c: '#00C896' }, { range: '25–29.9', label: 'Overweight', c: '#F59E0B' }, { range: '≥ 30', label: 'Obese', c: '#EF4444' }].map(r => (
                    <div key={r.label} className="result-stat" style={{ borderColor: cat.label === r.label ? r.c + '66' : 'var(--border)' }}>
                      <div className="result-stat-value" style={{ fontSize: '0.875rem', color: r.c }}>{r.range}</div>
                      <div className="result-stat-label">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <AdSlot type="box" />

            <section className="how-to">
              <h2>How to use the BMI Calculator</h2>
              <ol className="steps-list">
                {[['Choose units', 'select metric (kg/cm) or imperial (lbs/ft).'],['Enter your weight and height', 'fill in the fields above.'],['Read your result', 'your BMI score and health category appear instantly.']].map(([b,r],i)=>(
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
