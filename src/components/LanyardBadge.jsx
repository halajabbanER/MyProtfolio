import { useLanguage } from '../contexts/LanguageContext'

export default function LanyardBadge() {
  const { language } = useLanguage()

  const roleText =
    language === 'ar'
      ? 'مهندسة حاسوب ومطورة ويب'
      : language === 'tr'
      ? 'BİLGİSAYAR MÜHENDİSİ & WEB GELİŞTİRİCİ'
      : 'COMPUTER ENGINEER & WEB DEVELOPER'

  const locationText =
    language === 'ar' ? 'إسطنبول، تركيا' : language === 'tr' ? 'İSTANBUL, TÜRKİYE' : 'ISTANBUL, TURKIYE'

  return (
    <div className="lanyard-container d-flex flex-column align-items-center">
      {/* Lanyard String & Metallic Clip */}
      <div className="lanyard-origin"></div>
      <div className="lanyard-cord"></div>
      <div className="lanyard-clip-body">
        <div className="clip-metal-head"></div>
        <div className="clip-metal-buckle"></div>
      </div>

      {/* Hanging Badge Card */}
      <div className="lanyard-card shadow-lg position-relative">
        {/* Holographic Strip / ID Header */}
        <div className="badge-header d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center gap-1">
            <span className="badge-star text-teal">✦</span>
            <span className="badge-id font-monospace">HJ-2026</span>
          </div>
          <span className="badge-chip"></span>
        </div>

        {/* Avatar Profile Circle */}
        <div className="badge-avatar-wrap mx-auto mb-3 position-relative">
          <div className="badge-avatar d-grid place-items-center">
            <span className="avatar-initials fw-bold font-monospace">HJ</span>
          </div>
          <span className="badge-verified-dot" title="Verified Engineer">
            <i className="bi bi-check2"></i>
          </span>
        </div>

        {/* Engineer Identity */}
        <div className="text-center badge-info">
          <h3 className="badge-name fw-black mb-1 letter-spacing-1">HALA JABBAN</h3>
          <div className="badge-role font-monospace small fw-bold text-teal mb-2">
            {roleText}
          </div>
          <p className="badge-location small text-muted mb-3 font-monospace">
            <i className="bi bi-geo-alt-fill text-coral me-1"></i>
            {locationText}
          </p>

          <div className="badge-tags d-flex justify-content-center gap-1 flex-wrap mb-3">
            <span className="badge-pill-tag">FSMVU</span>
            <span className="badge-pill-tag">Pal4it (2025)</span>
            <span className="badge-pill-tag">Yukatech (2026)</span>
          </div>

          {/* Barcode Graphic at Bottom */}
          <div className="badge-barcode-wrap pt-2 border-top border-secondary border-opacity-25">
            <div className="badge-barcode"></div>
            <span className="barcode-number font-monospace text-muted">08 07 2026 001</span>
          </div>
        </div>
      </div>
    </div>
  )
}

