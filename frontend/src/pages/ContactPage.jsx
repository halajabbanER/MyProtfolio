import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Web & Mobile Development',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [copied, setCopied] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
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

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+90 551 176 0010')
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', message: '' })

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'danger',
        message: t.contact.errorFields,
      })
      setSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        type: 'danger',
        message: t.contact.errorEmail,
      })
      setSubmitting(false)
      return
    }

    if (formData.message.trim().length < 10) {
      setStatus({
        type: 'danger',
        message: t.contact.errorLength,
      })
      setSubmitting(false)
      return
    }

    // Simulate sending
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: t.contact.successMsg,
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Web & Mobile Development',
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
          <span className="badge category-badge mb-2">{t.contact.badge}</span>
          <h1 className="fw-black display-5 mb-3">{t.contact.title}</h1>
          <p className="lead text-muted">
            {t.contact.lead}
          </p>
        </div>

        <div className="row g-5 align-items-start">
          {/* Form Column */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4">
              <h2 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
                <i className="bi bi-chat-square-text-fill text-teal"></i>
                <span>{t.contact.formTitle}</span>
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
                      {t.contact.nameLabel} <span className="text-danger">*</span>
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
                        placeholder={t.contact.namePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-bold small text-muted">
                      {t.contact.emailLabel} <span className="text-danger">*</span>
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
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bold small text-muted">
                    {t.contact.phoneLabel} <span className="text-muted fw-normal">{t.contact.phoneOptional}</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent">
                      <i className="bi bi-telephone text-muted"></i>
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="+90 5xx xxx xxxx"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-bold small text-muted">
                    {t.contact.topicLabel}
                  </label>
                  <select
                    className="form-select"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="Mobile App Development">{t.contact.topicOptions.mobile}</option>
                    <option value="Web & Mobile Development">{t.contact.topicOptions.webMobile}</option>
                    <option value="Software Engineering Opportunity / Internship">{t.contact.topicOptions.internship}</option>
                    <option value="Backend Consulting">{t.contact.topicOptions.backend}</option>
                    <option value="General Question">{t.contact.topicOptions.general}</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-bold small text-muted">
                    {t.contact.messageLabel} <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="6"
                    placeholder={t.contact.messagePlaceholder}
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
                      <span>{t.contact.sending}</span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-fill"></i>
                      <span>{t.contact.sendBtn}</span>
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
                {t.about.lead}
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="sidebar-icon-box">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <small className="text-light-muted d-block">{t.contact.locationTitle}</small>
                    <span className="fw-semibold">{t.contact.locationVal}</span>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-between gap-2 p-3 bg-white bg-opacity-10 rounded-3">
                  <div className="d-flex align-items-center gap-3 text-truncate">
                    <div className="sidebar-icon-box">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="text-truncate">
                      <small className="text-light-muted d-block">{t.contact.emailTitle}</small>
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
                    <span>{copied ? t.contact.copied : t.contact.copy}</span>
                  </button>
                </div>

                <div className="d-flex align-items-center justify-content-between gap-2 p-3 bg-white bg-opacity-10 rounded-3">
                  <div className="d-flex align-items-center gap-3 text-truncate">
                    <div className="sidebar-icon-box">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="text-truncate">
                      <small className="text-light-muted d-block">{t.contact.phoneTitle}</small>
                      <a href="tel:+905511760010" className="text-white text-decoration-none fw-semibold">
                        +90 551 176 0010
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-1 flex-shrink-0">
                    <a
                      href="https://wa.me/905511760010"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-success d-inline-flex align-items-center"
                      title="Direct WhatsApp Chat"
                    >
                      <i className="bi bi-whatsapp"></i>
                    </a>
                    <button
                      type="button"
                      className={`btn btn-sm ${copiedPhone ? 'btn-success' : 'btn-outline-light'}`}
                      onClick={handleCopyPhone}
                      title="Copy phone number"
                    >
                      <i className={`bi ${copiedPhone ? 'bi-check-lg' : 'bi-clipboard'} me-1`}></i>
                      <span>{copiedPhone ? t.contact.copied : t.contact.copy}</span>
                    </button>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="sidebar-icon-box">
                    <i className="bi bi-translate"></i>
                  </div>
                  <div>
                    <small className="text-light-muted d-block">{t.contact.languagesTitle}</small>
                    <span className="fw-semibold">{t.contact.languagesVal}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-top border-light border-opacity-25 mt-2">
                <h6 className="text-uppercase small fw-bold text-light-muted mb-3">{t.contact.profilesTitle}</h6>
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
                  <span>{t.contact.resumeDownload}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

