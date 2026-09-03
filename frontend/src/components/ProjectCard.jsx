export default function ProjectCard({ project, onDetails }) {
  return <article className="project-card">
    <img src={project.image} alt={`${project.title} preview`} />
    <div className="project-content">
      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <h3>{project.title}</h3><p>{project.description}</p>
      <div className="project-buttons"><a className="github-btn" href={project.github} target="_blank" rel="noreferrer">GitHub</a>{project.demo !== '#' && <a className="demo-btn" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}<button className="details-btn" onClick={() => onDetails(project)}>Details</button></div>
    </div>
  </article>
}
