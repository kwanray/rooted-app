'use client'

import type { SpecialViz } from '@/lib/types'

interface Props {
  type: SpecialViz
  accent: string
  dim: string
}

const SURGE_ROWS = [
  { letter: 'S', head: 'Second Law of Thermodynamics', body: 'Usable energy in the universe is constantly being depleted. Since the universe is running down, it cannot be eternal — it had a starting point with maximum usable energy.' },
  { letter: 'U', head: 'Universe is Expanding', body: 'Galaxy redshifts show the universe is expanding outward from a single point. Wind the expansion back and everything converges to an absolute beginning — the Big Bang.' },
  { letter: 'R', head: 'Radiation Afterglow', body: 'The cosmic microwave background radiation is the residual heat left over from the Big Bang explosion — a direct fingerprint confirming the universe had a fiery origin.' },
  { letter: 'G', head: 'Great Galaxy Seeds', body: 'Tiny variations in the cosmic microwave background radiation provided the "seeds" that allowed matter to clump together and form galaxies. Without them, the universe would be a uniform void.' },
  { letter: 'E', head: 'Einstein\'s General Relativity', body: 'Einstein\'s equations prove that space, time, and matter are interconnected and had a definite beginning. The universe is not a static, eternal backdrop — it came into existence.' },
]

const FIVES_ES_NT = [
  { letter: 'E', head: 'Early Dates', body: 'NT documents written within 20–40 years of Jesus\'s life — within the lifetime of eyewitnesses who could verify or refute claims.' },
  { letter: 'E', head: 'Eyewitness Testimony', body: 'Authors claim direct eyewitness status (Luke 1:1–4, 1 John 1:1–3, 2 Peter 1:16). Embarrassing details add credibility.' },
  { letter: 'E', head: 'External Corroboration', body: 'Tacitus, Josephus, Pliny the Younger all reference Jesus, his execution, and the early church — from non-Christian sources.' },
  { letter: 'E', head: 'Exact Manuscript Count', body: '5,700+ Greek manuscripts, 24,000+ total. Far surpasses any other ancient document in both quantity and textual fidelity.' },
  { letter: 'E', head: 'Enemies Couldn\'t Refute', body: 'The Jewish and Roman authorities had every reason to disprove resurrection claims but never produced evidence against them.' },
]

const FIVES_ES_MIRACLES = [
  { letter: 'E', head: 'Empty Tomb', body: 'All four Gospels record the tomb was empty. Jewish leaders never produced the body — they admitted the tomb was empty and claimed theft.' },
  { letter: 'E', head: 'Eyewitness Appearances', body: 'Jesus appeared to Mary, Peter, the Twelve, 500+ people, James, and Paul. These are independent, multiply-attested accounts.' },
  { letter: 'E', head: 'Enemies Converted', body: 'James (sceptic) and Paul (persecutor) became leaders of the church. Both were executed for this belief — not a decision made lightly.' },
  { letter: 'E', head: 'Explosion of the Early Church', body: 'The church began in Jerusalem weeks after the crucifixion — where hostile witnesses had full access to evidence against it.' },
  { letter: 'E', head: 'Early Creed Preserved', body: '1 Corinthians 15:3–7 contains a creed scholars date to within 1–3 years of the crucifixion — predating any possible legend formation.' },
]

const TRILEMMA_CARDS = [
  {
    label: 'Liar',
    summary: 'He knew his claims were false',
    body: 'He deliberately deceived millions. But nothing in his moral teaching, his willingness to die, or his consistent character supports deliberate deception.',
    verdict: 'Contradicts the evidence of his life and death.',
    ok: false,
  },
  {
    label: 'Lunatic',
    summary: 'He sincerely believed false claims',
    body: 'He suffered from a delusional messianic complex. But his teachings are models of psychological health, clarity, and wisdom — not the hallmarks of psychosis.',
    verdict: 'Contradicts his coherence and moral brilliance.',
    ok: false,
  },
  {
    label: 'Lord',
    summary: 'He was exactly who he claimed to be',
    body: 'His claims were true. God entered human history in Jesus of Nazareth. The resurrection is God\'s confirmation that the claim was valid.',
    verdict: 'Consistent with all the evidence.',
    ok: true,
  },
]

const ATTRIBUTES = [
  { head: 'Self-Existent', body: 'God does not depend on anything outside himself for his existence. He simply IS (Exodus 3:14).' },
  { head: 'Eternal', body: 'God has no beginning or end. He exists outside time and created time itself.' },
  { head: 'Omnipotent', body: 'God is all-powerful — limited only by what is logically possible and consistent with his perfect character.' },
  { head: 'Omniscient', body: 'God knows all things — past, present, future — including every thought and intention of every person.' },
  { head: 'Omnipresent', body: 'God is fully present everywhere simultaneously — not divided or distributed, but wholly present in every location.' },
  { head: 'Perfectly Good', body: 'God is the moral standard itself. He cannot do evil because his nature is the definition of goodness.' },
  { head: 'Personal', body: 'God is not a force or energy — he is a personal being who thinks, wills, loves, and relates. This is why prayer makes sense.' },
]

export default function VisualBlocks({ type, accent, dim }: Props) {
  if (!type) return null

  if (type === 'surge') {
    return (
      <div className="rounded-xl overflow-hidden border" style={{ borderColor: accent + '33', background: dim }}>
        <div className="px-4 pt-4 pb-2">
          <div className="text-xs font-bold tracking-widest mb-3" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
            THE SURGE ARGUMENT
          </div>
        </div>
        <div className="flex flex-col">
          {SURGE_ROWS.map((row) => (
            <div key={row.letter} className="flex items-start gap-3 px-4 py-3 border-t" style={{ borderColor: accent + '1a' }}>
              <div
                className="flex-shrink-0 flex items-center justify-center font-bold text-lg rounded"
                style={{ width: 36, height: 36, background: accent + '22', color: accent, fontFamily: 'Cormorant Garamond, serif', fontSize: 22 }}
              >
                {row.letter}
              </div>
              <div>
                <div className="font-bold text-sm mb-0.5" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>{row.head}</div>
                <div className="text-sm leading-relaxed" style={{ color: '#B8A08A' }}>{row.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === '5es') {
    const rows = FIVES_ES_NT
    return (
      <div className="rounded-xl overflow-hidden border" style={{ borderColor: accent + '33', background: dim }}>
        <div className="px-4 pt-4 pb-2">
          <div className="text-xs font-bold tracking-widest mb-3" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
            THE 5 E's OF NT RELIABILITY
          </div>
        </div>
        <div className="flex flex-col">
          {rows.map((row, i) => (
            <div key={i} className="flex items-start gap-3 px-4 py-3 border-t" style={{ borderColor: accent + '1a' }}>
              <div
                className="flex-shrink-0 flex items-center justify-center font-bold rounded"
                style={{ width: 36, height: 36, background: accent + '22', color: accent, fontFamily: 'Lato, sans-serif', fontSize: 16, fontWeight: 900 }}
              >
                {row.letter}
              </div>
              <div>
                <div className="font-bold text-sm mb-0.5" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>{row.head}</div>
                <div className="text-sm leading-relaxed" style={{ color: '#B8A08A' }}>{row.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'trilemma') {
    return (
      <div>
        <div className="text-xs font-bold tracking-widest mb-3" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
          LORD, LIAR, OR LUNATIC?
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TRILEMMA_CARDS.map((card) => (
            <div
              key={card.label}
              className="rounded-xl p-4 border flex flex-col"
              style={{
                background: card.ok ? dim : '#0D0A05',
                borderColor: card.ok ? accent : '#1A1208',
              }}
            >
              <div
                className="text-xl font-bold mb-1"
                style={{ color: card.ok ? accent : '#4a3f2f', fontFamily: 'Cormorant Garamond, serif' }}
              >
                {card.label}
              </div>
              <div className="text-xs font-bold mb-2" style={{ color: '#B8A08A', fontFamily: 'Lato, sans-serif' }}>
                {card.summary}
              </div>
              <div className="text-sm leading-relaxed mb-3 flex-1" style={{ color: '#B8A08A' }}>
                {card.body}
              </div>
              <div
                className="text-xs font-bold px-2 py-1 rounded"
                style={{
                  background: card.ok ? accent + '22' : '#1A1208',
                  color: card.ok ? accent : '#4a3f2f',
                  fontFamily: 'Lato, sans-serif',
                }}
              >
                {card.verdict}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'attributes') {
    return (
      <div className="rounded-xl overflow-hidden border" style={{ borderColor: accent + '33', background: dim }}>
        <div className="px-4 pt-4 pb-2">
          <div className="text-xs font-bold tracking-widest mb-3" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>
            GOD'S ESSENTIAL ATTRIBUTES
          </div>
        </div>
        <div className="flex flex-col">
          {ATTRIBUTES.map((attr, i) => (
            <div key={i} className="flex items-start gap-3 px-4 py-3 border-t" style={{ borderColor: accent + '1a' }}>
              <div
                className="flex-shrink-0 flex items-center justify-center rounded"
                style={{ width: 28, height: 28, background: accent + '22', color: accent, fontSize: 14 }}
              >
                ✓
              </div>
              <div>
                <div className="font-bold text-sm mb-0.5" style={{ color: accent, fontFamily: 'Lato, sans-serif' }}>{attr.head}</div>
                <div className="text-sm leading-relaxed" style={{ color: '#B8A08A' }}>{attr.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}
