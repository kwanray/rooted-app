'use client'

import { useState, useEffect } from 'react'
import { POINTS, PHASE_LABELS, PHASE_ACCENTS, PHASE_DIMS } from '@/lib/data'
import VisualBlocks from '@/components/ui/VisualBlocks'
import ReflectField from '@/components/ui/ReflectField'
import AskAI from '@/components/ui/AskAI'
import type { PainPointId } from '@/lib/types'

interface Props {
  idx: number
  startingIdx: number
  completed: number[]
  painPointId: PainPointId | null
  reflection: string
  onReflectionChange: (val: string) => void
  onMarkDone: () => void
  onBack: () => void
  onHome: () => void
  onSearch: () => void
  onNavigate: (idx: number) => void
}

const C = {
  page:       '#12121E',
  surface:    '#1E1E2E',
  surfaceAlt: '#252536',
  border:     '#FFFFFF14',
  borderGold: '#D4A84740',
  gold:       '#D4A847',
  goldDim:    '#D4A84722',
  white:      '#F0EEE8',
  muted:      '#9090B0',
  hint:       '#555570',
}

const ms = { fontFamily: 'Montserrat, sans-serif' }
const cg = { fontFamily: 'Cormorant Garamond, serif' }

const CHALLENGE_DATA: Record<number, { challenge: string; question: string }> = {
  0:  { challenge: 'The Foundation Challenge', question: 'Can you prove that truth even exists?' },
  1:  { challenge: 'The Logic Challenge',       question: 'Can two opposites both be true at once?' },
  2:  { challenge: 'The Creator Challenge',     question: 'Is there evidence that God is real?' },
  3:  { challenge: 'The Miracle Challenge',     question: 'If God exists, can He break natural law?' },
  4:  { challenge: 'The Sign Challenge',        question: 'How do you know a miracle is from God?' },
  5:  { challenge: 'The Evidence Challenge',    question: 'Can you trust a 2,000-year-old document?' },
  6:  { challenge: 'The Identity Challenge',    question: 'Who did Jesus really claim to be?' },
  7:  { challenge: 'The Proof Challenge',       question: 'What evidence backs up His claim?' },
  8:  { challenge: 'The Verdict Challenge',     question: "What's the only logical conclusion?" },
  9:  { challenge: 'The Authority Challenge',   question: 'If Jesus is God, what does that mean for His words?' },
  10: { challenge: 'The Scripture Challenge',   question: 'Did Jesus endorse the Bible as divine?' },
  11: { challenge: 'The Final Challenge',       question: "What does it mean if the Bible is truly God's Word?" },
}

const PHASE_COLORS = ['#8888AA', '#8B5CF6', '#D4A847', '#C0392B', '#2E7D52']

const POINT_SVG_ICONS: React.ReactNode[] = [
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c-2.5 4-4 6-4 9s1.5 5 4 9"/><path d="M12 3c2.5 4 4 6 4 9s-1.5 5-4 9"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 20h14"/></svg>,
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="19" x2="23" y2="19" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><path d="M5 19 Q5 7 12 7 Q19 7 19 19 Z" fill="white" opacity="0.9"/><path d="M9 19 Q9 13 12 13 Q15 13 15 19 Z" fill="#D4A847"/><circle cx="18" cy="17" r="2.8" fill="#D4A847" stroke="white" strokeWidth="1.5"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><line x1="7" y1="5" x2="7" y2="22"/><polygon points="7,4 17,4 20,7 17,10 7,10"/><polygon points="7,12 15,12 18,15 15,18 7,18"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="20"/><path d="M5 14c0 3.87 3.13 7 7 7s7-3.13 7-7"/><line x1="7" y1="11" x2="17" y2="11"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="8" x2="16" y2="8"/><line x1="9" y1="12" x2="16" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>,
]

const POINTS_SUMMARY = [
  { title: 'Truth is Knowable',               desc: 'Can you prove that truth even exists?' },
  { title: 'Opposites Cannot Both Be True',   desc: 'Can two opposites both be true at once?' },
  { title: 'The Theistic God Exists',         desc: 'Is there evidence that God is real?' },
  { title: 'Miracles Are Possible',           desc: 'If God exists, can He break natural law?' },
  { title: 'Miracles Confirm God\'s Message', desc: 'How do you know a miracle is from God?' },
  { title: 'The NT Is Historically Reliable', desc: 'Can you trust a 2,000-year-old document?' },
  { title: 'Jesus Claimed to Be God',         desc: 'Who did Jesus really claim to be?' },
  { title: 'Jesus Demonstrated His Divinity', desc: 'What evidence backs up His claim?' },
  { title: 'Therefore Jesus Is God',          desc: "What's the only logical conclusion?" },
  { title: 'Whatever Jesus Teaches Is True',  desc: 'If Jesus is God, what does that mean for His words?' },
  { title: "Jesus Taught the Bible Is God's Word", desc: 'Did Jesus endorse the Bible as divine?' },
  { title: 'The Bible Is the Word of God',    desc: "What does it mean if the Bible is truly God's Word?" },
]

// Logo — sword-through-shield matching the rest of the app
function QuestLogo({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2L3 5.5V11C3 15.5 6.5 19.2 11 20.5C15.5 19.2 19 15.5 19 11V5.5L11 2Z" fill="rgba(212,168,71,0.15)" stroke="#D4A847" strokeWidth="1.4" strokeLinejoin="round"/>
        <line x1="11" y1="1" x2="11" y2="17" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7.5" y1="7.5" x2="14.5" y2="7.5" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="18.5" r="1.3" fill="#D4A847"/>
      </svg>
      <span style={{ ...ms, fontSize: 13, fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.12em' }}>
        QUEST<span style={{ color: '#D4A847' }}>.</span>
      </span>
    </button>
  )
}

function ArgCard({ n, head, body }: { n: number; head: string; body: string }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen(o => !o)}
      style={{
        width: '100%', textAlign: 'left', background: open ? C.surfaceAlt : C.surface,
        border: `1px solid ${open ? C.borderGold : C.border}`,
        padding: '1rem 1.1rem', marginBottom: 8, cursor: 'pointer',
        transition: 'background 0.2s, border-color 0.2s', display: 'block',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{
          width: 24, height: 24, background: open ? C.gold : C.surfaceAlt,
          color: open ? C.page : C.muted,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 10, fontWeight: 800, ...ms, flexShrink: 0,
          transition: 'background 0.2s',
        }}>{n}</span>
        <span style={{ ...ms, fontSize: 12, fontWeight: 700, color: open ? C.gold : C.white, flex: 1, lineHeight: 1.4 }}>{head}</span>
        <span style={{ color: C.gold, fontSize: 16, fontWeight: 300, flexShrink: 0 }}>{open ? '−' : '+'}</span>
      </div>
      {open && (
        <p style={{ ...ms, fontSize: 13, color: C.muted, lineHeight: 1.8, marginTop: 12, paddingLeft: 34 }}>{body}</p>
      )}
    </button>
  )
}

export default function PointView({
  idx, startingIdx, completed, painPointId,
  reflection, onReflectionChange, onMarkDone, onBack, onHome, onSearch, onNavigate,
}: Props) {
  const [isDesktop, setIsDesktop] = useState(false)
  const [deepDiveOpen, setDeepDiveOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [idx])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const pt = POINTS[idx]
  const phaseLabel = PHASE_LABELS[pt.phase]
  const phaseColor = PHASE_COLORS[pt.phase] ?? C.gold
  const isHighlighted = painPointId ? pt.highlight.includes(painPointId) : false
  const isDone = completed.includes(idx)
  const isEntryPoint   = startingIdx > 0 && idx === startingIdx
  const isBacktracking = startingIdx > 0 && idx < startingIdx
  const entryBanner    = isEntryPoint && painPointId ? pt.entryBanners?.[painPointId] : null
  const activeHighlightMsg = painPointId && pt.highlightMsgs?.[painPointId]
    ? pt.highlightMsgs[painPointId] : pt.highlightMsg

  // ─── MOBILE LAYOUT (unchanged) ───────────────────────────────────────────
  if (!isDesktop) {
    return (
      <div style={{ minHeight: '100vh', background: C.page }}>

        {/* Sticky nav */}
        <div className="sticky top-0 z-10" style={{ background: C.page, borderBottom: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem', height: 50, gap: 12 }}>
            <QuestLogo onClick={onHome} />
            <div style={{ flex: 1, overflow: 'hidden' }}>
              {/* mini stage pills */}
              <div style={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap', padding: '4px 0' }}>
                {POINTS.map((pt2, i) => {
                  const isDone2 = completed.includes(i)
                  const isCurrent2 = i === idx
                  const accent = PHASE_ACCENTS[pt2.phase]
                  const dim = PHASE_DIMS[pt2.phase]
                  const isClickable = isDone2 || isCurrent2
                  let bg = '#F0F2F5', border = '#E4E6EB', textColor = '#BCC0C4'
                  if (isDone2 || isCurrent2) { bg = dim; border = accent; textColor = accent }
                  return (
                    <div key={i} onClick={() => isClickable && onNavigate(i)}
                      style={{ width: 26, height: 26, background: bg, border: `1.5px solid ${border}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: textColor, fontFamily: 'Lato, sans-serif', flexShrink: 0, cursor: isClickable ? 'pointer' : 'default', transition: 'all 0.2s' }}>
                      {isDone2 ? '✓' : pt2.n}
                    </div>
                  )
                })}
              </div>
            </div>
            <button onClick={onSearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, background: 'transparent', border: `1px solid ${C.border}`, cursor: 'pointer', color: C.muted, flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </button>
          </div>
        </div>

        {/* Hero */}
        <div style={{ background: `linear-gradient(160deg, #1A1A2E 0%, ${C.page} 100%)`, padding: '2rem 1.5rem 1.5rem', borderBottom: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: phaseColor, background: `${phaseColor}18`, border: `1px solid ${phaseColor}40`, padding: '4px 10px' }}>{phaseLabel.toUpperCase()}</span>
            <span style={{ ...ms, fontSize: 10, color: C.hint, letterSpacing: '0.06em' }}>STAGE {pt.n} / 12</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#D4A847', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {POINT_SVG_ICONS[idx] ?? POINT_SVG_ICONS[0]}
            </div>
            <div>
              <div style={{ ...ms, fontSize: 9, fontWeight: 800, color: '#D4A847', letterSpacing: '0.12em', marginBottom: 4 }}>{CHALLENGE_DATA[idx]?.challenge ?? ''}</div>
              <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.2rem, 4.5vw, 1.9rem)', fontWeight: 700, color: C.white, lineHeight: 1.2 }}>{CHALLENGE_DATA[idx]?.question ?? pt.title}</h1>
            </div>
          </div>
          <div style={{ ...ms, fontSize: 11, color: C.hint, marginBottom: 12, letterSpacing: '0.04em' }}>{pt.title}</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: C.goldDim, border: `1px solid ${C.borderGold}`, padding: '8px 14px', marginBottom: 8 }}>
            <span style={{ color: C.gold, fontSize: 14 }}>💡</span>
            <span style={{ ...ms, fontSize: 12, fontWeight: 700, color: C.gold, lineHeight: 1.4 }}>{pt.takeaway}</span>
          </div>
        </div>

        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 1rem 2rem' }}>
          {(entryBanner || isBacktracking || isHighlighted) && (
            <div style={{ background: C.surfaceAlt, borderLeft: `3px solid ${C.gold}`, padding: '1rem 1.2rem', margin: '1.2rem 0 0' }}>
              <p style={{ ...ms, fontSize: 12, color: C.white, lineHeight: 1.75 }}>
                {entryBanner ? `🧭 ${entryBanner}` : isBacktracking ? '🏗️ Foundation point — this underpins everything you\'ve already read.' : `✦ ${activeHighlightMsg}`}
              </p>
            </div>
          )}
          <div style={{ margin: '1.5rem 0', padding: '1.5rem', background: C.surface, borderTop: `3px solid ${C.gold}` }}>
            <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 10 }}>THE CLAIM</div>
            <p style={{ ...cg, fontSize: 'clamp(1.15rem, 3.5vw, 1.5rem)', fontStyle: 'italic', color: C.white, lineHeight: 1.7, margin: 0 }}>&ldquo;{pt.claim}&rdquo;</p>
          </div>
          <div style={{ margin: '0 0 1.2rem', padding: '1.2rem', background: C.surface, border: `1px solid ${C.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <span style={{ fontSize: 16 }}>🇸🇬</span>
              <span style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.muted }}>WHY THIS MATTERS HERE</span>
            </div>
            <p style={{ ...ms, fontSize: 13, color: C.muted, lineHeight: 1.85, margin: 0 }}>{pt.sg}</p>
          </div>
          <div style={{ margin: '0 0 0.5rem' }}>
            <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 10 }}>THE ARGUMENTS — TAP TO EXPLORE</div>
            {pt.geisler.map((arg, i) => <ArgCard key={i} n={i + 1} head={arg.head} body={arg.body} />)}
          </div>
          {pt.objections && pt.objections.length > 0 && (
            <div style={{ margin: '1rem 0 0.5rem' }}>
              <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.muted, marginBottom: 10 }}>COMMON OBJECTIONS</div>
              {pt.objections.map((obj, i) => <ArgCard key={i} n={i + 1} head={obj.head} body={obj.body} />)}
            </div>
          )}
          {pt.specialViz && (
            <div style={{ marginBottom: '1.2rem', marginTop: '1rem' }}>
              <VisualBlocks type={pt.specialViz} accent={C.gold} dim={C.goldDim} />
            </div>
          )}
          <div style={{ margin: '1.5rem 0', padding: '1.5rem', background: '#1E1E2E', borderLeft: `4px solid ${C.gold}` }}>
            <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 10 }}>KEY INSIGHT</div>
            <p style={{ ...ms, fontSize: 14, color: C.white, lineHeight: 1.85, margin: 0, fontWeight: 600 }}>{pt.insight}</p>
          </div>
          <div style={{ marginBottom: '1.2rem' }}>
            <ReflectField prompt={pt.reflect} pointIdx={idx} value={reflection} onChange={onReflectionChange} accent={C.gold} dim={C.goldDim} />
          </div>
          <div style={{ marginBottom: '1.2rem' }}>
            <AskAI pointN={pt.n} pointTitle={pt.title} accent={C.gold} dim={C.goldDim} />
          </div>
          {pt.deepDive && pt.deepDive.length > 0 && (
            <div style={{ marginBottom: '1.2rem' }}>
              <button onClick={() => setDeepDiveOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.1rem', background: C.surface, border: `1px solid ${deepDiveOpen ? C.borderGold : C.border}`, cursor: 'pointer' }}>
                <span style={{ ...ms, fontSize: 12, fontWeight: 700, color: deepDiveOpen ? C.gold : C.muted }}>📖 Advanced Reading</span>
                <span style={{ color: C.gold, fontSize: 16 }}>{deepDiveOpen ? '−' : '+'}</span>
              </button>
              {deepDiveOpen && pt.deepDive.map((item, i) => (
                <div key={i} style={{ background: C.surfaceAlt, borderBottom: `1px solid ${C.border}`, borderLeft: `1px solid ${C.border}`, borderRight: `1px solid ${C.border}`, padding: '1rem 1.1rem' }}>
                  <div style={{ ...ms, fontSize: 11, fontWeight: 700, color: C.gold, marginBottom: 6 }}>{item.head}</div>
                  <p style={{ ...ms, fontSize: 12, color: C.muted, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          )}
          <div style={{ margin: '1.5rem 0', padding: '1.8rem 1.5rem', background: C.surfaceAlt, textAlign: 'center', borderTop: `3px solid ${C.gold}` }}>
            <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 12 }}>KEY VERSE</div>
            <p style={{ ...cg, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: C.white, lineHeight: 1.8, margin: '0 0 10px' }}>&ldquo;{pt.scripture}&rdquo;</p>
            <div style={{ ...ms, fontSize: 10, fontWeight: 800, color: C.gold, letterSpacing: '0.1em' }}>— {pt.ref}</div>
            {pt.verses.length > 0 && <div style={{ ...ms, fontSize: 10, color: C.hint, marginTop: 6 }}>Also: {pt.verses.join(' · ')}</div>}
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <button onClick={onBack} style={{ flex: 1, padding: '14px', background: 'transparent', color: C.muted, border: `1.5px solid ${C.border}`, ...ms, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted }}>
              ← BACK
            </button>
            <button onClick={onMarkDone} style={{ flex: 3, padding: '14px', background: isDone ? C.surface : C.gold, color: isDone ? C.muted : C.page, border: isDone ? `1.5px solid ${C.border}` : 'none', ...ms, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', cursor: 'pointer' }}>
              {isDone ? '✓ NEXT STAGE →' : 'COMPLETE STAGE & CONTINUE →'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ─── DESKTOP LAYOUT (3-column) ────────────────────────────────────────────
  return (
    <div style={{ minHeight: '100vh', background: C.page }}>

      {/* ── Desktop sticky top nav ── */}
      <div className="sticky top-0 z-10" style={{ background: C.page, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 2rem', height: 56, gap: 20 }}>
          <QuestLogo onClick={onHome} />
          <div style={{ flex: 1 }} />
          <span style={{ ...ms, fontSize: 10, color: C.hint, letterSpacing: '0.08em' }}>
            STAGE {pt.n} / 12 — {CHALLENGE_DATA[idx]?.challenge}
          </span>
          <button onClick={onSearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, background: 'transparent', border: `1px solid ${C.border}`, cursor: 'pointer', color: C.muted, flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
        </div>
      </div>

      {/* ── 3-column body ── */}
      <div style={{ display: 'flex', maxWidth: 1400, margin: '0 auto', minHeight: 'calc(100vh - 56px)' }}>

        {/* ── LEFT SIDEBAR — Quest Map ── */}
        <div style={{ width: 260, flexShrink: 0, borderRight: `1px solid ${C.border}`, position: 'sticky', top: 56, height: 'calc(100vh - 56px)', overflowY: 'auto', padding: '1.5rem 0' }}>
          <div style={{ padding: '0 1.2rem', marginBottom: 16 }}>
            <div style={{ ...ms, fontSize: 8, fontWeight: 800, letterSpacing: '0.18em', color: C.hint, marginBottom: 4 }}>THE 12 POINTS</div>
            <div style={{ ...ms, fontSize: 11, fontWeight: 700, color: C.gold }}>QUEST MAP</div>
          </div>
          {/* Vertical stage list */}
          <div style={{ position: 'relative', paddingLeft: '1.2rem' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '2.05rem', top: 8, bottom: 8, width: 1, background: C.border }} />
            {POINTS_SUMMARY.map((s, i) => {
              const isDone2 = completed.includes(i)
              const isCurrent2 = i === idx
              const accent = PHASE_ACCENTS[POINTS[i].phase]
              const isClickable = isDone2 || isCurrent2
              return (
                <div key={i}
                  onClick={() => isClickable && onNavigate(i)}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 1.2rem 8px 0',
                    cursor: isClickable ? 'pointer' : 'default',
                    background: isCurrent2 ? `${accent}12` : 'transparent',
                    borderRight: isCurrent2 ? `3px solid ${accent}` : '3px solid transparent',
                    transition: 'background 0.15s',
                  }}
                >
                  {/* Node circle */}
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                    background: isDone2 ? accent : isCurrent2 ? accent : C.surfaceAlt,
                    border: `1.5px solid ${isDone2 || isCurrent2 ? accent : C.hint}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 8, fontWeight: 800, color: isDone2 || isCurrent2 ? C.page : C.hint,
                    fontFamily: 'Lato, sans-serif',
                    boxShadow: isCurrent2 ? `0 0 8px ${accent}66` : 'none',
                  }}>
                    {isDone2 ? '✓' : String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ ...ms, fontSize: 10, fontWeight: 700, color: isCurrent2 ? C.white : isDone2 ? C.muted : C.hint, lineHeight: 1.3, marginBottom: 2 }}>{s.title}</div>
                    {isCurrent2 && <div style={{ ...ms, fontSize: 9, color: accent, lineHeight: 1.3 }}>{s.desc}</div>}
                  </div>
                </div>
              )
            })}
          </div>
          {/* Bottom CTA */}
          <div style={{ margin: '1.5rem 1.2rem 0', padding: '1rem', background: C.surfaceAlt, border: `1px solid ${C.borderGold}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                <path d="M11 2L3 5.5V11C3 15.5 6.5 19.2 11 20.5C15.5 19.2 19 15.5 19 11V5.5L11 2Z" fill="rgba(212,168,71,0.15)" stroke="#D4A847" strokeWidth="1.4" strokeLinejoin="round"/>
                <line x1="11" y1="1" x2="11" y2="17" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="7.5" y1="7.5" x2="14.5" y2="7.5" stroke="#D4A847" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="11" cy="18.5" r="1.3" fill="#D4A847"/>
              </svg>
              <span style={{ ...ms, fontSize: 9, fontWeight: 700, color: C.gold }}>12 challenges. One quest.</span>
            </div>
            <div style={{ ...ms, fontSize: 9, color: C.muted }}>{completed.length} of 12 completed</div>
          </div>
        </div>

        {/* ── CENTRE — main content ── */}
        <div style={{ flex: 1, minWidth: 0, overflowY: 'auto', height: 'calc(100vh - 56px)' }}>

          {/* Hero band */}
          <div style={{ background: `linear-gradient(160deg, #1A1A2E 0%, ${C.page} 100%)`, padding: '2.5rem 2.5rem 2rem', borderBottom: `1px solid ${C.border}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: phaseColor, background: `${phaseColor}18`, border: `1px solid ${phaseColor}40`, padding: '4px 10px' }}>{phaseLabel.toUpperCase()}</span>
              <span style={{ ...ms, fontSize: 10, color: C.hint, letterSpacing: '0.06em' }}>STAGE {pt.n} / 12</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 12 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#D4A847', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {POINT_SVG_ICONS[idx] ?? POINT_SVG_ICONS[0]}
              </div>
              <div>
                <div style={{ ...ms, fontSize: 10, fontWeight: 800, color: '#D4A847', letterSpacing: '0.12em', marginBottom: 6 }}>{CHALLENGE_DATA[idx]?.challenge ?? ''}</div>
                <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', fontWeight: 700, color: C.white, lineHeight: 1.2 }}>{CHALLENGE_DATA[idx]?.question ?? pt.title}</h1>
              </div>
            </div>
            <div style={{ ...ms, fontSize: 11, color: C.hint, marginBottom: 14, letterSpacing: '0.04em' }}>{pt.title}</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: C.goldDim, border: `1px solid ${C.borderGold}`, padding: '10px 16px' }}>
              <span style={{ color: C.gold, fontSize: 14 }}>💡</span>
              <span style={{ ...ms, fontSize: 12, fontWeight: 700, color: C.gold, lineHeight: 1.4 }}>{pt.takeaway}</span>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '0 2.5rem 3rem', maxWidth: 780 }}>
            {(entryBanner || isBacktracking || isHighlighted) && (
              <div style={{ background: C.surfaceAlt, borderLeft: `3px solid ${C.gold}`, padding: '1rem 1.2rem', margin: '1.5rem 0 0' }}>
                <p style={{ ...ms, fontSize: 12, color: C.white, lineHeight: 1.75 }}>
                  {entryBanner ? `🧭 ${entryBanner}` : isBacktracking ? '🏗️ Foundation point — this underpins everything you\'ve already read.' : `✦ ${activeHighlightMsg}`}
                </p>
              </div>
            )}
            <div style={{ margin: '1.5rem 0', padding: '1.8rem', background: C.surface, borderTop: `3px solid ${C.gold}` }}>
              <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 10 }}>THE CLAIM</div>
              <p style={{ ...cg, fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)', fontStyle: 'italic', color: C.white, lineHeight: 1.7, margin: 0 }}>&ldquo;{pt.claim}&rdquo;</p>
            </div>
            <div style={{ margin: '0 0 1.5rem', padding: '1.4rem', background: C.surface, border: `1px solid ${C.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span style={{ fontSize: 16 }}>🇸🇬</span>
                <span style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.muted }}>WHY THIS MATTERS HERE</span>
              </div>
              <p style={{ ...ms, fontSize: 13, color: C.muted, lineHeight: 1.9, margin: 0 }}>{pt.sg}</p>
            </div>
            <div style={{ margin: '0 0 0.5rem' }}>
              <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 10 }}>THE ARGUMENTS — TAP TO EXPLORE</div>
              {pt.geisler.map((arg, i) => <ArgCard key={i} n={i + 1} head={arg.head} body={arg.body} />)}
            </div>
            {pt.objections && pt.objections.length > 0 && (
              <div style={{ margin: '1.2rem 0 0.5rem' }}>
                <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.muted, marginBottom: 10 }}>COMMON OBJECTIONS</div>
                {pt.objections.map((obj, i) => <ArgCard key={i} n={i + 1} head={obj.head} body={obj.body} />)}
              </div>
            )}
            {pt.specialViz && (
              <div style={{ marginBottom: '1.5rem', marginTop: '1.2rem' }}>
                <VisualBlocks type={pt.specialViz} accent={C.gold} dim={C.goldDim} />
              </div>
            )}
            {pt.deepDive && pt.deepDive.length > 0 && (
              <div style={{ marginBottom: '1.5rem', marginTop: '1.2rem' }}>
                <button onClick={() => setDeepDiveOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.1rem', background: C.surface, border: `1px solid ${deepDiveOpen ? C.borderGold : C.border}`, cursor: 'pointer' }}>
                  <span style={{ ...ms, fontSize: 12, fontWeight: 700, color: deepDiveOpen ? C.gold : C.muted }}>📖 Advanced Reading</span>
                  <span style={{ color: C.gold, fontSize: 16 }}>{deepDiveOpen ? '−' : '+'}</span>
                </button>
                {deepDiveOpen && pt.deepDive.map((item, i) => (
                  <div key={i} style={{ background: C.surfaceAlt, borderBottom: `1px solid ${C.border}`, borderLeft: `1px solid ${C.border}`, borderRight: `1px solid ${C.border}`, padding: '1rem 1.1rem' }}>
                    <div style={{ ...ms, fontSize: 11, fontWeight: 700, color: C.gold, marginBottom: 6 }}>{item.head}</div>
                    <p style={{ ...ms, fontSize: 12, color: C.muted, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                  </div>
                ))}
              </div>
            )}
            <div style={{ margin: '1.5rem 0 0' }}>
              <AskAI pointN={pt.n} pointTitle={pt.title} accent={C.gold} dim={C.goldDim} />
            </div>
          </div>
        </div>

        {/* ── RIGHT SIDEBAR — quick reference ── */}
        <div style={{ width: 260, flexShrink: 0, borderLeft: `1px solid ${C.border}`, position: 'sticky', top: 56, height: 'calc(100vh - 56px)', overflowY: 'auto', padding: '1.5rem 1.2rem' }}>

          {/* Key Insight */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ color: C.gold, fontSize: 14 }}>💡</span>
              <span style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold }}>KEY INSIGHT</span>
            </div>
            <p style={{ ...ms, fontSize: 12, color: C.white, lineHeight: 1.75, margin: 0, fontWeight: 600 }}>{pt.insight}</p>
          </div>

          <div style={{ height: 1, background: C.border, margin: '0 0 1.5rem' }} />

          {/* Memory Verse */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ color: C.gold, fontSize: 14 }}>📖</span>
              <span style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold }}>MEMORY VERSE</span>
            </div>
            <p style={{ ...cg, fontStyle: 'italic', fontSize: '1.05rem', color: C.white, lineHeight: 1.7, margin: '0 0 8px' }}>&ldquo;{pt.scripture}&rdquo;</p>
            <div style={{ ...ms, fontSize: 10, fontWeight: 800, color: C.gold }}>— {pt.ref}</div>
            {pt.verses.length > 0 && <div style={{ ...ms, fontSize: 9, color: C.hint, marginTop: 6 }}>Also: {pt.verses.join(' · ')}</div>}
          </div>

          <div style={{ height: 1, background: C.border, margin: '0 0 1.5rem' }} />

          {/* Reflect */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ color: C.gold, fontSize: 14 }}>✏️</span>
              <span style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold }}>REFLECT</span>
            </div>
            <p style={{ ...ms, fontSize: 11, color: C.muted, lineHeight: 1.7, margin: '0 0 10px' }}>{pt.reflect}</p>
            <textarea
              value={reflection}
              onChange={e => onReflectionChange(e.target.value)}
              placeholder="Write your thoughts here..."
              rows={4}
              style={{ width: '100%', background: C.surfaceAlt, border: `1px solid ${C.border}`, color: C.white, padding: '10px 12px', ...ms, fontSize: 12, lineHeight: 1.6, resize: 'vertical', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ height: 1, background: C.border, margin: '0 0 1.5rem' }} />

          {/* Next Step */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ color: C.gold, fontSize: 14 }}>🚩</span>
              <span style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold }}>NEXT STEP</span>
            </div>
            <p style={{ ...ms, fontSize: 11, color: C.muted, marginBottom: 12 }}>
              {isDone ? 'Stage complete. Continue to the next point in your quest.' : 'Complete this stage to continue your quest.'}
            </p>
            <button onClick={onMarkDone}
              style={{ width: '100%', padding: '13px', background: isDone ? C.surface : C.gold, color: isDone ? C.muted : C.page, border: isDone ? `1.5px solid ${C.border}` : 'none', ...ms, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', cursor: 'pointer', marginBottom: 8 }}>
              {isDone ? '✓ NEXT STAGE →' : 'COMPLETE & CONTINUE →'}
            </button>
            <button onClick={onBack}
              style={{ width: '100%', padding: '10px', background: 'transparent', color: C.muted, border: `1.5px solid ${C.border}`, ...ms, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted }}>
              ← BACK
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
