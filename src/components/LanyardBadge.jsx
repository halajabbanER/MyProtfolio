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
      ? 'مهندسة حاسوب ومطورة ويب'
      : language === 'tr'
      ? 'BİLGİSAYAR MÜHENDİSİ & WEB GELİŞTİRİCİ'
      : 'COMPUTER ENGINEER & WEB DEVELOPER'

  const locationText =
    language === 'ar' ? 'إسطنبول، تركيا' : language === 'tr' ? 'İSTANBUL, TÜRKİYE' : 'ISTANBUL, TURKIYE'

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -12
    const rotateY = ((x - centerX) / centerX) * 12
    setRotate({ x: rotateX, y: rotateY })
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.6,
    })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setGlare((prev) => ({ ...prev, opacity: 0 }))
    setIsHovered(false)
  }

  return (
    <div className="lanyard-scene d-flex flex-column align-items-center">
      {/* Top Anchor & Metallic Rig */}
      <div className="lanyard-origin-anchor"></div>
      <div className="lanyard-ribbon-cord"></div>

      {/* Realistic Metal Clasp & Buckle */}
      <div className="lanyard-clasp-assembly">
        <div className="clasp-metal-head"></div>
        <div className="clasp-spring-buckle"></div>
        <div className="clasp-hook-loop"></div>
      </div>

      {/* Hanging Badge Card with 3D Tilt */}
      <div
        ref={cardRef}
        className={`lanyard-card-container ${!isHovered ? 'lanyard-gentle-sway' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(900px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease',
        }}
      >
        <div className="lanyard-id-card shadow-lg position-relative overflow-hidden">
          {/* Holographic Glare Sheen following cursor with Rose & Pearl Sheen */}
          <div
            className="holographic-glare-overlay"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.55) 0%, rgba(251, 113, 133, 0.35) 35%, rgba(230, 197, 148, 0.2) 60%, transparent 75%)`,
              opacity: glare.opacity,
            }}
          ></div>

          {/* Punched Hanging Slot at Top */}
          <div className="badge-slot-punch mx-auto"></div>

          {/* Header Row: ID Code + Golden Microchip */}
          <div className="d-flex justify-content-between align-items-center mb-3 mt-1 px-1">
            <div className="d-flex align-items-center gap-1">
              <span className="badge-sparkle text-teal">✦</span>
              <span className="badge-serial-id font-monospace fw-bold">HJ-2026</span>
            </div>
            <div className="badge-gold-chip" title="Security Smart Chip">
              <div className="chip-trace"></div>
            </div>
          </div>

          {/* Profile Avatar Circle with Perfect Centering */}
          <div className="badge-avatar-frame mx-auto mb-3 position-relative">
            <div className="badge-avatar-circle d-flex align-items-center justify-content-center">
              <span className="badge-avatar-text fw-black font-monospace">HJ</span>
            </div>
            <span className="badge-verified-badge" title="Verified Computer Engineer">
              <i className="bi bi-check-lg"></i>
            </span>
          </div>

          {/* Name & Title */}
          <div className="text-center badge-details-block">
            <h3 className="badge-user-name fw-black mb-1 letter-spacing-1">HALA JABBAN</h3>
            <div className="badge-user-role font-monospace small fw-bold mb-2 text-teal">
              {roleText}
            </div>

            <p className="badge-user-location small text-muted mb-3 font-monospace d-flex align-items-center justify-content-center gap-1">
              <i className="bi bi-geo-alt-fill text-coral"></i>
              <span>{locationText}</span>
            </p>

            {/* Experience Pill Tags */}
            <div className="d-flex justify-content-center gap-1 flex-wrap mb-3">
              <span className="badge-experience-pill">FSMVU</span>
              <span className="badge-experience-pill">Pal4it (2025)</span>
              <span className="badge-experience-pill">Yukatech (2026)</span>
            </div>

            {/* Bottom Barcode */}
            <div className="badge-barcode-section pt-2 border-top">
              <div className="badge-laser-barcode"></div>
              <span className="badge-barcode-digits font-monospace text-muted">08 07 2026 001</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
