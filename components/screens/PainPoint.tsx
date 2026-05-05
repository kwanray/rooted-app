'use client'

import { useState } from 'react'
import { PAIN_POINTS, PAIN_POINT_ENTRY, PHASE_ACCENTS, PHASE_DIMS, POINTS } from '@/lib/data'
import type { PainPointId } from '@/lib/types'

interface Props {
  onSelect: (id: PainPointId) => void
}

export default function PainPoint({ onSelect }: Props) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [selected, setSelected] = useState<PainPointId | null>(null)

  const handleConfirm = () => {
    if (selected) onSelect(selected)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 animate-fade-in">
      <div className="w-full max-w-lg">
        <div
          className="text-xs font-bold tracking-widest mb-3 text-center"
          style={{ color: '#1877F2', fontFamily: 'Lato, sans-serif', letterSpacing: '0.25em' }}
        >
          WHERE DOES YOUR JOURNEY START?
        </div>
        <h2
          className="text-center mb-3"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 400,
            color: '#1C1E21',
          }}
        >
          What's your biggest doubt?
        </h2>
        <p
          className="text-center mb-10 text-sm"
          style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}
        >
          Select the one that resonates most. You'll cover all 12 points — starting with what matters to you, then building the complete foundation.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {PAIN_POINTS.map((pp) => {
            const isSelected = selected === pp.id
            const isHovered = hovered === pp.id
            return (
              <button
                key={pp.id}
                onClick={() => setSelected(pp.id)}
                onMouseEnter={() => setHovered(pp.id)}
                onMouseLeave={() => setHovered(null)}
                className="w-full text-left rounded-xl p-4 transition-all"
                style={{
                  background: isSelected ? '#E7F0FD' : isHovered ? '#F5F7FA' : '#FFFFFF',
                  border: `1.5px solid ${isSelected ? '#1877F2' : isHovered ? '#1877F244' : '#E4E6EB'}`,
                  boxShadow: isSelected ? '0 2px 8px #1877F222' : 'none',
                }}
              >
                <div className="flex items-start gap-3">
                  <span style={{ fontSize: 22, flexShrink: 0, lineHeight: 1.4 }}>{pp.icon}</span>
                  <div className="flex-1">
                    <div
                      className="font-bold text-sm mb-1"
                      style={{ color: isSelected ? '#1877F2' : '#1C1E21', fontFamily: 'Lato, sans-serif' }}
                    >
                      {pp.label}
                    </div>
                    <div className="text-sm" style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}>
                      {pp.desc}
                    </div>
                    {(isHovered || isSelected) && (
                      <div className="mt-2 flex flex-col gap-1.5">
                        <div
                          className="text-xs leading-relaxed"
                          style={{ color: '#1877F2', fontFamily: 'Lato, sans-serif' }}
                        >
                          {pp.hint}
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {(() => {
                            const entryIdx = PAIN_POINT_ENTRY[pp.id]
                            const phase = POINTS[entryIdx].phase
                            const accent = PHASE_ACCENTS[phase]
                            const dim = PHASE_DIMS[phase]
                            return (
                              <span
                                className="text-xs font-bold px-2 py-0.5 rounded-full"
                                style={{ background: dim, color: accent, border: `1px solid ${accent}33`, fontFamily: 'Lato, sans-serif' }}
                              >
                                {pp.journeyHint}
                              </span>
                            )
                          })()}
                        </div>
                      </div>
                    )}
                  </div>
                  {isSelected && (
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{ width: 22, height: 22, background: '#1877F2', color: '#FFFFFF', fontSize: 12, fontWeight: 900 }}
                    >
                      ✓
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        <button
          onClick={handleConfirm}
          disabled={!selected}
          className="w-full rounded-xl px-6 py-4 text-sm font-bold transition-all"
          style={{
            background: selected ? '#1877F2' : '#E7F0FD',
            color: selected ? '#FFFFFF' : '#8A8D91',
            fontFamily: 'Lato, sans-serif',
            letterSpacing: '0.08em',
            cursor: selected ? 'pointer' : 'not-allowed',
          }}
        >
          BEGIN MY JOURNEY →
        </button>
      </div>
    </div>
  )
}
