import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function ProjectModal({ project, onClose }) {
  const { t } = useLanguage()
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="modal-backdrop-custom d-flex align-items-center justify-content-center p-3"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="modal-card-custom position-relative shadow-lg border-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="btn-close-custom position-absolute top-0 end-0 m-3 z-3"
          onClick={onClose}
          aria-label={t.projects.modalTech}
        >
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="row g-0 h-100">
          <div className="col-lg-6 col-md-5 modal-image-col">
            <img
              src={project.image}
              alt={project.title}
              className="w-100 h-100 object-fit-cover modal-project-img"
            />
          </div>

          <div className="col-lg-6 col-md-7 d-flex flex-column p-4 p-lg-5 modal-content-col">
            <div className="mb-2">
              <span className="badge category-badge me-2">{project.category}</span>
            </div>

            <h2 id="project-modal-title" className="h3 fw-bold mb-3">
              {project.title}
            </h2>

            <p className="text-muted mb-4 lead fs-6">
              {project.overview || project.description}
            </p>

            <div className="mb-4">
              <h6 className="fw-bold small text-uppercase text-muted mb-2">{t.projects.modalTech}</h6>
              <div className="d-flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span key={tech} className="badge tech-tag px-2 py-1">
                    <i className="bi bi-check2 me-1 text-teal"></i>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 border-top d-flex flex-wrap gap-3">
              {project.github && (
                <a
                  className="btn btn-outline-custom d-inline-flex align-items-center gap-2"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                  <span>{t.projects.modalRepo}</span>
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a
                  className="btn btn-teal d-inline-flex align-items-center gap-2"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>{t.projects.modalDemo}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
