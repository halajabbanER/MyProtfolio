import { useState, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function LanyardBadge() {
  const { language } = useLanguage()
  const cardRef = useRef(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const roleText =
    language === 'ar'
      ? 'مهندسة حاسوب ومطورة ويب شاملة'
      : language === 'tr'
      ? 'Bilgisayar Mühendisi & Web Geliştirici'
      : 'Computer Engineer & Web Developer'

  const locationText =
    language === 'ar' ? 'إسطنبول، تركيا' : language === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkiye'

  const verifiedText =
    language === 'ar' ? 'مهندسة معتمدة' : language === 'tr' ? 'Doğrulanmış Mühendis' : 'Verified Engineer'

  const statusText =
    language === 'ar' ? 'متاحة للعمل والمشاريع' : language === 'tr' ? 'Yeni Projeler İçin Müsait' : 'Available for Opportunities'

  const cvBtnText =
    language === 'ar' ? 'تحميل السيرة الذاتية' : language === 'tr' ? 'Özgeçmişi İndir (CV)' : 'Download Resume (CV)'

  const credentials = {
    degree:
      language === 'ar'
        ? { title: 'هندسة الحاسوب', sub: 'جامعة FSMVU' }
        : language === 'tr'
        ? { title: 'Bilgisayar Müh.', sub: 'FSMV Üniversitesi' }
        : { title: 'Computer Eng.', sub: 'FSMVU' },
    roots:
      language === 'ar'
        ? { title: 'تطوير الويب', sub: 'منذ عام 2022' }
        : language === 'tr'
        ? { title: 'Web Geliştirme', sub: "2022'den Beri" }
        : { title: 'Web Craft', sub: 'Active Since 2022' },
    industry:
      language === 'ar'
        ? { title: 'خبرة عملية', sub: 'Pal4it & Yukatech' }
        : language === 'tr'
        ? { title: 'Sektör Tecrübesi', sub: 'Pal4it & Yukatech' }
        : { title: 'Industry Track', sub: 'Pal4it & Yukatech' },
  }

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    setRotate({ x: rotateX, y: rotateY })
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.45,
    })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setGlare((prev) => ({ ...prev, opacity: 0 }))
    setIsHovered(false)
  }

  return (
    <div className="engineer-card-wrapper position-relative">
      {/* Executive Engineer Profile Card with 3D Tilt */}
      <div
        ref={cardRef}
        className={`engineer-identity-card shadow-lg position-relative overflow-hidden ${
          !isHovered ? 'engineer-gentle-float' : ''
        }`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Holographic Glare Sheen following cursor with soft blush & pearl sheen */}
        <div
          className="holographic-glare-overlay"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.5) 0%, rgba(217, 101, 139, 0.22) 35%, rgba(200, 153, 88, 0.16) 60%, transparent 75%)`,
            opacity: glare.opacity,
          }}
        ></div>

        {/* Ambient Top Glow Accent */}
        <div className="card-top-accent-bar"></div>

        {/* Card Header: Verified Seal & Live Availability Status */}
        <div className="d-flex justify-content-between align-items-center mb-4 pt-1">
          <div className="d-inline-flex align-items-center gap-1.5 engineer-seal-pill">
            <i className="bi bi-patch-check-fill text-coral"></i>
            <span className="font-monospace small fw-bold text-teal">{verifiedText}</span>
          </div>

          <div className="d-inline-flex align-items-center gap-2 engineer-status-pill">
            <span className="status-live-dot"></span>
            <span className="small font-monospace">{statusText}</span>
          </div>
        </div>

        {/* Profile Avatar Frame with Luxury Monogram */}
        <div className="engineer-avatar-section text-center mb-3">
          <div className="engineer-avatar-frame mx-auto mb-3 position-relative">
            <div className="engineer-avatar-circle d-flex align-items-center justify-content-center">
              <span className="engineer-avatar-text fw-black font-monospace">HJ</span>
            </div>
            <span className="engineer-verified-check" title={verifiedText}>
              <i className="bi bi-check-lg"></i>
            </span>
          </div>

          {/* Name & Role */}
          <h3 className="engineer-name fw-black mb-1 letter-spacing-1">HALA JABBAN</h3>
          <div className="engineer-role fw-semibold small text-teal mb-2">
            {roleText}
          </div>

          <p className="engineer-location small text-muted mb-0 d-flex align-items-center justify-content-center gap-1">
            <i className="bi bi-geo-alt-fill text-coral"></i>
            <span>{locationText}</span>
          </p>
        </div>

        {/* Professional Credential Pillars */}
        <div className="engineer-credentials-grid mb-3">
          <div className="credential-pillar-box">
            <div className="credential-icon text-coral mb-1">
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <div className="credential-title fw-bold">{credentials.degree.title}</div>
            <div className="credential-sub text-muted small">{credentials.degree.sub}</div>
          </div>

          <div className="credential-pillar-box">
            <div className="credential-icon text-teal mb-1">
              <i className="bi bi-code-slash"></i>
            </div>
            <div className="credential-title fw-bold">{credentials.roots.title}</div>
            <div className="credential-sub text-muted small">{credentials.roots.sub}</div>
          </div>

          <div className="credential-pillar-box">
            <div className="credential-icon text-coral mb-1">
              <i className="bi bi-buildings-fill"></i>
            </div>
            <div className="credential-title fw-bold">{credentials.industry.title}</div>
            <div className="credential-sub text-muted small">{credentials.industry.sub}</div>
          </div>
        </div>

        {/* Core Stack Pills */}
        <div className="d-flex justify-content-center gap-1 flex-wrap mb-4">
          <span className="badge tech-tag">React</span>
          <span className="badge tech-tag">JavaScript</span>
          <span className="badge tech-tag">C# / .NET</span>
          <span className="badge tech-tag">SQL Server</span>
          <span className="badge tech-tag">Bootstrap 5</span>
        </div>

        {/* Action Footer: Download CV & Social Links */}
        <div className="engineer-actions-footer pt-3 border-top d-flex align-items-center justify-content-between gap-2">
          <a
            href="/cv.pdf"
            download="Hala_Jabban_CV.pdf"
            className="btn btn-teal btn-sm px-3 d-inline-flex align-items-center gap-2 rounded-pill flex-grow-1 justify-content-center"
            title={cvBtnText}
          >
            <i className="bi bi-file-earmark-arrow-down-fill"></i>
            <span className="fw-semibold small">{cvBtnText}</span>
          </a>

          <div className="d-flex gap-1">
            <a
              href="https://github.com/halajabbanER"
              target="_blank"
              rel="noreferrer"
              className="btn-social-mini"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hala-jabban-720619277"
              target="_blank"
              rel="noreferrer"
              className="btn-social-mini"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
