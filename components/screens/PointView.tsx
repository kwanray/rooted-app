'use client'

import { useState } from 'react'
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
  onSearch,
}: Props) {
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
    <div className="min-h-screen flex flex-col animate-fade-in" style={{ background: 'var(--bg)' }}>
      {/* Foundation bar */}
      <div
        className="sticky top-0 z-10 flex items-center"
        style={{ background: '#FFFFFF', borderBottom: '1px solid #E4E6EB', boxShadow: '0 1px 4px #0001' }}
      >
        <div className="flex-1">
          <FoundationBar completed={completed} currentIdx={idx} startingIdx={startingIdx} />
        </div>
        <button
          onClick={onSearch}
          className="flex-shrink-0 flex items-center justify-center mr-3"
          style={{ width: 34, height: 34, borderRadius: '50%', background: '#F0F2F5', border: '1px solid #E4E6EB', color: '#65676B' }}
          aria-label="Search"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>

      <div className="flex-1 w-full max-w-2xl mx-auto px-4 py-8">
        {/* Phase pill + counter */}
        <div className="flex items-center gap-2 mb-6">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background: dim,
              color: accent,
              border: `1px solid ${accent}44`,
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0.08em',
            }}
          >
            {phaseLabel.toUpperCase()}
          </span>
          <span className="text-xs" style={{ color: '#8A8D91', fontFamily: 'Lato, sans-serif' }}>
            Point {pt.n} of 12
          </span>
        </div>

        {/* Entry banner — shown only on the very first point of a circular journey */}
        {entryBanner && (
          <div
            className="rounded-xl p-4 mb-6 border"
            style={{ background: '#FEF3C7', borderColor: '#F59E0B44' }}
          >
            <div className="flex items-start gap-2">
              <span style={{ fontSize: 16, flexShrink: 0 }}>🧭</span>
              <p className="text-sm leading-relaxed" style={{ color: '#92400E', fontFamily: 'Lato, sans-serif' }}>
                {entryBanner}
              </p>
            </div>
          </div>
        )}

        {/* Backtrack banner — shown on foundation points after looping back */}
        {isBacktracking && (
          <div
            className="rounded-xl p-4 mb-6 border"
            style={{ background: dim, borderColor: accent + '44' }}
          >
            <div className="flex items-start gap-2">
              <span style={{ fontSize: 16, flexShrink: 0 }}>🏗️</span>
              <p className="text-sm leading-relaxed" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
                Foundation point — this underpins everything you've already read.
              </p>
            </div>
          </div>
        )}

        {/* Personalised highlight banner */}
        {isHighlighted && (
          <div
            className="rounded-xl p-4 mb-6 border"
            style={{ background: '#E7F0FD', borderColor: '#1877F244' }}
          >
            <div className="flex items-start gap-2">
              <span style={{ fontSize: 16, flexShrink: 0 }}>✦</span>
              <p className="text-sm leading-relaxed" style={{ color: '#1877F2', fontFamily: 'Lato, sans-serif' }}>
                {activeHighlightMsg}
              </p>
            </div>
          </div>
        )}

        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-2">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-2xl"
            style={{ width: 52, height: 52, background: dim, border: `1px solid ${accent}33`, fontSize: 26 }}
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
          style={{ height: 2, width: '4rem', background: `linear-gradient(90deg, ${accent} 0%, transparent 100%)` }}
        />

        {/* Geisler's Claim */}
        <div
          className="rounded-xl p-5 mb-6"
          style={{
            background: dim,
            borderLeft: `3px solid ${accent}`,
          }}
        >
          <div className="text-xs font-bold tracking-widest mb-2" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
            KEY POINT
          </div>
          <p
            className="leading-relaxed"
            style={{ color: '#1C1E21', fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontStyle: 'italic' }}
          >
            {pt.claim}
          </p>
        </div>

        {/* Singapore Context */}
        <div className="mb-6 rounded-xl p-5" style={{ background: '#FFFFFF', border: '1px solid #E4E6EB' }}>
          <div className="text-xs font-bold tracking-widest mb-2" style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}>
            🇸🇬 YOUR CONTEXT
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}>
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
            className="w-full flex items-center justify-between rounded-xl px-5 py-4 transition-all"
            style={{
              background: argsOpen ? dim : '#FFFFFF',
              border: `1.5px solid ${argsOpen ? accent + '44' : '#E4E6EB'}`,
            }}
          >
            <span
              className="text-sm font-bold"
              style={{ color: argsOpen ? accent : '#65676B', fontFamily: 'Lato, sans-serif' }}
            >
              📚 Study Key Arguments
            </span>
            <span style={{ color: accent, fontSize: 18 }}>{argsOpen ? '−' : '+'}</span>
          </button>

          {argsOpen && (
            <div
              className="rounded-b-xl border-x border-b overflow-hidden"
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
                      style={{ width: 20, height: 20, background: accent, color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}
                    >
                      {i + 1}
                    </span>
                    <div
                      className="font-bold text-sm"
                      style={{ color: accent, fontFamily: 'Lato, sans-serif' }}
                    >
                      {arg.head}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed pl-7" style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}>
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
              className="w-full flex items-center justify-between rounded-xl px-5 py-4 transition-all"
              style={{
                background: objectionsOpen ? '#FEF3C7' : '#FFFFFF',
                border: `1.5px solid ${objectionsOpen ? '#F59E0B44' : '#E4E6EB'}`,
              }}
            >
              <span
                className="text-sm font-bold"
                style={{ color: objectionsOpen ? '#92400E' : '#65676B', fontFamily: 'Lato, sans-serif' }}
              >
                ⚠️ Objections & Responses
              </span>
              <span style={{ color: '#F59E0B', fontSize: 18 }}>{objectionsOpen ? '−' : '+'}</span>
            </button>

            {objectionsOpen && (
              <div className="rounded-b-xl border-x border-b overflow-hidden" style={{ borderColor: '#F59E0B33' }}>
                {pt.objections.map((obj, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 border-t"
                    style={{ borderColor: '#F59E0B1a', background: '#FFFBEB' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold"
                        style={{ width: 20, height: 20, background: '#F59E0B', color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}
                      >
                        {i + 1}
                      </span>
                      <div className="font-bold text-sm" style={{ color: '#92400E', fontFamily: 'Lato, sans-serif' }}>
                        {obj.head}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed pl-7" style={{ color: '#78350F', fontFamily: 'Lato, sans-serif' }}>
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
              className="w-full flex items-center justify-between rounded-xl px-5 py-4 transition-all"
              style={{
                background: deepDiveOpen ? '#F0F4FF' : '#FFFFFF',
                border: `1.5px solid ${deepDiveOpen ? '#6366F144' : '#E4E6EB'}`,
              }}
            >
              <span
                className="text-sm font-bold"
                style={{ color: deepDiveOpen ? '#4338CA' : '#65676B', fontFamily: 'Lato, sans-serif' }}
              >
                📖 Advanced Reading
              </span>
              <span style={{ color: '#6366F1', fontSize: 18 }}>{deepDiveOpen ? '−' : '+'}</span>
            </button>

            {deepDiveOpen && (
              <div className="rounded-b-xl border-x border-b overflow-hidden" style={{ borderColor: '#6366F133' }}>
                {pt.deepDive.map((item, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 border-t"
                    style={{ borderColor: '#6366F11a', background: '#F5F3FF' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold"
                        style={{ width: 20, height: 20, background: '#6366F1', color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}
                      >
                        {i + 1}
                      </span>
                      <div className="font-bold text-sm" style={{ color: '#4338CA', fontFamily: 'Lato, sans-serif' }}>
                        {item.head}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed pl-7" style={{ color: '#3730A3', fontFamily: 'Lato, sans-serif' }}>
                      {item.body}
                    </p>
                  </div>
                ))}
                <div
                  className="px-5 py-3 border-t text-xs"
                  style={{ borderColor: '#6366F11a', background: '#EEF2FF', color: '#6366F1', fontFamily: 'Lato, sans-serif' }}
                >
                  Source: <em>Is the Christian Faith Reasonable?</em> (NGIM, 2023)
                </div>
              </div>
            )}
          </div>
        )}

        {/* Key Insight */}
        <div
          className="rounded-xl p-5 mb-6"
          style={{
            background: `linear-gradient(135deg, ${dim} 0%, ${accent}11 100%)`,
            border: `1px solid ${accent}33`,
          }}
        >
          <div className="text-xs font-bold tracking-widest mb-2" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
            💡 KEY INSIGHT
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#1C1E21', fontFamily: 'Lato, sans-serif' }}>
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
        <div className="text-center mb-10 px-4 rounded-xl py-6" style={{ background: '#FFFFFF', border: '1px solid #E4E6EB' }}>
          <p
            className="text-lg mb-1"
            style={{ color: '#1C1E21', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300 }}
          >
            &ldquo;{pt.scripture}&rdquo;
          </p>
          <p className="text-sm mt-2" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
            — {pt.ref}
          </p>
          {pt.verses.length > 0 && (
            <p className="text-xs mt-1" style={{ color: '#BCC0C4', fontFamily: 'Lato, sans-serif' }}>
              Also: {pt.verses.join(' · ')}
            </p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 rounded-xl px-4 py-3 text-sm font-bold transition-all"
            style={{
              background: '#FFFFFF',
              color: '#65676B',
              border: '1.5px solid #E4E6EB',
              fontFamily: 'Lato, sans-serif',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#8A8D91')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E4E6EB')}
          >
            ← Back
          </button>
          <button
            onClick={onMarkDone}
            className="flex-2 flex-grow rounded-xl px-4 py-3 text-sm font-bold transition-all"
            style={{
              background: isDone ? dim : accent,
              color: isDone ? accent : '#FFFFFF',
              border: isDone ? `1.5px solid ${accent}` : 'none',
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0.05em',
            }}
          >
            {isDone ? '✓ Continue →' : 'Mark as Read & Continue →'}
          </button>
        </div>
      </div>
    </div>
  )
}
