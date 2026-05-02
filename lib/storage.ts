import type { SavedProgress } from './types'

const KEY = 'rooted-v3'

export function loadProgress(): SavedProgress | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    return JSON.parse(raw) as SavedProgress
  } catch {
    return null
  }
}

export function saveProgress(data: SavedProgress): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    // storage quota exceeded or private mode
  }
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(KEY)
  } catch {
    // ignore
  }
}

export function hasProgress(): boolean {
  const p = loadProgress()
  return p !== null && p.completed.length > 0
}
