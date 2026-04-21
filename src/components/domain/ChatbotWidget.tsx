import { useEffect, useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'
import { FaCommentDots, FaPaperPlane, FaRobot, FaTimes, FaTrashAlt } from 'react-icons/fa'
import { usePortfolioChatbot } from '../../hooks/usePortfolioChatbot'

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const { messages, isTyping, ask, askByTopic, clearChat } = usePortfolioChatbot()
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)
  const messageAreaHeightClass =
    messages.length > 10 ? 'h-80' : messages.length > 6 ? 'h-72' : 'h-56'

  useEffect(() => {
    if (!messagesContainerRef.current) return
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
  }, [messages, isTyping])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!input.trim()) return
    ask(input.trim())
    setInput('')
  }

  const onInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if (!input.trim()) return
      ask(input.trim())
      setInput('')
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <section className="mb-3 w-[min(92vw,360px)] rounded-2xl border border-cyan-900/40 bg-slate-900/95 p-4 shadow-xl shadow-black/40 backdrop-blur">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h3 className="flex items-center gap-2 text-base font-semibold text-cyan-200">
                <FaRobot aria-hidden="true" />
                Ask about Phelokazi
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Hi! Ask me about Phelokazi&apos;s skills, experience, projects, or contact details.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 text-slate-300 transition hover:bg-slate-800 hover:text-cyan-300"
              aria-label="Close chatbot"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>
          {messages.length > 0 || isTyping ? (
            <div
              ref={messagesContainerRef}
              className={`mb-3 ${messageAreaHeightClass} space-y-2 overflow-auto rounded-lg bg-slate-950/70 p-3 text-sm text-slate-200 transition-all duration-300`}
            >
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={
                    message.role === 'user'
                      ? 'ml-auto w-fit max-w-[85%] rounded-lg bg-cyan-500 px-3 py-2 text-slate-900'
                      : 'w-fit max-w-[85%] rounded-lg bg-slate-800 px-3 py-2 text-slate-100'
                  }
                >
                  {message.text}
                </div>
              ))}
              {isTyping ? (
                <div className="w-fit max-w-[85%] rounded-lg bg-slate-800 px-3 py-2 text-slate-100">
                  Assistant is typing...
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="mb-3">
            <p className="mb-2 text-center text-sm font-semibold text-cyan-200">Instant answers</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => askByTopic('skills')}
                className="rounded-full border border-cyan-700 px-3 py-1 text-sm text-slate-200 transition hover:bg-cyan-900/40"
              >
                Skills
              </button>
              <button
                type="button"
                onClick={() => askByTopic('experience')}
                className="rounded-full border border-cyan-700 px-3 py-1 text-sm text-slate-200 transition hover:bg-cyan-900/40"
              >
                Experience
              </button>
              <button
                type="button"
                onClick={() => askByTopic('projects')}
                className="rounded-full border border-cyan-700 px-3 py-1 text-sm text-slate-200 transition hover:bg-cyan-900/40"
              >
                Projects
              </button>
            </div>
          </div>
          <form onSubmit={onSubmit} className="flex gap-2">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={onInputKeyDown}
              className="flex-1 rounded-md border border-slate-400 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500"
              placeholder="Write message"
              rows={1}
            />
            <button
              className="rounded-md bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-900"
              aria-label="Send message"
            >
              <FaPaperPlane aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={clearChat}
              className="rounded-md border border-cyan-700 px-3 py-2 text-sm text-cyan-300 transition hover:bg-cyan-900/40"
              aria-label="Clear chat"
            >
              <FaTrashAlt aria-hidden="true" />
            </button>
          </form>
        </section>
      ) : null}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-xl text-slate-900 shadow-lg shadow-cyan-900/40 transition hover:scale-105"
        aria-label="Open chatbot"
      >
        <FaCommentDots aria-hidden="true" />
      </button>
    </div>
  )
}
