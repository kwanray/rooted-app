'use client'

import { CELEBRATIONS } from '@/lib/data'

interface Props {
  celebrationIdx: number
  onContinue: () => void
}

const SESSION_COLORS = ['#1877F2', '#F59E0B', '#EF4444']
const SESSION_DIMS = ['#E7F0FD', '#FEF3C7', '#FEE2E2']

export default function PhaseCelebrate({ celebrationIdx, onContinue }: Props) {
  const cel = CELEBRATIONS[celebrationIdx]
  const accent = SESSION_COLORS[celebrationIdx] ?? '#1877F2'
  const dim = SESSION_DIMS[celebrationIdx] ?? '#E7F0FD'

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 animate-fade-in">
      <div className="w-full max-w-md">
        {/* Trophy */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center rounded-full mb-4"
            style={{ width: 72, height: 72, background: dim, border: `2px solid ${accent}55` }}
          >
            <span style={{ fontSize: 32 }}>
              {celebrationIdx === 0 ? '💡' : celebrationIdx === 1 ? '✨' : '✝️'}
            </span>
          </div>
          <div
            className="text-xs font-bold tracking-widest mb-2"
            style={{ color: accent, fontFamily: 'Lato, sans-serif', letterSpacing: '0.25em' }}
          >
            SESSION {cel.session} COMPLETE
          </div>
          <h2
            className="mb-2"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 400,
              color: '#1C1E21',
            }}
          >
            {cel.title}
          </h2>
          <p className="text-sm" style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}>
            {cel.subtitle}
          </p>
        </div>

        {/* What was established */}
        <div
          className="rounded-xl p-5 mb-6"
          style={{ background: dim, border: `1px solid ${accent}33` }}
        >
          <div
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: accent, fontFamily: 'Lato, sans-serif' }}
          >
            WHAT YOU'VE ESTABLISHED
          </div>
          <ul className="flex flex-col gap-2">
            {cel.established.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span style={{ color: accent, flexShrink: 0, marginTop: 2 }}>✓</span>
                <span className="text-sm" style={{ color: '#1C1E21', fontFamily: 'Lato, sans-serif', lineHeight: 1.6 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Save note */}
        <div
          className="rounded-xl px-4 py-3 mb-6 text-center"
          style={{ background: '#FFFFFF', border: '1px solid #E4E6EB' }}
        >
          <p className="text-xs" style={{ color: '#8A8D91', fontFamily: 'Lato, sans-serif' }}>
            Your progress is saved — you can come back anytime.
          </p>
        </div>

        {/* What's next */}
        <div className="rounded-xl p-5 mb-8" style={{ background: '#FFFFFF', border: '1px solid #E4E6EB' }}>
          <div
            className="text-xs font-bold tracking-widest mb-1"
            style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}
          >
            COMING UP NEXT
          </div>
          <div
            className="font-bold mb-3"
            style={{ color: '#1C1E21', fontFamily: 'Cormorant Garamond, serif', fontSize: 18 }}
          >
            {cel.nextTitle}
          </div>
          <ul className="flex flex-col gap-1.5">
            {cel.nextPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span style={{ color: accent, flexShrink: 0, marginTop: 2, fontSize: 12 }}>→</span>
                <span className="text-sm" style={{ color: '#65676B', fontFamily: 'Lato, sans-serif', lineHeight: 1.5 }}>
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onContinue}
          className="w-full rounded-xl px-6 py-4 text-sm font-bold transition-all"
          style={{
            background: accent,
            color: '#FFFFFF',
            fontFamily: 'Lato, sans-serif',
            letterSpacing: '0.08em',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          START SESSION {cel.session + 1} →
        </button>
      </div>
    </div>
  )
}
