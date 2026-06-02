'use client'

interface Props {
  onStart: () => void
  onResume: () => void
  onSearch: () => void
  onNavigate: (idx: number) => void
  hasProgress: boolean
  user?: { photoURL?: string | null; displayName?: string | null } | null
  onSignIn?: () => void
  onSignOut?: () => void
}

const POINTS_SUMMARY = [
  { n: '01', title: 'Truth About Reality is Knowable',        desc: 'Can we actually know anything for certain?',            icon: '🔍' },
  { n: '02', title: 'The Opposite of True is False',          desc: 'Opposites cannot both be true at the same time.',       icon: '⚖️' },
  { n: '03', title: 'A Theistic God Exists',                  desc: 'The cosmological, moral and teleological arguments.',   icon: '🌍' },
  { n: '04', title: 'Since God Exists, Miracles are Possible',desc: 'A theistic God can act in the natural world.',          icon: '☀️' },
  { n: '05', title: 'Miracles Can Confirm a Message from God',desc: 'The sign confirms the sermon; the act confirms the word.', icon: '💬' },
  { n: '06', title: 'The NT is Historically Reliable',        desc: 'Earlier, more, and more accurately copied manuscripts.', icon: '📜' },
  { n: '07', title: 'Jesus Claimed to be God',                desc: 'NT writers and Jesus himself made this claim.',         icon: '👑' },
  { n: '08', title: 'Jesus Demonstrated His Divinity',        desc: 'Fulfilled prophecy, sinless life, miracles, resurrection.', icon: '✨' },
  { n: '09', title: 'Therefore Jesus is God',                 desc: 'His claim was confirmed — putting it all together.',    icon: '🕊️' },
  { n: '10', title: 'Whatever Jesus Teaches is True',         desc: 'Since Jesus is God, his words carry divine authority.', icon: '📖' },
  { n: '11', title: "Jesus Taught the Bible is God's Word",   desc: 'Divine authority, infallible, inerrant, historically reliable.', icon: '🛡️' },
  { n: '12', title: 'The Bible is the Word of God',           desc: 'Anything opposed to it is false.',                     icon: '📕' },
]

const WHY = [
  { title: 'Real logic',           desc: 'Arguments you can follow, test, and share with friends.' },
  { title: 'Plain language',       desc: 'No heavy theology. Just honest, clear explanations.' },
  { title: 'Made for Singapore',   desc: 'Context rooted in your world — school, NS, uni, work.' },
  { title: 'Step by step',         desc: 'Each point unlocks the next. You\'ll never feel lost.' },
]

const ms: React.CSSProperties = { fontFamily: 'Montserrat, sans-serif' }
const cg: React.CSSProperties = { fontFamily: 'Cormorant Garamond, serif' }

export default function Welcome({ onStart, onResume, onSearch, onNavigate, hasProgress, user, onSignIn, onSignOut }: Props) {
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

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <button onClick={onSearch} aria-label="Search" style={{ background: 'transparent', border: '1px solid #FFFFFF22', color: '#AAAABB', cursor: 'pointer', padding: 7, display: 'flex', alignItems: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            {user ? (
              <button onClick={onSignOut} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
                {user.photoURL
                  ? <img src={user.photoURL} alt="" style={{ width: 28, height: 28, borderRadius: '50%', border: '1.5px solid #D4A84766' }} referrerPolicy="no-referrer" />
                  : <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#D4A84722', border: '1.5px solid #D4A84766', display: 'flex', alignItems: 'center', justifyContent: 'center', ...ms, fontSize: 10, color: '#D4A847', fontWeight: 800 }}>✓</div>
                }
              </button>
            ) : (
              <>
                {/* Icon-only on mobile, text on sm+ */}
                <button onClick={onSignIn} className="hidden sm:block" style={{ ...ms, fontSize: 10, fontWeight: 700, color: '#D4A847', background: 'transparent', border: '1px solid #D4A84744', padding: '6px 10px', cursor: 'pointer', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                  SIGN IN
                </button>
                <button onClick={onSignIn} className="sm:hidden" aria-label="Sign in" style={{ background: 'transparent', border: '1px solid #D4A84744', cursor: 'pointer', width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4A847', padding: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </button>
              </>
            )}
            <button onClick={onStart} style={{ ...ms, fontSize: 11, fontWeight: 800, color: '#1A1A2A', background: '#D4A847', border: 'none', padding: '8px 14px', letterSpacing: '0.08em', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              BEGIN
            </button>
          </div>

        </div>
      </nav>

      {/* ── HERO — full bleed image ── */}
      {/* CSS media queries via a style tag injected once */}
      <style>{`
        .hero-wrap { position: relative; overflow: hidden; background: #12121E; }
        .hero-img  { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .hero-text { position: relative; z-index: 2; }
        /* Desktop */
        @media (min-width: 641px) {
          .hero-wrap    { min-height: clamp(460px, 52vw, 600px); display: flex; align-items: center; }
          .hero-img     { object-fit: cover; object-position: 75% 35%; }
          .hero-overlay { background: linear-gradient(100deg, rgba(12,12,24,0.94) 0%, rgba(12,12,24,0.82) 30%, rgba(12,12,24,0.28) 52%, rgba(12,12,24,0.0) 68%); }
          .hero-text    { width: 100%; max-width: 900px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 4rem); }
        }
        /* Mobile — full image height, text overlaid at bottom */
        @media (max-width: 640px) {
          .hero-wrap    { min-height: 88vw; display: flex; align-items: flex-end; }
          .hero-img     { object-position: 70% center; }
          .hero-overlay { background: linear-gradient(to top, rgba(12,12,24,0.98) 0%, rgba(12,12,24,0.92) 35%, rgba(12,12,24,0.70) 55%, rgba(12,12,24,0.30) 75%, rgba(12,12,24,0.05) 100%); }
          .hero-text    { padding: 1.5rem 1.2rem 1.8rem; width: 100%; text-shadow: 0 1px 12px rgba(0,0,0,0.9), 0 2px 24px rgba(0,0,0,0.7); }
        }
      `}</style>

      <div className="hero-wrap">
        <img className="hero-img" src="/hero-journey.png" alt="Signpost on a mountain path pointing to Christianity, God and Truth"/>
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }}/>

        <div className="hero-text">
          <div style={{ ...ms, fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', color: '#D4A847', marginBottom: '0.75rem', textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
            A COMPANION TO NGIM · NORMAN GEISLER'S 12 POINTS
          </div>
          <h1 style={{ ...cg, fontSize: 'clamp(2rem, 5.5vw, 3.8rem)', fontWeight: 400, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '0.9rem', textShadow: '0 2px 16px rgba(0,0,0,0.95), 0 4px 32px rgba(0,0,0,0.8)' }}>
            Build your faith<br />
            on <em style={{ color: '#D4A847', fontStyle: 'italic' }}>solid ground</em>
          </h1>
          <p style={{ ...ms, fontSize: 13, color: 'rgba(240,238,232,0.95)', maxWidth: 400, marginBottom: '0.8rem', lineHeight: 1.75, textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
            A 12-step journey through the big questions of faith — designed for young Christians who want real answers, not just "just believe it."
          </p>
          <div style={{ ...ms, fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', color: '#D4A847', marginBottom: '1.5rem', textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
            APOLOGETICS · EVANGELISM · DISCIPLESHIP
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              onClick={onStart}
              style={{ ...ms, background: '#D4A847', color: '#1A1A2A', border: 'none', padding: '13px 28px', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#B8922E')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#D4A847')}
            >
              START MY JOURNEY
            </button>
            {hasProgress && (
              <button
                onClick={onResume}
                style={{ ...ms, background: 'transparent', color: '#F0EEE8', border: '1.5px solid rgba(240,238,232,0.4)', padding: '11px 24px', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#D4A847'; e.currentTarget.style.color = '#D4A847' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(240,238,232,0.4)'; e.currentTarget.style.color = '#F0EEE8' }}
              >
                RESUME JOURNEY
              </button>
            )}
          </div>
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
      <div id="points" style={{ background: '#F9F7F2', padding: '3rem 1.5rem 2.5rem' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ ...ms, fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', color: '#D4A847', marginBottom: 8 }}>THE JOURNEY</div>
          <h2 style={{ ...cg, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 600, color: '#1A1A2A', marginBottom: 8 }}>12 Stepping Stones</h2>
          <p style={{ ...ms, fontSize: 13, color: '#888899', lineHeight: 1.6 }}>Each point builds on the last.<br/>Tap a card when you complete it.</p>
          <div style={{ width: 40, height: 3, background: '#D4A847', margin: '1rem auto 0', borderRadius: 2 }}/>
        </div>

        {/* 4-column cards grid */}
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
          {POINTS_SUMMARY.map((pt) => (
            <div
              key={pt.n}
              onClick={() => onNavigate(parseInt(pt.n, 10) - 1)}
              style={{ background: '#FFFFFF', borderRadius: 12, padding: '1.1rem 1rem 0.9rem', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #EDE8DE', display: 'flex', flexDirection: 'column', gap: 0, transition: 'transform 0.15s, box-shadow 0.15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(212,168,71,0.18)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              {/* Gold number circle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#D4A847', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ ...ms, fontSize: 9, fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.05em' }}>{pt.n}</span>
                </div>
              </div>
              {/* Gold icon circle with B&W filter */}
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#D4A847', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, fontSize: 24, filter: 'grayscale(1) brightness(10)' }}>
                {pt.icon}
              </div>
              {/* Title */}
              <div style={{ ...cg, fontSize: '1rem', fontWeight: 600, color: '#1A1A2A', lineHeight: 1.35, marginBottom: 8, flex: 1 }}>{pt.title}</div>
              {/* Desc */}
              <div style={{ ...ms, fontSize: 11, color: '#888899', lineHeight: 1.6, marginBottom: 14 }}>{pt.desc}</div>
              {/* Arrow CTA */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ ...ms, fontSize: 18, color: '#D4A847', lineHeight: 1 }}>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer row matching mockup */}
        <div style={{ maxWidth: 960, margin: '2rem auto 0', background: '#FFFFFF', borderRadius: 12, padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #EDE8DE' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, maxWidth: 420 }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>📖</span>
            <p style={{ ...ms, fontSize: 13, color: '#555577', lineHeight: 1.7 }}>
              A 12-step journey through the big questions of faith — designed for young Christians who want real answers, not just <em>"just believe it."</em>
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[['🛡️','Apologetics'],['👥','Evangelism'],['❤️','Discipleship']].map(([icon, label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16 }}>{icon}</span>
                <span style={{ ...ms, fontSize: 12, fontWeight: 600, color: '#1A1A2A' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BEGIN CTA */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={onStart}
            style={{ ...ms, background: '#1A1A2A', color: '#D4A847', border: 'none', padding: '16px 48px', fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', cursor: 'pointer', borderRadius: 4, width: '100%', maxWidth: 480 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#D4A847'; e.currentTarget.style.color = '#1A1A2A' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#1A1A2A'; e.currentTarget.style.color = '#D4A847' }}
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
