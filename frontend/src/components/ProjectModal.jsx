export default function ProjectModal({ project, onClose }) {
  if (!project) return null
  return <div className="modal-bg" onClick={onClose}><article className="modal" onClick={event => event.stopPropagation()}><button onClick={onClose} aria-label="Close project details">×</button><img src={project.image} alt="" /><div><span className="badge">{project.category}</span><h2>{project.title}</h2><p>{project.overview}</p><div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-buttons"><a className="github-btn" href={project.github} target="_blank" rel="noreferrer">GitHub</a>{project.demo !== '#' && <a className="demo-btn" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}</div></div></article></div>
}
