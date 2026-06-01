'use client'

import { useState } from 'react'
import { PAIN_POINTS, PAIN_POINT_ENTRY, PHASE_ACCENTS, PHASE_DIMS, POINTS } from '@/lib/data'
import type { PainPointId } from '@/lib/types'

const ICON_BG: Record<string, string> = {
  inherited: '#FEF3C7',
  science:   '#DBEAFE',
  bible:     '#FFF7ED',
  jesus:     '#EDE9FE',
  defense:   '#EEF2FF',
}

interface IllustItem { emoji: string; x: string; y: string; size: number; rotate?: number }
interface IllustChip { label: string; x: string; y: string }
interface IllustData  { bg: string; dark: boolean; items: IllustItem[]; chips: IllustChip[] }

const ILLUSTRATIONS: Record<string, IllustData> = {
  inherited: {
    bg: 'linear-gradient(140deg,#E4D4B0 0%,#CAB48C 100%)',
    dark: false,
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
    bg: 'linear-gradient(140deg,#0F1D3A 0%,#06101E 100%)',
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
    bg: 'linear-gradient(140deg,#D8C490 0%,#B4A06C 100%)',
    dark: false,
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
    bg: 'linear-gradient(140deg,#BF9068 0%,#9A7048 100%)',
    dark: false,
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
  const chipCss: React.CSSProperties = d.dark
    ? { background: 'rgba(255,255,255,0.18)', color: '#C8E0FF', border: '1px solid rgba(255,255,255,0.28)' }
    : { background: 'rgba(255,255,255,0.70)', color: '#5A3C18', border: '1px solid rgba(0,0,0,0.10)' }
  return (
    <div
      className="hidden sm:block flex-shrink-0"
      style={{ width: 140, height: 100, borderRadius: 10, background: d.bg, position: 'relative', overflow: 'hidden' }}
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
            borderRadius: 100, padding: '2px 7px',
            fontSize: 9, fontWeight: 700, fontFamily: 'Lato, sans-serif',
            letterSpacing: '0.06em', whiteSpace: 'nowrap',
          }}
        >{c.label}</span>
      ))}
    </div>
  )
}

function BotanicalLeft() {
  return (
    <svg width="125" height="145" viewBox="0 0 125 145" fill="none" aria-hidden="true">
      <path d="M28 140 C24 112 16 82 8 52 C4 32 10 14 24 7" stroke="#5A9440" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M24 7 C46 -1 72 12 80 27 C60 31 38 24 24 7Z" fill="#6FAA4E"/>
      <path d="M10 38 C-7 27 -8 10 5 5 C13 20 15 33 10 38Z" fill="#88C865"/>
      <path d="M7 62 C-11 51 -10 33 4 30 C12 44 13 58 7 62Z" fill="#5A9440" opacity="0.88"/>
      <path d="M9 87 C-9 77 -8 57 6 54 C14 69 15 83 9 87Z" fill="#7ABE56" opacity="0.78"/>
      <path d="M14 110 C-2 102 -2 84 11 81 C17 94 19 107 14 110Z" fill="#5A9440" opacity="0.68"/>
      <path d="M14 55 C28 40 52 41 57 51 C43 57 25 59 14 55Z" fill="#90CC68" opacity="0.52"/>
    </svg>
  )
}

function BotanicalRight() {
  return (
    <svg width="115" height="155" viewBox="0 0 115 155" fill="none" aria-hidden="true">
      <ellipse cx="84" cy="23" rx="7" ry="13" fill="#F5BA84" opacity="0.92" transform="rotate(0 84 23)"/>
      <ellipse cx="84" cy="23" rx="7" ry="13" fill="#F5BA84" opacity="0.86" transform="rotate(72 84 23)"/>
      <ellipse cx="84" cy="23" rx="7" ry="13" fill="#EBA870" opacity="0.82" transform="rotate(144 84 23)"/>
      <ellipse cx="84" cy="23" rx="7" ry="13" fill="#EBA870" opacity="0.82" transform="rotate(-144 84 23)"/>
      <ellipse cx="84" cy="23" rx="7" ry="13" fill="#F5BA84" opacity="0.86" transform="rotate(-72 84 23)"/>
      <circle cx="84" cy="23" r="8" fill="#D88A45"/>
      <path d="M84 32 C81 57 73 84 69 114 C65 136 67 148 71 155" stroke="#5A9440" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M77 58 C60 47 57 30 69 28 C75 42 77 55 77 58Z" fill="#6FAA4E"/>
      <path d="M71 82 C88 71 93 54 83 51 C79 64 73 79 71 82Z" fill="#88C865"/>
      <path d="M67 107 C84 96 89 79 79 76 C75 90 69 105 67 107Z" fill="#5A9440" opacity="0.78"/>
      <ellipse cx="40" cy="54" rx="5" ry="10" fill="#F0D08A" opacity="0.84" transform="rotate(0 40 54)"/>
      <ellipse cx="40" cy="54" rx="5" ry="10" fill="#F0D08A" opacity="0.78" transform="rotate(72 40 54)"/>
      <ellipse cx="40" cy="54" rx="5" ry="10" fill="#EAC07A" opacity="0.78" transform="rotate(144 40 54)"/>
      <circle cx="40" cy="54" r="6" fill="#D8883A"/>
    </svg>
  )
}

function ArrowConnector() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: 30, alignItems: 'center' }}>
      <svg width="12" height="30" viewBox="0 0 12 30" fill="none">
        <line x1="6" y1="0" x2="6" y2="22" stroke="#72B882" strokeWidth="2" strokeDasharray="3 3"/>
        <path d="M2 19 L6 28 L10 19" stroke="#72B882" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
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
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: '#FAF6EE' }}>
      <div className="absolute top-0 left-0 pointer-events-none select-none">
        <BotanicalLeft />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none select-none">
        <BotanicalRight />
      </div>

      <div className="relative z-10 flex flex-col items-center px-5 py-12">
        <div className="w-full max-w-lg">
          <h2
            className="text-center mb-3"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: '#1C1410',
              lineHeight: 1.15,
            }}
          >
            What's your biggest doubt?
          </h2>
          <p
            className="text-center mb-8 leading-relaxed mx-auto"
            style={{ color: '#6B5C48', fontFamily: 'Lato, sans-serif', fontSize: 14, maxWidth: 390 }}
          >
            Select the one that resonates most. You'll cover all 12 points — starting with what matters to you, then building the complete foundation.
          </p>

          <div>
            {PAIN_POINTS.map((pp, index) => {
              const isDefense = pp.id === 'defense'
              const isSelected = selected === pp.id

              if (isDefense) {
                return (
                  <div key={pp.id}>
                    <ArrowConnector />
                    <div
                      className="rounded-2xl"
                      style={{
                        background: '#EEF3FF',
                        border: '1.5px solid #C7D7FA',
                        boxShadow: '0 4px 18px rgba(24,119,242,0.10)',
                        padding: '18px 20px',
                      }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="flex items-center justify-center rounded-xl flex-shrink-0"
                          style={{ width: 44, height: 44, background: '#DBEAFE', fontSize: 22 }}
                        >
                          {pp.icon}
                        </div>
                        <div>
                          <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 16, fontWeight: 700, color: '#1C1E21', marginBottom: 4 }}>
                            {pp.label}
                          </div>
                          <div style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif', fontSize: 13, lineHeight: 1.5 }}>
                            {pp.desc}
                          </div>
                        </div>
                      </div>
                      <div style={{ color: '#374151', fontFamily: 'Lato, sans-serif', fontSize: 13, lineHeight: 1.6, marginBottom: 16, paddingLeft: 56 }}>
                        {pp.hint}
                      </div>
                      <div style={{ paddingLeft: 56 }}>
                        <button
                          onClick={() => onSelect('defense')}
                          className="w-full rounded-xl py-3 font-bold text-sm transition-all"
                          style={{ background: '#E8622A', color: '#FFFFFF', fontFamily: 'Lato, sans-serif', letterSpacing: '0.05em', border: 'none' }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = '#D45218')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = '#E8622A')}
                        >
                          Begin your journey →
                        </button>
                        <p className="text-center mt-2" style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, color: '#6B7280' }}>
                          (Begin the full journey — step-by-step logical framework)
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
              const iconBg = ICON_BG[pp.id] ?? '#F3F4F6'

              return (
                <div key={pp.id}>
                  {index > 0 && <ArrowConnector />}
                  <div style={{ position: 'relative' }}>
                    <button
                      onClick={() => setSelected(isSelected ? null : pp.id)}
                      className="w-full text-left rounded-2xl transition-all"
                      style={{
                        background: '#FFFFFF',
                        border: `1.5px solid ${isSelected ? '#1877F2' : '#E8DFC8'}`,
                        boxShadow: isSelected ? '0 4px 16px rgba(24,119,242,0.12)' : '0 2px 8px rgba(0,0,0,0.06)',
                        padding: '16px',
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="flex items-center justify-center rounded-xl flex-shrink-0"
                          style={{ width: 44, height: 44, background: iconBg, fontSize: 22 }}
                        >
                          {pp.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 15, fontWeight: 700, color: isSelected ? '#1877F2' : '#1C1410', marginBottom: 4 }}>
                            {pp.label}
                          </div>
                          <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 13, color: '#6B5C48', lineHeight: 1.5 }}>
                            {pp.desc}
                          </div>
                          {isSelected && (
                            <div style={{ marginTop: 10 }}>
                              <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, color: '#4A6FA5', lineHeight: 1.5, marginBottom: 8 }}>
                                {pp.hint}
                              </div>
                              <button
                                onClick={(e) => { e.stopPropagation(); onSelect(pp.id) }}
                                className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all"
                                style={{ background: dim, color: accent, border: `1.5px solid ${accent}55`, fontFamily: 'Lato, sans-serif', letterSpacing: '0.04em' }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = accent; e.currentTarget.style.color = '#FFFFFF' }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = dim; e.currentTarget.style.color = accent }}
                              >
                                {pp.journeyHint} <span style={{ fontSize: 11 }}>→</span>
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
                          width: 22, height: 22, borderRadius: '50%',
                          background: '#1877F2', color: '#FFFFFF',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 12, fontWeight: 900, pointerEvents: 'none',
                        }}
                      >✓</div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {selected && selected !== 'defense' && (
            <div style={{ marginTop: 24 }}>
              <button
                onClick={() => onSelect(selected)}
                className="w-full rounded-xl py-4 text-sm font-bold transition-all"
                style={{ background: '#1877F2', color: '#FFFFFF', fontFamily: 'Lato, sans-serif', letterSpacing: '0.08em', border: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#166FE5')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#1877F2')}
              >
                BEGIN MY JOURNEY →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
