'use client'

import { useEffect, useState, useCallback } from 'react'
import { POINTS, SESSION_BREAK_INDICES } from '@/lib/data'
import {
  loadProgress,
  saveProgress,
  clearProgress,
  hasProgress,
  saveProgressToFirestore,
  loadProgressFromFirestore,
  clearProgressFromFirestore,
} from '@/lib/storage'
import { useAuth } from '@/lib/AuthContext'
import type { AppState, PainPointId, SavedProgress } from '@/lib/types'

import Welcome from '@/components/screens/Welcome'
import PainPoint from '@/components/screens/PainPoint'
import PointView from '@/components/screens/PointView'
import PhaseCelebrate from '@/components/screens/PhaseCelebrate'
import PersonalResponse from '@/components/screens/PersonalResponse'
import Complete from '@/components/screens/Complete'
import Search from '@/components/screens/Search'
import SignIn from '@/components/SignIn'

const INITIAL_STATE: AppState = {
  screen: 'welcome',
  painPointId: null,
  idx: 0,
  completed: [],
  reflections: {},
  declaration: '',
  celebrationIdx: 0,
}

export default function RootedApp() {
  const { user, loading: authLoading, signOut, signInWithGoogle } = useAuth()
  const [state, setState] = useState<AppState>(INITIAL_STATE)
  const [showResume, setShowResume] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [guestMode, setGuestMode] = useState(false)
  const [searchReturnScreen, setSearchReturnScreen] = useState<AppState['screen']>('welcome')

  useEffect(() => {
    if (authLoading) return

    if (!user) {
      // Guest — check localStorage for existing progress
      setShowResume(hasProgress())
      setMounted(true)
      return
    }

    // User signed in — load their cloud progress
    loadProgressFromFirestore(user.uid).then((saved) => {
      if (saved && saved.completed.length > 0) {
        setShowResume(true)
        saveProgress(saved) // mirror to localStorage
      } else {
        // Migrate any existing localStorage data up to Firestore
        const local = loadProgress()
        if (local && local.completed.length > 0) {
          saveProgressToFirestore(user.uid, local)
          setShowResume(true)
        }
      }
      setMounted(true)
    })
  }, [user, authLoading])

  const persist = useCallback(
    (next: AppState) => {
      const data: SavedProgress = {
        painPointId: next.painPointId,
        idx: next.idx,
        completed: next.completed,
        reflections: next.reflections,
        declaration: next.declaration,
      }
      saveProgress(data)
      if (user) saveProgressToFirestore(user.uid, data)
    },
    [user]
  )

  const update = useCallback(
    (partial: Partial<AppState>) => {
      setState((prev) => {
        const next = { ...prev, ...partial }
        persist(next)
        return next
      })
    },
    [persist]
  )

  const handleStart = () => {
    clearProgress()
    if (user) clearProgressFromFirestore(user.uid)
    setState({ ...INITIAL_STATE, screen: 'painpoint' })
  }

  const handleResume = async () => {
    let saved: SavedProgress | null = null
    if (user) saved = await loadProgressFromFirestore(user.uid)
    if (!saved) saved = loadProgress()
    if (!saved) return
    setState({
      screen: 'point',
      painPointId: saved.painPointId,
      idx: saved.idx,
      completed: saved.completed,
      reflections: saved.reflections,
      declaration: saved.declaration ?? '',
      celebrationIdx: 0,
    })
  }

  const handlePainPoint = (id: PainPointId) => {
    update({ painPointId: id, screen: 'point', idx: 0 })
  }

  const handleMarkDone = () => {
    const newCompleted = state.completed.includes(state.idx)
      ? state.completed
      : [...state.completed, state.idx]

    const breakIdx = SESSION_BREAK_INDICES.indexOf(state.idx)
    if (breakIdx !== -1 && !state.completed.includes(state.idx)) {
      update({ completed: newCompleted, celebrationIdx: breakIdx, screen: 'celebrate' })
      return
    }

    if (state.idx === POINTS.length - 1) {
      update({ completed: newCompleted, screen: 'personal-response' })
      return
    }

    if (state.completed.includes(state.idx)) {
      if (state.idx === POINTS.length - 1) {
        update({ screen: 'personal-response' })
      } else {
        update({ idx: state.idx + 1 })
      }
      return
    }

    update({ completed: newCompleted, idx: state.idx + 1 })
  }

  const handleBack = () => {
    if (state.idx === 0) {
      setState({ ...INITIAL_STATE, screen: 'painpoint' })
    } else {
      update({ idx: state.idx - 1 })
    }
  }

  const handleCelebrationContinue = () => {
    const nextIdx = SESSION_BREAK_INDICES[state.celebrationIdx] + 1
    update({ screen: 'point', idx: nextIdx })
  }

  const handleReflectionChange = (val: string) => {
    update({ reflections: { ...state.reflections, [state.idx]: val } })
  }

  const handleDeclarationChange = (val: string) => {
    update({ declaration: val })
  }

  const handleComplete = () => {
    update({ screen: 'complete' })
  }

  const handleOpenSearch = () => {
    setSearchReturnScreen(state.screen)
    setState((prev) => ({ ...prev, screen: 'search' }))
  }

  const handleSearchNavigate = (idx: number) => {
    setState((prev) => ({
      ...prev,
      screen: 'point',
      idx,
    }))
  }

  const handleSearchBack = () => {
    setState((prev) => ({ ...prev, screen: searchReturnScreen }))
  }

  const handleReset = () => {
    clearProgress()
    if (user) clearProgressFromFirestore(user.uid)
    setShowResume(false)
    setState(INITIAL_STATE)
  }

  // Loading spinner while auth resolves or Firestore loads
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F0F2F5' }}>
        <div className="text-xs font-bold tracking-widest" style={{ color: '#1877F2', fontFamily: 'Lato, sans-serif', letterSpacing: '0.3em' }}>
          ROOTED
        </div>
      </div>
    )
  }

  // Show sign-in screen — but with a "skip" option
  if (!user && !guestMode) {
    return <SignIn onSkip={() => setGuestMode(true)} />
  }

  return (
    <main style={{ background: '#F0F2F5', minHeight: '100vh' }}>
      {state.screen === 'welcome' && (
        <>
          {/* Top-right: signed-in user OR guest sign-in prompt */}
          <div className="fixed top-4 right-4 flex items-center gap-3 z-10">
            {user ? (
              <>
                {user.photoURL && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={user.photoURL} alt="" className="w-7 h-7 rounded-full" referrerPolicy="no-referrer" />
                )}
                <button onClick={signOut} className="text-xs" style={{ color: '#65676B' }}>
                  Sign out
                </button>
              </>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                style={{ background: '#E7F0FD', color: '#1877F2', border: '1px solid #1877F244' }}
              >
                ☁️ Sign in to save
              </button>
            )}
          </div>
          <Welcome onStart={handleStart} onResume={handleResume} onSearch={handleOpenSearch} hasProgress={showResume} />
        </>
      )}

      {state.screen === 'painpoint' && (
        <PainPoint onSelect={handlePainPoint} />
      )}

      {state.screen === 'point' && (
        <PointView
          idx={state.idx}
          completed={state.completed}
          painPointId={state.painPointId}
          reflection={state.reflections[state.idx] ?? ''}
          onReflectionChange={handleReflectionChange}
          onMarkDone={handleMarkDone}
          onBack={handleBack}
          onSearch={handleOpenSearch}
        />
      )}

      {state.screen === 'celebrate' && (
        <PhaseCelebrate
          celebrationIdx={state.celebrationIdx}
          onContinue={handleCelebrationContinue}
        />
      )}

      {state.screen === 'personal-response' && (
        <PersonalResponse
          declaration={state.declaration}
          onDeclarationChange={handleDeclarationChange}
          onComplete={handleComplete}
        />
      )}

      {state.screen === 'complete' && (
        <Complete onReset={handleReset} />
      )}

      {state.screen === 'search' && (
        <Search onNavigate={handleSearchNavigate} onBack={handleSearchBack} />
      )}
    </main>
  )
}
