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
  completed: number[]
  painPointId: PainPointId | null
  reflection: string
  onReflectionChange: (val: string) => void
  onMarkDone: () => void
  onBack: () => void
}

const POINT_ICONS = ['🔍', '⚖️', '🌌', '✨', '📜', '📖', '✝️', '☀️', '👑', '💬', '📝', '📕']

export default function PointView({
  idx,
  completed,
  painPointId,
  reflection,
  onReflectionChange,
  onMarkDone,
  onBack,
}: Props) {
  const pt = POINTS[idx]
  const accent = PHASE_ACCENTS[pt.phase]
  const dim = PHASE_DIMS[pt.phase]
  const phaseLabel = PHASE_LABELS[pt.phase]
  const isHighlighted = painPointId ? pt.highlight.includes(painPointId) : false
  const isDone = completed.includes(idx)
  const [argsOpen, setArgsOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col animate-fade-in" style={{ background: 'var(--bg)' }}>
      {/* Foundation bar */}
      <div
        className="sticky top-0 z-10"
        style={{ background: '#FFFFFF', borderBottom: '1px solid #E4E6EB', boxShadow: '0 1px 4px #0001' }}
      >
        <FoundationBar completed={completed} currentIdx={idx} />
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

        {/* Highlight banner */}
        {isHighlighted && (
          <div
            className="rounded-xl p-4 mb-6 border"
            style={{ background: '#E7F0FD', borderColor: '#1877F244' }}
          >
            <div className="flex items-start gap-2">
              <span style={{ fontSize: 16, flexShrink: 0 }}>✦</span>
              <p className="text-sm leading-relaxed" style={{ color: '#1877F2', fontFamily: 'Lato, sans-serif' }}>
                {pt.highlightMsg}
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
