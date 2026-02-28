'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';

export default function AgeCalculatorClient() {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState<null | {
    years: number; months: number; weeks: number;
    days: number; hours: number; minutes: number; nextBirthday: number;
  }>(null);

  useEffect(() => {
    if (!dob) { setResult(null); return; }
    const birth = new Date(dob);
    const now = new Date();
    if (birth > now) { setResult(null); return; }

    let years  = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    if (months < 0) { years--; months += 12; }
    if (now.getDate() < birth.getDate()) months--;

    const diffMs = now.getTime() - birth.getTime();
    const totalDays  = Math.floor(diffMs / 86400000);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = Math.floor(diffMs / 3600000);
    const totalMins  = Math.floor(diffMs / 60000);

    const nextBday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBday <= now) nextBday.setFullYear(now.getFullYear() + 1);
    const daysToNext = Math.ceil((nextBday.getTime() - now.getTime()) / 86400000);

    setResult({ years, months, weeks: totalWeeks, days: totalDays, hours: totalHours, minutes: totalMins, nextBirthday: daysToNext });
  }, [dob]);

  const maxDate = new Date().toISOString().split('T')[0];

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <main className="tool-page">
          <div className="tool-container">
            <nav className="breadcrumb"><a href="/">Home</a><span className="breadcrumb-sep">›</span><span aria-current="page">Age Calculator</span></nav>
            <header className="tool-header">
              <div className="tool-header-icon">🎂</div>
              <h1>Age Calculator</h1>
              <p>Calculate your exact age in years, months, weeks, days, hours and minutes. Find out how long until your next birthday too!</p>
            </header>

            <AdSlot type="banner" />

            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" value={dob} onChange={e => setDob(e.target.value)} max={maxDate} />
            </div>

            {result && (
              <div aria-live="polite">
                <div className="result-grid" style={{ marginBottom: '16px' }}>
                  {[
                    { v: result.years,   l: result.years === 1 ? 'Year' : 'Years' },
                    { v: result.months,  l: result.months === 1 ? 'Month' : 'Months' },
                    { v: result.weeks.toLocaleString(), l: result.weeks === 1 ? 'Week' : 'Weeks' },
                    { v: result.days.toLocaleString(),  l: result.days === 1 ? 'Day' : 'Days' },
                    { v: result.hours.toLocaleString(), l: result.hours === 1 ? 'Hour' : 'Hours' },
                    { v: result.minutes.toLocaleString(), l: result.minutes === 1 ? 'Minute' : 'Minutes' },
                  ].map(s => (
                    <div className="result-stat" key={s.l}>
                      <div className="result-stat-value">{s.v}</div>
                      <div className="result-stat-label">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="alert alert-info mt-4">
                  <span>🎉</span> Your next birthday is in <strong>{result.nextBirthday} days</strong>!
                </div>
              </div>
            )}

            <AdSlot type="box" />

            <section className="how-to">
              <h2>How to use the Age Calculator</h2>
              <ol className="steps-list">
                {[['Select your date of birth', 'from the date picker above.'],['Instant results', 'your age in years, months, weeks, days, hours and minutes appears immediately.'],['Next birthday', 'see exactly how many days until your next birthday.']].map(([b,r],i)=>(
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
