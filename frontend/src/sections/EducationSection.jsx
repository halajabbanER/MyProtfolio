const education = [
  {
    degree: 'Student',
    institution: 'Fatih Sultan Mehmet Vakif University',
    period: '2023 - 2027',
  },
]

function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h3>Academic background</h3>
      </div>
      {education.map((item) => (
        <div key={item.degree} className="edu-item">
          <h4>{item.degree}</h4>
          <p>{item.institution}</p>
          <span>{item.period}</span>
        </div>
      ))}
    </section>
  )
}

export default EducationSection
