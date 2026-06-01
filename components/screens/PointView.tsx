'use client'

import { useState, useEffect } from 'react'
import { POINTS, PHASE_ACCENTS, PHASE_DIMS, PHASE_LABELS } from '@/lib/data'
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
  const accent = PHASE_ACCENTS[pt.phase]
  const dim = PHASE_DIMS[pt.phase]
  const phaseLabel = PHASE_LABELS[pt.phase]
  const isHighlighted = painPointId ? pt.highlight.includes(painPointId) : false
  const isDone = completed.includes(idx)
  const [argsOpen, setArgsOpen] = useState(false)
  const [objectionsOpen, setObjectionsOpen] = useState(false)
  const [deepDiveOpen, setDeepDiveOpen] = useState(false)

  const isEntryPoint = startingIdx > 0 && idx === startingIdx
  const isBacktracking = startingIdx > 0 && idx < startingIdx
  const entryBanner = isEntryPoint && painPointId ? pt.entryBanners?.[painPointId] : null
  const activeHighlightMsg = painPointId && pt.highlightMsgs?.[painPointId]
    ? pt.highlightMsgs[painPointId]
    : pt.highlightMsg

  return (
    <div className="min-h-screen flex flex-col animate-fade-in" style={{ background: '#1A1A2A' }}>
      {/* NGIM nav bar */}
      <div className="sticky top-0 z-10" style={{ background: '#1A1A2A', borderBottom: '1px solid #FFFFFF11' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem', height: 50, gap: 12 }}>
          <button onClick={onHome} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', cursor: 'pointer', flexShrink: 0 }} aria-label="Home">
            <svg width="18" height="18" viewBox="0 0 36 36" fill="none">
              <path d="M18 4 L18 32 M8 14 Q18 8 28 14" stroke="#D4A847" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <circle cx="18" cy="4" r="2.5" fill="#D4A847"/>
            </svg>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 800, color: '#D4A847', letterSpacing: '0.1em' }}>ROOTED</span>
          </button>
          <div style={{ flex: 1 }}>
            <FoundationBar completed={completed} currentIdx={idx} startingIdx={startingIdx} />
          </div>
          <button onClick={onSearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, background: 'transparent', border: '1px solid #FFFFFF22', cursor: 'pointer', color: '#AAAABB', flexShrink: 0 }} aria-label="Search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 w-full max-w-2xl mx-auto px-4 py-8" style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Phase pill + counter */}
        <div className="flex items-center gap-2 mb-6">
          <span
            className="px-3 py-1 text-xs font-bold"
            style={{ background: '#1A1A2A', color: '#D4A847', border: '1px solid #D4A84744', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.12em' }}
          >
            {phaseLabel.toUpperCase()}
          </span>
          <span className="text-xs" style={{ color: '#888899', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.06em' }}>
            POINT {pt.n} OF 12
          </span>
        </div>

        {/* Entry banner — shown only on the very first point of a circular journey */}
        {entryBanner && (
          <div
            className="rounded-xl p-4 mb-6 border"
            style={{ background: '#1A1A2A', border: '1px solid #D4A84744' }}
          >
            <div className="flex items-start gap-2">
              <span style={{ fontSize: 16, flexShrink: 0 }}>🧭</span>
              <p className="text-sm leading-relaxed" style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif' }}>
                {entryBanner}
              </p>
            </div>
          </div>
        )}

        {/* Backtrack banner — shown on foundation points after looping back */}
        {isBacktracking && (
          <div
            className="rounded-xl p-4 mb-6 border"
            style={{ background: '#F7F7F9', border: '1px solid #D4A84744' }}
          >
            <div className="flex items-start gap-2">
              <span style={{ fontSize: 16, flexShrink: 0 }}>🏗️</span>
              <p className="text-sm leading-relaxed" style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif' }}>
                Foundation point — this underpins everything you've already read.
              </p>
            </div>
          </div>
        )}

        {/* Personalised highlight banner */}
        {isHighlighted && (
          <div
            className="rounded-xl p-4 mb-6 border"
            style={{ background: '#1A1A2A', border: '1px solid #D4A84744' }}
          >
            <div className="flex items-start gap-2">
              <span style={{ fontSize: 16, flexShrink: 0 }}>✦</span>
              <p className="text-sm leading-relaxed" style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif' }}>
                {activeHighlightMsg}
              </p>
            </div>
          </div>
        )}

        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-2">
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{ width: 48, height: 48, background: '#1A1A2A', border: '1px solid #D4A84733', fontSize: 26 }}
          >
            {POINT_ICONS[idx] ?? '📌'}
          </div>
          <h1
            className="leading-tight flex-1"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              fontWeight: 400,
              color: '#1C1E21',
            }}
          >
            {pt.title}
          </h1>
        </div>
        <div
          className="mb-8 rounded-full"
          style={{ height: 2, width: '4rem', background: '#D4A847' }}
        />

        {/* Geisler's Claim */}
        <div className="p-5 mb-6" style={{ background: '#FAFAFA', borderLeft: '3px solid #D4A847', border: '1px solid #E8E8EE', borderLeftWidth: '3px', borderLeftColor: '#D4A847' }}>
          <div className="text-xs font-bold tracking-widest mb-2" style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em' }}>
            KEY POINT
          </div>
          <p className="leading-relaxed" style={{ color: '#1A1A2A', fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontStyle: 'italic' }}>
            {pt.claim}
          </p>
        </div>

        {/* Singapore Context */}
        <div className="mb-6 p-5" style={{ background: '#FAFAFA', border: '1px solid #E0E0E8' }}>
          <div className="text-xs font-bold tracking-widest mb-2" style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em' }}>
            🇸🇬 YOUR CONTEXT
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#555577', fontFamily: 'Montserrat, sans-serif', lineHeight: '1.75' }}>
            {pt.sg}
          </p>
        </div>

        {/* Visual Block */}
        {pt.specialViz && (
          <div className="mb-8">
            <VisualBlocks type={pt.specialViz} accent={accent} dim={dim} />
          </div>
        )}

        {/* Expandable Arguments */}
        <div className="mb-6">
          <button
            onClick={() => setArgsOpen((o) => !o)}
            className="w-full flex items-center justify-between px-5 py-4 transition-all"
            style={{
              background: argsOpen ? dim : '#F7F7F9',
              border: `1.5px solid ${argsOpen ? accent + '44' : '#D4A84733'}`,
            }}
          >
            <span
              className="text-sm font-bold"
              style={{ color: argsOpen ? accent : '#65676B', fontFamily: 'Montserrat, sans-serif' }}
            >
              📚 Study Key Arguments
            </span>
            <span style={{ color: accent, fontSize: 18 }}>{argsOpen ? '−' : '+'}</span>
          </button>

          {argsOpen && (
            <div
              className="border-x border-b overflow-hidden"
              style={{ borderColor: accent + '33' }}
            >
              {pt.geisler.map((arg, i) => (
                <div
                  key={i}
                  className="px-5 py-4 border-t"
                  style={{ borderColor: accent + '1a', background: dim }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold"
                      style={{ width: 20, height: 20, background: accent, color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {i + 1}
                    </span>
                    <div
                      className="font-bold text-sm"
                      style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {arg.head}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed pl-7" style={{ color: '#65676B', fontFamily: 'Montserrat, sans-serif' }}>
                    {arg.body}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Expandable Objections */}
        {pt.objections && pt.objections.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => setObjectionsOpen((o) => !o)}
              className="w-full flex items-center justify-between px-5 py-4 transition-all"
              style={{
                background: objectionsOpen ? '#FEF3C7' : '#F7F7F9',
                border: `1.5px solid ${objectionsOpen ? '#F59E0B44' : '#D4A84733'}`,
              }}
            >
              <span
                className="text-sm font-bold"
                style={{ color: objectionsOpen ? '#92400E' : '#65676B', fontFamily: 'Montserrat, sans-serif' }}
              >
                ⚠️ Objections & Responses
              </span>
              <span style={{ color: '#F59E0B', fontSize: 18 }}>{objectionsOpen ? '−' : '+'}</span>
            </button>

            {objectionsOpen && (
              <div className="border-x border-b overflow-hidden" style={{ borderColor: '#F59E0B33' }}>
                {pt.objections.map((obj, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 border-t"
                    style={{ borderColor: '#F59E0B1a', background: '#FFFBEB' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold"
                        style={{ width: 20, height: 20, background: '#F59E0B', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {i + 1}
                      </span>
                      <div className="font-bold text-sm" style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif' }}>
                        {obj.head}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed pl-7" style={{ color: '#78350F', fontFamily: 'Montserrat, sans-serif' }}>
                      {obj.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Advanced Reading (Deep Dive) */}
        {pt.deepDive && pt.deepDive.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => setDeepDiveOpen((o) => !o)}
              className="w-full flex items-center justify-between px-5 py-4 transition-all"
              style={{
                background: deepDiveOpen ? '#F0F4FF' : '#F7F7F9',
                border: `1.5px solid ${deepDiveOpen ? '#6366F144' : '#D4A84733'}`,
              }}
            >
              <span
                className="text-sm font-bold"
                style={{ color: deepDiveOpen ? '#4338CA' : '#65676B', fontFamily: 'Montserrat, sans-serif' }}
              >
                📖 Advanced Reading
              </span>
              <span style={{ color: '#6366F1', fontSize: 18 }}>{deepDiveOpen ? '−' : '+'}</span>
            </button>

            {deepDiveOpen && (
              <div className="border-x border-b overflow-hidden" style={{ borderColor: '#6366F133' }}>
                {pt.deepDive.map((item, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 border-t"
                    style={{ borderColor: '#6366F11a', background: '#F5F3FF' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold"
                        style={{ width: 20, height: 20, background: '#6366F1', color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {i + 1}
                      </span>
                      <div className="font-bold text-sm" style={{ color: '#4338CA', fontFamily: 'Montserrat, sans-serif' }}>
                        {item.head}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed pl-7" style={{ color: '#3730A3', fontFamily: 'Montserrat, sans-serif' }}>
                      {item.body}
                    </p>
                  </div>
                ))}
                <div
                  className="px-5 py-3 border-t text-xs"
                  style={{ borderColor: '#6366F11a', background: '#EEF2FF', color: '#6366F1', fontFamily: 'Montserrat, sans-serif' }}
                >
                  Source: <em>Is the Christian Faith Reasonable?</em> (NGIM, 2023)
                </div>
              </div>
            )}
          </div>
        )}

        {/* Key Insight */}
        <div className="p-5 mb-6" style={{ background: '#1A1A2A', borderLeft: '3px solid #D4A847' }}>
          <div className="text-xs font-bold tracking-widest mb-2" style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em' }}>
            💡 KEY INSIGHT
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#AAAABB', fontFamily: 'Montserrat, sans-serif', lineHeight: '1.75' }}>
            {pt.insight}
          </p>
        </div>

        {/* Takeaway */}
        <div className="mb-6">
          <TakeawayCard text={pt.takeaway} accent={accent} dim={dim} />
        </div>

        {/* Reflect */}
        <div className="mb-6">
          <ReflectField
            prompt={pt.reflect}
            pointIdx={idx}
            value={reflection}
            onChange={onReflectionChange}
            accent={accent}
            dim={dim}
          />
        </div>

        {/* Ask AI */}
        <div className="mb-8">
          <AskAI pointN={pt.n} pointTitle={pt.title} accent={accent} dim={dim} />
        </div>

        {/* Scripture */}
        <div className="text-center mb-10 px-4 py-6" style={{ background: '#1A1A2A' }}>
          <div className="text-xs font-bold tracking-widest mb-3" style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em' }}>KEY VERSE</div>
          <p
            className="text-lg mb-1"
            style={{ color: '#FFFFFF', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300 }}
          >
            &ldquo;{pt.scripture}&rdquo;
          </p>
          <p className="text-xs mt-2 font-bold" style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}>
            — {pt.ref}
          </p>
          {pt.verses.length > 0 && (
            <p className="text-xs mt-1" style={{ color: '#444466', fontFamily: 'Montserrat, sans-serif' }}>
              Also: {pt.verses.join(' · ')}
            </p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 rounded-xl px-4 py-3 text-sm font-bold transition-all"
            style={{ background: 'transparent', color: '#AAAABB', border: '1.5px solid #E0E0E8', fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1A1A2A'; e.currentTarget.style.color = '#1A1A2A' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E0E0E8'; e.currentTarget.style.color = '#AAAABB' }}
          >
            ← BACK
          </button>
          <button
            onClick={onMarkDone}
            className="flex-2 flex-grow rounded-xl px-4 py-3 text-sm font-bold transition-all"
            style={{ background: isDone ? '#F7F7F9' : '#D4A847', color: '#1A1A2A', border: isDone ? '1.5px solid #E0E0E8' : 'none', fontFamily: 'Montserrat, sans-serif', fontSize: 11, fontWeight: 800, letterSpacing: '0.08em' }}
          >
            {isDone ? '✓ CONTINUE →' : 'MARK AS READ & CONTINUE →'}
          </button>
        </div>
      </div>
    </div>
  )
}
