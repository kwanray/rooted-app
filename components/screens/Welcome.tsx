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

// SVG paths for crisp B&W icons on gold background
const POINT_ICONS: Record<string, React.ReactNode> = {
  '01': <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>,
  '02': <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>,
  '03': <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c-2.5 4-4 6-4 9s1.5 5 4 9"/><path d="M12 3c2.5 4 4 6 4 9s-1.5 5-4 9"/><path d="M5.6 6.5h12.8M4.2 17.5h15.6"/></svg>,
  '04': <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>,
  '05': <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  '06': <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  '07': <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 20h14"/></svg>,
  '08': <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="19" x2="23" y2="19" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><path d="M5 19 Q5 7 12 7 Q19 7 19 19 Z" fill="white" opacity="0.9"/><path d="M9 19 Q9 13 12 13 Q15 13 15 19 Z" fill="#D4A847"/><circle cx="18" cy="17" r="2.8" fill="#D4A847" stroke="white" strokeWidth="1.5"/></svg>,
  '09': <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  '10': <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><line x1="7" y1="5" x2="7" y2="22"/><polygon points="7,4 17,4 20,7 17,10 7,10"/><polygon points="7,12 15,12 18,15 15,18 7,18"/></svg>,
  '11': <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="20"/><path d="M5 14c0 3.87 3.13 7 7 7s7-3.13 7-7"/><line x1="7" y1="11" x2="17" y2="11"/></svg>,
  '12': <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="8" x2="16" y2="8"/><line x1="9" y1="12" x2="16" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>,
}

const POINTS_SUMMARY = [
  { n: '01', challenge: 'The Foundation Challenge', title: 'Truth About Reality is Knowable',        desc: 'Can you prove that truth even exists?' },
  { n: '02', challenge: 'The Logic Challenge',       title: 'The Opposite of True is False',          desc: 'Can two opposites both be true at once?' },
  { n: '03', challenge: 'The Creator Challenge',     title: 'A Theistic God Exists',                  desc: 'Is there evidence that God is real?' },
  { n: '04', challenge: 'The Miracle Challenge',     title: 'Since God Exists, Miracles are Possible',desc: 'If God exists, can He break natural law?' },
  { n: '05', challenge: 'The Sign Challenge',        title: 'Miracles Can Confirm a Message from God',desc: 'How do you know a miracle is from God?' },
  { n: '06', challenge: 'The Evidence Challenge',    title: 'The NT is Historically Reliable',        desc: 'Can you trust a 2,000-year-old document?' },
  { n: '07', challenge: 'The Identity Challenge',    title: 'Jesus Claimed to be God',                desc: 'Who did Jesus really claim to be?' },
  { n: '08', challenge: 'The Proof Challenge',       title: 'Jesus Demonstrated His Divinity',        desc: 'What evidence backs up His claim?' },
  { n: '09', challenge: 'The Verdict Challenge',     title: 'Therefore Jesus is God',                 desc: "What's the only logical conclusion?" },
  { n: '10', challenge: 'The Authority Challenge',   title: 'Whatever Jesus Teaches is True',         desc: "If Jesus is God, what does that mean for His words?" },
  { n: '11', challenge: 'The Scripture Challenge',   title: "Jesus Taught the Bible is God's Word",   desc: 'Did Jesus endorse the Bible as divine?' },
  { n: '12', challenge: 'The Final Challenge',       title: 'The Bible is the Word of God',           desc: "What does it mean if the Bible is truly God's Word?" },
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
              QUEST<span style={{ color: '#D4A847' }}>.</span>
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
      {/* ── HERO ── */}
      <style>{`
        .qhero { position: relative; overflow: hidden; background: #0A0814; }
        .qhero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .qhero-overlay { position: absolute; inset: 0; }
        .qhero-content { position: relative; z-index: 2; }

        /* ── Desktop ── text left, signpost right, image centred */
        @media (min-width: 641px) {
          .qhero          { min-height: clamp(500px, 56vw, 680px); display: flex; align-items: center; }
          .qhero-img      { object-position: 55% center; }
          .qhero-overlay  { background: linear-gradient(105deg,
                              rgba(8,6,18,0.97) 0%,
                              rgba(8,6,18,0.90) 28%,
                              rgba(8,6,18,0.50) 50%,
                              rgba(8,6,18,0.05) 68%); }
          .qhero-content  { padding: clamp(2.5rem, 5vw, 4rem); max-width: 540px; width: 100%; }
        }

        /* ── Mobile ── full overlay, image fills screen, text at bottom half ── */
        @media (max-width: 640px) {
          /* Single block — image fills everything, text overlaid */
          .qhero         { min-height: unset; display: flex; flex-direction: column; }
          .qhero-img     { position: relative !important; inset: unset !important;
                           display: block !important;
                           width: 100%; height: auto;
                           object-fit: contain; object-position: center top;
                           flex-shrink: 0; }
          .qhero-overlay { display: none !important; }
          .qhero-content { position: relative !important; z-index: 2;
                           padding: 0.75rem 1rem 1.1rem; width: 100%;
                           background: #0A0814;
                           border-top: 2px solid rgba(212,168,71,0.45); }
          /* Hide NGIM badge + ornament to save space */
          .qhero-content .cinzel-badge  { display: none !important; }
          .qhero-content .ornament-line { display: none !important; }
          .qhero-content h1             { font-size: 1.65rem !important; margin-bottom: 0.2rem !important; line-height: 1.0 !important; text-shadow: 0 2px 12px rgba(0,0,0,0.95) !important; }
          .qhero-content .for-truth     { padding: 4px 10px !important; margin-bottom: 0.45rem !important; }
          .qhero-content .for-truth span.cinzel { font-size: 0.6rem !important; }
          .qhero-content .body-copy     { font-size: 11px !important; margin-bottom: 0.5rem !important; line-height: 1.55 !important; text-shadow: 0 1px 8px rgba(0,0,0,0.95) !important; }
          .qhero-content .pillars-wrap  { margin-bottom: 0.65rem !important; padding: 6px 0 !important; }
          .qhero-content .pillars-wrap svg { width: 22px !important; height: 22px !important; }
          .qhero-content .pillar-label  { font-size: 7px !important; }
          .qhero-content .pillar-desc   { font-size: 7.5px !important; }
        }
        .cinzel-deco { font-family: 'Cinzel Decorative', serif; }
        .cinzel      { font-family: 'Cinzel', serif; }
        .pillar-divider { width: 1px; background: rgba(212,168,71,0.3); align-self: stretch; }
      `}</style>

      {/* ── MOBILE hero: image on top, text below ── */}
      <div className="sm:hidden" style={{ display: 'flex', flexDirection: 'column', background: '#0A0814' }}>
        <img
          src="/quest-hero.jpg"
          alt="A stone path to a castle with signpost"
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
        />
        <div style={{ borderTop: '2px solid rgba(212,168,71,0.45)', padding: '0.75rem 1rem 1.1rem', background: '#0A0814' }}>
          <h1 className="cinzel-deco" style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.0, marginBottom: '0.2rem' }}>
            BEGIN YOUR<br/><span style={{ color: '#D4A847' }}>QUEST</span>
          </h1>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(10,8,24,0.85)', border: '1px solid #D4A847', borderLeft: '3px solid #D4A847', borderRight: '3px solid #D4A847', padding: '4px 12px', marginBottom: '0.5rem' }}>
            <span style={{ color: '#D4A847', fontSize: 10 }}>◆</span>
            <span className="cinzel" style={{ fontSize: '0.6rem', fontWeight: 700, color: '#D4A847', letterSpacing: '0.22em' }}>FOR TRUTH</span>
            <span style={{ color: '#D4A847', fontSize: 10 }}>◆</span>
          </div>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: 'rgba(240,238,232,0.9)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
            <strong style={{ fontWeight: 800, color: '#FFFFFF' }}>Young disciple,</strong> the world will challenge your faith. Before it does — challenge it yourself.
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.65rem', borderTop: '1px solid rgba(212,168,71,0.2)', borderBottom: '1px solid rgba(212,168,71,0.2)', padding: '6px 0' }}>
            {[
              { icon: <svg viewBox="0 0 36 36" fill="none" width="22" height="22"><circle cx="18" cy="18" r="15" stroke="#D4A847" strokeWidth="1" opacity="0.5"/><polygon points="18,5 20,15 18,13 16,15" fill="#D4A847"/><circle cx="18" cy="18" r="2.2" fill="#D4A847"/></svg>, label: 'EXPLORE', desc: 'Big questions. Real answers.' },
              { icon: <svg viewBox="0 0 36 36" fill="none" width="22" height="22"><path d="M18 3L5 9v9c0 7.5 5.5 14.5 13 16 7.5-1.5 13-8.5 13-16V9z" fill="rgba(212,168,71,0.1)" stroke="#D4A847" strokeWidth="1.2"/><line x1="18" y1="10" x2="18" y2="22" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="16" x2="22" y2="16" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round"/></svg>, label: 'EQUIP', desc: 'Build a faith that lasts.' },
              { icon: <svg viewBox="0 0 36 36" fill="none" width="22" height="22"><path d="M4 30 L18 8 L32 30 Z" fill="rgba(212,168,71,0.1)" stroke="#D4A847" strokeWidth="1.2"/><line x1="18" y1="8" x2="18" y2="3" stroke="#D4A847" strokeWidth="1.2" strokeLinecap="round"/><path d="M18 3 L24 5 L18 7 Z" fill="#D4A847"/></svg>, label: 'EMBARK', desc: 'One quest. Eternal impact.' },
            ].map((p) => (
              <div key={p.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '0 4px' }}>
                {p.icon}
                <div className="cinzel" style={{ fontSize: 7, fontWeight: 700, color: '#D4A847', letterSpacing: '0.12em' }}>{p.label}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 7.5, color: 'rgba(240,238,232,0.6)', lineHeight: 1.4, textAlign: 'center' }}>{p.desc}</div>
              </div>
            ))}
          </div>
          <button onClick={onStart} style={{ fontFamily: "'Cinzel', serif", background: '#D4A847', color: '#0A0814', border: 'none', padding: '11px 0', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <svg viewBox="0 0 20 20" fill="none" stroke="#0A0814" strokeWidth="2" strokeLinecap="round" width="14" height="14"><line x1="4" y1="16" x2="16" y2="4"/><line x1="16" y1="16" x2="4" y2="4"/><line x1="6.5" y1="13.5" x2="4" y2="16"/><line x1="13.5" y1="6.5" x2="16" y2="4"/><line x1="6.5" y1="6.5" x2="4" y2="4"/><line x1="13.5" y1="13.5" x2="16" y2="16"/></svg>
            START MY QUEST
          </button>
          {hasProgress && (
            <button onClick={onResume} style={{ fontFamily: "'Cinzel', serif", background: 'transparent', color: '#D4A847', border: '1px solid #D4A84766', padding: '9px 0', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', cursor: 'pointer', width: '100%', marginTop: 8 }}>RESUME QUEST</button>
          )}
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9, color: 'rgba(240,238,232,0.35)', letterSpacing: '0.1em', marginTop: 8 }}>12 CHALLENGES. ONE QUEST. ARE YOU READY?</div>
        </div>
      </div>

      {/* ── DESKTOP hero: full bleed overlay ── */}
      <div className="qhero hidden sm:flex">
        <img className="qhero-img" src="/quest-hero.jpg" alt="A stone path leading to a castle with a signpost pointing to Christianity, God and Truth"/>
        <div className="qhero-overlay"/>

        <div className="qhero-content">

          {/* NGIM badge */}
          <div className="cinzel-badge" style={{ fontFamily: "'Cinzel', serif", fontSize: 10, fontWeight: 400, letterSpacing: '0.15em', color: '#D4A847', marginBottom: '0.6rem', opacity: 0.9, textAlign: 'left' }}>
            A COMPANION TO NGIM<br/>NORMAN GEISLER'S 12 POINTS
          </div>
          {/* Ornament line */}
          <div className="ornament-line" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.8rem' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(212,168,71,0.3)' }}/>
            <span style={{ color: '#D4A847', fontSize: 10 }}>◆</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(212,168,71,0.3)' }}/>
          </div>

          {/* Main headline — Cinzel Decorative, bold */}
          <h1 className="cinzel-deco" style={{ fontSize: 'clamp(2rem, 6.5vw, 4.2rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.05, marginBottom: '0.4rem', textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 60px rgba(212,168,71,0.2)' }}>
            BEGIN YOUR<br/>
            <span style={{ color: '#D4A847', textShadow: '0 0 30px rgba(212,168,71,0.5), 0 2px 20px rgba(0,0,0,0.9)' }}>QUEST</span>
          </h1>

          {/* FOR TRUTH banner — dark ribbon with gold border */}
          <div className="for-truth" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(10,8,24,0.85)', border: '1px solid #D4A847', borderLeft: '3px solid #D4A847', borderRight: '3px solid #D4A847', padding: '7px 20px', marginBottom: '1.2rem' }}>
            <span style={{ color: '#D4A847', fontSize: 11 }}>◆</span>
            <span className="cinzel" style={{ fontSize: 'clamp(0.72rem, 2vw, 0.88rem)', fontWeight: 700, color: '#D4A847', letterSpacing: '0.28em' }}>FOR TRUTH</span>
            <span style={{ color: '#D4A847', fontSize: 11 }}>◆</span>
          </div>

          {/* Body copy */}
          <p className="body-copy" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(12px, 1.5vw, 14px)', color: 'rgba(240,238,232,0.88)', maxWidth: 380, marginBottom: '1.4rem', lineHeight: 1.85, textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
            <strong style={{ fontWeight: 800, color: '#FFFFFF' }}>Young disciple,</strong> the world will challenge your faith. Before it does — challenge it yourself.
          </p>

          {/* Three pillars — icon on top, label + desc below, vertical gold dividers */}
          <div className="pillars-wrap" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.6rem', background: 'rgba(0,0,0,0.25)', padding: '12px 0', borderTop: '1px solid rgba(212,168,71,0.2)', borderBottom: '1px solid rgba(212,168,71,0.2)' }}>

            {/* EXPLORE — compass rose */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, padding: '0 8px' }}>
              <svg viewBox="0 0 36 36" fill="none" width="34" height="34">
                <circle cx="18" cy="18" r="15" stroke="#D4A847" strokeWidth="1" opacity="0.5"/>
                <circle cx="18" cy="18" r="10" stroke="#D4A847" strokeWidth="0.8" opacity="0.3"/>
                {/* N arrow — filled gold */}
                <polygon points="18,5 20,15 18,13 16,15" fill="#D4A847"/>
                {/* S arrow — dimmed */}
                <polygon points="18,31 20,21 18,23 16,21" fill="#D4A847" opacity="0.35"/>
                {/* W arrow */}
                <polygon points="5,18 15,16 13,18 15,20" fill="#D4A847" opacity="0.35"/>
                {/* E arrow */}
                <polygon points="31,18 21,16 23,18 21,20" fill="#D4A847" opacity="0.35"/>
                {/* Tick marks at 45deg */}
                <line x1="25.2" y1="10.8" x2="26.6" y2="9.4" stroke="#D4A847" strokeWidth="0.8" opacity="0.4"/>
                <line x1="25.2" y1="25.2" x2="26.6" y2="26.6" stroke="#D4A847" strokeWidth="0.8" opacity="0.4"/>
                <line x1="10.8" y1="25.2" x2="9.4" y2="26.6" stroke="#D4A847" strokeWidth="0.8" opacity="0.4"/>
                <line x1="10.8" y1="10.8" x2="9.4" y2="9.4" stroke="#D4A847" strokeWidth="0.8" opacity="0.4"/>
                <circle cx="18" cy="18" r="2.2" fill="#D4A847"/>
                <circle cx="18" cy="18" r="1" fill="#0A0814"/>
              </svg>
              <div className="pillar-label" style={{ fontFamily: "'Cinzel', serif", fontSize: 9, fontWeight: 700, color: '#D4A847', letterSpacing: '0.14em', textAlign: 'center' }}>EXPLORE</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9.5, color: 'rgba(240,238,232,0.6)', lineHeight: 1.5, textAlign: 'center' }}>Big questions.<br/>Real answers.</div>
            </div>

            {/* Divider */}
            <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(212,168,71,0.3)', flexShrink: 0 }}/>

            {/* EQUIP — shield with star/cross */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, padding: '0 8px' }}>
              <svg viewBox="0 0 36 36" fill="none" width="34" height="34">
                <path d="M18 3L5 9v9c0 7.5 5.5 14.5 13 16 7.5-1.5 13-8.5 13-16V9z" fill="rgba(212,168,71,0.1)" stroke="#D4A847" strokeWidth="1.2" strokeLinejoin="round"/>
                {/* 8-pointed star inside shield */}
                <polygon points="18,10 19.5,15.5 25,14 20.5,17.5 23,23 18,20 13,23 15.5,17.5 11,14 16.5,15.5" fill="none" stroke="#D4A847" strokeWidth="0.9" opacity="0.8"/>
                <circle cx="18" cy="17.5" r="2" fill="#D4A847" opacity="0.6"/>
              </svg>
              <div className="pillar-label" style={{ fontFamily: "'Cinzel', serif", fontSize: 9, fontWeight: 700, color: '#D4A847', letterSpacing: '0.14em', textAlign: 'center' }}>EQUIP</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9.5, color: 'rgba(240,238,232,0.6)', lineHeight: 1.5, textAlign: 'center' }}>Build a faith<br/>that lasts.</div>
            </div>

            {/* Divider */}
            <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(212,168,71,0.3)', flexShrink: 0 }}/>

            {/* EMBARK — mountain with flag */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, padding: '0 8px' }}>
              <svg viewBox="0 0 36 36" fill="none" width="34" height="34">
                {/* Mountain */}
                <path d="M4 30 L18 8 L32 30 Z" fill="rgba(212,168,71,0.1)" stroke="#D4A847" strokeWidth="1.2" strokeLinejoin="round"/>
                {/* Inner peak highlight */}
                <path d="M14 20 L18 8 L22 20" stroke="#D4A847" strokeWidth="0.8" strokeLinejoin="round" opacity="0.5"/>
                {/* Flag pole at peak */}
                <line x1="18" y1="8" x2="18" y2="3" stroke="#D4A847" strokeWidth="1.2" strokeLinecap="round"/>
                {/* Flag */}
                <path d="M18 3 L24 5 L18 7 Z" fill="#D4A847"/>
              </svg>
              <div className="pillar-label" style={{ fontFamily: "'Cinzel', serif", fontSize: 9, fontWeight: 700, color: '#D4A847', letterSpacing: '0.14em', textAlign: 'center' }}>EMBARK</div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 9.5, color: 'rgba(240,238,232,0.6)', lineHeight: 1.5, textAlign: 'center' }}>One quest.<br/>Eternal impact.</div>
            </div>

          </div>

                    {/* CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button
              onClick={onStart}
              style={{ fontFamily: "'Cinzel', serif", background: '#D4A847', color: '#0A0814', border: 'none', padding: '11px 28px', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 4px 20px rgba(212,168,71,0.3)', width: '100%' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#B8922E')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#D4A847')}
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="#0A0814" strokeWidth="2" strokeLinecap="round" width="16" height="16">
                <line x1="4" y1="16" x2="16" y2="4"/><line x1="16" y1="16" x2="4" y2="4"/>
                <line x1="6.5" y1="13.5" x2="4" y2="16"/><line x1="13.5" y1="6.5" x2="16" y2="4"/>
                <line x1="6.5" y1="6.5" x2="4" y2="4"/><line x1="13.5" y1="13.5" x2="16" y2="16"/>
              </svg>
              START MY QUEST
            </button>
            {hasProgress && (
              <button
                onClick={onResume}
                style={{ fontFamily: "'Cinzel', serif", background: 'transparent', color: '#D4A847', border: '1px solid #D4A84766', padding: '11px 28px', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#D4A847' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#D4A84766' }}
              >
                RESUME QUEST
              </button>
            )}
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(240,238,232,0.4)', letterSpacing: '0.1em', marginTop: 4 }}>
              12 CHALLENGES. ONE QUEST. ARE YOU READY?
            </div>
          </div>

        </div>
      </div>

            {/* ── TRIFECTA ── */}
      <div style={{ background: '#F7F7F9', borderTop: '3px solid #D4A847' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: '#E0E0E8' }}>
          {[
            { label: 'STAGE 1–3', title: 'Discover',     desc: 'Establish that truth exists and a theistic God is real.' },
            { label: 'STAGE 4–9', title: 'Investigate', desc: 'Examine miracles, the NT, and the claims of Jesus.' },
            { label: 'STAGE 10–12', title: 'Commit',      desc: 'Understand the authority of Scripture and what it means for your life.' },
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
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, color: '#1A1A2A', marginBottom: 8, letterSpacing: '0.04em' }}>12 Challenges</h2>
          <p style={{ ...ms, fontSize: 13, color: '#888899', lineHeight: 1.6 }}>Each challenge unlocks the next.<br/>Complete all 12 to finish your quest.</p>
          <div style={{ width: 40, height: 3, background: '#D4A847', margin: '1rem auto 0', borderRadius: 2 }}/>
        </div>

        {/* 4-column cards grid */}
        <style>{`.pts-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; } @media (min-width: 640px) { .pts-grid { grid-template-columns: repeat(4, 1fr); gap: 16px; } }`}</style>
        <div className="pts-grid" style={{ maxWidth: 960, margin: '0 auto' }}>
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
              {/* Gold icon circle with white SVG icon */}
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#D4A847', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                {POINT_ICONS[pt.n]}
              </div>
              {/* Challenge name — small label */}
              <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', color: '#D4A847', textTransform: 'uppercase', marginBottom: 10 }}>{pt.challenge}</div>
              {/* Framing question — BIG, hero text */}
              <div style={{ ...ms, fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', fontWeight: 800, color: '#1A1A2A', lineHeight: 1.35, marginBottom: 8, flex: 1 }}>{pt.desc}</div>
              {/* Point title — small supporting context */}
              <div style={{ ...ms, fontSize: 10, color: '#AAAAAA', lineHeight: 1.5, marginBottom: 14, letterSpacing: '0.02em' }}>{pt.title}</div>
              {/* Arrow CTA */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ ...ms, fontSize: 18, color: '#D4A847', lineHeight: 1 }}>→</span>
              </div>
            </div>
          ))}
        </div>



        {/* BEGIN CTA */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={onStart}
            style={{ ...ms, background: '#1A1A2A', color: '#D4A847', border: 'none', padding: '16px 48px', fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', cursor: 'pointer', borderRadius: 4, width: '100%', maxWidth: 480 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#D4A847'; e.currentTarget.style.color = '#1A1A2A' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#1A1A2A'; e.currentTarget.style.color = '#D4A847' }}
          >
            BEGIN THE QUEST →
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
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', fontWeight: 700, color: '#1A1A2A', marginBottom: 6, letterSpacing: '0.04em' }}>Your Quest Journey</h2>
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

      {/* ── GEISLER QUOTE ── */}
      <div style={{ background: '#1A1A2A', borderTop: '1px solid #D4A84733', padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 32, flexShrink: 0 }}>📖</span>
          <div style={{ flex: 1 }}>
            <p style={{ ...cg, fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#F0EEE8', lineHeight: 1.75, marginBottom: 8 }}>
              "The goal of this quest is not just to believe, but to know — and to live for the One who is Truth."
            </p>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: 11, fontWeight: 700, color: '#D4A847', letterSpacing: '0.08em' }}>— Norman Geisler</p>
          </div>
        </div>
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
