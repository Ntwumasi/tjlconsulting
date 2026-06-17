'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function WebinarPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    const params = new URLSearchParams()
    params.append('firstName', data.get('name') as string)
    params.append('email', data.get('email') as string)
    params.append('business', data.get('business') as string)
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyYf3SakpcoT5IEah9ozDuPuBlLfF7tV_48FJk0PJmh_Apwxx0FPqJkcAnD27DX_5GP/exec',
        { method: 'POST', body: params, mode: 'no-cors' }
      )
    } catch (_) {}
    router.push('/webinar/thank-you')
  }

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --red: #dc2626;
          --red-dark: #b91c1c;
          --red-glow: rgba(220, 38, 38, 0.12);
          --bg: #0a0a0a;
          --bg-card: #111111;
          --bg-card2: #1a1a1a;
          --border: rgba(255,255,255,0.07);
          --text: #ffffff;
          --text-muted: #a3a3a3;
          --text-dim: #525252;
        }
        html { scroll-behavior: smooth; }
        .webinar-body {
          font-family: 'Inter', system-ui, sans-serif;
          background-color: var(--bg);
          color: var(--text);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
        .w-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(10,10,10,0.9);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          padding: 0 2rem; height: 64px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .w-nav-logo { font-size: 1.2rem; font-weight: 800; color: var(--red); text-decoration: none; letter-spacing: -0.03em; }
        .w-nav-cta {
          background: var(--red); color: #fff;
          padding: 0.45rem 1.2rem; border-radius: 6px;
          font-size: 0.85rem; font-weight: 600; text-decoration: none;
          transition: background 0.2s;
        }
        .w-nav-cta:hover { background: var(--red-dark); }
        .w-hero {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 110px 1.5rem 80px; position: relative; overflow: hidden;
        }
        .w-hero::before {
          content: ''; position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(220,38,38,0.13) 0%, transparent 65%);
          pointer-events: none;
        }
        .w-hero-inner { max-width: 800px; position: relative; z-index: 1; }
        .w-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(220,38,38,0.1); border: 1px solid rgba(220,38,38,0.25);
          color: #f87171; font-size: 0.75rem; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          padding: 0.35rem 1rem; border-radius: 999px; margin-bottom: 1.75rem;
        }
        .w-badge-dot { width: 6px; height: 6px; background: #f87171; border-radius: 50%; display: inline-block; }
        .w-h1 {
          font-size: clamp(2.1rem, 5.5vw, 3.6rem);
          font-weight: 900; line-height: 1.08; letter-spacing: -0.04em; margin-bottom: 1.25rem;
        }
        .w-h1 span { color: var(--red); }
        .w-hero-sub {
          font-size: clamp(1rem, 2vw, 1.15rem); color: var(--text-muted);
          max-width: 560px; margin: 0 auto 2.75rem; line-height: 1.75;
        }
        .w-form-card {
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 18px; padding: 2.5rem 2.25rem;
          max-width: 460px; margin: 0 auto;
          box-shadow: 0 0 80px rgba(220,38,38,0.07), 0 20px 60px rgba(0,0,0,0.5);
        }
        .w-form-card h2 { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.35rem; letter-spacing: -0.02em; }
        .w-form-card > p { font-size: 0.83rem; color: var(--text-muted); margin-bottom: 1.75rem; }
        .w-form-group { margin-bottom: 1rem; }
        .w-form-group label { display: block; font-size: 0.78rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.4rem; letter-spacing: 0.02em; }
        .w-form-group input, .w-form-group select {
          width: 100%; background: var(--bg-card2); border: 1px solid var(--border);
          border-radius: 8px; padding: 0.72rem 1rem; color: var(--text);
          font-family: inherit; font-size: 0.93rem; outline: none; transition: border-color 0.2s;
        }
        .w-form-group input::placeholder { color: var(--text-dim); }
        .w-form-group input:focus, .w-form-group select:focus { border-color: rgba(220,38,38,0.5); }
        .w-form-group select option { background: #1a1a1a; }
        .w-btn-submit {
          width: 100%; background: var(--red); color: #fff; border: none;
          border-radius: 8px; padding: 0.9rem 1.5rem; font-family: inherit;
          font-size: 1rem; font-weight: 700; cursor: pointer; margin-top: 0.5rem;
          transition: background 0.2s, transform 0.1s; letter-spacing: -0.01em;
        }
        .w-btn-submit:hover { background: var(--red-dark); transform: translateY(-1px); }
        .w-form-note { font-size: 0.73rem; color: var(--text-dim); text-align: center; margin-top: 0.9rem; }
        .w-proof-bar {
          display: flex; justify-content: center; gap: 0; flex-wrap: wrap;
          border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
        }
        .w-proof-item {
          text-align: center; padding: 2rem 3rem;
          border-right: 1px solid var(--border);
        }
        .w-proof-item:last-child { border-right: none; }
        .w-proof-item .num { font-size: 1.7rem; font-weight: 800; color: var(--red); letter-spacing: -0.04em; }
        .w-proof-item .label { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem; }
        .w-section { max-width: 900px; margin: 0 auto; padding: 5.5rem 1.5rem; }
        .w-section-label {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--red); margin-bottom: 0.75rem;
        }
        .w-section h2 {
          font-size: clamp(1.7rem, 3vw, 2.3rem); font-weight: 800;
          letter-spacing: -0.035em; margin-bottom: 0.75rem;
        }
        .w-section > p { color: var(--text-muted); font-size: 0.97rem; margin-bottom: 2.75rem; max-width: 520px; }
        .w-learn-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1px; background: var(--border); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden;
        }
        .w-learn-card { background: var(--bg-card); padding: 1.75rem; transition: background 0.2s; }
        .w-learn-card:hover { background: var(--bg-card2); }
        .w-learn-icon {
          width: 42px; height: 42px;
          background: var(--red-glow);
          border: 1px solid rgba(220,38,38,0.2);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.1rem;
        }
        .w-learn-icon svg { width: 20px; height: 20px; stroke: #f87171; fill: none; stroke-width: 1.75; stroke-linecap: round; stroke-linejoin: round; }
        .w-learn-card h3 { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.45rem; letter-spacing: -0.01em; }
        .w-learn-card p { font-size: 0.82rem; color: var(--text-muted); line-height: 1.65; }
        .w-about-section { background: var(--bg-card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .w-about-inner {
          max-width: 900px; margin: 0 auto; padding: 5rem 1.5rem;
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
        }
        @media (max-width: 680px) {
          .w-about-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .w-proof-item { padding: 1.5rem 1.5rem; }
        }
        .w-about-text h2 { font-size: 1.8rem; font-weight: 800; letter-spacing: -0.035em; margin-bottom: 1rem; }
        .w-about-text p { font-size: 0.88rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 0.75rem; }
        .w-result-box { background: var(--bg); border: 1px solid var(--border); border-radius: 14px; padding: 1.5rem; overflow: hidden; }
        .w-result-box .result-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: var(--red); margin-bottom: 1rem; }
        .w-result-row { display: flex; justify-content: space-between; align-items: center; padding: 0.65rem 0; border-bottom: 1px solid var(--border); font-size: 0.85rem; }
        .w-result-row:last-child { border-bottom: none; }
        .w-result-row .metric { color: var(--text-muted); }
        .w-result-row .value { font-weight: 700; }
        .w-result-row .value.red { color: var(--red); }
        .w-bottom-cta { text-align: center; padding: 7rem 1.5rem; position: relative; overflow: hidden; }
        .w-bottom-cta::before {
          content: ''; position: absolute; bottom: -80px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .w-bottom-cta h2 { font-size: clamp(1.7rem, 3vw, 2.5rem); font-weight: 800; letter-spacing: -0.04em; margin-bottom: 0.75rem; }
        .w-bottom-cta p { color: var(--text-muted); font-size: 1rem; margin-bottom: 2.25rem; }
        .w-btn-large {
          display: inline-block; background: var(--red); color: #fff;
          padding: 1rem 2.75rem; border-radius: 10px; font-size: 1.05rem;
          font-weight: 700; text-decoration: none; letter-spacing: -0.01em;
          transition: background 0.2s, transform 0.15s;
        }
        .w-btn-large:hover { background: var(--red-dark); transform: translateY(-2px); }
        .w-footer { border-top: 1px solid var(--border); padding: 1.75rem; text-align: center; font-size: 0.75rem; color: var(--text-dim); }
        .w-footer a { color: var(--text-dim); text-decoration: underline; }
      `}</style>

      <div className="webinar-body">
        <nav className="w-nav">
          <Link href="/" className="w-nav-logo">TJL Consulting</Link>
          <a href="#register" className="w-nav-cta">Watch Free Webinar</a>
        </nav>

        <section className="w-hero">
          <div className="w-hero-inner">
            <div className="w-badge"><span className="w-badge-dot"></span>Free Webinar — Watch Instantly</div>
            <h1 className="w-h1">Replace Your <span>$3,200/Month</span><br/>Social Media Hire<br/>With a $120/Month AI System</h1>
            <p className="w-hero-sub">Watch how we built a fully automated social media engine for a local service business — from content creation to posting — in one weekend.</p>

            <div className="w-form-card" id="register">
              <h2>Get Instant Access</h2>
              <p>Free · No credit card · Watch immediately</p>
              <form onSubmit={handleSubmit}>
                <div className="w-form-group">
                  <label>First Name</label>
                  <input type="text" name="name" placeholder="John" required />
                </div>
                <div className="w-form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="john@yourbusiness.com" required />
                </div>
                <div className="w-form-group">
                  <label>What type of business do you run?</label>
                  <select name="business" required>
                    <option value="" disabled>Select your industry</option>
                    <option value="Home Services">Home Services</option>
                    <option value="Marketing / Advertising">Marketing / Advertising</option>
                    <option value="Financial Services">Financial Services</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Fitness / Wellness">Fitness / Wellness</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Legal Services">Legal Services</option>
                    <option value="E-commerce / Retail">E-commerce / Retail</option>
                    <option value="Restaurant / Food & Beverage">Restaurant / Food &amp; Beverage</option>
                    <option value="Education / Coaching">Education / Coaching</option>
                    <option value="Technology / SaaS">Technology / SaaS</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button type="submit" className="w-btn-submit" disabled={loading}>{loading ? 'Sending...' : 'Watch the Free Webinar →'}</button>
              </form>
              <p className="w-form-note">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>

        <div className="w-proof-bar">
          <div className="w-proof-item"><div className="num">$3,080</div><div className="label">Saved per month</div></div>
          <div className="w-proof-item"><div className="num">45 min</div><div className="label">Webinar length</div></div>
          <div className="w-proof-item"><div className="num">$120/mo</div><div className="label">Total tool cost</div></div>
          <div className="w-proof-item"><div className="num">1 weekend</div><div className="label">To build the system</div></div>
        </div>

        <div className="w-section">
          <div className="w-section-label">What&apos;s Inside</div>
          <h2>What You&apos;ll Learn in 45 Minutes</h2>
          <p>No fluff. No theory. Just the exact system we built and the numbers behind it.</p>
          <div className="w-learn-grid">
            <div className="w-learn-card">
              <div className="w-learn-icon">
                <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>The Real Cost Breakdown</h3>
              <p>Why a social media hire costs $2,000–$4,000/month and how AI replaces every function for $120.</p>
            </div>
            <div className="w-learn-card">
              <div className="w-learn-icon">
                <svg viewBox="0 0 24 24"><rect x="2" y="3" width="6" height="5" rx="1"/><rect x="9" y="3" width="6" height="5" rx="1"/><rect x="16" y="3" width="6" height="5" rx="1"/><path d="M5 8v3M12 8v3M19 8v3M5 11h14M12 14v7M9 18h6"/></svg>
              </div>
              <h3>The 5-Stage AI System</h3>
              <p>Research → Ideation → Scripting → Creation → Cross-posting. Fully automated, runs on autopilot.</p>
            </div>
            <div className="w-learn-card">
              <div className="w-learn-icon">
                <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3>The Exact Tool Stack</h3>
              <p>The specific tools we use, what each one costs, and why we chose them over the alternatives.</p>
            </div>
            <div className="w-learn-card">
              <div className="w-learn-icon">
                <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3>The One Trap to Avoid</h3>
              <p>The mistake that makes AI content sound robotic — and the simple fix that makes it sound human.</p>
            </div>
          </div>
        </div>


        <div className="w-bottom-cta">
          <h2>Ready to Build This<br/>For Your Business?</h2>
          <p>Watch the free webinar and we&apos;ll show you exactly where to start.</p>
          <a href="#register" className="w-btn-large">Watch the Free Webinar →</a>
        </div>

        <footer className="w-footer">
          © 2026 TJL Consulting · <a href="#">Privacy Policy</a> · <a href="#">Terms &amp; Conditions</a> · No spam, ever.
        </footer>
      </div>
    </>
  )
}
