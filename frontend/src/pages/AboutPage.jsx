import { Link } from 'react-router-dom'

export default function AboutPage() {
  const languages = [
    { name: 'Arabic', level: 'Native', desc: 'Mother tongue, full native fluency in reading and writing.', proficiency: 100 },
    { name: 'Turkish', level: 'Fluent / Academic', desc: 'Daily communication, university coursework, and technical documentation.', proficiency: 95 },
    { name: 'English', level: 'Professional Working', desc: 'Technical documentation, global engineering collaboration, and codebases.', proficiency: 90 },
  ]

  const values = [
    {
      title: 'Reliable Architecture',
      desc: 'Prioritizing structured code, clear API contracts, and database integrity over hasty shortcuts.',
      icon: 'bi-diagram-3-fill',
    },
    {
      title: 'Continuous Curiosity',
      desc: 'Constantly absorbing new paradigms, whether deep-diving into microservices, TypeScript, or digital logic.',
      icon: 'bi-lightbulb-fill',
    },
    {
      title: 'User-Centric Execution',
      desc: 'Ensuring that backend logic seamlessly connects with accessible, lightning-fast user interfaces.',
      icon: 'bi-heart-pulse-fill',
    },
    {
      title: 'Collaborative Problem Solving',
      desc: 'Clear communication, git version control best practices, and empathy within agile teams.',
      icon: 'bi-people-fill',
    },
  ]

  return (
    <div className="about-page animate-fade-in py-5">
      <div className="container">
        {/* Page Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge category-badge mb-2">ABOUT ME</span>
          <h1 className="fw-black display-5 mb-3">Architecting Systems from Code to Database</h1>
          <p className="lead text-muted">
            Driven by curiosity, structured thinking, and a commitment to writing clean, reliable software.
          </p>
        </div>

        {/* Two Column Bio */}
        <div className="row g-5 align-items-center mb-5 pb-4">
          <div className="col-lg-6">
            <div className="pe-lg-3">
              <h2 className="h3 fw-bold mb-3">Who I Am & What Drives Me</h2>
              <p className="text-muted mb-3">
                I am a <strong>Computer Engineering student</strong> at <strong>Fatih Sultan Mehmet Vakif University</strong> in Istanbul, Turkiye.
                My passion and primary specialization is <strong>Full-Stack Web Development</strong>, crafting high-performance web platforms, intuitive frontends, and reliable backend architectures.
              </p>
              <p className="text-muted mb-3">
                In 2025, during my internship as a <strong>Junior Backend / Software Engineer at Pal4it</strong>, I designed and optimized RESTful APIs and database schemas. In 2026, at <strong>Yukatech</strong>, I contributed as a <strong>React &amp; Web Developer</strong>, developing dynamic, responsive web interfaces and modern user experiences.
              </p>
              <p className="text-muted mb-4">
                Whether developing comprehensive web applications with React, ASP.NET Core, and SQL Server, or exploring modern web technologies, I treat software engineering as an art of disciplined problem-solving and clean architecture.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a href="/cv.pdf" download className="btn btn-teal d-inline-flex align-items-center gap-2">
                  <i className="bi bi-download"></i>
                  <span>Download Curriculum Vitae</span>
                </a>
                <Link to="/journey" className="btn btn-outline-custom d-inline-flex align-items-center gap-2">
                  <span>View Timeline & Journey</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-card p-4 rounded-4 shadow-sm border">
              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-terminal-fill text-teal fs-4"></i>
                <span className="fw-bold">Engineering Snapshot</span>
              </div>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 bg-subtle rounded-3 h-100">
                    <small className="text-muted d-block text-uppercase fw-bold">Degree</small>
                    <span className="fw-bold">B.Sc. Computer Engineering</span>
                    <small className="text-teal d-block">FSMVU (2023 - 2027)</small>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 bg-subtle rounded-3 h-100">
                    <small className="text-muted d-block text-uppercase fw-bold">Focus Areas</small>
                    <span className="fw-bold">Backend, APIs, React / React Native</span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 bg-subtle rounded-3 h-100">
                    <small className="text-muted d-block text-uppercase fw-bold">Location</small>
                    <span className="fw-bold">Istanbul, Turkiye</span>
                    <small className="text-muted d-block">Open to remote & hybrid</small>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 bg-subtle rounded-3 h-100">
                    <small className="text-muted d-block text-uppercase fw-bold">Status</small>
                    <span className="badge bg-success-subtle text-success border border-success border-opacity-25 px-2 py-1">
                      Ready for Opportunities
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top">
                <div className="d-flex justify-content-between align-items-center text-muted small">
                  <span>Quick Contact:</span>
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
            <span className="badge category-badge mb-2">COMMUNICATION</span>
            <h2 className="fw-bold">Spoken & Written Languages</h2>
            <p className="text-muted">Effective communication across multicultural engineering teams.</p>
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
            <span className="badge category-badge mb-2">PHILOSOPHY</span>
            <h2 className="fw-bold">Core Engineering Principles</h2>
            <p className="text-muted">How I approach codebases, systems design, and collaboration.</p>
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

