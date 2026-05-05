'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  prompt: string
  pointIdx: number
  value: string
  onChange: (val: string) => void
  accent: string
  dim: string
}

export default function ReflectField({ prompt, pointIdx, value, onChange, accent, dim }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [saved, setSaved] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const el = ref.current
    if (el) {
      el.style.height = 'auto'
      el.style.height = `${el.scrollHeight}px`
    }
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setSaved(true)
      setTimeout(() => setSaved(false), 1500)
    }, 600)
  }

  return (
    <div>
      <div className="text-xs font-bold tracking-widest mb-2" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
        REFLECT
      </div>
      <p className="text-sm mb-3 leading-relaxed" style={{ color: '#65676B' }}>{prompt}</p>
      <div className="relative">
        <textarea
          ref={ref}
          value={value}
          onChange={handleChange}
          placeholder="Write your thoughts here..."
          rows={3}
          className="w-full rounded-lg px-4 py-3 text-sm resize-none outline-none transition-colors"
          style={{
            background: '#FFFFFF',
            border: `1.5px solid ${accent}33`,
            color: '#1C1E21',
            fontFamily: 'Lato, sans-serif',
            lineHeight: 1.7,
            minHeight: 96,
          }}
          onFocus={(e) => (e.target.style.borderColor = accent + '88')}
          onBlur={(e) => (e.target.style.borderColor = accent + '33')}
        />
        {saved && (
          <span
            className="absolute bottom-3 right-3 text-xs"
            style={{ color: accent, fontFamily: 'Lato, sans-serif' }}
          >
            Saved ✓
          </span>
        )}
      </div>
    </div>
  )
}
