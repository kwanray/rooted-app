'use client'

import { PAIN_POINTS, PAIN_POINT_ENTRY, POINTS } from '@/lib/data'
import type { PainPointId } from '@/lib/types'

const C = {
  page:       '#12121E',
  surface:    '#1E1E2E',
  surfaceAlt: '#252536',
  border:     '#FFFFFF14',
  borderGold: '#D4A84740',
  gold:       '#D4A847',
  white:      '#F0EEE8',
  muted:      '#8888AA',
  hint:       '#555570',
}

const ms = { fontFamily: 'Montserrat, sans-serif' }
const cg = { fontFamily: 'Cormorant Garamond, serif' }

// Reorder: defense first, then the rest
function getSortedPainPoints() {
  const defense = PAIN_POINTS.find(p => p.id === 'defense')
  const others  = PAIN_POINTS.filter(p => p.id !== 'defense')
  return defense ? [defense, ...others] : PAIN_POINTS
}

interface Props {
  onSelect: (id: PainPointId) => void
}

export default function PainPoint({ onSelect }: Props) {
  const sorted = getSortedPainPoints()

  return (
    <div style={{ minHeight: '100vh', background: C.page }}>

      {/* ── Dark header ── */}
      <div style={{ background: C.page, borderBottom: `1px solid ${C.border}`, padding: '2rem 1.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ ...ms, fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', color: C.gold, marginBottom: 10 }}>
          STEP 1 OF YOUR JOURNEY
        </div>
        <h2 style={{ ...cg, fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', fontWeight: 400, color: C.white, lineHeight: 1.2, marginBottom: 10 }}>
          What's your biggest doubt?
        </h2>
        <p style={{ ...ms, fontSize: 13, color: C.muted, maxWidth: 390, margin: '0 auto', lineHeight: 1.75 }}>
          Select the one that resonates most. You'll cover all 12 points — starting with what matters to you, then building the complete foundation.
        </p>
      </div>

      {/* ── Cards ── */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 10 }}>

          {sorted.map((pp) => {
            const isDefense = pp.id === 'defense'

            if (isDefense) {
              return (
                <button
                  key={pp.id}
                  onClick={() => onSelect('defense')}
                  style={{
                    width: '100%', textAlign: 'left', cursor: 'pointer',
                    background: C.gold,
                    border: 'none',
                    padding: '1.25rem 1.25rem',
                    display: 'flex', alignItems: 'center', gap: 14,
                    transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <div style={{ width: 44, height: 44, background: 'rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                    {pp.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ ...ms, fontSize: 12, fontWeight: 800, color: '#12121E', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>
                      {pp.label}
                    </div>
                    <div style={{ ...ms, fontSize: 12, color: 'rgba(18,18,30,0.7)', lineHeight: 1.6 }}>
                      {pp.desc}
                    </div>
                  </div>
                  <div style={{ ...ms, fontSize: 16, fontWeight: 700, color: '#12121E', flexShrink: 0 }}>→</div>
                </button>
              )
            }

            return (
              <button
                key={pp.id}
                onClick={() => onSelect(pp.id)}
                style={{
                  width: '100%', textAlign: 'left', cursor: 'pointer',
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  padding: '1.25rem',
                  display: 'flex', alignItems: 'center', gap: 14,
                  transition: 'border-color 0.15s, background 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = C.borderGold
                  e.currentTarget.style.background = C.surfaceAlt
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = C.border
                  e.currentTarget.style.background = C.surface
                }}
              >
                <div style={{ width: 44, height: 44, background: C.surfaceAlt, border: `1px solid ${C.borderGold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                  {pp.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ ...ms, fontSize: 12, fontWeight: 700, color: C.white, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 3 }}>
                    {pp.label}
                  </div>
                  <div style={{ ...ms, fontSize: 12, color: C.muted, lineHeight: 1.6 }}>
                    {pp.desc}
                  </div>
                </div>
                <div style={{ ...ms, fontSize: 14, color: C.gold, flexShrink: 0 }}>→</div>
              </button>
            )
          })}

        </div>

        {/* Reassurance line */}
        <p style={{ ...ms, fontSize: 11, color: C.hint, textAlign: 'center', marginTop: 20, letterSpacing: '0.04em' }}>
          All paths cover all 12 points — just in a different order.
        </p>
      </div>

    </div>
  )
}
