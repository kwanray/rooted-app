'use client'

interface Props {
  onStart: () => void
  onResume: () => void
  onSearch: () => void
  hasProgress: boolean
}

export default function Welcome({ onStart, onResume, onSearch, hasProgress }: Props) {
  return (
    <div className="min-h-screen flex flex-col animate-fade-in" style={{ background: '#1A1A2A' }}>

      {/* NGIM-style dark hero */}
      <div className="flex flex-col items-center justify-center flex-1 px-6 py-16 text-center">

        {/* Logo mark */}
        <div className="mb-6">
          <div
            className="inline-flex items-center justify-center mb-4"
            style={{ width: 64, height: 64, border: '2px solid #D4A84744', borderRadius: 4 }}
          >
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <path
                d="M18 4 L18 32 M8 14 Q18 8 28 14"
                stroke="#D4A847"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="18" cy="4" r="2" fill="#D4A847" />
            </svg>
          </div>
          <div
            className="text-xs font-bold tracking-widest"
            style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.3em' }}
          >
            ROOTED
          </div>
        </div>

        {/* Companion badge */}
        <div
          className="inline-block text-xs font-bold mb-6 px-3 py-1"
          style={{
            color: '#AAAABB',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.12em',
            border: '1px solid #FFFFFF11',
          }}
        >
          A COMPANION TO NGIM · NORMAN GEISLER'S 12 POINTS
        </div>

        <h1
          className="mb-4 leading-tight"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 400,
            color: '#FFFFFF',
          }}
        >
          Rooted in Truth.<br />
          <em style={{ color: '#D4A847', fontStyle: 'italic' }}>Grounded in Faith.</em>
        </h1>

        <p
          className="max-w-md mb-3 leading-relaxed"
          style={{ color: '#AAAABB', fontFamily: 'Montserrat, sans-serif', fontSize: 14 }}
        >
          Walk through the foundations of truth, God, miracles, Bible and Jesus in 12 steps.
        </p>
        <p
          className="max-w-sm mb-10 text-xs"
          style={{ color: '#666688', fontFamily: 'Montserrat, sans-serif' }}
        >
          Designed for young Christians in Singapore asking big questions.
        </p>

        {/* NGIM trifecta pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {[
            { label: 'TRUTH',    color: '#AAAABB' },
            { label: 'GOD',      color: '#A78BFA' },
            { label: 'MIRACLES', color: '#D4A847' },
            { label: 'JESUS',    color: '#E07070' },
            { label: 'BIBLE',    color: '#6ABF8A' },
          ].map((tag) => (
            <span
              key={tag.label}
              className="px-3 py-1 text-xs font-bold"
              style={{
                background: 'transparent',
                color: tag.color,
                border: `1px solid ${tag.color}55`,
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.1em',
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          <button
            onClick={onStart}
            className="w-full px-6 py-4 text-xs font-bold transition-all"
            style={{
              background: '#D4A847',
              color: '#1A1A2A',
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '0.1em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#B8922E')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#D4A847')}
          >
            START THE JOURNEY
          </button>

          {hasProgress && (
            <button
              onClick={onResume}
              className="w-full px-6 py-3 text-xs font-bold transition-all"
              style={{
                background: 'transparent',
                color: '#D4A847',
                border: '1.5px solid #D4A84744',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#D4A847')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#D4A84744')}
            >
              RESUME JOURNEY
            </button>
          )}

          <button
            onClick={onSearch}
            className="w-full px-6 py-3 text-xs font-bold flex items-center justify-center gap-2 transition-all"
            style={{
              background: 'transparent',
              color: '#AAAABB',
              border: '1.5px solid #FFFFFF22',
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FFFFFF44')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#FFFFFF22')}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            SEARCH ALL CONTENT
          </button>
        </div>

        <p className="mt-10 text-xs" style={{ color: '#333344', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.06em' }}>
          12 POINTS · 4 SESSIONS · PROGRESS SAVED TO CLOUD
        </p>
      </div>

      {/* NGIM companion footer band */}
      <div
        className="flex items-center justify-between px-6 py-3"
        style={{ background: '#D4A847' }}
      >
        <span className="text-xs font-bold" style={{ color: '#1A1A2A', letterSpacing: '0.08em', fontFamily: 'Montserrat, sans-serif' }}>
          A NORM GEISLER INTERNATIONAL MINISTRIES RESOURCE
        </span>
        <a
          href="https://ngim.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold"
          style={{ color: '#1A1A2A', letterSpacing: '0.06em', fontFamily: 'Montserrat, sans-serif', textDecoration: 'none', borderBottom: '1px solid #1A1A2A55' }}
        >
          NGIM.ORG →
        </a>
      </div>
    </div>
  )
}
