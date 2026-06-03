'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/AuthContext'

interface Props {
  onStart: () => void
  onResume: () => void
  onSearch: () => void
  hasProgress: boolean
}

export default function Welcome({ onStart, onResume, onSearch, hasProgress }: Props) {
  const { user, signInWithGoogle, signOut } = useAuth()
  const [signingIn, setSigningIn] = useState(false)
  const [authError, setAuthError] = useState('')

  const handleSignIn = async () => {
    setSigningIn(true)
    setAuthError('')
    try {
      await signInWithGoogle()
    } catch {
      setAuthError('Sign-in failed. Try again.')
      setSigningIn(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col animate-fade-in" style={{ background: '#1A1A2A' }}>

      <div className="flex flex-col items-center justify-center flex-1 px-6 py-16 text-center">

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

        <div
          className="inline-block text-xs font-bold mb-6 px-3 py-1"
          style={{
            color: '#AAAABB',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.12em',
            border: '1px solid #FFFFFF11',
          }}
        >
          A COMPANION TO NGIM - NORMAN GEISLERS 12 POINTS
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

        <div className="flex items-center gap-3 w-full max-w-xs mt-6 mb-4">
          <div style={{ flex: 1, height: 1, background: '#FFFFFF11' }} />
          <span className="text-xs" style={{ color: '#444455', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}>
            ACCOUNT
          </span>
          <div style={{ flex: 1, height: 1, background: '#FFFFFF11' }} />
        </div>

        <div className="w-full max-w-xs">
          {user ? (
            <div className="flex items-center justify-between px-3 py-2" style={{ border: '1px solid #FFFFFF11' }}>
              <div className="flex items-center gap-2">
                {user.photoURL && (
                  <img src={user.photoURL} alt="" className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
                )}
                <span className="text-xs" style={{ color: '#AAAABB', fontFamily: 'Montserrat, sans-serif' }}>
                  {user.displayName ?? user.email}
                </span>
              </div>
              <button
                onClick={signOut}
                className="text-xs"
                style={{ color: '#666688', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.06em' }}
              >
                SIGN OUT
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={handleSignIn}
                disabled={signingIn}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 text-xs font-bold transition-all disabled:opacity-60"
                style={{
                  background: '#FFFFFF0D',
                  color: '#CCCCDD',
                  border: '1px solid #FFFFFF22',
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '0.08em',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#FFFFFF1A')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF0D')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                {signingIn ? 'SIGNING IN...' : 'SIGN IN TO SAVE PROGRESS'}
              </button>
              {authError && (
                <p className="text-xs mt-2 text-center" style={{ color: '#E07070', fontFamily: 'Montserrat, sans-serif' }}>
                  {authError}
                </p>
              )}
            </>
          )}
        </div>

        <p className="mt-10 text-xs" style={{ color: '#333344', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.06em' }}>
          12 POINTS - 4 SESSIONS - PROGRESS SAVED TO CLOUD
        </p>
      </div>

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
          NGIM.ORG
        </a>
      </div>
    </div>
  )
}
