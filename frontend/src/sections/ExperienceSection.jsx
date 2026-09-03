const experience = [
  {
    role: 'Frontend Developer',
    company: 'Creative Studio',
    period: '2023 - Present',
    details: 'Build user-centered interfaces and improve design systems.',
  },
  {
    role: 'Web Designer',
    company: 'Digital Agency',
    period: '2021 - 2023',
    details: 'Created marketing pages and polished product experiences.',
  },
]

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h3>Career timeline</h3>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <div key={`${item.role}-${item.company}`} className="timeline-item">
            <div className="timeline-date">{item.period}</div>
            <div>
              <h4>{item.role}</h4>
              <p className="meta">{item.company}</p>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
