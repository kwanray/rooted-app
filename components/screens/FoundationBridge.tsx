'use client'

import { FOUNDATION_BRIDGE, POINTS } from '@/lib/data'
import type { PainPointId } from '@/lib/types'

interface Props {
  painPointId: PainPointId | null
  startingIdx: number
  completed: number[]
  onContinue: () => void
}

export default function FoundationBridge({ painPointId, startingIdx, completed, onContinue }: Props) {
  const bridge = painPointId ? FOUNDATION_BRIDGE[painPointId] : null
  const remaining = startingIdx  // points 0..startingIdx-1 not yet read
  const done = completed.length

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 animate-fade-in" style={{ background: '#F0F2F5' }}>
      <div className="w-full max-w-md">

        {/* Icon */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center rounded-full mb-4"
            style={{ width: 72, height: 72, background: '#FEF3C7', border: '2px solid #F59E0B55' }}
          >
            <span style={{ fontSize: 32 }}>🏗️</span>
          </div>
          <div
            className="text-xs font-bold tracking-widest mb-2"
            style={{ color: '#F59E0B', fontFamily: 'Lato, sans-serif', letterSpacing: '0.25em' }}
          >
            SECTION COMPLETE
          </div>
          <h2
            className="mb-2"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              fontWeight: 400,
              color: '#1C1E21',
            }}
          >
            {bridge?.title ?? 'Now for the Foundation'}
          </h2>
        </div>

        {/* Bridge body */}
        <div
          className="rounded-xl p-5 mb-6"
          style={{ background: '#FEF3C7', border: '1px solid #F59E0B33' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: '#1C1E21', fontFamily: 'Lato, sans-serif' }}>
            {bridge?.body ?? 'The remaining points lay the logical foundation for everything you have just read.'}
          </p>
        </div>

        {/* Progress note */}
        <div
          className="rounded-xl px-4 py-3 mb-8 text-center"
          style={{ background: '#FFFFFF', border: '1px solid #E4E6EB' }}
        >
          <p className="text-xs" style={{ color: '#8A8D91', fontFamily: 'Lato, sans-serif' }}>
            {done} of {POINTS.length} points read · {remaining} foundation point{remaining !== 1 ? 's' : ''} remaining
          </p>
        </div>

        <button
          onClick={onContinue}
          className="w-full rounded-xl px-6 py-4 text-sm font-bold transition-all"
          style={{
            background: '#1877F2',
            color: '#FFFFFF',
            fontFamily: 'Lato, sans-serif',
            letterSpacing: '0.08em',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          EXPLORE THE FOUNDATION →
        </button>
      </div>
    </div>
  )
}
