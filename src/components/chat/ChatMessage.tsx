import ReactMarkdown from 'react-markdown'

interface ChatMessageProps {
  role: 'user' | 'assistant'
  content: string
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div
      className={`flex ${
        role === 'assistant' ? 'justify-start' : 'justify-end'
      }`}
    >
      <div
        className={`rounded-lg px-4 py-2 max-w-[80%] ${
          role === 'assistant'
            ? 'bg-white text-black'
            : 'bg-blue-500 text-white'
        }`}
      >
        <ReactMarkdown className="prose">
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}