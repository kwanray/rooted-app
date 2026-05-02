'use client'

import { useEffect, useState, useCallback } from 'react'
import { POINTS, SESSION_BREAK_INDICES } from '@/lib/data'
import { loadProgress, saveProgress, clearProgress, hasProgress } from '@/lib/storage'
import type { AppState, PainPointId } from '@/lib/types'

import Welcome from '@/components/screens/Welcome'
import PainPoint from '@/components/screens/PainPoint'
import PointView from '@/components/screens/PointView'
import PhaseCelebrate from '@/components/screens/PhaseCelebrate'
import PersonalResponse from '@/components/screens/PersonalResponse'
import Complete from '@/components/screens/Complete'

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
  const [state, setState] = useState<AppState>(INITIAL_STATE)
  const [showResume, setShowResume] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setShowResume(hasProgress())
    setMounted(true)
  }, [])

  const persist = useCallback((next: AppState) => {
    saveProgress({
      painPointId: next.painPointId,
      idx: next.idx,
      completed: next.completed,
      reflections: next.reflections,
      declaration: next.declaration,
    })
  }, [])

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
    setState({ ...INITIAL_STATE, screen: 'painpoint' })
  }

  const handleResume = () => {
    const saved = loadProgress()
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

    // Check if this idx is a session break
    const breakIdx = SESSION_BREAK_INDICES.indexOf(state.idx)
    if (breakIdx !== -1 && !state.completed.includes(state.idx)) {
      // Show celebration
      update({
        completed: newCompleted,
        celebrationIdx: breakIdx,
        screen: 'celebrate',
      })
      return
    }

    // Check if this is the last point
    if (state.idx === POINTS.length - 1) {
      update({ completed: newCompleted, screen: 'personal-response' })
      return
    }

    // Already completed — just advance
    if (state.completed.includes(state.idx)) {
      if (state.idx === POINTS.length - 1) {
        update({ screen: 'personal-response' })
      } else {
        update({ idx: state.idx + 1 })
      }
      return
    }

    // Advance normally
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

  const handleReset = () => {
    clearProgress()
    setShowResume(false)
    setState(INITIAL_STATE)
  }

  if (!mounted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: '#0D0A05' }}
      >
        <div
          className="text-xs font-bold tracking-widest"
          style={{ color: '#D4A853', fontFamily: 'Lato, sans-serif', letterSpacing: '0.3em' }}
        >
          ROOTED
        </div>
      </div>
    )
  }

  return (
    <main style={{ background: '#0D0A05', minHeight: '100vh' }}>
      {state.screen === 'welcome' && (
        <Welcome
          onStart={handleStart}
          onResume={handleResume}
          hasProgress={showResume}
        />
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
    </main>
  )
}
