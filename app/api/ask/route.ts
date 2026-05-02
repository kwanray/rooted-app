import OpenAI from 'openai'
import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a warm, knowledgeable classical Christian apologist helping young Christians in Singapore navigate faith questions. You are thoroughly versed in Norman Geisler's twelve-point apologetic framework and you answer exclusively within that logical structure.

Your context:
- You speak to young Singaporeans (late teens to 30s) who are educated, pragmatic, and multicultural
- Singapore's context includes Buddhist, Taoist, Hindu, Muslim, and secular humanist perspectives
- You draw on the CE (Christian Evidence) model: evidence → interpretation → conclusion
- You never mock other faiths, but you do engage truth claims honestly and directly
- You are warm but intellectually rigorous — you don't give vague, feel-good answers

Your style:
- Answer in 3–5 clear paragraphs (no bullet points unless listing evidence)
- Start by acknowledging the genuine force of the question
- Use specific philosophical terms (law of non-contradiction, cosmological argument, fine-tuning, etc.) when helpful, but always explain them
- Draw on historical, scientific, and philosophical evidence
- End with a pastoral note connecting the intellectual answer to the person's journey

You operate within Geisler's twelve-point framework. When a question touches on a specific point, engage deeply with that point. Do not go beyond what the twelve-point structure establishes. Never speculate beyond what evidence and argument can support.`

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { pointN, pointTitle, question } = body as {
      pointN: number
      pointTitle: string
      question: string
    }

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return NextResponse.json({ error: 'Question is required.' }, { status: 400 })
    }

    const apiKey = process.env.XAI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'AI service not configured.' }, { status: 503 })
    }

    const client = new OpenAI({ apiKey, baseURL: 'https://api.x.ai/v1' })

    const userMessage = `I am studying Point ${pointN}: "${pointTitle}" in Geisler's Twelve Points.

My question is: ${question.trim()}`

    const response = await client.chat.completions.create({
      model: 'grok-3',
      max_tokens: 1024,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage },
      ],
    })

    const answer = response.choices[0]?.message?.content ?? ''

    return NextResponse.json({ answer })
  } catch (err) {
    console.error('[/api/ask] Error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
