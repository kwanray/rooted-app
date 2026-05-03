import { doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore'
import { db } from './firebase'
import type { SavedProgress } from './types'

const KEY = 'rooted-v3'

// ── localStorage (always available, used as cache) ──────────────────────────

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

// ── Firestore (cloud, per-user) ──────────────────────────────────────────────

export async function saveProgressToFirestore(userId: string, data: SavedProgress): Promise<void> {
  try {
    await setDoc(doc(db, 'users', userId, 'progress', 'current'), {
      painPointId: data.painPointId ?? null,
      idx: data.idx,
      completed: data.completed,
      reflections: data.reflections,
      declaration: data.declaration ?? '',
    })
  } catch (e) {
    console.error('Firestore save failed:', e)
  }
}

export async function loadProgressFromFirestore(userId: string): Promise<SavedProgress | null> {
  try {
    const snap = await getDoc(doc(db, 'users', userId, 'progress', 'current'))
    if (!snap.exists()) return null
    return snap.data() as SavedProgress
  } catch (e) {
    console.error('Firestore load failed:', e)
    return null
  }
}

export async function clearProgressFromFirestore(userId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, 'users', userId, 'progress', 'current'))
  } catch (e) {
    console.error('Firestore clear failed:', e)
  }
}
