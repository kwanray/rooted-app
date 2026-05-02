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
        style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
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
          <span className="text-xs" style={{ color: '#4a3f2f', fontFamily: 'Lato, sans-serif' }}>
            Point {pt.n} of 12
          </span>
        </div>

        {/* Highlight banner */}
        {isHighlighted && (
          <div
            className="rounded-xl p-4 mb-6 border"
            style={{ background: '#251800', borderColor: '#D4A85344' }}
          >
            <div className="flex items-start gap-2">
              <span style={{ fontSize: 16, flexShrink: 0 }}>✦</span>
              <p className="text-sm leading-relaxed" style={{ color: '#D4A853', fontFamily: 'Lato, sans-serif' }}>
                {pt.highlightMsg}
              </p>
            </div>
          </div>
        )}

        {/* Title */}
        <h1
          className="mb-2 leading-tight"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 400,
            color: '#F5E6C8',
          }}
        >
          {pt.title}
        </h1>
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
            GEISLER'S CLAIM
          </div>
          <p
            className="leading-relaxed"
            style={{ color: '#F5E6C8', fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontStyle: 'italic' }}
          >
            {pt.claim}
          </p>
        </div>

        {/* Singapore Context */}
        <div className="mb-6 rounded-xl p-5" style={{ background: '#161009', border: '1px solid #1A1208' }}>
          <div className="text-xs font-bold tracking-widest mb-2" style={{ color: '#B8A08A', fontFamily: 'Lato, sans-serif' }}>
            YOUR CONTEXT
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#B8A08A', fontFamily: 'Lato, sans-serif' }}>
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
              background: argsOpen ? dim : '#161009',
              border: `1.5px solid ${argsOpen ? accent + '44' : '#1A1208'}`,
            }}
          >
            <span
              className="text-sm font-bold"
              style={{ color: argsOpen ? accent : '#B8A08A', fontFamily: 'Lato, sans-serif' }}
            >
              Study Geisler's Arguments
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
                  <div
                    className="font-bold text-sm mb-2"
                    style={{ color: accent, fontFamily: 'Lato, sans-serif' }}
                  >
                    {arg.head}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#B8A08A', fontFamily: 'Lato, sans-serif' }}>
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
            KEY INSIGHT
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#F5E6C8', fontFamily: 'Lato, sans-serif' }}>
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
        <div className="text-center mb-10 px-4">
          <p
            className="text-lg mb-1"
            style={{ color: '#F5E6C8', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300 }}
          >
            &ldquo;{pt.scripture}&rdquo;
          </p>
          <p className="text-sm" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
            — {pt.ref}
          </p>
          {pt.verses.length > 0 && (
            <p className="text-xs mt-1" style={{ color: '#4a3f2f', fontFamily: 'Lato, sans-serif' }}>
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
              background: 'transparent',
              color: '#B8A08A',
              border: '1.5px solid #1A1208',
              fontFamily: 'Lato, sans-serif',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#4a3f2f')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1A1208')}
          >
            ← Back
          </button>
          <button
            onClick={onMarkDone}
            className="flex-2 flex-grow rounded-xl px-4 py-3 text-sm font-bold transition-all"
            style={{
              background: isDone ? accent + '33' : accent,
              color: isDone ? accent : '#0D0A05',
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
