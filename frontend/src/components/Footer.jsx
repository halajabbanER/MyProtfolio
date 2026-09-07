import { Link } from 'react-router-dom'

export default function Footer() {
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
              Computer Engineering Student & Junior Backend / Software Engineer. Building reliable digital systems, responsive web & mobile apps.
            </p>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill status-pill">
              <span className="status-dot"></span>
              <small className="fw-semibold">Open for full-time & internship roles</small>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-6">
            <h6 className="footer-title fw-bold text-uppercase mb-3">Quick Navigation</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <Link to="/" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> About Me
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> Skills & Tech
                </Link>
              </li>
              <li>
                <Link to="/journey" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> Career & Education
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right small text-teal"></i> Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 col-6">
            <h6 className="footer-title fw-bold text-uppercase mb-3">Connect & Location</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
              <li className="d-flex align-items-center gap-2 text-muted">
                <i className="bi bi-geo-alt-fill text-teal"></i> Istanbul, Turkiye
              </li>
              <li>
                <a href="mailto:halajabban07@gmail.com" className="footer-link d-inline-flex align-items-center gap-2">
                  <i className="bi bi-envelope-fill text-teal"></i> halajabban07@gmail.com
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
          <span>&copy; {new Date().getFullYear()} Hala Jabban. Built with React & Bootstrap.</span>
          <span>Computer Engineering | Software Engineering</span>
        </div>
      </div>
    </footer>
  )
}

