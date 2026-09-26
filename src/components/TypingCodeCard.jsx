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
      { text: "'Computer Engineer & Full-Stack'", cls: 'text-string' },
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
      { text: "'JavaScript (ES6+)'", cls: 'text-string' },
      { text: ', ', cls: 'text-code-plain' },
      { text: "'Bootstrap 5'", cls: 'text-string' },
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
  specialty: 'Computer Engineer & Full-Stack',
  frontend: ['React', 'React Native', 'JavaScript (ES6+)', 'Bootstrap 5'],
  backend: ['ASP.NET Core', 'C#', 'SQL Server'],
  experience: [
    'Pal4it Backend (2025)',
    'Yukatech Web & Mobile (2026)'
  ],
  openForWork: true
};`

const CS_CODE = `[ApiController]
[Route("api/[controller]")]
public class PortfolioServices : ControllerBase
{
    [HttpGet("overview")]
    public IActionResult GetCapabilities()
    {
        return Ok(new {
            Engineer = "Hala Jabban",
            Degree = "Computer Engineering (FSMVU)",
            Roots = "Web Development Since 2022",
            Expertise = "Full-Stack React & ASP.NET Core",
            Database = "Microsoft SQL Server & EF Core",
            Availability = "Available for Software Projects"
        });
    }
}`

const JSON_CODE = `{
  "clientValue": {
    "performance": "Fast-loading React applications",
    "responsiveness": "Pixel-perfect mobile & desktop UI",
    "backendSecurity": "Structured REST APIs with C# & SQL",
    "codeIntegrity": "Clean, maintainable, modular structure",
    "collaboration": "Trilingual (Arabic, Turkish, English)"
  },
  "turnaround": "Prompt delivery with continuous communication"
}`

export default function TypingCodeCard() {
  const [activeTab, setActiveTab] = useState('profile')
  const [charCount, setCharCount] = useState(0)
  const [copied, setCopied] = useState(false)

  const isTyping = charCount < totalChars

  // Typing effect loop
  useEffect(() => {
    if (activeTab !== 'profile') return
    if (charCount >= totalChars) return

    const delay = Math.floor(Math.random() * 10) + 16
    const timer = setTimeout(() => {
      setCharCount((prev) => prev + 1)
    }, delay)
    return () => clearTimeout(timer)
  }, [charCount, activeTab])

  const handleReplay = () => {
    setCharCount(0)
  }

  const handleCopyCode = () => {
    const textToCopy =
      activeTab === 'profile' ? rawCodeString : activeTab === 'backend' ? CS_CODE : JSON_CODE
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="hero-code-card p-4 rounded-4 shadow-lg border-0 position-relative">
      {/* Editor Header Bar with Multi-Tabs */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3 pb-2 border-bottom border-secondary border-opacity-25">
        <div className="d-flex align-items-center gap-1.5 flex-wrap">
          <div className="d-flex align-items-center gap-1.5 me-2">
            <span className="window-dot bg-danger"></span>
            <span className="window-dot bg-warning"></span>
            <span className="window-dot bg-success"></span>
          </div>

          <button
            type="button"
            className={`editor-tab btn btn-sm py-1 px-2.5 rounded font-monospace small ${
              activeTab === 'profile' ? 'active-editor-tab' : 'text-secondary'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            <i className="bi bi-filetype-tsx text-teal me-1"></i>
            developer.ts
          </button>

          <button
            type="button"
            className={`editor-tab btn btn-sm py-1 px-2.5 rounded font-monospace small ${
              activeTab === 'backend' ? 'active-editor-tab' : 'text-secondary'
            }`}
            onClick={() => setActiveTab('backend')}
          >
            <i className="bi bi-filetype-cs text-coral me-1"></i>
            Services.cs
          </button>

          <button
            type="button"
            className={`editor-tab btn btn-sm py-1 px-2.5 rounded font-monospace small ${
              activeTab === 'value' ? 'active-editor-tab' : 'text-secondary'
            }`}
            onClick={() => setActiveTab('value')}
          >
            <i className="bi bi-filetype-json text-teal me-1"></i>
            value.json
          </button>
        </div>

        <div className="d-flex align-items-center gap-2">
          {activeTab === 'profile' && (
            <button
              type="button"
              className="btn btn-sm text-secondary p-0 border-0 hover-icon"
              onClick={handleReplay}
              title="Replay typing animation"
              aria-label="Replay animation"
            >
              <i className={`bi ${isTyping ? 'bi-arrow-clockwise spin-slow' : 'bi-arrow-clockwise'} fs-6`}></i>
            </button>
          )}
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

      {/* Editor Body */}
      <div className="code-content font-monospace small position-relative" style={{ minHeight: '325px' }}>
        {activeTab === 'profile' && (
          <div>
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
            {charCount >= totalChars && <span className="typing-cursor"></span>}
          </div>
        )}

        {activeTab === 'backend' && (
          <div className="code-csharp animate-fade-in">
            <p className="text-secondary mb-1">// ASP.NET Core &amp; EF Core Backend Architecture</p>
            <p className="mb-1"><span className="text-keyword">[ApiController]</span></p>
            <p className="mb-1"><span className="text-keyword">[Route</span>(<span className="text-string">"api/[controller]"</span>)<span className="text-keyword">]</span></p>
            <p className="mb-1"><span className="text-keyword">public class</span> <span className="text-teal fw-bold">PortfolioServices</span> : <span className="text-keyword">ControllerBase</span></p>
            <p className="mb-1">{'{'}</p>
            <p className="mb-1 ms-3"><span className="text-keyword">[HttpGet</span>(<span className="text-string">"overview"</span>)<span className="text-keyword">]</span></p>
            <p className="mb-1 ms-3"><span className="text-keyword">public IActionResult</span> <span className="text-coral fw-bold">GetCapabilities</span>()</p>
            <p className="mb-1 ms-3">{'{'}</p>
            <p className="mb-1 ms-4"><span className="text-keyword">return</span> <span className="text-teal">Ok</span>(<span className="text-keyword">new</span> {'{'}</p>
            <p className="mb-1 ms-5">Engineer = <span className="text-string">"Hala Jabban"</span>,</p>
            <p className="mb-1 ms-5">Degree = <span className="text-string">"Computer Engineering (FSMVU)"</span>,</p>
            <p className="mb-1 ms-5">Roots = <span className="text-string">"Web Development Since 2022"</span>,</p>
            <p className="mb-1 ms-5">Frontend = <span className="text-string">"React &amp; Modern JavaScript"</span>,</p>
            <p className="mb-1 ms-5">Backend = <span className="text-string">"C# &amp; ASP.NET Core REST APIs"</span>,</p>
            <p className="mb-1 ms-5">Database = <span className="text-string">"SQL Server &amp; EF Core"</span>,</p>
            <p className="mb-1 ms-5">Availability = <span className="text-boolean">"Open for Collaboration"</span></p>
            <p className="mb-1 ms-4">{'}'});</p>
            <p className="mb-1 ms-3">{'}'}</p>
            <p className="mb-1">{'}'}</p>
          </div>
        )}

        {activeTab === 'value' && (
          <div className="code-json animate-fade-in">
            <p className="text-secondary mb-1">// What I Guarantee to Clients &amp; Engineering Teams</p>
            <p className="mb-1">{'{'}</p>
            <p className="mb-1 ms-3"><span className="text-teal">"deliverables"</span>: {'{'}</p>
            <p className="mb-1 ms-4"><span className="text-coral">"speed"</span>: <span className="text-string">"High-performance, fast-loading React apps"</span>,</p>
            <p className="mb-1 ms-4"><span className="text-coral">"responsiveness"</span>: <span className="text-string">"100% fluid on mobile, tablet &amp; desktop"</span>,</p>
            <p className="mb-1 ms-4"><span className="text-coral">"architecture"</span>: <span className="text-string">"Modular, maintainable &amp; clean code"</span>,</p>
            <p className="mb-1 ms-4"><span className="text-coral">"apis"</span>: <span className="text-string">"Robust RESTful endpoints with structured JSON"</span>,</p>
            <p className="mb-1 ms-4"><span className="text-coral">"communication"</span>: <span className="text-string">"Trilingual (Arabic, Turkish, English)"</span></p>
            <p className="mb-1 ms-3">{'}'},</p>
            <p className="mb-1 ms-3"><span className="text-teal">"turnaround"</span>: <span className="text-string">"Prompt delivery with Git version control"</span>,</p>
            <p className="mb-1 ms-3"><span className="text-teal">"readiness"</span>: <span className="text-boolean">true</span></p>
            <p className="mb-1">{'}'}</p>
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="d-flex justify-content-between align-items-center pt-2 mt-3 border-top border-secondary border-opacity-25 text-secondary font-monospace small">
        <span className="d-flex align-items-center gap-1">
          <i className="bi bi-code-slash text-teal"></i>
          {activeTab === 'profile'
            ? 'TypeScript • React • UTF-8'
            : activeTab === 'backend'
            ? 'C# 12 • ASP.NET Core • Web API'
            : 'JSON • Client Guarantee • UTF-8'}
        </span>
        <span className="small opacity-75">
          {activeTab === 'profile' && isTyping ? 'Typing live...' : 'Interactive'}
        </span>
      </div>
    </div>
  )
}
