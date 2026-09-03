const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'UI Design']

function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h3>What I do best</h3>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
