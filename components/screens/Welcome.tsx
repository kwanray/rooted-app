'use client'

interface Props {
  onStart: () => void
  onResume: () => void
  onSearch: () => void
  onNavigate: (idx: number) => void
  hasProgress: boolean
}

const POINTS_SUMMARY = [
  { n: '01', title: 'Truth is knowable',         desc: 'Can we actually know anything?' },
  { n: '02', title: 'Opposites can\'t both be true', desc: 'Not all views can be right at once.' },
  { n: '03', title: 'Something exists',           desc: 'Why is there anything at all?' },
  { n: '04', title: 'Nothing causes itself',      desc: 'Everything that began had a cause.' },
  { n: '05', title: 'The universe began',         desc: 'Science and logic agree — there was a start.' },
  { n: '06', title: 'The first cause is God',     desc: 'Uncaused, eternal, all-powerful.' },
  { n: '07', title: 'God speaks through miracles', desc: 'Are miracles even possible?' },
  { n: '08', title: 'The NT is reliable',         desc: 'How do we know it wasn\'t changed?' },
  { n: '09', title: 'Jesus claimed to be God',    desc: 'He didn\'t just claim to teach.' },
  { n: '10', title: 'His claim was confirmed',    desc: 'The resurrection — why it matters.' },
  { n: '11', title: 'Jesus is God',               desc: 'Putting it all together.' },
  { n: '12', title: 'God\'s word is truth',       desc: 'Why the Bible is trustworthy.' },
]

const WHY = [
  { title: 'Real logic',           desc: 'Arguments you can follow, test, and share with friends.' },
  { title: 'Plain language',       desc: 'No heavy theology. Just honest, clear explanations.' },
  { title: 'Made for Singapore',   desc: 'Context rooted in your world — school, NS, uni, work.' },
  { title: 'Step by step',         desc: 'Each point unlocks the next. You\'ll never feel lost.' },
]

const ms: React.CSSProperties = { fontFamily: 'Montserrat, sans-serif' }
const cg: React.CSSProperties = { fontFamily: 'Cormorant Garamond, serif' }

export default function Welcome({ onStart, onResume, onSearch, onNavigate, hasProgress }: Props) {
  return (
    <div className="animate-fade-in" style={{ background: '#FFFFFF' }}>

      {/* ── NAV ── */}
      <nav style={{ background: '#1A1A2A', borderBottom: '1px solid #FFFFFF11', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem', height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo — always visible */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
              <path d="M18 4 L18 32 M8 14 Q18 8 28 14" stroke="#D4A847" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="18" cy="4" r="2.5" fill="#D4A847"/>
            </svg>
            <span style={{ ...ms, fontSize: 13, fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.12em' }}>
              ROOTED<span style={{ color: '#D4A847' }}>.</span>
            </span>
          </div>

          {/* Desktop links — hidden on mobile */}
          <div className="hidden sm:flex" style={{ alignItems: 'center', gap: 20 }}>
            <a href="#points" style={{ ...ms, fontSize: 10, fontWeight: 700, color: '#AAAABB', letterSpacing: '0.1em', textDecoration: 'none' }}>12 POINTS</a>
            <a href="#why" style={{ ...ms, fontSize: 10, fontWeight: 700, color: '#AAAABB', letterSpacing: '0.1em', textDecoration: 'none' }}>ABOUT</a>
          </div>

          {/* Right actions — always visible */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <button
              onClick={onSearch}
              aria-label="Search"
              style={{ background: 'transparent', border: '1px solid #FFFFFF22', color: '#AAAABB', cursor: 'pointer', padding: 7, display: 'flex', alignItems: 'center', borderRadius: 2 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <button
              onClick={onStart}
              style={{ ...ms, fontSize: 11, fontWeight: 800, color: '#1A1A2A', background: '#D4A847', border: 'none', padding: '8px 18px', letterSpacing: '0.08em', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              BEGIN
            </button>
          </div>

        </div>
      </nav>

      {/* ── HERO ── */}
      <div style={{ background: '#1A1A2A', padding: '4rem 1.5rem 3.5rem', textAlign: 'center' }}>
        <div style={{ ...ms, fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', color: '#D4A847', marginBottom: '1rem' }}>
          A COMPANION TO NGIM · NORMAN GEISLER'S 12 POINTS
        </div>
        <h1 style={{ ...cg, fontSize: 'clamp(2.6rem, 7vw, 4.5rem)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '1.2rem' }}>
          Build your faith<br />
          on <em style={{ color: '#D4A847', fontStyle: 'italic' }}>solid ground</em>
        </h1>
        <p style={{ ...ms, fontSize: 14, color: '#AAAABB', maxWidth: 460, margin: '0 auto 1rem', lineHeight: 1.75 }}>
          A 12-step journey through the big questions of faith — designed for young Christians who want real answers, not just "just believe it."
        </p>
        <div style={{ ...ms, fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', color: '#D4A847', marginBottom: '2rem' }}>
          APOLOGETICS · EVANGELISM · DISCIPLESHIP
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onStart}
            style={{ ...ms, background: '#D4A847', color: '#1A1A2A', border: 'none', padding: '13px 32px', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#B8922E')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#D4A847')}
          >
            START MY JOURNEY
          </button>
          {hasProgress && (
            <button
              onClick={onResume}
              style={{ ...ms, background: 'transparent', color: '#D4A847', border: '1.5px solid #D4A84766', padding: '11px 28px', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#D4A847')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#D4A84766')}
            >
              RESUME JOURNEY
            </button>
          )}
        </div>
      </div>

      {/* ── TRIFECTA ── */}
      <div style={{ background: '#F7F7F9', borderTop: '3px solid #D4A847' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: '#E0E0E8' }}>
          {[
            { label: 'APOLOGETICS', title: 'Understand', desc: 'Build a logical and historical framework to understand your faith.' },
            { label: 'EVANGELISM',  title: 'Share',      desc: 'Become confident knowing how to share your faith with others.' },
            { label: 'DISCIPLESHIP',title: 'Grow',       desc: 'Get motivated to grow and help others put Christ first.' },
          ].map((item) => (
            <div key={item.label} style={{ background: '#F7F7F9', padding: '1.8rem 1.5rem', textAlign: 'center' }}>
              <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: '#D4A847', marginBottom: 6 }}>{item.label}</div>
              <div style={{ ...ms, fontSize: 14, fontWeight: 800, color: '#1A1A2A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>{item.title}</div>
              <div style={{ ...ms, fontSize: 12, color: '#555577', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 12 POINTS ── */}
      <div id="points" style={{ padding: '3rem 1.5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ ...ms, fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', color: '#D4A847', marginBottom: 6 }}>THE JOURNEY</div>
          <h2 style={{ ...cg, fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 600, color: '#1A1A2A', marginBottom: 6 }}>12 Stepping Stones</h2>
          <p style={{ ...ms, fontSize: 12, color: '#888899' }}>Each point builds on the last. Tap a card when you complete it.</p>
          <div style={{ width: 36, height: 3, background: '#D4A847', margin: '0.8rem auto 0' }}/>
        </div>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#E0E0E8' }}>
          {POINTS_SUMMARY.map((pt) => (
            <div
              key={pt.n}
              style={{ background: '#FFFFFF', padding: '1.1rem 1rem', cursor: 'pointer' }}
              onClick={() => onNavigate(parseInt(pt.n, 10) - 1)}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1A1A2A')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
            >
              <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.12em', color: '#D4A847', marginBottom: 6 }}>{pt.n}</div>
              <div style={{ ...cg, fontSize: '0.9rem', fontWeight: 600, color: '#1A1A2A', lineHeight: 1.35, marginBottom: 4 }}>{pt.title}</div>
              <div style={{ ...ms, fontSize: 11, color: '#888899', lineHeight: 1.5 }}>{pt.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            onClick={onStart}
            style={{ ...ms, background: '#1A1A2A', color: '#D4A847', border: 'none', padding: '12px 32px', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#D4A847', e.currentTarget.style.color = '#1A1A2A')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#1A1A2A', e.currentTarget.style.color = '#D4A847')}
          >
            BEGIN THE JOURNEY →
          </button>
        </div>
      </div>

      {/* ── SCRIPTURE ── */}
      <div style={{ background: '#1A1A2A', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: '#D4A847', marginBottom: '1rem' }}>KEY VERSE</div>
        <p style={{ ...cg, fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: '#FFFFFF', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 1rem' }}>
          "Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have — but with gentleness and respect."
        </p>
        <div style={{ ...ms, fontSize: 10, fontWeight: 800, letterSpacing: '0.12em', color: '#D4A847' }}>1 PETER 3:15</div>
      </div>

      {/* ── WHY ROOTED ── */}
      <div id="why" style={{ background: '#F7F7F9', borderTop: '3px solid #1A1A2A', padding: '3rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ ...ms, fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', color: '#D4A847', marginBottom: 6 }}>WHY ROOTED</div>
          <h2 style={{ ...cg, fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 600, color: '#1A1A2A', marginBottom: 6 }}>Built for you</h2>
          <p style={{ ...ms, fontSize: 12, color: '#888899' }}>Young Christians in Singapore who ask the hard questions.</p>
          <div style={{ width: 36, height: 3, background: '#D4A847', margin: '0.8rem auto 0' }}/>
        </div>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 1, background: '#E0E0E8' }}>
          {WHY.map((w) => (
            <div key={w.title} style={{ background: '#F7F7F9', padding: '1.4rem 1.2rem' }}>
              <div style={{ ...ms, fontSize: 11, fontWeight: 800, color: '#1A1A2A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{w.title}</div>
              <div style={{ ...ms, fontSize: 12, color: '#555577', lineHeight: 1.6 }}>{w.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SEARCH CTA ── */}
      <div style={{ background: '#FFFFFF', borderTop: '1px solid #E0E0E8', padding: '2rem 1.5rem', textAlign: 'center' }}>
        <button
          onClick={onSearch}
          style={{ ...ms, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#555577', border: '1.5px solid #E0E0E8', padding: '11px 24px', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer' }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#1A1A2A', e.currentTarget.style.color = '#1A1A2A')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E0E0E8', e.currentTarget.style.color = '#555577')}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          SEARCH ALL CONTENT
        </button>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ background: '#D4A847', padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <span style={{ ...ms, fontSize: 10, fontWeight: 800, color: '#1A1A2A', letterSpacing: '0.08em' }}>
          A NORM GEISLER INTERNATIONAL MINISTRIES RESOURCE
        </span>
        <a
          href="https://ngim.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...ms, fontSize: 10, fontWeight: 800, color: '#1A1A2A', letterSpacing: '0.06em', textDecoration: 'none', borderBottom: '1px solid #1A1A2A55' }}
        >
          NGIM.ORG →
        </a>
      </div>
      <div style={{ background: '#111118', padding: '1.5rem', textAlign: 'center' }}>
        <div style={{ ...ms, fontSize: 11, fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: 4 }}>
          ROOTED<span style={{ color: '#D4A847' }}>.</span>
        </div>
        <div style={{ ...ms, fontSize: 10, color: '#444466', lineHeight: 1.7 }}>
          Based on Norman Geisler's Twelve Points of Classical Apologetics<br />
          Contextualised for young Christians in Singapore
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 12 }}>
          {['ABOUT', 'RESOURCES', 'NGIM', 'CONTACT'].map((l) => (
            <span key={l} style={{ ...ms, fontSize: 10, color: '#555577', fontWeight: 700, letterSpacing: '0.07em', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
        <div style={{ ...ms, fontSize: 10, color: '#333344', letterSpacing: '0.06em', marginTop: 12 }}>
          12 POINTS · 4 SESSIONS · PROGRESS SAVED TO CLOUD
        </div>
      </div>

    </div>
  )
}
