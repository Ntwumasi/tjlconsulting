import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Watch Your Webinar — TJL Consulting',
  description: 'Watch the full webinar: Replacing a Social Media Hire with AI. 45 minutes of actionable strategy for local service business owners.',
}

export default function WebinarThankYouPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --red: #dc2626;
          --red-dark: #b91c1c;
          --bg: #0a0a0a;
          --bg-card: #111111;
          --bg-card2: #1a1a1a;
          --border: rgba(255,255,255,0.07);
          --text: #ffffff;
          --text-muted: #a3a3a3;
          --text-dim: #525252;
        }
        html { scroll-behavior: smooth; }
        .ty-body {
          font-family: 'Inter', system-ui, sans-serif;
          background: var(--bg); color: var(--text);
          line-height: 1.6; -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }
        .ty-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(10,10,10,0.92); backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          padding: 0 2rem; height: 64px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .ty-nav-logo { font-size: 1.2rem; font-weight: 800; color: var(--red); text-decoration: none; letter-spacing: -0.03em; }
        .ty-nav-link { font-size: 0.85rem; color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
        .ty-nav-link:hover { color: var(--text); }
        .ty-page-header {
          padding: 100px 1.5rem 0;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        .ty-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(220,38,38,0.1); border: 1px solid rgba(220,38,38,0.25);
          color: #f87171; font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          padding: 0.3rem 0.9rem; border-radius: 999px; margin-bottom: 1.25rem;
        }
        .ty-badge-dot { width: 6px; height: 6px; background: #4ade80; border-radius: 50%; display: inline-block; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .ty-page-header h1 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 900; letter-spacing: -0.04em; margin-bottom: 0.75rem;
        }
        .ty-page-header h1 span { color: var(--red); }
        .ty-page-header p { font-size: 1rem; color: var(--text-muted); margin-bottom: 2.5rem; }
        .ty-video-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem 3rem;
        }
        .ty-video-outer {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 0 100px rgba(220,38,38,0.08), 0 30px 80px rgba(0,0,0,0.6);
        }
        .ty-video-ratio {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
        }
        .ty-video-ratio iframe {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%;
          border: none;
        }
        .ty-video-meta {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--border);
          font-size: 0.8rem; color: var(--text-muted);
        }
        .ty-video-meta .title { font-weight: 600; color: var(--text); font-size: 0.88rem; }
        .ty-video-meta .duration { display: flex; align-items: center; gap: 0.4rem; }
        .ty-video-meta .duration svg { width: 14px; height: 14px; stroke: var(--text-muted); fill: none; stroke-width: 2; }
        .ty-chapters-section {
          max-width: 900px; margin: 0 auto; padding: 0 1.5rem 5rem;
        }
        .ty-chapters-label {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--red); margin-bottom: 1.25rem;
        }
        .ty-chapter-list { display: flex; flex-direction: column; gap: 0.5rem; }
        .ty-chapter-item {
          display: flex; align-items: center; gap: 1rem;
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 10px; padding: 0.9rem 1.25rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .ty-chapter-item:hover { border-color: rgba(220,38,38,0.3); background: var(--bg-card2); }
        .ty-chapter-num {
          width: 28px; height: 28px; min-width: 28px;
          background: rgba(220,38,38,0.08); border: 1px solid rgba(220,38,38,0.2);
          border-radius: 6px; display: flex; align-items: center; justify-content: center;
          font-size: 0.72rem; font-weight: 700; color: #f87171;
        }
        .ty-chapter-info { flex: 1; }
        .ty-chapter-info .ch-title { font-size: 0.88rem; font-weight: 600; margin-bottom: 0.15rem; }
        .ty-chapter-info .ch-desc { font-size: 0.78rem; color: var(--text-muted); }
        .ty-chapter-time { font-size: 0.75rem; color: var(--text-dim); font-variant-numeric: tabular-nums; }
        .ty-cta-section {
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .ty-cta-inner {
          max-width: 900px; margin: 0 auto; padding: 4rem 1.5rem;
          display: grid; grid-template-columns: 1fr auto; gap: 2rem; align-items: center;
        }
        @media (max-width: 600px) { .ty-cta-inner { grid-template-columns: 1fr; } }
        .ty-cta-inner h2 { font-size: 1.5rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 0.5rem; }
        .ty-cta-inner p { font-size: 0.88rem; color: var(--text-muted); line-height: 1.7; }
        .ty-btn-cta {
          display: inline-block; background: var(--red); color: #fff;
          padding: 0.9rem 2rem; border-radius: 10px; font-size: 0.95rem;
          font-weight: 700; text-decoration: none; white-space: nowrap;
          letter-spacing: -0.01em; transition: background 0.2s, transform 0.15s;
        }
        .ty-btn-cta:hover { background: var(--red-dark); transform: translateY(-1px); }
        .ty-footer { padding: 1.75rem; text-align: center; font-size: 0.75rem; color: var(--text-dim); border-top: 1px solid var(--border); }
        .ty-footer a { color: var(--text-dim); text-decoration: underline; }
      `}</style>

      <div className="ty-body">
        <nav className="ty-nav">
          <a href="/" className="ty-nav-logo">TJL Consulting</a>
          <a href="https://tjlbusiness.com/audit" className="ty-nav-link">Book a Free AI Audit →</a>
        </nav>

        <div className="ty-page-header">
          <div className="ty-badge"><span className="ty-badge-dot"></span>You&apos;re in — your webinar is ready</div>
          <h1>Replacing a <span>Social Media Hire</span><br/>With AI</h1>
          <p>Watch the full 45-minute walkthrough below. No fluff — just the exact system we built.</p>
        </div>

        <div className="ty-video-wrap">
          <div className="ty-video-outer">
            <div className="ty-video-ratio">
              <iframe
                src="https://www.youtube.com/embed/Sdmp_fWnB4w?rel=0"
                title="Replacing a Social Media Hire with AI — TJL Consulting Webinar"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="ty-video-meta">
              <span className="title">Replacing a Social Media Hire with AI — Full Webinar</span>
              <span className="duration">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                45 min
              </span>
            </div>
          </div>
        </div>

        <div className="ty-chapters-section">
          <div className="ty-chapters-label">What&apos;s Covered</div>
          <div className="ty-chapter-list">
            <div className="ty-chapter-item">
              <div className="ty-chapter-num">01</div>
              <div className="ty-chapter-info">
                <div className="ch-title">The Real Cost of a Social Media Hire</div>
                <div className="ch-desc">Why $2,000–$4,000/month is the real number most owners don&apos;t calculate</div>
              </div>
              <span className="ty-chapter-time">0:00</span>
            </div>
            <div className="ty-chapter-item">
              <div className="ty-chapter-num">02</div>
              <div className="ty-chapter-info">
                <div className="ch-title">The 5-Stage AI Content System</div>
                <div className="ch-desc">Research → Ideation → Scripting → Creation → Cross-posting</div>
              </div>
              <span className="ty-chapter-time">8:30</span>
            </div>
            <div className="ty-chapter-item">
              <div className="ty-chapter-num">03</div>
              <div className="ty-chapter-info">
                <div className="ch-title">The Exact Tool Stack ($120/month)</div>
                <div className="ch-desc">Every tool, what it costs, and why we chose it</div>
              </div>
              <span className="ty-chapter-time">19:45</span>
            </div>
            <div className="ty-chapter-item">
              <div className="ty-chapter-num">04</div>
              <div className="ty-chapter-info">
                <div className="ch-title">The One Trap That Makes AI Sound Robotic</div>
                <div className="ch-desc">The fix that makes your content sound human every time</div>
              </div>
              <span className="ty-chapter-time">32:10</span>
            </div>
            <div className="ty-chapter-item">
              <div className="ty-chapter-num">05</div>
              <div className="ty-chapter-info">
                <div className="ch-title">Next Steps — Building This for Your Business</div>
                <div className="ch-desc">How to get started and what to do after the webinar</div>
              </div>
              <span className="ty-chapter-time">40:00</span>
            </div>
          </div>
        </div>

        <div className="ty-cta-section">
          <div className="ty-cta-inner">
            <div>
              <h2>Want Us to Build This for You?</h2>
              <p>Book a free 15-minute AI Audit. We&apos;ll look at your business, identify exactly where you&apos;re losing time and money, and show you what we&apos;d automate first — no obligation.</p>
            </div>
            <a href="https://tjlbusiness.com/audit" className="ty-btn-cta">Book Free AI Audit →</a>
          </div>
        </div>

        <footer className="ty-footer">
          © 2026 TJL Consulting · <a href="#">Privacy Policy</a> · <a href="#">Terms &amp; Conditions</a>
        </footer>
      </div>
    </>
  )
}
