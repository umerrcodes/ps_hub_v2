interface ChatInputProps {
    input: string
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: React.FormEvent) => void
  }
  
  export function ChatInput({ input, handleInputChange, handleSubmit }: ChatInputProps) {
    return (
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow">
        <div className="flex space-x-4">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    )
  }