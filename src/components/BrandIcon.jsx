export default function BrandIcon({ name, size = 26, className = '' }) {
  const norm = (name || '').toLowerCase().trim()

  // 1. React
  if (norm === 'react') {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={`brand-svg ${className}`} aria-label="React">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  }

  // 2. React Native
  if (norm === 'react native') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="React Native">
        <rect x="7" y="2" width="18" height="28" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="13" y1="5" x2="19" y2="5" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />
        <circle cx="16" cy="27" r="1.2" fill="#38BDF8" />
        <g transform="translate(16, 15) scale(0.48)">
          <circle cx="0" cy="0" r="2.2" fill="#61DAFB" />
          <ellipse rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
          <ellipse rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60)" />
          <ellipse rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  }

  // 3. JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="JavaScript">
        <rect width="32" height="32" rx="5" fill="#F7DF1E" />
        <path
          d="M17.5 19.8c.4.7.9 1.3 1.8 1.3.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.5-1.4l-.5-.2c-1.5-.6-2.5-1.4-2.5-3.1 0-1.5 1.2-2.7 3-2.7 1.3 0 2.2.5 2.8 1.7l-1.4.9c-.3-.5-.7-.8-1.4-.8-.6 0-1 .4-1 .9 0 .6.4.8 1.3 1.2l.5.2c1.8.8 2.8 1.5 2.8 3.3 0 1.9-1.5 2.9-3.4 2.9-1.9 0-3.1-.9-3.6-2.1l1.6-1.1zm-8.8.2c.3.5.6.9 1.2.9.6 0 1-.2 1-.9v-7.1h1.9v7.1c0 1.8-1.1 2.7-2.8 2.7-1.5 0-2.5-.8-3-2l1.7-.7z"
          fill="#000000"
        />
      </svg>
    )
  }

  // 4. TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="TypeScript">
        <rect width="32" height="32" rx="5" fill="#3178C6" />
        <path
          d="M14.2 14.5v10.3h-2.4V14.5H8.3v-2.1h9.4v2.1h-3.5zm7.3 5.4c.5.8 1.2 1.3 2.1 1.3.9 0 1.4-.4 1.4-1.1 0-.7-.6-1.1-1.7-1.6l-.6-.3c-1.7-.7-2.8-1.5-2.8-3.3 0-1.7 1.3-3 3.2-3 1.4 0 2.4.5 3.1 1.7l-1.6 1c-.4-.6-.8-.9-1.5-.9-.6 0-1.1.3-1.1.8 0 .5.4.8 1.4 1.2l.6.3c1.9.8 3 1.6 3 3.5 0 2-1.6 3.1-3.6 3.1-2 0-3.3-.9-3.9-2.3l1.5-.9z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 5. C#
  if (norm === 'c#' || norm.includes('c#')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="C#">
        <polygon points="16,2 29,9.5 29,24.5 16,32 3,24.5 3,9.5" fill="#9B4993" />
        <path
          d="M14.5 11.2c-1.3-.7-2.8-.4-3.7.5-.9 1-1.3 2.5-1.3 4.3s.4 3.3 1.3 4.3c.9.9 2.4 1.2 3.7.5l.8 1.8c-1.9 1-4.2.6-5.6-.7-1.5-1.4-2.2-3.6-2.2-5.9s.7-4.5 2.2-5.9c1.4-1.3 3.7-1.7 5.6-.7l-.8 1.8z"
          fill="#FFFFFF"
        />
        <g fill="#FFFFFF">
          <rect x="18" y="10" width="1.5" height="12" />
          <rect x="22" y="10" width="1.5" height="12" />
          <rect x="16.5" y="13.2" width="8.5" height="1.5" />
          <rect x="16.5" y="17.2" width="8.5" height="1.5" />
        </g>
      </svg>
    )
  }

  // 6. ASP.NET Core & .NET
  if (norm.includes('asp.net') || norm === '.net' || norm.includes('net core')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="ASP.NET Core">
        <rect width="32" height="32" rx="6" fill="#512BD4" />
        <circle cx="8" cy="20.5" r="2" fill="#FFFFFF" />
        <path
          d="M11 11.5h2.2l4.8 7.3v-7.3h2.3v10h-2.1l-4.9-7.4v7.4H11v-10zm11.2 0h5v1.8h-2.8v2.3h2.5v1.8h-2.5v2.3h2.9v1.8h-5.1v-10z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 7. SQL Server
  if (norm.includes('sql') || norm.includes('database')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="SQL Server">
        <rect width="32" height="32" rx="5" fill="#CC292B" />
        <g fill="#FFFFFF">
          <ellipse cx="16" cy="8" rx="8" ry="3" />
          <path d="M8 8v5c0 1.66 3.58 3 8 3s8-1.34 8-3V8H8z" opacity="0.85" />
          <path d="M8 14v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5H8z" opacity="0.92" />
          <path d="M8 20v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5H8z" />
        </g>
      </svg>
    )
  }

  // 8. Java
  if (norm.includes('java') && !norm.includes('script')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="Java">
        <path
          d="M19.2 4.2c-1.8 1.9-.9 3.6-.1 5.2.9 1.8 1.5 3.3.4 4.8-.7-.9-.9-1.9-.7-2.8.2-1.3 1.1-2.4.4-4.5-.4-1.1-.3-2 .3-2.7h-.3z"
          fill="#EA2D2E"
        />
        <path
          d="M14.5 7.5c-1.2 1.3-.6 2.6-.1 3.7.6 1.3 1.1 2.3.3 3.4-.5-.6-.6-1.3-.5-2 .2-.9.8-1.7.3-3.2-.3-.8-.2-1.4.2-1.9h-.2z"
          fill="#F5821F"
        />
        <path
          d="M9 16c0 4.2 3.1 7.6 7 7.6s7-3.4 7-7.6H9zm15 1.5c1.4-.3 2.5-1.5 2.5-3 0-1.7-1.3-3-3-3h-1v1.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-.7v1.5h1.2z"
          fill="#5382A1"
        />
        <path d="M7 25.5c4.5 1.8 13.5 1.8 18 0-.8-.8-4.2-1.5-9-1.5s-8.2.7-9 1.5z" fill="#007396" />
      </svg>
    )
  }

  // 9. Python
  if (norm.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="Python">
        <path
          d="M15.9 3c-4.3 0-4 1.8-4 1.8l.01 1.9h4.1v.6h-5.8c-2.3 0-3.9 1.4-3.9 4.1 0 2.7 1.4 3.9 3.3 3.9h1.1v-1.6c0-1.8 1.6-3.3 3.4-3.3h5.7c1.5 0 2.8-1.2 2.8-2.8V6.8c0-2-1.8-3.8-3.8-3.8h-2.9zm-1.6 1.8a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z"
          fill="#3776AB"
        />
        <path
          d="M16.1 29c4.3 0 4-1.8 4-1.8l-.01-1.9H16v-.6h5.8c2.3 0 3.9-1.4 3.9-4.1 0-2.7-1.4-3.9-3.3-3.9h-1.1v1.6c0 1.8-1.6 3.3-3.4 3.3H12.2c-1.5 0-2.8 1.2-2.8 2.8v1.9c0 2 1.8 3.8 3.8 3.8h2.9zm1.6-1.8a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"
          fill="#FFD438"
        />
      </svg>
    )
  }

  // 10. HTML5
  if (norm.includes('html')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="HTML5">
        <polygon points="5,2 8,28 16,30 24,28 27,2" fill="#E34F26" />
        <polygon points="16,4.5 16,28.2 22.3,26.5 24.8,4.5" fill="#EF652A" />
        <path
          d="M16 11.5h-5.4l.4 4.5h5V16h-4.6l.4 4.5H16v-4.5h3.9l-.4 4.5-3.5 1v2.3l6.2-1.7.9-10.6H16v4.5z"
          fill="#FFFFFF"
        />
        <path
          d="M16 7h-6.8l.2 2.3H16V7zm0 9.2v-2.3h-4.8l-.2-2.4H16V7h-7l.8 9.2H16zm0 7v-2.3l-3.3-.9-.2-2.3H10l.4 4.5 5.6 1.5z"
          fill="#EDEBEB"
        />
      </svg>
    )
  }

  // 11. CSS3
  if (norm.includes('css')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="CSS3">
        <polygon points="5,2 8,28 16,30 24,28 27,2" fill="#1572B6" />
        <polygon points="16,4.5 16,28.2 22.3,26.5 24.8,4.5" fill="#33A9DC" />
        <path
          d="M16 11.5h-4.8l-.2-2.3H16V7H9.2l.6 6.8H16v-2.3zm0 7.8l-3.3-.9-.2-2.4H10l.4 4.5 5.6 1.5v-2.7z"
          fill="#EDEBEB"
        />
        <path
          d="M16 11.5v-2.3h4.6l.2-2.2H16V7h6.8l-.6 6.8H16v-2.3zm3.7 4.5l-.4 4.5-3.3 1v2.4l6.2-1.7.8-8.5H16v2.3h3.7z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 12. Bootstrap
  if (norm.includes('bootstrap')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="Bootstrap">
        <rect width="32" height="32" rx="7" fill="#7952B3" />
        <path
          d="M12 9h4.8c1.8 0 3.2.9 3.2 2.5 0 1.2-.7 2-1.7 2.3 1.3.3 2.1 1.3 2.1 2.7 0 1.8-1.5 2.8-3.6 2.8H12V9zm2.4 4h2.2c.7 0 1.2-.4 1.2-1s-.5-1-1.2-1h-2.2v2zm0 4.1h2.5c.8 0 1.3-.4 1.3-1.1 0-.7-.5-1.1-1.3-1.1h-2.5v2.2z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 13. Git
  if (norm === 'git') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="Git">
        <g transform="translate(16, 16) rotate(45) translate(-16, -16)">
          <rect x="5" y="5" width="22" height="22" rx="4" fill="#F05032" />
        </g>
        <g stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none">
          <line x1="11" y1="11" x2="21" y2="21" />
          <line x1="16" y1="16" x2="21" y2="11" />
        </g>
        <circle cx="11" cy="11" r="2.4" fill="#FFFFFF" />
        <circle cx="21" cy="21" r="2.4" fill="#FFFFFF" />
        <circle cx="21" cy="11" r="2.4" fill="#FFFFFF" />
      </svg>
    )
  }

  // 14. GitHub
  if (norm.includes('github')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="GitHub">
        <rect width="32" height="32" rx="16" fill="#181717" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 6C10.5 6 6 10.6 6 16.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5.1 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 2.9 1.1.8-.2 1.7-.4 2.6-.4.9 0 1.8.2 2.6.4 2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.8 0 4-2.4 4.8-4.6 5.1.4.3.7 1 .7 2.1v3.1c0 .3.2.6.7.5 4-1.4 6.9-5.1 6.9-9.6C26 10.6 21.5 6 16 6z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 15. EF Core
  if (norm.includes('ef core') || norm.includes('entity framework')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="EF Core">
        <rect width="32" height="32" rx="5" fill="#68217A" />
        <g fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="16,7 26,12 16,17 6,12" fill="rgba(255,255,255,0.2)" />
          <polyline points="6,16 16,21 26,16" />
          <polyline points="6,20 16,25 26,20" />
        </g>
      </svg>
    )
  }

  // 16. Logisim / Hardware
  if (norm.includes('logisim') || norm.includes('hardware') || norm.includes('cpu')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="Logisim">
        <rect width="32" height="32" rx="6" fill="#0F172A" stroke="#FDA4AF" strokeWidth="1.2" />
        <rect x="9" y="9" width="14" height="14" rx="2" fill="#1E293B" stroke="#EC4899" strokeWidth="1.5" />
        <line x1="16" y1="12" x2="16" y2="20" stroke="#EC4899" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="20" y2="16" stroke="#EC4899" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="#FDA4AF" />
        <g stroke="#FDA4AF" strokeWidth="1.4" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="9" />
          <line x1="16" y1="5" x2="16" y2="9" />
          <line x1="20" y1="5" x2="20" y2="9" />
          <line x1="12" y1="23" x2="12" y2="27" />
          <line x1="16" y1="23" x2="16" y2="27" />
          <line x1="20" y1="23" x2="20" y2="27" />
          <line x1="5" y1="12" x2="9" y2="12" />
          <line x1="5" y1="16" x2="9" y2="16" />
          <line x1="5" y1="20" x2="9" y2="20" />
          <line x1="23" y1="12" x2="27" y2="12" />
          <line x1="23" y1="16" x2="27" y2="16" />
          <line x1="23" y1="20" x2="27" y2="20" />
        </g>
      </svg>
    )
  }

  // 17. REST APIs
  if (norm.includes('api') || norm.includes('rest')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="REST APIs">
        <rect width="32" height="32" rx="6" fill="#0F766E" />
        <g stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <circle cx="10" cy="16" r="3" fill="#14B8A6" />
          <circle cx="22" cy="10" r="3" fill="#14B8A6" />
          <circle cx="22" cy="22" r="3" fill="#14B8A6" />
          <line x1="13" y1="15" x2="19" y2="11" />
          <line x1="13" y1="17" x2="19" y2="21" />
        </g>
      </svg>
    )
  }

  // 18. Full-Stack Web
  if (norm.includes('web') || norm.includes('full-stack')) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label="Full-Stack Web">
        <rect width="32" height="32" rx="6" fill="#EC4899" />
        <g fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round">
          <polyline points="12,11 7,16 12,21" />
          <polyline points="20,11 25,16 20,21" />
          <line x1="18" y1="9" x2="14" y2="23" />
        </g>
      </svg>
    )
  }

  // Fallback
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={`brand-svg ${className}`} aria-label={name}>
      <rect width="32" height="32" rx="6" fill="#EC4899" />
      <path d="M12 11l-5 5 5 5m8-10l5 5-5 5" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}
