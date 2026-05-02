'use client'

import { POINTS, PHASE_ACCENTS, PHASE_DIMS } from '@/lib/data'

interface Props {
  onReset: () => void
}

const NEXT_STEPS = [
  {
    icon: '📖',
    title: 'Read the Gospel of John',
    desc: 'Start with the book most focused on Jesus\'s identity. Read one chapter a day.',
  },
  {
    icon: '⛪',
    title: 'Find a local church',
    desc: 'Connect with a community of believers in Singapore — don\'t do this alone. Try City Harvest, FCBC, Cornerstone, or any gospel-centred church.',
  },
  {
    icon: '🤝',
    title: 'Tell one person',
    desc: 'Share what you\'ve worked through with someone you trust — a friend, a mentor, a family member.',
  },
  {
    icon: '📚',
    title: 'Go deeper',
    desc: 'Read Geisler\'s "I Don\'t Have Enough Faith to Be an Atheist" or Lee Strobel\'s "The Case for Christ."',
  },
  {
    icon: '🙏',
    title: 'Pray every day',
    desc: 'Talk to the God who confirmed his existence through Jesus. He hears. He responds. Start there.',
  },
]

export default function Complete({ onReset }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 animate-fade-in">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center justify-center rounded-full mb-6"
            style={{ width: 80, height: 80, background: '#082416', border: '2px solid #5CCF8844' }}
          >
            <span style={{ fontSize: 36 }}>🌳</span>
          </div>
          <div
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: '#5CCF88', fontFamily: 'Lato, sans-serif', letterSpacing: '0.25em' }}
          >
            JOURNEY COMPLETE
          </div>
          <h1
            className="mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              fontWeight: 400,
              color: '#F5E6C8',
            }}
          >
            You are Rooted.
          </h1>
          <p
            className="text-sm leading-relaxed max-w-sm mx-auto"
            style={{ color: '#B8A08A', fontFamily: 'Lato, sans-serif' }}
          >
            You've worked through the complete logical case for Christianity. This is a foundation — not a ceiling. Keep building.
          </p>
        </div>

        {/* All 12 points chips */}
        <div className="mb-10">
          <div
            className="text-xs font-bold tracking-widest mb-4 text-center"
            style={{ color: '#B8A08A', fontFamily: 'Lato, sans-serif' }}
          >
            YOUR FOUNDATION
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {POINTS.map((pt) => {
              const accent = PHASE_ACCENTS[pt.phase]
              const dim = PHASE_DIMS[pt.phase]
              return (
                <div
                  key={pt.n}
                  className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5"
                  style={{
                    background: dim,
                    color: accent,
                    border: `1px solid ${accent}44`,
                    fontFamily: 'Lato, sans-serif',
                  }}
                >
                  <span style={{ opacity: 0.6 }}>✓</span>
                  {pt.short}
                </div>
              )
            })}
          </div>
        </div>

        {/* What's Next */}
        <div className="mb-10">
          <div
            className="text-xs font-bold tracking-widest mb-4"
            style={{ color: '#5CCF88', fontFamily: 'Lato, sans-serif' }}
          >
            WHAT'S NEXT
          </div>
          <div className="flex flex-col gap-3">
            {NEXT_STEPS.map((step, i) => (
              <div
                key={i}
                className="rounded-xl p-4 flex items-start gap-3"
                style={{ background: '#161009', border: '1px solid #1A1208' }}
              >
                <span style={{ fontSize: 20, flexShrink: 0 }}>{step.icon}</span>
                <div>
                  <div
                    className="font-bold text-sm mb-0.5"
                    style={{ color: '#F5E6C8', fontFamily: 'Lato, sans-serif' }}
                  >
                    {step.title}
                  </div>
                  <div className="text-sm" style={{ color: '#B8A08A', fontFamily: 'Lato, sans-serif', lineHeight: 1.6 }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scripture */}
        <div
          className="text-center rounded-xl p-6 mb-10"
          style={{ background: '#082416', border: '1px solid #5CCF8822' }}
        >
          <p
            className="text-lg mb-2"
            style={{ color: '#F5E6C8', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300 }}
          >
            &ldquo;So then, just as you received Christ Jesus as Lord, continue to live your lives in him, rooted and built up in him, strengthened in the faith as you were taught, and overflowing with thankfulness.&rdquo;
          </p>
          <p className="text-sm" style={{ color: '#5CCF88', fontFamily: 'Lato, sans-serif' }}>
            — Colossians 2:6–7
          </p>
        </div>

        {/* Reset */}
        <button
          onClick={onReset}
          className="w-full rounded-xl px-6 py-4 text-sm font-bold transition-all"
          style={{
            background: 'transparent',
            color: '#4a3f2f',
            border: '1.5px solid #1A1208',
            fontFamily: 'Lato, sans-serif',
            letterSpacing: '0.08em',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#4a3f2f')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1A1208')}
        >
          Go Through Again →
        </button>
      </div>
    </div>
  )
}
