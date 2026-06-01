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

const POINT_ICONS = ['🔍', '⚖️', '🌌', '✨', '📜', '📖', '✝️', '☀️', '👑', '💬', '📝', '📕']

// Dark-mode safe colour tokens
const C = {
  page:       '#12121E',  // deepest navy — page bg
  surface:    '#1E1E2E',  // card surface
  surfaceAlt: '#252536',  // slightly lighter card
  border:     '#FFFFFF14',// subtle dividers
  borderGold: '#D4A84740',// gold-tinted borders
  gold:       '#D4A847',  // primary accent
  goldDim:    '#D4A84722',// gold tint bg
  white:      '#F0EEE8',  // warm white for body text
  muted:      '#8888AA',  // secondary text
  hint:       '#555570',  // tertiary / placeholders
}

const ms = { fontFamily: 'Montserrat, sans-serif' }
const cg = { fontFamily: 'Cormorant Garamond, serif' }

export default function PointView({
  idx,
  startingIdx,
  completed,
  painPointId,
  reflection,
  onReflectionChange,
  onMarkDone,
  onBack,
  onHome,
  onSearch,
}: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [idx])

  const pt = POINTS[idx]
  const phaseLabel = PHASE_LABELS[pt.phase]
  const isHighlighted = painPointId ? pt.highlight.includes(painPointId) : false
  const isDone = completed.includes(idx)
  const [argsOpen, setArgsOpen]         = useState(false)
  const [objectionsOpen, setObjectionsOpen] = useState(false)
  const [deepDiveOpen, setDeepDiveOpen] = useState(false)

  const isEntryPoint  = startingIdx > 0 && idx === startingIdx
  const isBacktracking = startingIdx > 0 && idx < startingIdx
  const entryBanner   = isEntryPoint && painPointId ? pt.entryBanners?.[painPointId] : null
  const activeHighlightMsg = painPointId && pt.highlightMsgs?.[painPointId]
    ? pt.highlightMsgs[painPointId] : pt.highlightMsg

  const card = (children: React.ReactNode, style?: React.CSSProperties) => (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, padding: '1.25rem', marginBottom: '1rem', ...style }}>
      {children}
    </div>
  )

  const sectionLabel = (text: string) => (
    <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 8 }}>
      {text}
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col animate-fade-in" style={{ background: C.page }}>

      {/* ── Sticky nav ── */}
      <div className="sticky top-0 z-10" style={{ background: C.page, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem', height: 50, gap: 12 }}>
          <button onClick={onHome} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', cursor: 'pointer', flexShrink: 0 }} aria-label="Home">
            <svg width="18" height="18" viewBox="0 0 36 36" fill="none">
              <path d="M18 4 L18 32 M8 14 Q18 8 28 14" stroke={C.gold} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="18" cy="4" r="2.5" fill={C.gold}/>
            </svg>
            <span style={{ ...ms, fontSize: 11, fontWeight: 800, color: C.gold, letterSpacing: '0.1em' }}>ROOTED</span>
          </button>
          <div style={{ flex: 1 }}>
            <FoundationBar completed={completed} currentIdx={idx} startingIdx={startingIdx} />
          </div>
          <button onClick={onSearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, background: 'transparent', border: `1px solid ${C.border}`, cursor: 'pointer', color: C.muted, flexShrink: 0 }} aria-label="Search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex-1 w-full max-w-2xl mx-auto px-4 py-8">

        {/* Phase pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ ...ms, fontSize: 10, fontWeight: 800, letterSpacing: '0.14em', color: C.gold, background: C.goldDim, border: `1px solid ${C.borderGold}`, padding: '4px 12px' }}>
            {phaseLabel.toUpperCase()}
          </span>
          <span style={{ ...ms, fontSize: 10, color: C.hint, letterSpacing: '0.08em' }}>
            POINT {pt.n} OF 12
          </span>
        </div>

        {/* Entry / backtrack / highlight banners */}
        {entryBanner && (
          <div style={{ background: C.surfaceAlt, borderLeft: `3px solid ${C.gold}`, padding: '1rem 1.2rem', marginBottom: '1rem' }}>
            <p style={{ ...ms, fontSize: 12, color: C.white, lineHeight: 1.7 }}>🧭 {entryBanner}</p>
          </div>
        )}
        {isBacktracking && (
          <div style={{ background: C.surfaceAlt, borderLeft: `3px solid ${C.gold}`, padding: '1rem 1.2rem', marginBottom: '1rem' }}>
            <p style={{ ...ms, fontSize: 12, color: C.muted, lineHeight: 1.7 }}>🏗️ Foundation point — this underpins everything you've already read.</p>
          </div>
        )}
        {isHighlighted && (
          <div style={{ background: C.surfaceAlt, borderLeft: `3px solid ${C.gold}`, padding: '1rem 1.2rem', marginBottom: '1rem' }}>
            <p style={{ ...ms, fontSize: 12, color: C.white, lineHeight: 1.7 }}>✦ {activeHighlightMsg}</p>
          </div>
        )}

        {/* Icon + Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 8 }}>
          <div style={{ flexShrink: 0, width: 48, height: 48, background: C.surfaceAlt, border: `1px solid ${C.borderGold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>
            {POINT_ICONS[idx] ?? '📌'}
          </div>
          <h1 style={{ ...cg, fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 400, color: C.white, lineHeight: 1.15, flex: 1 }}>
            {pt.title}
          </h1>
        </div>
        <div style={{ height: 2, width: '4rem', background: C.gold, marginBottom: 32 }}/>

        {/* KEY POINT */}
        {card(
          <>
            {sectionLabel('KEY POINT')}
            <p style={{ ...cg, fontSize: 18, fontStyle: 'italic', color: C.white, lineHeight: 1.7 }}>{pt.claim}</p>
          </>,
          { borderLeft: `3px solid ${C.gold}` }
        )}

        {/* YOUR CONTEXT */}
        {card(
          <>
            {sectionLabel('🇸🇬 YOUR CONTEXT')}
            <p style={{ ...ms, fontSize: 13, color: C.muted, lineHeight: 1.8 }}>{pt.sg}</p>
          </>
        )}

        {/* Visual Block */}
        {pt.specialViz && (
          <div style={{ marginBottom: 16 }}>
            <VisualBlocks type={pt.specialViz} accent={C.gold} dim={C.goldDim} />
          </div>
        )}

        {/* Study Key Arguments */}
        <div style={{ marginBottom: 12 }}>
          <button
            onClick={() => setArgsOpen(o => !o)}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', background: argsOpen ? C.surfaceAlt : C.surface, border: `1px solid ${argsOpen ? C.borderGold : C.border}`, cursor: 'pointer' }}
          >
            <span style={{ ...ms, fontSize: 13, fontWeight: 700, color: argsOpen ? C.gold : C.muted }}>📚 Study Key Arguments</span>
            <span style={{ color: C.gold, fontSize: 18, fontWeight: 300 }}>{argsOpen ? '−' : '+'}</span>
          </button>
          {argsOpen && pt.geisler.map((arg, i) => (
            <div key={i} style={{ background: C.surfaceAlt, borderBottom: `1px solid ${C.border}`, borderLeft: `1px solid ${C.border}`, borderRight: `1px solid ${C.border}`, padding: '1rem 1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ width: 20, height: 20, background: C.gold, color: C.page, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, ...ms, flexShrink: 0 }}>{i + 1}</span>
                <span style={{ ...ms, fontSize: 12, fontWeight: 700, color: C.gold }}>{arg.head}</span>
              </div>
              <p style={{ ...ms, fontSize: 12, color: C.muted, lineHeight: 1.75, paddingLeft: 28 }}>{arg.body}</p>
            </div>
          ))}
        </div>

        {/* Objections */}
        {pt.objections && pt.objections.length > 0 && (
          <div style={{ marginBottom: 12 }}>
            <button
              onClick={() => setObjectionsOpen(o => !o)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', background: objectionsOpen ? C.surfaceAlt : C.surface, border: `1px solid ${objectionsOpen ? C.borderGold : C.border}`, cursor: 'pointer' }}
            >
              <span style={{ ...ms, fontSize: 13, fontWeight: 700, color: objectionsOpen ? C.gold : C.muted }}>⚠️ Objections & Responses</span>
              <span style={{ color: C.gold, fontSize: 18, fontWeight: 300 }}>{objectionsOpen ? '−' : '+'}</span>
            </button>
            {objectionsOpen && pt.objections.map((obj, i) => (
              <div key={i} style={{ background: C.surfaceAlt, borderBottom: `1px solid ${C.border}`, borderLeft: `1px solid ${C.border}`, borderRight: `1px solid ${C.border}`, padding: '1rem 1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ width: 20, height: 20, background: C.gold, color: C.page, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, ...ms, flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ ...ms, fontSize: 12, fontWeight: 700, color: C.gold }}>{obj.head}</span>
                </div>
                <p style={{ ...ms, fontSize: 12, color: C.muted, lineHeight: 1.75, paddingLeft: 28 }}>{obj.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Advanced Reading */}
        {pt.deepDive && pt.deepDive.length > 0 && (
          <div style={{ marginBottom: 12 }}>
            <button
              onClick={() => setDeepDiveOpen(o => !o)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', background: deepDiveOpen ? C.surfaceAlt : C.surface, border: `1px solid ${deepDiveOpen ? C.borderGold : C.border}`, cursor: 'pointer' }}
            >
              <span style={{ ...ms, fontSize: 13, fontWeight: 700, color: deepDiveOpen ? C.gold : C.muted }}>📖 Advanced Reading</span>
              <span style={{ color: C.gold, fontSize: 18, fontWeight: 300 }}>{deepDiveOpen ? '−' : '+'}</span>
            </button>
            {deepDiveOpen && (
              <>
                {pt.deepDive.map((item, i) => (
                  <div key={i} style={{ background: C.surfaceAlt, borderBottom: `1px solid ${C.border}`, borderLeft: `1px solid ${C.border}`, borderRight: `1px solid ${C.border}`, padding: '1rem 1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{ width: 20, height: 20, background: C.gold, color: C.page, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, ...ms, flexShrink: 0 }}>{i + 1}</span>
                      <span style={{ ...ms, fontSize: 12, fontWeight: 700, color: C.gold }}>{item.head}</span>
                    </div>
                    <p style={{ ...ms, fontSize: 12, color: C.muted, lineHeight: 1.75, paddingLeft: 28 }}>{item.body}</p>
                  </div>
                ))}
                <div style={{ background: C.surface, borderLeft: `1px solid ${C.border}`, borderRight: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '0.75rem 1.25rem' }}>
                  <span style={{ ...ms, fontSize: 11, color: C.hint }}>Source: <em>Is the Christian Faith Reasonable?</em> (NGIM, 2023)</span>
                </div>
              </>
            )}
          </div>
        )}

        {/* KEY INSIGHT */}
        <div style={{ marginBottom: 16 }}>
          {card(
            <>
              {sectionLabel('💡 KEY INSIGHT')}
              <p style={{ ...ms, fontSize: 13, color: C.white, lineHeight: 1.8 }}>{pt.insight}</p>
            </>,
            { borderLeft: `3px solid ${C.gold}`, background: C.surfaceAlt }
          )}
        </div>

        {/* Takeaway */}
        <div style={{ marginBottom: 16 }}>
          <TakeawayCard text={pt.takeaway} accent={C.gold} dim={C.goldDim} />
        </div>

        {/* Reflect */}
        <div style={{ marginBottom: 16 }}>
          <ReflectField
            prompt={pt.reflect}
            pointIdx={idx}
            value={reflection}
            onChange={onReflectionChange}
            accent={C.gold}
            dim={C.goldDim}
          />
        </div>

        {/* Ask AI */}
        <div style={{ marginBottom: 32 }}>
          <AskAI pointN={pt.n} pointTitle={pt.title} accent={C.gold} dim={C.goldDim} />
        </div>

        {/* Scripture */}
        <div style={{ textAlign: 'center', padding: '2rem 1.5rem', background: C.surfaceAlt, borderTop: `3px solid ${C.gold}`, marginBottom: 32 }}>
          <div style={{ ...ms, fontSize: 9, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 12 }}>KEY VERSE</div>
          <p style={{ ...cg, fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: C.white, lineHeight: 1.8, marginBottom: 8 }}>
            &ldquo;{pt.scripture}&rdquo;
          </p>
          <p style={{ ...ms, fontSize: 10, fontWeight: 800, color: C.gold, letterSpacing: '0.1em' }}>— {pt.ref}</p>
          {pt.verses.length > 0 && (
            <p style={{ ...ms, fontSize: 10, color: C.hint, marginTop: 4 }}>Also: {pt.verses.join(' · ')}</p>
          )}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={onBack}
            style={{ flex: 1, padding: '13px 16px', background: 'transparent', color: C.muted, border: `1.5px solid ${C.border}`, ...ms, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted }}
          >
            ← BACK
          </button>
          <button
            onClick={onMarkDone}
            style={{ flex: 3, padding: '13px 16px', background: isDone ? C.surface : C.gold, color: isDone ? C.muted : C.page, border: isDone ? `1.5px solid ${C.border}` : 'none', ...ms, fontSize: 11, fontWeight: 800, letterSpacing: '0.08em', cursor: 'pointer' }}
          >
            {isDone ? '✓ CONTINUE →' : 'MARK AS READ & CONTINUE →'}
          </button>
        </div>

      </div>
    </div>
  )
}
