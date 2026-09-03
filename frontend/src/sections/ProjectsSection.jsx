const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern personal portfolio built with React and Vite.',
  },
  {
    title: 'Business Dashboard',
    description: 'A responsive analytics dashboard for tracking metrics and KPIs.',
  },
  {
    title: 'E-commerce UI',
    description: 'A clean storefront interface focused on conversion and usability.',
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h3>Recent work</h3>
      </div>
      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
