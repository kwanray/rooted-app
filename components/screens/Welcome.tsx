'use client'

interface Props {
  onStart: () => void
  onResume: () => void
  onSearch: () => void
  hasProgress: boolean
}

export default function Welcome({ onStart, onResume, onSearch, hasProgress }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center animate-fade-in">
      {/* Logo mark */}
      <div className="mb-8">
        <div
          className="inline-flex items-center justify-center rounded-full mb-4"
          style={{ width: 72, height: 72, background: '#E7F0FD', border: '2px solid #1877F244' }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path
              d="M18 4 L18 32 M8 14 Q18 8 28 14"
              stroke="#1877F2"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="18" cy="4" r="2" fill="#1877F2" />
          </svg>
        </div>
        <div
          className="text-xs font-bold tracking-widest"
          style={{ color: '#1877F2', fontFamily: 'Lato, sans-serif', letterSpacing: '0.3em' }}
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
          color: '#1C1E21',
        }}
      >
        Build your faith<br />
        <em style={{ color: '#1877F2', fontStyle: 'italic' }}>on solid ground.</em>
      </h1>

      <p
        className="max-w-md mb-3 leading-relaxed"
        style={{ color: '#65676B', fontFamily: 'Lato, sans-serif', fontSize: 16 }}
      >
        A step-by-step journey through the logical case for Christianity — built on Norman Geisler's Twelve Points of classical apologetics.
      </p>

      <p
        className="max-w-sm mb-12 text-sm"
        style={{ color: '#8A8D91', fontFamily: 'Lato, sans-serif' }}
      >
        Designed for young Christians in Singapore asking real questions.
      </p>

      {/* Phase tags */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {[
          { label: 'Knowledge', color: '#1877F2' },
          { label: 'Existence', color: '#8B5CF6' },
          { label: 'Identity', color: '#EF4444' },
          { label: 'Authority', color: '#10B981' },
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
            background: '#1877F2',
            color: '#FFFFFF',
            fontFamily: 'Lato, sans-serif',
            letterSpacing: '0.08em',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#166FE5')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#1877F2')}
        >
          START THE JOURNEY
        </button>

        {hasProgress && (
          <button
            onClick={onResume}
            className="w-full rounded-xl px-6 py-3 text-sm font-bold transition-all"
            style={{
              background: 'transparent',
              color: '#1877F2',
              border: '1.5px solid #1877F244',
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#1877F288')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1877F244')}
          >
            RESUME JOURNEY
          </button>
        )}

        <button
          onClick={onSearch}
          className="w-full rounded-xl px-6 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-all"
          style={{
            background: '#FFFFFF',
            color: '#65676B',
            border: '1.5px solid #E4E6EB',
            fontFamily: 'Lato, sans-serif',
            letterSpacing: '0.05em',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#8A8D91')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E4E6EB')}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          SEARCH ALL CONTENT
        </button>
      </div>

      <p className="mt-10 text-xs" style={{ color: '#BCC0C4', fontFamily: 'Lato, sans-serif' }}>
        12 points · 4 sessions · Progress saved to cloud
      </p>
    </div>
  )
}
