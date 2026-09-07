import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship / Junior Role',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [copied, setCopied] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('halajabban07@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', message: '' })

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'danger',
        message: 'Please complete all required fields.',
      })
      setSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        type: 'danger',
        message: 'Please enter a valid email address.',
      })
      setSubmitting(false)
      return
    }

    if (formData.message.trim().length < 10) {
      setStatus({
        type: 'danger',
        message: 'Your message should be at least 10 characters long.',
      })
      setSubmitting(false)
      return
    }

    // Simulate sending
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you for reaching out! Your message has been prepared. I will get back to you as soon as possible.',
      })
      setFormData({
        name: '',
        email: '',
        subject: 'Internship / Junior Role',
        message: '',
      })
      setSubmitting(false)
    }, 800)
  }

  return (
    <div className="contact-page animate-fade-in py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge category-badge mb-2">GET IN TOUCH</span>
          <h1 className="fw-black display-5 mb-3">Let's Connect & Collaborate</h1>
          <p className="lead text-muted">
            Have a project in mind, an engineering opportunity, or simply want to chat about software development? Feel free to reach out.
          </p>
        </div>

        <div className="row g-5 align-items-start">
          {/* Form Column */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4">
              <h2 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
                <i className="bi bi-chat-square-text-fill text-teal"></i>
                <span>Send a Direct Message</span>
              </h2>

              {status.message && (
                <div
                  className={`alert alert-${status.type} d-flex align-items-center gap-2 mb-4`}
                  role="alert"
                >
                  <i
                    className={`bi ${
                      status.type === 'success'
                        ? 'bi-check-circle-fill'
                        : 'bi-exclamation-triangle-fill'
                    } fs-5`}
                  ></i>
                  <div>{status.message}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-bold small text-muted">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-transparent">
                        <i className="bi bi-person text-muted"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="e.g. Sarah Connor"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-bold small text-muted">
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-transparent">
                        <i className="bi bi-envelope text-muted"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-bold small text-muted">
                    Inquiry Topic
                  </label>
                  <select
                    className="form-select"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="Internship / Junior Role">Software Engineering Opportunity / Internship</option>
                    <option value="Freelance / Web Project">Web / Mobile Project Collaboration</option>
                    <option value="Backend Consulting">Backend & API Development</option>
                    <option value="General Question">General Networking & Discussion</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-bold small text-muted">
                    Message Content <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-teal btn-lg px-4 d-inline-flex align-items-center gap-2 shadow-sm"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-fill"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details & Social Column */}
          <div className="col-lg-5">
            <div className="card contact-sidebar-card border-0 shadow-lg p-4 p-md-5 rounded-4 text-white">
              <div className="contact-badge-box mb-4">
                <i className="bi bi-geo-alt-fill text-coral display-5"></i>
              </div>

              <h2 className="h3 fw-bold mb-2">Hala Jabban</h2>
              <p className="text-light-muted mb-4">
                Computer Engineering Student & Backend / Software Engineer based in Istanbul, Turkiye.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="sidebar-icon-box">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <small className="text-light-muted d-block">Location</small>
                    <span className="fw-semibold">Istanbul, Turkiye</span>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between gap-2 p-3 bg-white bg-opacity-10 rounded-3">
                  <div className="d-flex align-items-center gap-3 text-truncate">
                    <div className="sidebar-icon-box">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="text-truncate">
                      <small className="text-light-muted d-block">Email Address</small>
                      <a href="mailto:halajabban07@gmail.com" className="text-white text-decoration-none fw-semibold">
                        halajabban07@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`btn btn-sm ${copied ? 'btn-success' : 'btn-outline-light'} flex-shrink-0`}
                    onClick={handleCopyEmail}
                    title="Copy email address"
                  >
                    <i className={`bi ${copied ? 'bi-check-lg' : 'bi-clipboard'} me-1`}></i>
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="sidebar-icon-box">
                    <i className="bi bi-translate"></i>
                  </div>
                  <div>
                    <small className="text-light-muted d-block">Spoken Languages</small>
                    <span className="fw-semibold">Arabic (Native), Turkish, English</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-top border-light border-opacity-25 mt-2">
                <h6 className="text-uppercase small fw-bold text-light-muted mb-3">Professional Profiles</h6>
                <div className="d-flex gap-2">
                  <a
                    href="https://github.com/halajabbanER"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light d-inline-flex align-items-center gap-2 px-3 py-2"
                  >
                    <i className="bi bi-github fs-5"></i>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hala-jabban-b88001286"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light d-inline-flex align-items-center gap-2 px-3 py-2"
                  >
                    <i className="bi bi-linkedin fs-5"></i>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top border-light border-opacity-25">
                <a
                  href="/cv.pdf"
                  download
                  className="btn btn-coral w-100 py-2 d-inline-flex align-items-center justify-content-center gap-2 fw-bold"
                >
                  <i className="bi bi-file-earmark-arrow-down-fill"></i>
                  <span>Download Complete Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

