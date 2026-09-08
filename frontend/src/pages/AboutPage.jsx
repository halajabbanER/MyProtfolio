import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
  const languages = t.about.languages

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
        </div>

        {/* Two Column Bio */}
        <div className="row g-5 align-items-center mb-5 pb-4">
          <div className="col-lg-6">
            <div className="pe-lg-3">
              <h2 className="h3 fw-bold mb-3">{t.about.whoTitle}</h2>
              <p className="text-muted mb-3">
                {t.about.p1}
              </p>
              <p className="text-muted mb-3">
                {t.about.p2}
              </p>
              <p className="text-muted mb-4">
                {t.about.p3}
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a href="/cv.pdf" download className="btn btn-teal d-inline-flex align-items-center gap-2">
                  <i className="bi bi-download"></i>
                  <span>{t.about.downloadCv}</span>
                </a>
                <Link to="/journey" className="btn btn-outline-custom d-inline-flex align-items-center gap-2">
                  <span>{t.about.viewTimeline}</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
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
                <div className="card h-100 p-4 border-0 shadow-sm transition-card">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="h5 fw-bold mb-0">{lang.name}</h3>
                    <span className="badge bg-teal-subtle text-teal">{lang.level}</span>
                  </div>
                  <p className="text-muted small flex-grow-1 mb-3">{lang.desc}</p>
                  <div className="progress" style={{ height: '6px' }}>
                    <div
                      className="progress-bar bg-teal"
                      role="progressbar"
                      style={{ width: `${lang.proficiency}%` }}
                      aria-valuenow={lang.proficiency}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
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
                <div className="card h-100 p-4 border-0 shadow-sm transition-card">
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

