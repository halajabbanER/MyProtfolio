import { useState, useEffect, useMemo } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

const categories = ['All', 'Web', 'Mobile', 'Hardware', 'Desktop']

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load projects:', err)
        setLoading(false)
      })
  }, [])

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      const matchCategory = category === 'All' || item.category.toLowerCase() === category.toLowerCase()
      const searchTarget = `${item.title} ${item.description} ${item.tags?.join(' ') || ''} ${item.technologies?.join(' ') || ''}`.toLowerCase()
      const matchQuery = searchTarget.includes(query.toLowerCase().trim())
      return matchCategory && matchQuery
    })
  }, [projects, category, query])

  const categoryCounts = useMemo(() => {
    const counts = { All: projects.length }
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length
      }
    })
    return counts
  }, [projects])

  return (
    <div className="projects-page animate-fade-in py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge category-badge mb-2">SELECTED WORK</span>
          <h1 className="fw-black display-5 mb-3">Featured Projects & Architecture</h1>
          <p className="lead text-muted">
            Explore a collection of software applications spanning responsive web platforms, cross-platform mobile apps, desktop systems, and processor design.
          </p>
        </div>

        {/* Toolbar: Search + Category Filters */}
        <div className="card toolbar-card border-0 shadow-sm p-4 mb-5 rounded-4">
          <div className="row g-3 align-items-center justify-content-between">
            {/* Search Input */}
            <div className="col-lg-5 col-md-6">
              <div className="input-group search-input-group">
                <span className="input-group-text bg-transparent border-end-0">
                  <i className="bi bi-search text-teal"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 ps-0"
                  placeholder="Search by title, technology, or tag..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search projects"
                />
                {query && (
                  <button
                    className="btn btn-outline-secondary border-start-0"
                    type="button"
                    onClick={() => setQuery('')}
                    title="Clear search"
                  >
                    <i className="bi bi-x-circle"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="col-lg-7 col-md-6">
              <div className="d-flex flex-wrap gap-2 justify-content-md-end">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`btn btn-sm filter-pill ${category === cat ? 'active' : ''}`}
                    onClick={() => setCategory(cat)}
                  >
                    <span>{cat}</span>
                    <span className="badge count-badge ms-1">
                      {categoryCounts[cat] ?? 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top small text-muted">
            <span>
              Showing <strong>{filteredProjects.length}</strong> of <strong>{projects.length}</strong> projects
            </span>
            {(query || category !== 'All') && (
              <button
                className="btn btn-link btn-sm text-teal text-decoration-none p-0"
                onClick={() => {
                  setCategory('All')
                  setQuery('')
                }}
              >
                <i className="bi bi-arrow-counterclockwise me-1"></i>
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-teal" role="status">
              <span className="visually-hidden">Loading projects...</span>
            </div>
            <p className="text-muted mt-3">Loading projects portfolio...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-5 my-4 card border-0 shadow-sm p-5 rounded-4">
            <i className="bi bi-folder2-open display-1 text-muted opacity-50 mb-3"></i>
            <h3 className="h4 fw-bold">No Projects Found</h3>
            <p className="text-muted max-w-500 mx-auto mb-4">
              We couldn't find any projects matching your search query "{query}" in category "{category}".
            </p>
            <div>
              <button
                className="btn btn-teal"
                onClick={() => {
                  setCategory('All')
                  setQuery('')
                }}
              >
                View All Projects
              </button>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <ProjectCard project={project} onDetails={setSelectedProject} />
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

