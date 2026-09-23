import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="portfolio-footer mt-auto border-top">
      <div className="container py-5">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none mb-3">
              <span className="logo-box">HJ</span>
              <span className="brand-name fw-bold">Hala Jabban</span>
            </Link>
            <p className="footer-desc text-muted mb-3">
              {t.footer.desc}
            </p>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill status-pill">
              <span className="status-dot"></span>
              <small className="fw-semibold">{t.footer.status}</small>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-6">
            <h6 className="footer-title fw-bold text-uppercase mb-3">{t.footer.quickNav}</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <Link to="/" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link to="/skills" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> {t.nav.skills}
                </Link>
              </li>
              <li>
                <Link to="/journey" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> {t.nav.journey}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 col-6">
            <h6 className="footer-title fw-bold text-uppercase mb-3">{t.footer.connect}</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
              <li className="d-flex align-items-center gap-2 text-muted">
                <i className="bi bi-geo-alt-fill text-teal"></i> {t.contact.locationVal}
              </li>
              <li>
                <a href="mailto:halajabban07@gmail.com" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-envelope-fill text-teal"></i> halajabban07@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+905511760010" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill text-teal"></i> +90 551 176 0010
                </a>
              </li>
            </ul>

            <div className="d-flex gap-2">
              <a
                href="https://github.com/halajabbanER"
                target="_blank"
                rel="noreferrer"
                className="btn btn-social"
                aria-label="GitHub Profile"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/hala-jabban-b88001286"
                target="_blank"
                rel="noreferrer"
                className="btn btn-social"
                aria-label="LinkedIn Profile"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://wa.me/905511760010"
                target="_blank"
                rel="noreferrer"
                className="btn btn-social"
                aria-label="Chat on WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href="mailto:halajabban07@gmail.com"
                className="btn btn-social"
                aria-label="Send Email"
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-top mt-5 pt-3 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 text-muted small">
          <span>&copy; {new Date().getFullYear()} {t.footer.rights} Hala Jabban.</span>
         
          <span>{t.footer.subtitle}</span>
        </div>
      </div>
    </footer>
  )
}

