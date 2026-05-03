'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { searchPoints, getAllPoints } from '@/lib/search'
import type { SearchResult } from '@/lib/search'
import { PHASE_LABELS } from '@/lib/data'

interface Props {
  onNavigate: (idx: number) => void
  onBack: () => void
}

function Highlight({ text, terms }: { text: string; terms: string[] }) {
  if (!terms.length) return <>{text}</>
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi')
  const parts = text.split(pattern)
  return (
    <>
      {parts.map((part, i) =>
        terms.some((t) => t.toLowerCase() === part.toLowerCase()) ? (
          <mark key={i} style={{ background: '#1877F222', color: '#1877F2', borderRadius: 2, padding: '0 1px' }}>
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

const PHASE_ICONS: Record<string, string> = {
  Knowledge: '🔵',
  Existence: '🟣',
  Identity: '🔴',
  Authority: '🟢',
}

export default function Search({ onNavigate, onBack }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>(() => getAllPoints())
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleQuery = useCallback((value: string) => {
    setQuery(value)
    if (!value.trim()) {
      setResults(getAllPoints())
    } else {
      setResults(searchPoints(value))
    }
  }, [])

  const terms = query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter((t) => t.length > 1)

  const isSearching = query.trim().length > 0

  return (
    <div className="min-h-screen flex flex-col animate-fade-in" style={{ background: '#F0F2F5' }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 px-4 py-3 flex items-center gap-3"
        style={{ background: '#FFFFFF', borderBottom: '1px solid #E4E6EB', boxShadow: '0 1px 4px #0001' }}
      >
        <button
          onClick={onBack}
          className="flex-shrink-0 flex items-center justify-center rounded-full"
          style={{ width: 36, height: 36, background: '#F0F2F5', color: '#65676B', border: '1px solid #E4E6EB' }}
          aria-label="Back"
        >
          ←
        </button>

        <div className="flex-1 flex items-center gap-2 rounded-full px-4 py-2" style={{ background: '#F0F2F5', border: '1.5px solid #E4E6EB' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8D91" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleQuery(e.target.value)}
            placeholder="Search topics, arguments, scripture…"
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: '#1C1E21', fontFamily: 'Lato, sans-serif' }}
          />
          {query && (
            <button onClick={() => handleQuery('')} style={{ color: '#8A8D91', lineHeight: 1 }} aria-label="Clear">
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 w-full max-w-2xl mx-auto px-4 py-4">
        {/* Count / heading */}
        <div className="mb-3">
          {isSearching ? (
            results.length > 0 ? (
              <p className="text-xs" style={{ color: '#8A8D91', fontFamily: 'Lato, sans-serif' }}>
                {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
              </p>
            ) : (
              <p className="text-xs" style={{ color: '#8A8D91', fontFamily: 'Lato, sans-serif' }}>
                No results for &ldquo;{query}&rdquo;
              </p>
            )
          ) : (
            <p className="text-xs" style={{ color: '#8A8D91', fontFamily: 'Lato, sans-serif' }}>
              All 12 points — tap any to jump straight in
            </p>
          )}
        </div>

        {/* No results state */}
        {isSearching && results.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-sm font-bold mb-1" style={{ color: '#1C1E21', fontFamily: 'Lato, sans-serif' }}>
              Nothing found
            </p>
            <p className="text-sm" style={{ color: '#8A8D91', fontFamily: 'Lato, sans-serif' }}>
              Try a different word — e.g. &ldquo;resurrection&rdquo;, &ldquo;universe&rdquo;, &ldquo;truth&rdquo;
            </p>
          </div>
        )}

        {/* Result cards */}
        <div className="flex flex-col gap-3">
          {results.map((r) => (
            <button
              key={r.idx}
              onClick={() => onNavigate(r.idx)}
              className="w-full text-left rounded-xl p-4 transition-all"
              style={{ background: '#FFFFFF', border: '1px solid #E4E6EB', boxShadow: '0 1px 2px #0001' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 2px 8px #0002')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 1px 2px #0001')}
            >
              {/* Top row: phase tag + point number */}
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{
                    background: r.accent + '1a',
                    color: r.accent,
                    border: `1px solid ${r.accent}33`,
                    fontFamily: 'Lato, sans-serif',
                    letterSpacing: '0.06em',
                  }}
                >
                  {PHASE_ICONS[r.phaseLabel] ?? '●'} {r.phaseLabel.toUpperCase()}
                </span>
                <span className="text-xs" style={{ color: '#BCC0C4', fontFamily: 'Lato, sans-serif' }}>
                  Point {r.pt.n} of 12
                </span>
              </div>

              {/* Title */}
              <div
                className="font-bold mb-1.5"
                style={{ color: '#1C1E21', fontFamily: 'Cormorant Garamond, serif', fontSize: 18 }}
              >
                <Highlight text={r.pt.title} terms={terms} />
              </div>

              {/* Snippet */}
              <p className="text-sm leading-relaxed" style={{ color: '#65676B', fontFamily: 'Lato, sans-serif' }}>
                <Highlight text={r.snippet} terms={terms} />
              </p>

              {/* Field label when searching */}
              {isSearching && (
                <p className="text-xs mt-2" style={{ color: r.accent, fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
                  Found in: {r.snippetField}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
