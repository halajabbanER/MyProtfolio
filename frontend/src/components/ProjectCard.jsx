import { useLanguage } from '../contexts/LanguageContext'

export default function ProjectCard({ project, onDetails }) {
  const { t } = useLanguage()
  return (
    <article className="card project-card h-100 shadow-sm border-0">
      <div className="project-preview-wrapper position-relative overflow-hidden">
        <button
          type="button"
          className="project-preview-btn w-100 p-0 border-0 bg-transparent text-start"
          onClick={() => onDetails(project)}
          aria-label={`${t.projects.modalTech}: ${project.title}`}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="card-img-top project-image"
            loading="lazy"
          />
          <div className="project-overlay d-flex align-items-center justify-content-center">
            <span className="badge bg-dark-glass px-3 py-2 d-flex align-items-center gap-1 text-white">
              <i className="bi bi-zoom-in"></i> {t.projects.showing}
            </span>
          </div>
        </button>
        <span className="badge category-badge position-absolute top-0 start-0 m-3 shadow-sm">
          {project.category}
        </span>
      </div>

      <div className="card-body d-flex flex-column p-4">
        <div className="tags-container mb-3 d-flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span key={tag} className="badge tech-tag">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="card-title h5 fw-bold mb-2">{project.title}</h3>
        <p className="card-text text-muted small flex-grow-1 mb-4">
          {project.description}
        </p>

        <div className="project-buttons mt-auto pt-2 border-top d-flex flex-wrap gap-2">
          {project.github && (
            <a
              className="btn btn-sm btn-outline-custom d-inline-flex align-items-center gap-1 flex-fill justify-content-center"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
              <span>GitHub</span>
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a
              className="btn btn-sm btn-teal d-inline-flex align-items-center gap-1 flex-fill justify-content-center"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-box-arrow-up-right"></i>
              <span>{t.projects.modalDemo}</span>
            </a>
          )}
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary-custom d-inline-flex align-items-center gap-1 justify-content-center"
            onClick={() => onDetails(project)}
            title={t.projects.modalTech}
          >
            <i className="bi bi-info-circle"></i>
            <span>{t.projects.modalTech}</span>
          </button>
        </div>
      </div>
    </article>
  )
}
