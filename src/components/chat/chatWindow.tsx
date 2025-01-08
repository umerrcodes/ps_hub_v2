import { ChatMessage } from './ChatMessage'
import { Message } from 'ai'

interface ChatWindowProps {
  messages: Message[]
  isTyping: boolean
}

interface ChatMessageProps {
  role: 'system' | 'user' | 'assistant' | 'data'
  content: string
}

export function ChatWindow({ messages, isTyping }: ChatWindowProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          role={message.role as 'user' | 'assistant'}
          content={message.content}
        />
      ))}
      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-white rounded-lg px-4 py-2">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}