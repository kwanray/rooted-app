export type Phase = 0 | 1 | 2 | 3 | 4

export type SpecialViz = 'surge' | '5es' | 'trilemma' | 'attributes' | null

export interface GeislerArg {
  head: string
  body: string
}

export interface Point {
  n: number
  title: string
  short: string
  phase: Phase
  highlight: string[]
  highlightMsg: string
  highlightMsgs?: Partial<Record<PainPointId, string>>
  entryBanners?: Partial<Record<PainPointId, string>>
  takeaway: string
  claim: string
  sg: string
  specialViz: SpecialViz
  geisler: GeislerArg[]
  objections?: GeislerArg[]
  insight: string
  reflect: string
  verses: string[]
  scripture: string
  ref: string
}

export interface Celebration {
  session: number
  title: string
  subtitle: string
  established: string[]
  nextTitle: string
  nextPoints: string[]
}

export type PainPointId = 'inherited' | 'science' | 'bible' | 'jesus' | 'defense'

export interface PainPoint {
  id: PainPointId
  icon: string
  label: string
  desc: string
  hint: string
  journeyHint: string
}

export type Screen =
  | 'welcome'
  | 'painpoint'
  | 'point'
  | 'celebrate'
  | 'personal-response'
  | 'complete'
  | 'search'
  | 'foundation-bridge'

export interface AppState {
  screen: Screen
  painPointId: PainPointId | null
  idx: number
  startingIdx: number
  completed: number[]
  reflections: Record<number, string>
  declaration: string
  celebrationIdx: number
}

export interface SavedProgress {
  painPointId: PainPointId | null
  idx: number
  startingIdx?: number
  completed: number[]
  reflections: Record<number, string>
  declaration?: string
}
