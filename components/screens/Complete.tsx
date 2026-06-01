'use client'

import { POINTS, PHASE_ACCENTS, PHASE_DIMS } from '@/lib/data'

interface Props {
  onReset: () => void
}

const NEXT_STEPS = [
  {
    title: 'Read the Gospel of John',
    desc: "Start with the book most focused on Jesus's identity. Read one chapter a day.",
  },
  {
    title: 'Find a local church',
    desc: "Connect with a community of believers in Singapore — don't do this alone. Try City Harvest, FCBC, Cornerstone, or any gospel-centred church.",
  },
  {
    title: 'Tell one person',
    desc: "Share what you've worked through with someone you trust — a friend, a mentor, a family member.",
  },
  {
    title: 'Go deeper',
    desc: 'Read Geisler\'s "I Don\'t Have Enough Faith to Be an Atheist" or Lee Strobel\'s "The Case for Christ."',
  },
  {
    title: 'Pray every day',
    desc: 'Talk to the God who confirmed his existence through Jesus. He hears. He responds. Start there.',
  },
]

export default function Complete({ onReset }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center animate-fade-in" style={{ background: '#FFFFFF' }}>

      {/* Dark hero band */}
      <div className="w-full text-center px-6 py-14" style={{ background: '#1A1A2A' }}>
        <div
          className="inline-flex items-center justify-center mb-4"
          style={{ width: 64, height: 64, border: '2px solid #D4A84744', borderRadius: 4 }}
        >
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <path d="M18 4 L18 32 M8 14 Q18 8 28 14" stroke="#D4A847" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="18" cy="4" r="2" fill="#D4A847" />
          </svg>
        </div>
        <div
          className="text-xs font-bold tracking-widest mb-4"
          style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.25em' }}
        >
          JOURNEY COMPLETE
        </div>
        <h1
          className="mb-4"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            fontWeight: 400,
            color: '#FFFFFF',
          }}
        >
          You are Rooted.
        </h1>
        <p
          className="text-sm leading-relaxed max-w-sm mx-auto"
          style={{ color: '#AAAABB', fontFamily: 'Montserrat, sans-serif', fontSize: 13 }}
        >
          You've worked through the complete logical case for Christianity. This is a foundation — not a ceiling. Keep building.
        </p>
      </div>

      <div className="w-full max-w-lg px-6 py-10">

        {/* All 12 points chips */}
        <div className="mb-10">
          <div
            className="text-xs font-bold tracking-widest mb-4"
            style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em' }}
          >
            YOUR FOUNDATION
          </div>
          <div className="flex flex-wrap gap-2">
            {POINTS.map((pt) => {
              const accent = PHASE_ACCENTS[pt.phase]
              const dim = PHASE_DIMS[pt.phase]
              return (
                <div
                  key={pt.n}
                  className="px-3 py-1.5 text-xs font-bold flex items-center gap-1.5"
                  style={{
                    background: dim,
                    color: accent,
                    border: `1px solid ${accent}44`,
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '0.04em',
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
            style={{ color: '#1A1A2A', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em' }}
          >
            WHAT'S NEXT
          </div>
          <div className="flex flex-col gap-0" style={{ border: '1px solid #E0E0E8' }}>
            {NEXT_STEPS.map((step, i) => (
              <div
                key={i}
                className="p-4 flex items-start gap-3"
                style={{
                  background: '#FFFFFF',
                  borderBottom: i < NEXT_STEPS.length - 1 ? '1px solid #E0E0E8' : 'none',
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center text-xs font-bold"
                  style={{
                    width: 24, height: 24,
                    background: '#D4A847',
                    color: '#1A1A2A',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div
                    className="font-bold text-xs mb-1"
                    style={{ color: '#1A1A2A', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.04em', textTransform: 'uppercase' }}
                  >
                    {step.title}
                  </div>
                  <div className="text-sm" style={{ color: '#555577', fontFamily: 'Montserrat, sans-serif', lineHeight: 1.6, fontSize: 13 }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scripture */}
        <div
          className="p-6 mb-10"
          style={{ background: '#1A1A2A' }}
        >
          <div
            className="text-xs font-bold tracking-widest mb-3"
            style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.12em' }}
          >
            KEY VERSE
          </div>
          <p
            className="text-base mb-2 leading-relaxed"
            style={{ color: '#FFFFFF', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 300 }}
          >
            &ldquo;So then, just as you received Christ Jesus as Lord, continue to live your lives in him, rooted and built up in him, strengthened in the faith as you were taught, and overflowing with thankfulness.&rdquo;
          </p>
          <p className="text-xs font-bold" style={{ color: '#D4A847', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}>
            — COLOSSIANS 2:6–7
          </p>
        </div>

        {/* Reset */}
        <button
          onClick={onReset}
          className="w-full px-6 py-4 text-xs font-bold transition-all"
          style={{
            background: 'transparent',
            color: '#AAAABB',
            border: '1.5px solid #E0E0E8',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.08em',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#AAAABB')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E0E0E8')}
        >
          GO THROUGH AGAIN →
        </button>
      </div>

      {/* Companion band */}
      <div
        className="w-full flex items-center justify-between px-6 py-3 mt-auto"
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
