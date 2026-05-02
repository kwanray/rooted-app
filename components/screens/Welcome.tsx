'use client'

interface Props {
  onStart: () => void
  onResume: () => void
  hasProgress: boolean
}

export default function Welcome({ onStart, onResume, hasProgress }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center animate-fade-in">
      {/* Logo mark */}
      <div className="mb-8">
        <div
          className="inline-flex items-center justify-center rounded-full mb-4"
          style={{ width: 72, height: 72, background: '#251800', border: '2px solid #D4A85344' }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path
              d="M18 4 L18 32 M8 14 Q18 8 28 14"
              stroke="#D4A853"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="18" cy="4" r="2" fill="#D4A853" />
          </svg>
        </div>
        <div
          className="text-xs font-bold tracking-widest"
          style={{ color: '#D4A853', fontFamily: 'Lato, sans-serif', letterSpacing: '0.3em' }}
        >
          ROOTED
        </div>
      </div>

      <h1
        className="mb-4 leading-tight"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 300,
          color: '#F5E6C8',
        }}
      >
        Build your faith<br />
        <em style={{ color: '#D4A853', fontStyle: 'italic' }}>on solid ground.</em>
      </h1>

      <p
        className="max-w-md mb-3 leading-relaxed"
        style={{ color: '#B8A08A', fontFamily: 'Lato, sans-serif', fontSize: 16 }}
      >
        A step-by-step journey through the logical case for Christianity — built on Norman Geisler's Twelve Points of classical apologetics.
      </p>

      <p
        className="max-w-sm mb-12 text-sm"
        style={{ color: '#4a3f2f', fontFamily: 'Lato, sans-serif' }}
      >
        Designed for young Christians in Singapore asking real questions.
      </p>

      {/* Phase tags */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {[
          { label: 'Knowledge', color: '#D4A853' },
          { label: 'Existence', color: '#9B72CF' },
          { label: 'Identity', color: '#CF6060' },
          { label: 'Authority', color: '#5CCF88' },
        ].map((tag) => (
          <span
            key={tag.label}
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background: tag.color + '1a',
              color: tag.color,
              border: `1px solid ${tag.color}33`,
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0.08em',
            }}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        <button
          onClick={onStart}
          className="w-full rounded-xl px-6 py-4 text-sm font-bold transition-all"
          style={{
            background: '#D4A853',
            color: '#0D0A05',
            fontFamily: 'Lato, sans-serif',
            letterSpacing: '0.08em',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#e6b85c')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#D4A853')}
        >
          START THE JOURNEY
        </button>

        {hasProgress && (
          <button
            onClick={onResume}
            className="w-full rounded-xl px-6 py-3 text-sm font-bold transition-all"
            style={{
              background: 'transparent',
              color: '#D4A853',
              border: '1.5px solid #D4A85344',
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#D4A85388')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#D4A85344')}
          >
            RESUME JOURNEY
          </button>
        )}
      </div>

      <p className="mt-10 text-xs" style={{ color: '#2a2015', fontFamily: 'Lato, sans-serif' }}>
        12 points · 4 sessions · Progress saved locally
      </p>
    </div>
  )
}
