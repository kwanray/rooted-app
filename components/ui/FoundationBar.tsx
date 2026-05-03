'use client'

import { POINTS, PHASE_ACCENTS, PHASE_DIMS, PHASE_LABELS } from '@/lib/data'

interface Props {
  completed: number[]
  currentIdx: number
}

export default function FoundationBar({ completed, currentIdx }: Props) {
  return (
    <div className="w-full px-3 py-3">
      <div className="flex gap-1.5 justify-center flex-wrap">
        {POINTS.map((pt, i) => {
          const isDone = completed.includes(i)
          const isCurrent = i === currentIdx
          const accent = PHASE_ACCENTS[pt.phase]
          const dim = PHASE_DIMS[pt.phase]

          let bg = '#F0F2F5'
          let border = '#E4E6EB'
          let textColor = '#BCC0C4'
          let shadow = ''

          if (isDone) {
            bg = dim
            border = accent
            textColor = accent
          } else if (isCurrent) {
            bg = dim
            border = accent
            textColor = accent
            shadow = `0 0 8px ${accent}66`
          }

          return (
            <div
              key={pt.n}
              title={pt.short}
              style={{
                width: 28,
                height: 28,
                background: bg,
                border: `1.5px solid ${border}`,
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                fontWeight: 700,
                color: textColor,
                boxShadow: shadow,
                fontFamily: 'Lato, sans-serif',
                flexShrink: 0,
                transition: 'all 0.2s ease',
                cursor: 'default',
                letterSpacing: 0,
              }}
            >
              {isDone ? '✓' : pt.n}
            </div>
          )
        })}
      </div>
      <div className="flex gap-4 justify-center mt-2 flex-wrap">
        {[0, 1, 2, 3, 4].map((phase) => (
          <div key={phase} className="flex items-center gap-1">
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: PHASE_ACCENTS[phase],
              }}
            />
            <span
              style={{ fontSize: 9, color: PHASE_ACCENTS[phase], fontFamily: 'Lato, sans-serif', letterSpacing: '0.05em' }}
            >
              {PHASE_LABELS[phase]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
