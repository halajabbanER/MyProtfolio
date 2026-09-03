function HomeSection() {
  const stats = [
    { value: '2023', label: 'Started' },
    { value: '2027', label: 'Graduation' },
    { value: '3', label: 'Languages' },
    { value: '4th', label: 'Year' },
  ]

  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">Hello, I am</p>
        <h1>Hala Jabban</h1>
        <h2>Computer Engineering Student & Frontend Enthusiast</h2>
        <p>
          I am a university student building creative digital experiences with a strong
          focus on design, user experience, and modern web interfaces. I am currently
          developing my skills in frontend development while learning and growing through
          practical projects and academic study.
        </p>

        <div className="stats-grid" aria-label="Student statistics">
          {stats.map((item) => (
            <div key={item.label} className="stat-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>
          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
