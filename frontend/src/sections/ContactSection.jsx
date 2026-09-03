function ContactSection() {
  return (
    <section id="contact" className="section contact-box">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h3>Contact Me</h3>
      </div>

      <div className="contact-info">
        <p>Email: hala@example.com</p>
        <p>Phone: +90 551 000 0000</p>
        <p>Languages: Arabic, Turkish, English</p>
      </div>

      <div className="contact-actions">
        <a href="/cv.pdf" className="primary-btn" download>
          Download CV
        </a>
      </div>
    </section>
  )
}

export default ContactSection
