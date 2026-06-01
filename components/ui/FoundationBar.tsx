'use client'

import { POINTS, PHASE_ACCENTS, PHASE_LABELS } from '@/lib/data'

interface Props {
  completed: number[]
  currentIdx: number
  startingIdx?: number
}

export default function FoundationBar({ completed, currentIdx, startingIdx = 0 }: Props) {
  return (
    <div style={{ padding: '6px 4px 4px' }}>
      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
        {POINTS.map((pt, i) => {
          const isDone = completed.includes(i)
          const isCurrent = i === currentIdx
          const isEntryPoint = startingIdx > 0 && i === startingIdx
          const isFoundation = startingIdx > 0 && i < startingIdx && !isDone

          let bg = '#2A2A3A'
          let border = '#FFFFFF22'
          let textColor = '#555577'
          let shadow = ''
          let opacity = 1

          if (isDone) {
            bg = '#2A2A1A'
            border = '#D4A84788'
            textColor = '#D4A847'
          } else if (isCurrent) {
            bg = '#D4A847'
            border = '#D4A847'
            textColor = '#1A1A2A'
            shadow = '0 0 8px #D4A84766'
          } else if (isFoundation) {
            opacity = 0.4
          }

          return (
            <div
              key={pt.n}
              title={isEntryPoint ? `▼ Your starting point · ${pt.short}` : pt.short}
              style={{
                width: 26,
                height: 26,
                background: bg,
                border: isEntryPoint ? '2px solid #D4A847' : `1.5px solid ${border}`,
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 9,
                fontWeight: 800,
                color: isEntryPoint && !isDone && !isCurrent ? '#D4A847' : textColor,
                boxShadow: shadow,
                fontFamily: 'Montserrat, sans-serif',
                flexShrink: 0,
                transition: 'all 0.2s ease',
                cursor: 'default',
                opacity,
              }}
            >
              {isDone ? '✓' : pt.n}
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 4, flexWrap: 'wrap' }}>
        {[0, 1, 2, 3, 4].map((phase) => (
          <div key={phase} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: PHASE_ACCENTS[phase], opacity: 0.7 }} />
            <span style={{ fontSize: 8, color: '#666688', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
              {PHASE_LABELS[phase]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
