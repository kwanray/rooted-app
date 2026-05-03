'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/AuthContext'

export default function SignIn() {
  const { signInWithGoogle } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSignIn = async () => {
    setLoading(true)
    setError('')
    try {
      await signInWithGoogle()
    } catch {
      setError('Sign-in failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: '#0D0A05' }}
    >
      <div
        className="text-xs font-bold tracking-widest mb-12"
        style={{ color: '#D4A853', fontFamily: 'Lato, sans-serif', letterSpacing: '0.3em' }}
      >
        ROOTED
      </div>

      <h1
        className="text-2xl font-bold text-white text-center mb-3"
        style={{ fontFamily: 'Lato, sans-serif' }}
      >
        Build your faith on solid ground.
      </h1>
      <p className="text-sm text-center mb-12" style={{ color: '#8A7A6A' }}>
        Sign in to save your progress across devices.
      </p>

      <button
        onClick={handleSignIn}
        disabled={loading}
        className="flex items-center gap-3 px-6 py-3 rounded-full font-medium text-sm transition-opacity disabled:opacity-60"
        style={{ background: '#1A1510', border: '1px solid #3A3020', color: '#E8D5B0' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        {loading ? 'Signing in…' : 'Continue with Google'}
      </button>

      {error && (
        <p className="text-xs mt-4" style={{ color: '#E57373' }}>
          {error}
        </p>
      )}
    </div>
  )
}
