import { POINTS, PHASE_ACCENTS, PHASE_LABELS } from './data'
import type { Point, Phase } from './types'

export interface SearchResult {
  idx: number
  pt: Point
  score: number
  snippet: string
  snippetField: string
  accent: string
  phaseLabel: string
}

function extractSnippet(text: string, terms: string[], maxLen = 140): string {
  const lower = text.toLowerCase()
  let bestPos = 0
  let bestCount = 0

  for (let i = 0; i < lower.length; i++) {
    const window = lower.slice(i, i + maxLen)
    const count = terms.filter((t) => window.includes(t)).length
    if (count > bestCount) {
      bestCount = count
      bestPos = i
    }
  }

  const start = bestPos
  const end = Math.min(text.length, start + maxLen)
  return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '')
}

export function searchPoints(query: string): SearchResult[] {
  const terms = query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((t) => t.length > 1)

  if (!terms.length) return []

  const results: SearchResult[] = []

  for (let idx = 0; idx < POINTS.length; idx++) {
    const pt = POINTS[idx]

    const fields = [
      { name: 'title', text: pt.title, weight: 4 },
      { name: 'key point', text: pt.claim, weight: 3 },
      { name: 'key insight', text: pt.insight, weight: 2 },
      { name: 'takeaway', text: pt.takeaway, weight: 2 },
      { name: 'scripture', text: `${pt.scripture} ${pt.ref}`, weight: 2 },
      { name: 'context', text: pt.sg, weight: 1 },
      ...pt.geisler.map((g) => ({
        name: `argument: ${g.head}`,
        text: `${g.head}. ${g.body}`,
        weight: 1,
      })),
    ]

    let totalScore = 0
    let bestSnippet = ''
    let bestField = ''
    let bestScore = 0

    for (const field of fields) {
      const lower = field.text.toLowerCase()
      const matchCount = terms.filter((t) => lower.includes(t)).length
      const score = matchCount * field.weight
      if (score > 0) {
        totalScore += score
        if (score > bestScore) {
          bestScore = score
          bestField = field.name
          bestSnippet = extractSnippet(field.text, terms)
        }
      }
    }

    if (totalScore > 0) {
      results.push({
        idx,
        pt,
        score: totalScore,
        snippet: bestSnippet,
        snippetField: bestField,
        accent: PHASE_ACCENTS[pt.phase as Phase],
        phaseLabel: PHASE_LABELS[pt.phase as Phase],
      })
    }
  }

  return results.sort((a, b) => b.score - a.score)
}

export function getAllPoints(): SearchResult[] {
  return POINTS.map((pt, idx) => ({
    idx,
    pt,
    score: 0,
    snippet: pt.claim,
    snippetField: 'key point',
    accent: PHASE_ACCENTS[pt.phase as Phase],
    phaseLabel: PHASE_LABELS[pt.phase as Phase],
  }))
}
