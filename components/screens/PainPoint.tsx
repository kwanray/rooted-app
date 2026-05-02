'use client'

import { useState } from 'react'
import { PAIN_POINTS } from '@/lib/data'
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
          style={{ color: '#D4A853', fontFamily: 'Lato, sans-serif', letterSpacing: '0.25em' }}
        >
          WHERE DOES YOUR JOURNEY START?
        </div>
        <h2
          className="text-center mb-3"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 400,
            color: '#F5E6C8',
          }}
        >
          What's your biggest doubt?
        </h2>
        <p
          className="text-center mb-10 text-sm"
          style={{ color: '#B8A08A', fontFamily: 'Lato, sans-serif' }}
        >
          Select the one that resonates most. You'll journey through all 12 points — but the content will be personalised to your question.
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
                  background: isSelected ? '#251800' : isHovered ? '#1a1208' : '#161009',
                  border: `1.5px solid ${isSelected ? '#D4A853' : isHovered ? '#D4A85344' : '#1A1208'}`,
                }}
              >
                <div className="flex items-start gap-3">
                  <span style={{ fontSize: 22, flexShrink: 0, lineHeight: 1.4 }}>{pp.icon}</span>
                  <div className="flex-1">
                    <div
                      className="font-bold text-sm mb-1"
                      style={{ color: isSelected ? '#D4A853' : '#F5E6C8', fontFamily: 'Lato, sans-serif' }}
                    >
                      {pp.label}
                    </div>
                    <div className="text-sm" style={{ color: '#B8A08A', fontFamily: 'Lato, sans-serif' }}>
                      {pp.desc}
                    </div>
                    {(isHovered || isSelected) && (
                      <div
                        className="mt-2 text-xs leading-relaxed"
                        style={{ color: '#D4A853', fontFamily: 'Lato, sans-serif' }}
                      >
                        {pp.hint}
                      </div>
                    )}
                  </div>
                  {isSelected && (
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{ width: 22, height: 22, background: '#D4A853', color: '#0D0A05', fontSize: 12, fontWeight: 900 }}
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
            background: selected ? '#D4A853' : '#251800',
            color: selected ? '#0D0A05' : '#4a3f2f',
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
