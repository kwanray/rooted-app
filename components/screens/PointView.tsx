'use client'

import { useState, useEffect } from 'react'
import { POINTS, PHASE_LABELS } from '@/lib/data'
import FoundationBar from '@/components/ui/FoundationBar'
import VisualBlocks from '@/components/ui/VisualBlocks'
import TakeawayCard from '@/components/ui/TakeawayCard'
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

const PHASE_COLORS = ['#8888AA', '#8B5CF6', '#D4A847', '#C0392B', '#2E7D52']

// White SVG icons on gold circles — matching landing page cards
const POINT_SVG_ICONS: React.ReactNode[] = [
  /* 01 Truth — magnifier */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>,
  /* 02 Logic — balance scales */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>,
  /* 03 God Exists — globe */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c-2.5 4-4 6-4 9s1.5 5 4 9"/><path d="M12 3c2.5 4 4 6 4 9s-1.5 5-4 9"/></svg>,
  /* 04 Miracles Possible — sun */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>,
  /* 05 Miracles Confirm — speech bubble */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  /* 06 NT Reliable — document */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  /* 07 Jesus Claimed — crown */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 20h14"/></svg>,
  /* 08 Divinity — empty tomb */
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="19" x2="23" y2="19" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><path d="M5 19 Q5 7 12 7 Q19 7 19 19 Z" fill="white" opacity="0.9"/><path d="M9 19 Q9 13 12 13 Q15 13 15 19 Z" fill="#D4A847"/><circle cx="18" cy="17" r="2.8" fill="#D4A847" stroke="white" strokeWidth="1.5"/></svg>,
  /* 09 Jesus is God — heart */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  /* 10 — signpost */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><line x1="7" y1="5" x2="7" y2="22"/><polygon points="7,4 17,4 20,7 17,10 7,10"/><polygon points="7,12 15,12 18,15 15,18 7,18"/></svg>,
  /* 11 — anchor */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="20"/><path d="M5 14c0 3.87 3.13 7 7 7s7-3.13 7-7"/><line x1="7" y1="11" x2="17" y2="11"/></svg>,
  /* 12 — closed book */
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="8" x2="16" y2="8"/><line x1="9" y1="12" x2="16" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>,
]

// Argument card — tappable, expands inline
function ArgCard({ n, head, body }: { n: number; head: string; body: string }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen(o => !o)}
      style={{
        width: '100%', textAlign: 'left', background: open ? C.surfaceAlt : C.surface,
        border: `1px solid ${open ? C.borderGold : C.border}`,
        padding: '1rem 1.1rem', marginBottom: 8, cursor: 'pointer',
        transition: 'background 0.2s, border-color 0.2s',
        display: 'block',
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
  reflection, onReflectionChange, onMarkDone, onBack, onHome, onSearch,
}: Props) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [idx])

  const pt = POINTS[idx]
  const phaseLabel = PHASE_LABELS[pt.phase]
  const phaseColor = PHASE_COLORS[pt.phase] ?? C.gold
  const isHighlighted = painPointId ? pt.highlight.includes(painPointId) : false
  const isDone = completed.includes(idx)
  const [deepDiveOpen, setDeepDiveOpen] = useState(false)

  const isEntryPoint   = startingIdx > 0 && idx === startingIdx
  const isBacktracking = startingIdx > 0 && idx < startingIdx
  const entryBanner    = isEntryPoint && painPointId ? pt.entryBanners?.[painPointId] : null
  const activeHighlightMsg = painPointId && pt.highlightMsgs?.[painPointId]
    ? pt.highlightMsgs[painPointId] : pt.highlightMsg

  return (
    <div style={{ minHeight: '100vh', background: C.page }}>

      {/* ── Sticky nav ── */}
      <div className="sticky top-0 z-10" style={{ background: C.page, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem', height: 50, gap: 12 }}>
          <button onClick={onHome} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 36 36" fill="none">
              <path d="M18 4 L18 32 M8 14 Q18 8 28 14" stroke={C.gold} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="18" cy="4" r="2.5" fill={C.gold}/>
            </svg>
            <span style={{ ...ms, fontSize: 11, fontWeight: 800, color: C.gold, letterSpacing: '0.1em' }}>QUEST</span>
          </button>
          <div style={{ flex: 1 }}>
            <FoundationBar completed={completed} currentIdx={idx} startingIdx={startingIdx} />
          </div>
          <button onClick={onSearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, background: 'transparent', border: `1px solid ${C.border}`, cursor: 'pointer', color: C.muted, flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── HERO BAND ── */}
      <div style={{ background: `linear-gradient(160deg, #1A1A2E 0%, ${C.page} 100%)`, padding: '2rem 1.5rem 1.5rem', borderBottom: `1px solid ${C.border}` }}>
        {/* Phase + number */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <span style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: phaseColor, background: `${phaseColor}18`, border: `1px solid ${phaseColor}40`, padding: '4px 10px' }}>
            {phaseLabel.toUpperCase()}
          </span>
          <span style={{ ...ms, fontSize: 10, color: C.hint, letterSpacing: '0.06em' }}>STAGE {pt.n} / 12</span>
        </div>

        {/* Big emoji + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#D4A847', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            {POINT_SVG_ICONS[idx] ?? POINT_SVG_ICONS[0]}
          </div>
          <h1 style={{ ...cg, fontSize: 'clamp(1.7rem, 6vw, 2.6rem)', fontWeight: 400, color: C.white, lineHeight: 1.2 }}>
            {pt.title}
          </h1>
        </div>

        {/* Takeaway pill — the "so what" up front */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: C.goldDim, border: `1px solid ${C.borderGold}`, padding: '8px 14px', marginBottom: 8 }}>
          <span style={{ color: C.gold, fontSize: 14 }}>💡</span>
          <span style={{ ...ms, fontSize: 12, fontWeight: 700, color: C.gold, lineHeight: 1.4 }}>{pt.takeaway}</span>
        </div>
      </div>

      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 1rem 2rem' }}>

        {/* ── CONTEXTUAL BANNER ── */}
        {(entryBanner || isBacktracking || isHighlighted) && (
          <div style={{ background: C.surfaceAlt, borderLeft: `3px solid ${C.gold}`, padding: '1rem 1.2rem', margin: '1.2rem 0 0' }}>
            <p style={{ ...ms, fontSize: 12, color: C.white, lineHeight: 1.75 }}>
              {entryBanner
                ? `🧭 ${entryBanner}`
                : isBacktracking
                  ? '🏗️ Foundation point — this underpins everything you\'ve already read.'
                  : `✦ ${activeHighlightMsg}`}
            </p>
          </div>
        )}

        {/* ── BIG CLAIM — pull-quote style ── */}
        <div style={{ margin: '1.5rem 0', padding: '1.5rem', background: C.surface, borderTop: `3px solid ${C.gold}` }}>
          <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 10 }}>THE CLAIM</div>
          <p style={{ ...cg, fontSize: 'clamp(1.15rem, 3.5vw, 1.5rem)', fontStyle: 'italic', color: C.white, lineHeight: 1.7, margin: 0 }}>
            &ldquo;{pt.claim}&rdquo;
          </p>
        </div>

        {/* ── SINGAPORE CONTEXT ── */}
        <div style={{ margin: '0 0 1.2rem', padding: '1.2rem', background: C.surface, border: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: 16 }}>🇸🇬</span>
            <span style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.muted }}>WHY THIS MATTERS HERE</span>
          </div>
          <p style={{ ...ms, fontSize: 13, color: C.muted, lineHeight: 1.85, margin: 0 }}>{pt.sg}</p>
        </div>

        {/* ── VISUAL BLOCK ── */}
        {pt.specialViz && (
          <div style={{ marginBottom: '1.2rem' }}>
            <VisualBlocks type={pt.specialViz} accent={C.gold} dim={C.goldDim} />
          </div>
        )}

        {/* ── THE ARGUMENTS — each card taps open ── */}
        <div style={{ margin: '0 0 0.5rem' }}>
          <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 10 }}>
            THE ARGUMENTS — TAP TO EXPLORE
          </div>
          {pt.geisler.map((arg, i) => (
            <ArgCard key={i} n={i + 1} head={arg.head} body={arg.body} />
          ))}
        </div>

        {/* ── OBJECTIONS ── */}
        {pt.objections && pt.objections.length > 0 && (
          <div style={{ margin: '1rem 0 0.5rem' }}>
            <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.muted, marginBottom: 10 }}>
              COMMON OBJECTIONS
            </div>
            {pt.objections.map((obj, i) => (
              <ArgCard key={i} n={i + 1} head={obj.head} body={obj.body} />
            ))}
          </div>
        )}

        {/* ── KEY INSIGHT — bold callout ── */}
        <div style={{ margin: '1.5rem 0', padding: '1.5rem', background: '#1E1E2E', borderLeft: `4px solid ${C.gold}` }}>
          <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 10 }}>KEY INSIGHT</div>
          <p style={{ ...ms, fontSize: 14, color: C.white, lineHeight: 1.85, margin: 0, fontWeight: 600 }}>{pt.insight}</p>
        </div>

        {/* ── REFLECT ── */}
        <div style={{ marginBottom: '1.2rem' }}>
          <ReflectField prompt={pt.reflect} pointIdx={idx} value={reflection} onChange={onReflectionChange} accent={C.gold} dim={C.goldDim} />
        </div>

        {/* ── ASK AI ── */}
        <div style={{ marginBottom: '1.2rem' }}>
          <AskAI pointN={pt.n} pointTitle={pt.title} accent={C.gold} dim={C.goldDim} />
        </div>

        {/* ── ADVANCED READING ── collapsible, out of the way ── */}
        {pt.deepDive && pt.deepDive.length > 0 && (
          <div style={{ marginBottom: '1.2rem' }}>
            <button
              onClick={() => setDeepDiveOpen(o => !o)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.1rem', background: C.surface, border: `1px solid ${deepDiveOpen ? C.borderGold : C.border}`, cursor: 'pointer' }}
            >
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

        {/* ── SCRIPTURE ── */}
        <div style={{ margin: '1.5rem 0', padding: '1.8rem 1.5rem', background: C.surfaceAlt, textAlign: 'center', borderTop: `3px solid ${C.gold}` }}>
          <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 12 }}>KEY VERSE</div>
          <p style={{ ...cg, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: C.white, lineHeight: 1.8, margin: '0 0 10px' }}>
            &ldquo;{pt.scripture}&rdquo;
          </p>
          <div style={{ ...ms, fontSize: 10, fontWeight: 800, color: C.gold, letterSpacing: '0.1em' }}>— {pt.ref}</div>
          {pt.verses.length > 0 && (
            <div style={{ ...ms, fontSize: 10, color: C.hint, marginTop: 6 }}>Also: {pt.verses.join(' · ')}</div>
          )}
        </div>

        {/* ── CTA ── */}
        <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
          <button
            onClick={onBack}
            style={{ flex: 1, padding: '14px', background: 'transparent', color: C.muted, border: `1.5px solid ${C.border}`, ...ms, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted }}
          >
            ← BACK
          </button>
          <button
            onClick={onMarkDone}
            style={{ flex: 3, padding: '14px', background: isDone ? C.surface : C.gold, color: isDone ? C.muted : C.page, border: isDone ? `1.5px solid ${C.border}` : 'none', ...ms, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', cursor: 'pointer' }}
          >
            {isDone ? '✓ NEXT STAGE →' : 'COMPLETE STAGE & CONTINUE →'}
          </button>
        </div>

      </div>
    </div>
  )
}
