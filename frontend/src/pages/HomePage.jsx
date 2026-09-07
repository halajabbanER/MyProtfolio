import { Link } from 'react-router-dom'
import TypingCodeCard from '../components/TypingCodeCard'

export default function HomePage() {
  const stats = [
    { value: '2025 - 2026', label: 'Industry Experience', desc: 'Pal4it (2025) & Yukatech (2026)', icon: 'bi-briefcase' },
    { value: '3', label: 'Languages', desc: 'Arabic, Turkish & English', icon: 'bi-translate' },
    { value: '2027', label: 'Graduation', desc: 'B.Sc. Computer Engineering (FSMVU)', icon: 'bi-mortarboard' },
    { value: '8+', label: 'Built Projects', desc: 'Web Applications & Digital Platforms', icon: 'bi-folder-check' },
  ]

  const highlights = [
    {
      title: 'Backend & APIs',
      desc: 'Architecting RESTful APIs, business logic, and reliable database services using C#, ASP.NET Core, and SQL Server.',
      icon: 'bi-server',
      color: 'teal',
    },
    {
      title: 'Mobile & Web Frontends',
      desc: 'Crafting responsive, user-friendly digital interfaces using React, React Native, modern JavaScript, and clean styling.',
      icon: 'bi-phone',
      color: 'coral',
    },
    {
      title: 'Engineering Principles',
      desc: 'Strong grounding in Data Structures, Object-Oriented Programming (Java/C#), Computer Architecture, and Git workflows.',
      icon: 'bi-cpu',
      color: 'cyan',
    },
  ]

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section py-5 position-relative overflow-hidden">
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill hero-pill">
                <span className="pulsing-circle"></span>
                <span className="small fw-bold">Computer Engineering &bull; Web Developer &bull; Istanbul</span>
              </div>

              <h1 className="display-4 fw-black hero-title mb-3">
                I build web applications that are{' '}
                <span className="text-teal-gradient">fast, responsive,</span> and{' '}
                <span className="text-coral-gradient">scalable.</span>
              </h1>

              <p className="lead hero-lead text-muted mb-4">
                Hi, I'm <strong>Hala Jabban</strong>. A Computer Engineering student &amp; Full-Stack Web Developer 
                specializing in building modern React web interfaces, robust backend REST APIs, 
                and database-driven web solutions.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link to="/projects" className="btn btn-teal btn-lg px-4 d-inline-flex align-items-center gap-2 shadow-sm">
                  <span>View Projects</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/contact" className="btn btn-outline-custom btn-lg px-4 d-inline-flex align-items-center gap-2">
                  <span>Contact Me</span>
                  <i className="bi bi-chat-dots"></i>
                </Link>
                <a
                  href="/cv.pdf"
                  download
                  className="btn btn-secondary-custom btn-lg px-3 d-inline-flex align-items-center gap-2"
                  title="Download Resume in PDF"
                >
                  <i className="bi bi-file-earmark-pdf text-danger"></i>
                  <span>Resume</span>
                </a>
              </div>

              <div className="hero-status-strip d-flex flex-wrap gap-4 text-muted small pt-3 border-top">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt-fill text-teal"></i>
                  <span>Based in Istanbul, Turkiye</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>Available for Software Opportunities</span>
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
            <span className="badge category-badge mb-2">AREAS OF EXPERTISE</span>
            <h2 className="fw-bold">What I Bring to the Table</h2>
            <p className="text-muted">
              Combining engineering fundamentals with modern industry tools to deliver robust solutions.
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
              <span>Read More About My Story & Values</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick CTA Banner */}
      <section className="py-5 bg-teal-subtle-box my-4 rounded-4 container text-center">
        <div className="p-4 p-md-5">
          <h2 className="fw-bold mb-3">Looking for a passionate engineer?</h2>
          <p className="text-muted max-w-600 mx-auto mb-4">
            I am currently open to internship opportunities, junior engineering roles, and innovative projects.
            Let's connect and build something impactful together.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn btn-teal btn-lg px-4 d-inline-flex align-items-center gap-2">
              <i className="bi bi-envelope-fill"></i>
              <span>Get in Touch</span>
            </Link>
            <Link to="/projects" className="btn btn-outline-custom btn-lg px-4">
              <span>Browse All Work</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

