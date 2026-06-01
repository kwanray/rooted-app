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

const POINT_ICONS = ['🔍','⚖️','🌌','✨','📜','📖','✝️','☀️','👑','💬','📝','📕']

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
            <span style={{ ...ms, fontSize: 11, fontWeight: 800, color: C.gold, letterSpacing: '0.1em' }}>ROOTED</span>
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
          <span style={{ ...ms, fontSize: 10, color: C.hint, letterSpacing: '0.06em' }}>POINT {pt.n} / 12</span>
        </div>

        {/* Big emoji + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
          <span style={{ fontSize: 44, lineHeight: 1, flexShrink: 0 }}>{POINT_ICONS[idx] ?? '📌'}</span>
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
            {isDone ? '✓ CONTINUE →' : 'MARK AS READ & CONTINUE →'}
          </button>
        </div>

      </div>
    </div>
  )
}
