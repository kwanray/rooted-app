'use client'

import { useState } from 'react'

interface Props {
  pointN: number
  pointTitle: string
  accent: string
  dim: string
}

interface QAPair {
  question: string
  answer: string
}

export default function AskAI({ pointN, pointTitle, accent, dim }: Props) {
  const [question, setQuestion] = useState('')
  const [history, setHistory] = useState<QAPair[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim() || loading) return
    const q = question.trim()
    setQuestion('')
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pointN, pointTitle, question: q }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Request failed')
      setHistory((prev) => [...prev, { question: q, answer: data.answer }])
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="text-xs font-bold tracking-widest mb-2" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
        ASK A QUESTION
      </div>
      <p className="text-sm mb-4" style={{ color: '#65676B' }}>
        Have a question about this point? Ask our AI apologist — grounded in Geisler's framework and Singapore context.
      </p>

      {history.length > 0 && (
        <div className="flex flex-col gap-4 mb-4">
          {history.map((pair, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div
                className="rounded-lg px-4 py-3 text-sm self-end max-w-[85%]"
                style={{ background: accent + '22', color: '#1C1E21', fontFamily: 'Lato, sans-serif' }}
              >
                {pair.question}
              </div>
              <div
                className="rounded-lg px-4 py-3 text-sm leading-relaxed"
                style={{ background: dim, color: '#65676B', border: `1px solid ${accent}22`, fontFamily: 'Lato, sans-serif', whiteSpace: 'pre-wrap' }}
              >
                {pair.answer}
              </div>
            </div>
          ))}
        </div>
      )}

      {loading && (
        <div className="flex gap-1 mb-4 items-center">
          <div className="text-xs" style={{ color: accent }}>Thinking</div>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: 5, height: 5,
                background: accent,
                animation: `pulse 1.2s ${i * 0.2}s ease-in-out infinite`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>
      )}

      {error && (
        <div className="text-sm mb-3 rounded px-3 py-2" style={{ color: '#EF4444', background: '#FEE2E233', border: '1px solid #EF444433' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. How does the cosmological argument respond to the question 'Who created God?'"
          rows={2}
          className="w-full rounded-lg px-4 py-3 text-sm resize-none outline-none"
          style={{
            background: '#FFFFFF',
            border: `1.5px solid ${accent}33`,
            color: '#1C1E21',
            fontFamily: 'Lato, sans-serif',
            lineHeight: 1.6,
          }}
          onFocus={(e) => (e.target.style.borderColor = accent + '88')}
          onBlur={(e) => (e.target.style.borderColor = accent + '33')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSubmit(e as unknown as React.FormEvent)
          }}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="rounded-lg px-4 py-2.5 text-sm font-bold transition-all self-end"
          style={{
            background: loading || !question.trim() ? accent + '33' : accent,
            color: loading || !question.trim() ? '#8A8D91' : '#FFFFFF',
            fontFamily: 'Lato, sans-serif',
            letterSpacing: '0.05em',
            cursor: loading || !question.trim() ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Asking…' : 'Ask →'}
        </button>
      </form>
    </div>
  )
}
