import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

export async function POST(req: Request) {
  const { message, threadId } = await req.json()

  // Try to use existing thread or create new one
  let thread
  try {
    thread = threadId ? await openai.beta.threads.retrieve(threadId) : await openai.beta.threads.create()
  } catch (error) {
    thread = await openai.beta.threads.create()
  }

  // Add the user's message to the thread
  await openai.beta.threads.messages.create(thread.id, {
    role: 'user',
    content: message,
  })

  // Create a run with the assistant
  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: process.env.ASSISTANT_ID ?? 
      (() => { throw new Error('ASSISTANT_ID environment is not set') })()
  })

  // Wait for the run to complete
  let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id)
  while (runStatus.status !== 'completed') {
    await new Promise(resolve => setTimeout(resolve, 1000))
    runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id)
    
    if (runStatus.status === 'failed') {
      return new Response(JSON.stringify({ message: 'Failed to process message' }), {
        status: 500
      })
    }
  }

  // Get the assistant's messages
  const messages = await openai.beta.threads.messages.list(thread.id)
  const lastMessage = messages.data[0]

  return new Response(JSON.stringify({ message: (lastMessage.content[0] as any).text.value, threadId: thread.id }), {
    headers: { 'Content-Type': 'application/json' }
  })
}
