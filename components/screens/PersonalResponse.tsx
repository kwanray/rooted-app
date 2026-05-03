'use client'

import { useState } from 'react'
import AskAI from '@/components/ui/AskAI'

interface Props {
  declaration: string
  onDeclarationChange: (val: string) => void
  onComplete: () => void
}

const PRAYER_TEXT = `Lord Jesus, I believe that you are who you claimed to be — the Son of God, confirmed by your resurrection from the dead. I accept that the evidence points to your reality, and I choose to follow you. Forgive my doubts, my sins, and my self-reliance. I receive your grace, and I ask you to ground my faith in truth. Root me deeply in you.`

export default function PersonalResponse({ declaration, onDeclarationChange, onComplete }: Props) {
  const [path, setPath] = useState<'believe' | 'working' | null>(null)
  const [saved, setSaved] = useState(false)

  const handleSaveDeclaration = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 animate-fade-in">
      <div className="w-full max-w-lg">
        <div
          className="text-xs font-bold tracking-widest mb-3 text-center"
          style={{ color: '#10B981', fontFamily: 'Lato, sans-serif', letterSpacing: '0.25em' }}
        >
          PERSONAL RESPONSE
        </div>
        <h2
          className="text-center mb-3"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 400,
            color: '#1C1E21',
          }}
        >
          Where do you stand?
        </h2>
        <p
          className="text-center mb-10 text-sm"
          style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}
        >
          You've worked through the evidence. This is your moment to respond honestly.
        </p>

        {!path && (
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setPath('believe')}
              className="w-full rounded-xl p-5 text-left transition-all"
              style={{ background: '#D1FAE5', border: '1.5px solid #10B98144' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#10B98188')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#10B98144')}
            >
              <div
                className="font-bold text-lg mb-1"
                style={{ color: '#10B981', fontFamily: 'Cormorant Garamond, serif' }}
              >
                "I believe."
              </div>
              <div className="text-sm" style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}>
                The evidence is compelling. I want to commit my faith to Jesus Christ.
              </div>
            </button>

            <button
              onClick={() => setPath('working')}
              className="w-full rounded-xl p-5 text-left transition-all"
              style={{ background: '#FFFFFF', border: '1.5px solid #E4E6EB' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#8A8D91')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E4E6EB')}
            >
              <div
                className="font-bold text-lg mb-1"
                style={{ color: '#1877F2', fontFamily: 'Cormorant Garamond, serif' }}
              >
                "Still working through it."
              </div>
              <div className="text-sm" style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}>
                I have remaining questions. I want to keep exploring before I decide.
              </div>
            </button>
          </div>
        )}

        {path === 'believe' && (
          <div className="animate-fade-in">
            <div
              className="rounded-xl p-5 mb-6"
              style={{ background: '#D1FAE5', border: '1px solid #10B98133' }}
            >
              <div
                className="text-xs font-bold tracking-widest mb-3"
                style={{ color: '#10B981', fontFamily: 'Lato, sans-serif' }}
              >
                A PRAYER OF COMMITMENT
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#65676B', fontFamily: 'Lato, sans-serif', fontStyle: 'italic' }}
              >
                {PRAYER_TEXT}
              </p>
            </div>

            <div className="mb-6">
              <div
                className="text-xs font-bold tracking-widest mb-2"
                style={{ color: '#10B981', fontFamily: 'Lato, sans-serif' }}
              >
                YOUR DECLARATION (optional)
              </div>
              <p className="text-sm mb-3" style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}>
                Write your own response to what you've learned — a commitment, a question, a prayer.
              </p>
              <textarea
                value={declaration}
                onChange={(e) => onDeclarationChange(e.target.value)}
                placeholder="Write here..."
                rows={4}
                className="w-full rounded-lg px-4 py-3 text-sm resize-none outline-none"
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid #10B98133',
                  color: '#1C1E21',
                  fontFamily: 'Lato, sans-serif',
                  lineHeight: 1.7,
                }}
                onFocus={(e) => (e.target.style.borderColor = '#10B98166')}
                onBlur={(e) => (e.target.style.borderColor = '#10B98133')}
              />
              <button
                onClick={handleSaveDeclaration}
                className="mt-2 px-4 py-2 rounded-lg text-xs font-bold transition-all"
                style={{
                  background: saved ? '#10B981' : '#10B98122',
                  color: saved ? '#FFFFFF' : '#10B981',
                  fontFamily: 'Lato, sans-serif',
                }}
              >
                {saved ? 'Saved ✓' : 'Save Declaration'}
              </button>
            </div>

            <button
              onClick={onComplete}
              className="w-full rounded-xl px-6 py-4 text-sm font-bold"
              style={{ background: '#10B981', color: '#FFFFFF', fontFamily: 'Lato, sans-serif', letterSpacing: '0.08em' }}
            >
              COMPLETE MY JOURNEY →
            </button>
          </div>
        )}

        {path === 'working' && (
          <div className="animate-fade-in">
            <p
              className="text-sm mb-6 text-center"
              style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}
            >
              That's honest — and honesty is where good thinking starts. Ask your remaining questions below.
            </p>

            <div className="mb-8">
              <AskAI
                pointN={12}
                pointTitle="The Complete Case for Christianity"
                accent="#1877F2"
                dim="#E7F0FD"
              />
            </div>

            <button
              onClick={onComplete}
              className="w-full rounded-xl px-6 py-3 text-sm font-bold transition-all"
              style={{
                background: 'transparent',
                color: '#1877F2',
                border: '1.5px solid #1877F244',
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0.08em',
              }}
            >
              Finish for now →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
