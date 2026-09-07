import { useState, useEffect } from 'react'

const CODE_LINES = [
  { tokens: [{ text: '// Web & Mobile Profile', cls: 'text-secondary' }] },
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
      { text: '  specialty: ', cls: 'text-code-plain' },
      { text: "'Web & Mobile Development'", cls: 'text-string' },
      { text: ',', cls: 'text-code-plain' },
    ],
  },
  {
    tokens: [
      { text: '  frontend: [', cls: 'text-code-plain' },
      { text: "'React'", cls: 'text-string' },
      { text: ', ', cls: 'text-code-plain' },
      { text: "'React Native'", cls: 'text-string' },
      { text: ', ', cls: 'text-code-plain' },
      { text: "'JavaScript'", cls: 'text-string' },
      { text: ', ', cls: 'text-code-plain' },
      { text: "'Bootstrap'", cls: 'text-string' },
      { text: '],', cls: 'text-code-plain' },
    ],
  },
  {
    tokens: [
      { text: '  backend: [', cls: 'text-code-plain' },
      { text: "'ASP.NET Core'", cls: 'text-string' },
      { text: ', ', cls: 'text-code-plain' },
      { text: "'C#'", cls: 'text-string' },
      { text: ', ', cls: 'text-code-plain' },
      { text: "'SQL Server'", cls: 'text-string' },
      { text: '],', cls: 'text-code-plain' },
    ],
  },
  { tokens: [{ text: '  experience: [', cls: 'text-code-plain' }] },
  {
    tokens: [
      { text: '    ', cls: 'text-code-plain' },
      { text: "'Pal4it Backend (2025)'", cls: 'text-teal' },
      { text: ',', cls: 'text-code-plain' },
    ],
  },
  {
    tokens: [
      { text: '    ', cls: 'text-code-plain' },
      { text: "'Yukatech Web & Mobile (2026)'", cls: 'text-teal' },
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

// Compute token offsets once at module load
let staticOffset = 0
const linesWithOffsets = CODE_LINES.map((line, lineIndex) => {
  const tokens = line.tokens.map((token, tokenIndex) => {
    const start = staticOffset
    const end = staticOffset + token.text.length
    staticOffset = end
    return {
      ...token,
      start,
      end,
      id: `${lineIndex}-${tokenIndex}`,
    }
  })
  return { tokens }
})
const totalChars = staticOffset

const rawCodeString = `// Web & Mobile Profile
const developer = {
  name: 'Hala Jabban',
  specialty: 'Web & Mobile Development',
  frontend: ['React', 'React Native', 'JavaScript', 'Bootstrap'],
  backend: ['ASP.NET Core', 'C#', 'SQL Server'],
  experience: [
    'Pal4it Backend (2025)',
    'Yukatech Web & Mobile (2026)'
  ],
  openForWork: true
};`

export default function TypingCodeCard() {
  const [charCount, setCharCount] = useState(0)
  const [copied, setCopied] = useState(false)

  const isTyping = charCount < totalChars

  // Typing effect loop
  useEffect(() => {
    if (charCount >= totalChars) return

    const delay = Math.floor(Math.random() * 10) + 16
    const timer = setTimeout(() => {
      setCharCount((prev) => prev + 1)
    }, delay)
    return () => clearTimeout(timer)
  }, [charCount])

  const handleReplay = () => {
    setCharCount(0)
  }

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
            <i className={`bi ${isTyping ? 'bi-arrow-clockwise spin-slow' : 'bi-arrow-clockwise'} fs-6`}></i>
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
      <div className="code-content font-monospace small position-relative" style={{ minHeight: '325px' }}>
        {linesWithOffsets.map((line, lIndex) => {
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
          <i className="bi bi-code-slash text-teal"></i> Web &amp; Mobile &bull; TypeScript &bull; UTF-8
        </span>
        <span className="small opacity-75">
          {isTyping ? 'Typing code...' : 'Live Interactive'}
        </span>
      </div>
    </div>
  )
}
