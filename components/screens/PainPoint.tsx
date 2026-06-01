'use client'

import { useState } from 'react'
import { PAIN_POINTS, PAIN_POINT_ENTRY, PHASE_ACCENTS, PHASE_DIMS, POINTS } from '@/lib/data'
import type { PainPointId } from '@/lib/types'

interface IllustItem { emoji: string; x: string; y: string; size: number; rotate?: number }
interface IllustChip { label: string; x: string; y: string }
interface IllustData  { bg: string; dark: boolean; items: IllustItem[]; chips: IllustChip[] }

const ILLUSTRATIONS: Record<string, IllustData> = {
  inherited: {
    bg: '#2A1F0E',
    dark: true,
    items: [
      { emoji: '🏛️', x: '3%',  y: '6%',  size: 46 },
      { emoji: '⛓️', x: '47%', y: '3%',  size: 20, rotate: -20 },
      { emoji: '🧑', x: '62%', y: '10%', size: 34 },
    ],
    chips: [
      { label: 'Tradition', x: '3%',  y: '72%' },
      { label: 'Own Faith', x: '51%', y: '72%' },
    ],
  },
  science: {
    bg: '#0A0F1E',
    dark: true,
    items: [
      { emoji: '🔬', x: '3%',  y: '6%', size: 36 },
      { emoji: '🧬', x: '36%', y: '2%', size: 40, rotate: 15 },
      { emoji: '🌌', x: '57%', y: '0%', size: 44 },
    ],
    chips: [
      { label: 'Evolution',    x: '2%',  y: '68%' },
      { label: 'Big Bang',     x: '42%', y: '62%' },
      { label: 'Neuroscience', x: '16%', y: '82%' },
    ],
  },
  bible: {
    bg: '#1A1208',
    dark: true,
    items: [
      { emoji: '📜', x: '2%',  y: '5%',  size: 42 },
      { emoji: '🗺️', x: '40%', y: '2%',  size: 34 },
      { emoji: '🔍', x: '65%', y: '18%', size: 30 },
    ],
    chips: [
      { label: 'Manuscripts', x: '2%',  y: '72%' },
      { label: 'History',     x: '52%', y: '72%' },
    ],
  },
  jesus: {
    bg: '#1A0F0A',
    dark: true,
    items: [
      { emoji: '👤', x: '2%',  y: '5%', size: 40 },
      { emoji: '✝️', x: '38%', y: '6%', size: 40 },
      { emoji: '👑', x: '66%', y: '3%', size: 32 },
    ],
    chips: [
      { label: 'Teacher?', x: '2%',  y: '72%' },
      { label: 'Lord?',    x: '52%', y: '72%' },
    ],
  },
}

function CardIllustration({ id }: { id: string }) {
  const d = ILLUSTRATIONS[id]
  if (!d) return null
  const chipCss: React.CSSProperties = {
    background: 'rgba(212,168,71,0.18)',
    color: '#D4A847',
    border: '1px solid rgba(212,168,71,0.35)',
  }
  return (
    <div
      className="hidden sm:block flex-shrink-0"
      style={{ width: 140, height: 100, background: d.bg, position: 'relative', overflow: 'hidden' }}
    >
      {d.items.map((it, i) => (
        <span
          key={i}
          style={{
            position: 'absolute', left: it.x, top: it.y,
            fontSize: it.size, lineHeight: 1,
            transform: it.rotate ? `rotate(${it.rotate}deg)` : undefined,
            userSelect: 'none',
          }}
        >{it.emoji}</span>
      ))}
      {d.chips.map((c, i) => (
        <span
          key={i}
          style={{
            position: 'absolute', left: c.x, top: c.y,
            ...chipCss,
            padding: '2px 7px',
            fontSize: 9, fontWeight: 700, fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.06em', whiteSpace: 'nowrap',
          }}
        >{c.label}</span>
      ))}
    </div>
  )
}

function ArrowConnector() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: 28, alignItems: 'center' }}>
      <svg width="12" height="28" viewBox="0 0 12 28" fill="none">
        <line x1="6" y1="0" x2="6" y2="20" stroke="#D4A847" strokeWidth="1.5" strokeDasharray="3 3"/>
        <path d="M2 17 L6 26 L10 17" stroke="#D4A847" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

interface Props {
  onSelect: (id: PainPointId) => void
}

export default function PainPoint({ onSelect }: Props) {
  const [selected, setSelected] = useState<PainPointId | null>(null)

  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      {/* NGIM-style dark header band */}
      <div style={{ background: '#1A1A2A', padding: '2rem 1.5rem 1.5rem', textAlign: 'center' }}>
        <div
          style={{
            fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#D4A847', fontFamily: 'Montserrat, sans-serif', marginBottom: 10,
          }}
        >
          STEP 1 OF YOUR JOURNEY
        </div>
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
            fontWeight: 400,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: 10,
          }}
        >
          What's your biggest doubt?
        </h2>
        <p
          style={{
            color: '#AAAABB', fontFamily: 'Montserrat, sans-serif', fontSize: 13,
            maxWidth: 390, margin: '0 auto', lineHeight: 1.7,
          }}
        >
          Select the one that resonates most. You'll cover all 12 points — starting with what matters to you, then building the complete foundation.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center px-5 py-8">
        <div className="w-full max-w-lg">
          {PAIN_POINTS.map((pp, index) => {
            const isDefense = pp.id === 'defense'
            const isSelected = selected === pp.id

            if (isDefense) {
              return (
                <div key={pp.id}>
                  <ArrowConnector />
                  <div
                    style={{
                      background: '#1A1A2A',
                      border: '1.5px solid #D4A84766',
                      padding: '18px 20px',
                    }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="flex items-center justify-center flex-shrink-0"
                        style={{ width: 44, height: 44, background: '#D4A84722', fontSize: 22, border: '1px solid #D4A84744' }}
                      >
                        {pp.icon}
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 700, color: '#FFFFFF', marginBottom: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                          {pp.label}
                        </div>
                        <div style={{ color: '#AAAABB', fontFamily: 'Montserrat, sans-serif', fontSize: 12, lineHeight: 1.6 }}>
                          {pp.desc}
                        </div>
                      </div>
                    </div>
                    <div style={{ color: '#888899', fontFamily: 'Montserrat, sans-serif', fontSize: 12, lineHeight: 1.6, marginBottom: 16, paddingLeft: 56 }}>
                      {pp.hint}
                    </div>
                    <div style={{ paddingLeft: 56 }}>
                      <button
                        onClick={() => onSelect('defense')}
                        className="w-full py-3 font-bold text-xs transition-all"
                        style={{ background: '#D4A847', color: '#1A1A2A', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', border: 'none' }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#B8922E')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = '#D4A847')}
                      >
                        BEGIN YOUR JOURNEY →
                      </button>
                      <p className="text-center mt-2" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: '#555577', letterSpacing: '0.04em' }}>
                        Begin the full journey — step-by-step logical framework
                      </p>
                    </div>
                  </div>
                </div>
              )
            }

            const entryIdx = PAIN_POINT_ENTRY[pp.id]
            const phase = POINTS[entryIdx].phase
            const accent = PHASE_ACCENTS[phase]
            const dim = PHASE_DIMS[phase]

            return (
              <div key={pp.id}>
                {index > 0 && <ArrowConnector />}
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setSelected(isSelected ? null : pp.id)}
                    className="w-full text-left transition-all"
                    style={{
                      background: isSelected ? '#1A1A2A' : '#FFFFFF',
                      border: `1.5px solid ${isSelected ? '#D4A847' : '#E0E0E8'}`,
                      padding: '16px',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: 44, height: 44, fontSize: 22,
                          background: isSelected ? '#D4A84722' : '#F7F7F9',
                          border: isSelected ? '1px solid #D4A84744' : '1px solid #E0E0E8',
                        }}
                      >
                        {pp.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div style={{
                          fontFamily: 'Montserrat, sans-serif', fontSize: 13, fontWeight: 700,
                          color: isSelected ? '#D4A847' : '#1A1A2A',
                          marginBottom: 4, letterSpacing: '0.03em', textTransform: 'uppercase',
                        }}>
                          {pp.label}
                        </div>
                        <div style={{
                          fontFamily: 'Montserrat, sans-serif', fontSize: 12,
                          color: isSelected ? '#AAAABB' : '#555577',
                          lineHeight: 1.6,
                        }}>
                          {pp.desc}
                        </div>
                        {isSelected && (
                          <div style={{ marginTop: 10 }}>
                            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#888899', lineHeight: 1.6, marginBottom: 10 }}>
                              {pp.hint}
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); onSelect(pp.id) }}
                              className="text-xs font-bold px-4 py-2 transition-all"
                              style={{
                                background: '#D4A847', color: '#1A1A2A',
                                border: 'none', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.08em',
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.background = '#B8922E')}
                              onMouseLeave={(e) => (e.currentTarget.style.background = '#D4A847')}
                            >
                              {pp.journeyHint} →
                            </button>
                          </div>
                        )}
                      </div>
                      <CardIllustration id={pp.id} />
                    </div>
                  </button>

                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute', top: 10, right: 10,
                        width: 22, height: 22,
                        background: '#D4A847', color: '#1A1A2A',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 900, pointerEvents: 'none',
                      }}
                    >✓</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {selected && selected !== 'defense' && (
          <div style={{ marginTop: 24, width: '100%', maxWidth: 512 }}>
            <button
              onClick={() => onSelect(selected)}
              className="w-full py-4 text-xs font-bold transition-all"
              style={{ background: '#D4A847', color: '#1A1A2A', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', border: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#B8922E')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#D4A847')}
            >
              BEGIN MY JOURNEY →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
