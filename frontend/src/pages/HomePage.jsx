import { Link } from 'react-router-dom'
import TypingCodeCard from '../components/TypingCodeCard'
import { useLanguage } from '../contexts/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()
  const stats = t.home.stats.map((stat, index) => ({ ...stat, icon: ['bi-briefcase', 'bi-translate', 'bi-mortarboard', 'bi-folder-check'][index] }))
  const highlights = t.home.highlights.map((item, index) => ({ ...item, icon: ['bi-server', 'bi-phone', 'bi-cpu'][index], color: ['teal', 'coral', 'cyan'][index] }))

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section py-5 position-relative overflow-hidden">
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill hero-pill">
                <span className="pulsing-circle"></span>
                <span className="small fw-bold">{t.home.badge}</span>
              </div>

              <h1 className="display-4 fw-black hero-title mb-3">
                {t.home.titleP1}
                <span className="text-teal-gradient">{t.home.titleHighlight1}</span>{t.home.titleP2}
                <span className="text-coral-gradient">{t.home.titleHighlight2}</span>
              </h1>

              <p className="lead hero-lead text-muted mb-4">
                {t.home.lead}
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link to="/projects" className="btn btn-teal btn-lg px-4 d-inline-flex align-items-center gap-2 shadow-sm">
                  <span>{t.home.viewProjects}</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/contact" className="btn btn-outline-custom btn-lg px-4 d-inline-flex align-items-center gap-2">
                  <span>{t.home.contactMe}</span>
                  <i className="bi bi-chat-dots"></i>
                </Link>
                <a
                  href="/cv.pdf"
                  download
                  className="btn btn-secondary-custom btn-lg px-3 d-inline-flex align-items-center gap-2"
                  title={t.home.resume}
                >
                  <i className="bi bi-file-earmark-pdf text-danger"></i>
                  <span>{t.home.resume}</span>
                </a>
              </div>

              <div className="hero-status-strip d-flex flex-wrap gap-4 text-muted small pt-3 border-top">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill text-teal"></i>
                  <span>{t.home.basedIn}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>{t.home.available}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <TypingCodeCard />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="stats-section py-4 border-top border-bottom">
        <div className="container">
          <div className="row g-4 text-center text-md-start">
            {stats.map((stat) => (
              <div key={stat.label} className="col-6 col-lg-3">
                <div className="stat-box p-3 h-100 rounded-3 transition-card">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <i className={`bi ${stat.icon} text-teal fs-4`}></i>
                    <span className="stat-number fw-black">{stat.value}</span>
                  </div>
                  <div className="stat-label fw-bold text-ink">{stat.label}</div>
                  <div className="stat-desc text-muted small">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Focus / Highlights */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center max-w-600 mx-auto mb-5">
            <span className="badge category-badge mb-2">{t.home.expertiseBadge}</span>
            <h2 className="fw-bold">{t.home.expertiseTitle}</h2>
            <p className="text-muted">
              {t.home.expertiseDesc}
            </p>
          </div>

          <div className="row g-4">
            {highlights.map((item) => (
              <div className="col-md-4" key={item.title}>
                <div className="card h-100 highlight-card p-4 border-0 shadow-sm transition-card">
                  <div className={`icon-circle mb-3 icon-${item.color}`}>
                    <i className={`bi ${item.icon} fs-3`}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-2">{item.title}</h3>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/about" className="btn btn-outline-custom d-inline-flex align-items-center gap-2">
              <span>{t.home.readMore}</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick CTA Banner */}
      <section className="py-5 bg-teal-subtle-box my-4 rounded-4 container text-center">
        <div className="p-4 p-md-5">
          <h2 className="fw-bold mb-3">{t.home.ctaTitle}</h2>
          <p className="text-muted max-w-600 mx-auto mb-4">
            {t.home.ctaDesc}
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn btn-teal btn-lg px-4 d-inline-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill"></i>
              <span>{t.home.getInTouch}</span>
            </Link>
            <Link to="/projects" className="btn btn-outline-custom btn-lg px-4">
              <span>{t.home.browseAll}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

