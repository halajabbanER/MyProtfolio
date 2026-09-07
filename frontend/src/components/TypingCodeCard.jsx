import { useState, useEffect, useMemo } from 'react'

const CODE_LINES = [
  { tokens: [{ text: '// Professional Profile', cls: 'text-secondary' }] },
  { tokens: [{ text: 'const ', cls: 'text-keyword' }, { text: 'developer = {', cls: 'text-code-plain' }] },
  {
    tokens: [
      { text: '  name: ', cls: 'text-code-plain' },
      { text: "'Hala Jabban'", cls: 'text-string' },
      { text: ',', cls: 'text-code-plain' },
    ],
  },
  {
    tokens: [
      { text: '  role: ', cls: 'text-code-plain' },
      { text: "'Software / Backend Engineer'", cls: 'text-string' },
      { text: ',', cls: 'text-code-plain' },
    ],
  },
  {
    tokens: [
      { text: '  university: ', cls: 'text-code-plain' },
      { text: "'FSMVU'", cls: 'text-string' },
      { text: ',', cls: 'text-code-plain' },
    ],
  },
  {
    tokens: [
      { text: '  skills: [', cls: 'text-code-plain' },
      { text: "'React'", cls: 'text-string' },
      { text: ', ', cls: 'text-code-plain' },
      { text: "'React Native'", cls: 'text-string' },
      { text: ', ', cls: 'text-code-plain' },
      { text: "'C#'", cls: 'text-string' },
      { text: ', ', cls: 'text-code-plain' },
      { text: "'ASP.NET'", cls: 'text-string' },
      { text: ', ', cls: 'text-code-plain' },
      { text: "'SQL'", cls: 'text-string' },
      { text: '],', cls: 'text-code-plain' },
    ],
  },
  { tokens: [{ text: '  experience: [', cls: 'text-code-plain' }] },
  {
    tokens: [
      { text: '    ', cls: 'text-code-plain' },
      { text: "'Pal4it Backend Intern'", cls: 'text-teal' },
      { text: ',', cls: 'text-code-plain' },
    ],
  },
  {
    tokens: [
      { text: '    ', cls: 'text-code-plain' },
      { text: "'Yukatech React Native'", cls: 'text-teal' },
    ],
  },
  { tokens: [{ text: '  ],', cls: 'text-code-plain' }] },
  {
    tokens: [
      { text: '  openForWork: ', cls: 'text-code-plain' },
      { text: 'true', cls: 'text-boolean' },
    ],
  },
  { tokens: [{ text: '};', cls: 'text-code-plain' }] },
]

export default function TypingCodeCard() {
  // Precalculate token indices
  const { totalChars, linesWithOffsets } = useMemo(() => {
    let currentOffset = 0
    const lines = CODE_LINES.map((line, lineIndex) => {
      const tokens = line.tokens.map((token, tokenIndex) => {
        const start = currentOffset
        const end = currentOffset + token.text.length
        currentOffset = end
        return {
          ...token,
          start,
          end,
          id: `${lineIndex}-${tokenIndex}`,
        }
      })
      return { tokens }
    })
    return { totalChars: currentOffset, linesWithOffsets: lines }
  }, [])

  const [charCount, setCharCount] = useState(0)
  const [copied, setCopied] = useState(false)
  const [isTyping, setIsTyping] = useState(true)

  // Typing effect loop
  useEffect(() => {
    if (!isTyping) return

    if (charCount < totalChars) {
      // Natural typing variation: faster for spaces and normal for letters
      const delay = Math.floor(Math.random() * 15) + 18
      const timer = setTimeout(() => {
        setCharCount((prev) => prev + 1)
      }, delay)
      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
    }
  }, [charCount, totalChars, isTyping])

  const handleReplay = () => {
    setCharCount(0)
    setIsTyping(true)
  }

  const rawCodeString = `// Professional Profile
const developer = {
  name: 'Hala Jabban',
  role: 'Software / Backend Engineer',
  university: 'FSMVU',
  skills: ['React', 'React Native', 'C#', 'ASP.NET', 'SQL'],
  experience: [
    'Pal4it Backend Intern',
    'Yukatech React Native'
  ],
  openForWork: true
};`

  const handleCopyCode = () => {
    navigator.clipboard.writeText(rawCodeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="hero-code-card p-4 rounded-4 shadow-lg border-0 position-relative">
      {/* Editor Header Bar */}
      <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-secondary border-opacity-25">
        <div className="d-flex align-items-center gap-2">
          <span className="window-dot bg-danger"></span>
          <span className="window-dot bg-warning"></span>
          <span className="window-dot bg-success"></span>
          <span className="editor-tab ms-2 px-2 py-1 rounded small font-monospace">
            <i className="bi bi-file-earmark-code text-teal me-1"></i>
            developer.ts
          </span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            className="btn btn-sm text-secondary p-0 border-0 hover-icon"
            onClick={handleReplay}
            title="Replay typing animation"
            aria-label="Replay animation"
          >
            <i className={`bi bi-arrow-clockwise ${isTyping ? 'spin-slow' : ''} fs-6`}></i>
          </button>
          <button
            type="button"
            className="btn btn-sm text-secondary p-0 border-0 hover-icon"
            onClick={handleCopyCode}
            title="Copy code to clipboard"
            aria-label="Copy code"
          >
            <i className={`bi ${copied ? 'bi-check-lg text-success' : 'bi-clipboard'} fs-6`}></i>
          </button>
        </div>
      </div>

      {/* Animated Code Editor Body */}
      <div className="code-content font-monospace small position-relative" style={{ minHeight: '310px' }}>
        {linesWithOffsets.map((line, lIndex) => {
          // Check if this line has started
          const lineFirstToken = line.tokens[0]
          if (charCount < lineFirstToken.start) return null

          return (
            <p key={lIndex} className="code-line mb-1">
              {line.tokens.map((token) => {
                if (charCount <= token.start) return null

                const visibleText =
                  charCount >= token.end
                    ? token.text
                    : token.text.slice(0, charCount - token.start)

                const isCurrentCursorToken =
                  charCount > token.start && charCount <= token.end

                return (
                  <span key={token.id} className={token.cls}>
                    {visibleText}
                    {isCurrentCursorToken && <span className="typing-cursor"></span>}
                  </span>
                )
              })}
            </p>
          )
        })}

        {/* Cursor at the end when completed */}
        {charCount >= totalChars && (
          <span className="typing-cursor"></span>
        )}
      </div>

      {/* Status Bar */}
      <div className="d-flex justify-content-between align-items-center pt-2 mt-3 border-top border-secondary border-opacity-25 text-secondary font-monospace small">
        <span className="d-flex align-items-center gap-1">
          <i className="bi bi-check2-all text-teal"></i> TypeScript &bull; UTF-8
        </span>
        <span className="small opacity-75">
          {isTyping ? 'Typing code...' : 'Live Interactive'}
        </span>
      </div>
    </div>
  )
}
