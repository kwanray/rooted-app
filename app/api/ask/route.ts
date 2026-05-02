import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

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

    const userMessage = `I am studying Point ${pointN}: "${pointTitle}" in Geisler's Twelve Points.

My question is: ${question.trim()}`

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
    })

    const answer =
      message.content[0].type === 'text' ? message.content[0].text : ''

    return NextResponse.json({ answer })
  } catch (err) {
    console.error('[/api/ask] Error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
