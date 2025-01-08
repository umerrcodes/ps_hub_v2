// src/lib/OpenAIStream.ts
export async function OpenAIStream(response: Response): Promise<ReadableStream> {
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()
    let done = false
  
    const reader = response.body?.getReader()
  
    if (!reader) {
      throw new Error('Failed to get reader from response body')
    }
  
    return new ReadableStream({
      async start(controller) {
        while (!done) {
          const { value, done: doneReading } = await reader.read()
          done = doneReading
          if (value) {
            const chunk = decoder.decode(value)
            controller.enqueue(encoder.encode(chunk))
          }
        }
        controller.close()
      },
    })
  }