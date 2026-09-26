import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import LanyardBadge from '../components/LanyardBadge'

export default function AboutPage() {
  const { t, language } = useLanguage()
  const [openQuestion, setOpenQuestion] = useState(0)
  const [activeLanguage, setActiveLanguage] = useState(null)
  const languages = t.about.languages
  const qaIcons = ['bi-rocket-takeoff-fill', 'bi-person-badge-fill', 'bi-briefcase-fill', 'bi-stack']

  const values = [
    {
      title: t.about.values[0].title,
      desc: t.about.values[0].desc,
      icon: 'bi-diagram-3-fill',
    },
    {
      title: t.about.values[1].title,
      desc: t.about.values[1].desc,
      icon: 'bi-lightbulb-fill',
    },
    {
      title: t.about.values[2].title,
      desc: t.about.values[2].desc,
      icon: 'bi-heart-pulse-fill',
    },
    {
      title: t.about.values[3].title,
      desc: t.about.values[3].desc,
      icon: 'bi-people-fill',
    },
  ]

  return (
    <div className="about-page animate-fade-in py-5">
      <div className="container">
        {/* Page Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge category-badge mb-2">{t.about.badge}</span>
          <h1 className="fw-black display-5 mb-3">{t.about.title}</h1>
          <p className="lead text-muted">
            {t.about.lead}
          </p>

          {/* Quick Credential Ribbon Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <span className="credential-ribbon-pill">
              <i className="bi bi-mortarboard-fill text-coral me-1.5"></i>
              <span>{language === 'ar' ? 'هندسة حاسوب FSMVU' : language === 'tr' ? 'FSMVÜ Bilgisayar Mühendisliği' : 'FSMVU Computer Engineering'}</span>
            </span>
            <span className="credential-ribbon-pill">
              <i className="bi bi-code-slash text-teal me-1.5"></i>
              <span>{language === 'ar' ? 'تطوير الويب منذ 2022' : language === 'tr' ? "2022'den Beri Web Geliştirme" : 'Web Development Since 2022'}</span>
            </span>
            <span className="credential-ribbon-pill">
              <i className="bi bi-buildings-fill text-coral me-1.5"></i>
              <span>{language === 'ar' ? 'خبرة عملية: Pal4it & Yukatech' : language === 'tr' ? 'Sektör Stajları: Pal4it & Yukatech' : 'Industry: Pal4it & Yukatech'}</span>
            </span>
            <span className="credential-ribbon-pill">
              <i className="bi bi-translate text-teal me-1.5"></i>
              <span>{language === 'ar' ? '3 لغات: العربية • التركية • الإنجليزية' : language === 'tr' ? '3 Dil: Arapça • Türkçe • İngilizce' : '3 Languages: AR • TR • EN'}</span>
            </span>
          </div>
        </div>

        {/* Q&A Section with Executive Profile Card */}
        <div className="qa-section mb-5 pb-4">
          <div className="row g-5 align-items-start">
            {/* Left Column: Interactive Q&A */}
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge category-badge">{t.about.badge}</span>
              </div>
              <h2 className="h3 fw-black mb-4">{t.about.whoTitle}</h2>

              {/* Q&A Cards */}
              <div className="qa-list d-flex flex-column gap-3">
                {t.about.qaList &&
                  t.about.qaList.map((item, idx) => (
                    <article
                      key={idx}
                      className={`qa-card rounded-4 transition-card border ${openQuestion === idx ? 'is-open' : ''}`}
                    >
                      <button
                        type="button"
                        className="qa-question w-100 d-flex align-items-center gap-3 text-start border-0 bg-transparent p-3 p-md-4"
                        aria-expanded={openQuestion === idx}
                        onClick={() => setOpenQuestion(openQuestion === idx ? null : idx)}
                      >
                        <div className="qa-icon-bubble">
                          <i className={`bi ${qaIcons[idx % qaIcons.length]}`}></i>
                        </div>
                        <span className="qa-badge-q flex-shrink-0">Q.{idx + 1}</span>
                        <span className="h6 fw-bold mb-0 text-ink flex-grow-1">{item.q}</span>
                        <div className={`qa-chevron ${openQuestion === idx ? 'is-open' : ''}`}>
                          <i className="bi bi-chevron-down"></i>
                        </div>
                      </button>
                      {openQuestion === idx && (
                        <div className="qa-answer px-4 pb-4">
                          <p className="text-muted mb-0 small line-height-relaxed">{item.a}</p>
                        </div>
                      )}
                    </article>
                  ))}
              </div>

              {/* Navigation CTAs */}
              <div className="d-flex flex-wrap gap-3 mt-4 pt-2">
                <Link to="/journey" className="btn btn-teal d-inline-flex align-items-center gap-2">
                  <span>{t.about.viewTimeline}</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/contact" className="btn btn-outline-custom d-inline-flex align-items-center gap-2">
                  <i className="bi bi-envelope"></i>
                  <span>{t.nav?.contact || 'Contact'}</span>
                </Link>
                <Link to="/projects" className="btn btn-outline-secondary-custom d-inline-flex align-items-center gap-2">
                  <i className="bi bi-grid-fill"></i>
                  <span>{t.nav?.projects || 'Projects'}</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hanging Lanyard ID Badge & Engineering Snapshot */}
            <div className="col-lg-5">
              <div className="sticky-lg-top pt-2" style={{ top: '90px' }}>
                {/* 3D Hanging Lanyard ID Badge */}
                <div className="mb-4">
                  <LanyardBadge />
                </div>

                {/* Snapshot Card */}
                <div className="about-card p-4 rounded-4 shadow-sm border">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="bi bi-terminal-fill text-teal fs-4"></i>
                    <span className="fw-bold">{t.about.snapshotTitle}</span>
                  </div>

                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="p-3 bg-subtle rounded-3 h-100">
                        <small className="text-muted d-block text-uppercase fw-bold">{t.about.degreeLabel}</small>
                        <span className="fw-bold">{t.about.degreeVal}</span>
                        <small className="text-teal d-block">{t.about.degreeSub}</small>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="p-3 bg-subtle rounded-3 h-100">
                        <small className="text-muted d-block text-uppercase fw-bold">{t.about.focusLabel}</small>
                        <span className="fw-bold">{t.about.focusVal}</span>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="p-3 bg-subtle rounded-3 h-100">
                        <small className="text-muted d-block text-uppercase fw-bold">{t.about.locationLabel}</small>
                        <span className="fw-bold">{t.about.locationVal}</span>
                        <small className="text-muted d-block">{t.about.locationSub}</small>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="p-3 bg-subtle rounded-3 h-100">
                        <small className="text-muted d-block text-uppercase fw-bold">{t.about.statusLabel}</small>
                        <span className="badge bg-success-subtle text-success border border-success border-opacity-25 px-2 py-1">
                          {t.about.statusVal}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-top">
                    <div className="d-flex justify-content-between align-items-center text-muted small">
                      <span>{t.about.quickContact}</span>
                      <a href="mailto:halajabban07@gmail.com" className="text-teal fw-bold text-decoration-none">
                        halajabban07@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spoken Languages Section */}
        <div className="languages-section my-5 py-4 border-top">
          <div className="text-center max-w-600 mx-auto mb-4">
            <span className="badge category-badge mb-2">{t.about.langBadge}</span>
            <h2 className="fw-bold">{t.about.langTitle}</h2>
            <p className="text-muted">{t.about.langDesc}</p>
          </div>

          <div className="row g-4 justify-content-center">
            {languages.map((lang) => (
              <div className="col-md-4" key={lang.name}>
                <button
                  type="button"
                  className={`language-card card h-100 w-100 text-start p-4 border-0 shadow-sm transition-card ${activeLanguage === lang.name ? 'is-active' : ''}`}
                  onClick={() => setActiveLanguage(activeLanguage === lang.name ? null : lang.name)}
                  aria-pressed={activeLanguage === lang.name}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="h5 fw-bold mb-0">{lang.name}</h3>
                    <span className="badge bg-teal-subtle text-teal">{lang.level}</span>
                  </div>
                  <p className="text-muted small flex-grow-1 mb-3">{lang.desc}</p>
                  <div className="progress" style={{ height: '6px' }}>
                    <div
                      className="progress-bar bg-teal language-progress"
                      role="progressbar"
                      style={{ width: `${lang.proficiency}%` }}
                      aria-valuenow={lang.proficiency}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Values */}
        <div className="values-section my-5 py-4 border-top">
          <div className="text-center max-w-600 mx-auto mb-5">
            <span className="badge category-badge mb-2">{t.about.valuesBadge}</span>
            <h2 className="fw-bold">{t.about.valuesTitle}</h2>
            <p className="text-muted">{t.about.valuesDesc}</p>
          </div>

          <div className="row g-4">
            {values.map((val) => (
              <div className="col-md-6 col-lg-3" key={val.title}>
                <div className="card value-card h-100 p-4 border-0 shadow-sm transition-card">
                  <div className="icon-circle icon-teal mb-3">
                    <i className={`bi ${val.icon} fs-4`}></i>
                  </div>
                  <h3 className="h6 fw-bold mb-2">{val.title}</h3>
                  <p className="text-muted small mb-0">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
