'use client'

import { useChat } from 'ai/react'
import { useState } from 'react'
import { ChatWindow } from '@/components/chat/chatWindow'
import { ChatInput } from '@/components/chat/chatInput'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [isTyping, setIsTyping] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    setIsTyping(true)
    await handleSubmit(e)
    setIsTyping(false)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold text-center">AI Chat Assistant</h1>
      </header>

      <ChatWindow messages={messages} isTyping={isTyping} />
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={onSubmit}
      />
    </div>
  )
}