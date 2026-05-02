'use client'

import { useState } from 'react'

interface Props {
  text: string
  accent: string
  dim: string
}

export default function TakeawayCard({ text, accent, dim }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // fallback: silent
    }
  }

  return (
    <div
      className="rounded-xl p-4 flex items-center justify-between gap-3 border"
      style={{ background: dim, borderColor: accent + '44' }}
    >
      <div className="flex-1">
        <div className="text-xs font-bold tracking-widest mb-1" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
          ONE LINE TO REMEMBER
        </div>
        <p className="text-base font-medium leading-snug" style={{ color: '#F5E6C8', fontFamily: 'Cormorant Garamond, serif', fontSize: 18 }}>
          &ldquo;{text}&rdquo;
        </p>
      </div>
      <button
        onClick={handleCopy}
        aria-label="Copy takeaway"
        className="flex-shrink-0 rounded-lg px-3 py-2 text-xs font-bold transition-all"
        style={{
          background: copied ? accent : accent + '22',
          color: copied ? '#0D0A05' : accent,
          fontFamily: 'Lato, sans-serif',
          letterSpacing: '0.05em',
          minWidth: 56,
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}
