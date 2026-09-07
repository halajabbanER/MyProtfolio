import { Link } from 'react-router-dom'

const experiences = [
  {
    type: 'work',
    role: 'Junior Backend / Software Engineer Intern',
    company: 'Pal4it',
    location: 'Istanbul, Turkiye',
    period: '2025',
    icon: 'bi-briefcase-fill',
    badge: 'Industry Internship',
    description:
      'Contributed to backend software systems, designing clean RESTful API endpoints and handling database persistence layers.',
    achievements: [
      'Designed and tested RESTful API endpoints ensuring structured responses and error handling.',
      'Worked with relational database models and queries to support business logic requirements.',
      'Collaborated within software engineering workflows, code reviews, and Git version control.',
    ],
    skills: ['C#', 'ASP.NET Core', 'SQL Server', 'REST APIs', 'Git'],
  },
  {
    type: 'work',
    role: 'React & Web Developer',
    company: 'Yukatech',
    location: 'Istanbul, Turkiye',
    period: '2026',
    icon: 'bi-window-fullscreen',
    badge: 'Web & Frontend',
    description:
      'Developed responsive web interfaces and dynamic web application experiences using modern React and web technologies.',
    achievements: [
      'Implemented responsive web application interfaces and component systems with React and Bootstrap.',
      'Connected frontend web applications with REST API backend services for seamless user experiences.',
      'Ensured high performance, accessibility, and fluid responsive design across all screen sizes.',
    ],
    skills: ['React', 'JavaScript', 'HTML5/CSS3', 'Bootstrap', 'REST APIs'],
  },
  {
    type: 'education',
    role: 'Bachelor of Science in Computer Engineering',
    company: 'Fatih Sultan Mehmet Vakif University (FSMVU)',
    location: 'Istanbul, Turkiye',
    period: '2023 - 2027 (Expected)',
    icon: 'bi-mortarboard-fill',
    badge: 'Higher Education',
    description:
      'Comprehensive undergraduate curriculum encompassing algorithmic problem solving, software engineering, digital logic, and systems programming.',
    achievements: [
      'Core Studies: Data Structures & Algorithms, Object-Oriented Programming (Java/C#), Computer Architecture, Database Management Systems.',
      'Hardware & Logic: Designed and simulated a functional 16-bit processor architecture in Logisim.',
      'Software Projects: Built student management systems, inventory tracking applications, and full-stack software.',
    ],
    skills: ['Algorithms', 'OOP (Java/C#)', 'Computer Architecture', 'Relational Databases', 'System Design'],
  },
]

export default function JourneyPage() {
  return (
    <div className="journey-page animate-fade-in py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge category-badge mb-2">CAREER & ACADEMICS</span>
          <h1 className="fw-black display-5 mb-3">Professional Experience & Education</h1>
          <p className="lead text-muted">
            The progression from foundational computer engineering education to hands-on industry application.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="timeline-wrapper position-relative max-w-900 mx-auto mb-5">
          <div className="timeline-line position-absolute top-0 bottom-0 start-0 ms-md-4 ms-3"></div>

          <div className="d-flex flex-column gap-5">
            {experiences.map((item, index) => (
              <div key={`${item.role}-${index}`} className="timeline-entry position-relative ps-5 ps-md-6">
                {/* Timeline Icon Marker */}
                <div className="timeline-marker position-absolute top-0 start-0 rounded-circle d-flex align-items-center justify-content-center shadow">
                  <i className={`bi ${item.icon} text-white fs-5`}></i>
                </div>

                {/* Timeline Card */}
                <div className="card timeline-card border-0 shadow-sm p-4 p-md-5 rounded-4 transition-card">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-3">
                    <div>
                      <span className="badge bg-teal-subtle text-teal me-2 mb-1">{item.badge}</span>
                      <span className="badge bg-secondary-subtle text-muted mb-1">
                        <i className="bi bi-geo-alt me-1"></i>
                        {item.location}
                      </span>
                      <h2 className="h4 fw-bold mb-1 mt-2 text-ink">{item.role}</h2>
                      <div className="fw-semibold text-teal fs-6">{item.company}</div>
                    </div>

                    <div className="timeline-badge-year text-md-end">
                      <span className="badge bg-dark-glass text-teal font-monospace fs-6 px-3 py-2 rounded-3 border">
                        <i className="bi bi-calendar3 me-1"></i> {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted mb-4">{item.description}</p>

                  <h6 className="fw-bold small text-uppercase text-muted mb-2">Key Contributions & Highlights:</h6>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="d-flex align-items-start gap-2 small text-muted">
                        <i className="bi bi-check-circle-fill text-teal mt-1 flex-shrink-0"></i>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-top d-flex flex-wrap gap-1">
                    {item.skills.map((skill) => (
                      <span key={skill} className="badge tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Summary Highlights */}
        <div className="row g-4 mt-4 text-center">
          <div className="col-md-4">
            <div className="card p-4 border-0 shadow-sm h-100 rounded-4">
              <i className="bi bi-code-square display-5 text-teal mb-3"></i>
              <h3 className="h5 fw-bold mb-2">Practical Experience</h3>
              <p className="text-muted small mb-0">
                Hands-on internship work handling APIs, backend data models, and mobile React Native interfaces.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 border-0 shadow-sm h-100 rounded-4">
              <i className="bi bi-mortarboard-fill display-5 text-coral mb-3"></i>
              <h3 className="h5 fw-bold mb-2">Strong Academic Core</h3>
              <p className="text-muted small mb-0">
                Rigorous Computer Engineering fundamentals at Fatih Sultan Mehmet Vakif University.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 border-0 shadow-sm h-100 rounded-4">
              <i className="bi bi-rocket-takeoff-fill display-5 text-primary mb-3"></i>
              <h3 className="h5 fw-bold mb-2">Ready for Next Challenge</h3>
              <p className="text-muted small mb-0">
                Eager to contribute high quality, reliable software to forward-thinking engineering teams.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-5">
          <a href="/cv.pdf" download className="btn btn-teal btn-lg px-4 me-3 d-inline-flex align-items-center gap-2">
            <i className="bi bi-file-earmark-pdf"></i>
            <span>Download Full Resume</span>
          </a>
          <Link to="/contact" className="btn btn-outline-custom btn-lg px-4 d-inline-flex align-items-center gap-2">
            <span>Contact Hala</span>
            <i className="bi bi-envelope"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

