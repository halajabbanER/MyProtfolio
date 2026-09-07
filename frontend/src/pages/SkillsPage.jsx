import { useState } from 'react'
import { Link } from 'react-router-dom'

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend & Mobile Development',
    icon: 'bi-window-fullscreen',
    skills: [
      { name: 'React', level: 88, desc: 'Component architecture, Hooks, Context API, state management' },
      { name: 'React Native', level: 85, desc: 'Cross-platform mobile apps for iOS & Android, Yukatech experience' },
      { name: 'JavaScript (ES6+)', level: 86, desc: 'Async/await, DOM manipulation, closures, modern ES features' },
      { name: 'TypeScript', level: 78, desc: 'Type safety, interfaces, generics in React Native projects' },
      { name: 'HTML5 & CSS3 / Bootstrap', level: 92, desc: 'Semantic layouts, Flexbox, CSS Grid, responsive design' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Programming Languages',
    icon: 'bi-hdd-network',
    skills: [
      { name: 'C# & .NET Core', level: 86, desc: 'Object-oriented programming, LINQ, backend application structure' },
      { name: 'ASP.NET Core REST APIs', level: 84, desc: 'Web API controllers, dependency injection, middleware, authentication' },
      { name: 'Java & OOP Principles', level: 80, desc: 'Encapsulation, inheritance, polymorphism, desktop apps' },
      { name: 'Python', level: 75, desc: 'Scripting, algorithmic problem-solving, data handling' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Data Modeling',
    icon: 'bi-database-fill',
    skills: [
      { name: 'Microsoft SQL Server', level: 85, desc: 'Relational design, complex queries, stored procedures, indexing' },
      { name: 'Entity Framework Core (EF Core)', level: 82, desc: 'Code-first migrations, DB context, LINQ-to-Entities' },
      { name: 'Database Normalization & Relations', level: 85, desc: '1:N, N:M relations, foreign keys, data integrity' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools, Engineering & DevOps',
    icon: 'bi-gear-wide-connected',
    skills: [
      { name: 'Git & GitHub', level: 88, desc: 'Branching, PRs, version control workflows, team collaboration' },
      { name: 'Vite & Build Tooling', level: 85, desc: 'Fast bundling, npm packages, modern development environments' },
      { name: 'RESTful API Architecture', level: 88, desc: 'HTTP methods, status codes, JSON serialization, Postman testing' },
      { name: 'Digital Logic & Architecture (Logisim)', level: 80, desc: 'CPU design, ALU, register files, instruction cycles' },
    ],
  },
]

const toolkit = [
  { name: 'React', category: 'Frontend', icon: 'bi-code-square' },
  { name: 'React Native', category: 'Mobile', icon: 'bi-phone' },
  { name: 'C#', category: 'Backend', icon: 'bi-braces' },
  { name: 'ASP.NET Core', category: 'Backend', icon: 'bi-server' },
  { name: 'SQL Server', category: 'Database', icon: 'bi-database' },
  { name: 'JavaScript', category: 'Frontend', icon: 'bi-filetype-js' },
  { name: 'TypeScript', category: 'Mobile/Web', icon: 'bi-filetype-tsx' },
  { name: 'Java', category: 'Backend', icon: 'bi-cup-hot' },
  { name: 'Python', category: 'Languages', icon: 'bi-terminal' },
  { name: 'HTML5', category: 'Frontend', icon: 'bi-filetype-html' },
  { name: 'CSS3', category: 'Frontend', icon: 'bi-filetype-css' },
  { name: 'Bootstrap 5', category: 'UI Framework', icon: 'bi-bootstrap' },
  { name: 'Git', category: 'Tools', icon: 'bi-git' },
  { name: 'GitHub', category: 'Tools', icon: 'bi-github' },
  { name: 'EF Core', category: 'Database', icon: 'bi-layers' },
  { name: 'Logisim', category: 'Hardware', icon: 'bi-cpu' },
]

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredToolkit = activeTab === 'all'
    ? toolkit
    : toolkit.filter((tool) => tool.category.toLowerCase().includes(activeTab.toLowerCase()))

  return (
    <div className="skills-page animate-fade-in py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge category-badge mb-2">TECHNICAL EXPERTISE</span>
          <h1 className="fw-black display-5 mb-3">Skills, Tools & Engineering Stack</h1>
          <p className="lead text-muted">
            A comprehensive overview of the programming languages, frameworks, databases, and tooling I use daily.
          </p>
        </div>

        {/* Categorized Skills with Animated Progress Bars */}
        <div className="row g-4 mb-5">
          {skillCategories.map((group) => (
            <div className="col-lg-6" key={group.id}>
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="icon-circle icon-teal">
                    <i className={`bi ${group.icon} fs-4`}></i>
                  </div>
                  <h2 className="h5 fw-bold mb-0">{group.title}</h2>
                </div>

                <div className="d-flex flex-column gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-item-block">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-bold">{skill.name}</span>
                        <span className="badge bg-teal-subtle text-teal fw-mono font-monospace">
                          {skill.level}%
                        </span>
                      </div>
                      <p className="text-muted small mb-2">{skill.desc}</p>
                      <div className="progress skill-progress" style={{ height: '8px' }}>
                        <div
                          className="progress-bar bg-teal rounded-pill"
                          role="progressbar"
                          style={{ width: `${skill.level}%` }}
                          aria-valuenow={skill.level}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toolkit Technology Grid */}
        <div className="toolkit-section py-4 border-top">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
            <div>
              <span className="badge category-badge mb-1">TOOLKIT</span>
              <h2 className="h3 fw-bold mb-0">Technologies & Platforms</h2>
            </div>

            {/* Quick Filter Buttons */}
            <div className="d-flex flex-wrap gap-1">
              {['all', 'Frontend', 'Backend', 'Database', 'Tools'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`btn btn-sm ${activeTab === tab ? 'btn-teal' : 'btn-outline-custom'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'all' ? 'All Tech' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-3">
            {filteredToolkit.map((item) => (
              <div className="col-6 col-md-4 col-lg-3" key={item.name}>
                <div className="card h-100 p-3 border-0 shadow-sm transition-card d-flex flex-row align-items-center gap-3">
                  <div className="toolkit-icon-box text-teal">
                    <i className={`bi ${item.icon} fs-4`}></i>
                  </div>
                  <div>
                    <div className="fw-bold">{item.name}</div>
                    <small className="text-muted">{item.category}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-5 p-4 rounded-4 bg-subtle text-center">
          <h3 className="h5 fw-bold mb-2">Want to see these skills in action?</h3>
          <p className="text-muted small mb-3">
            Explore the live projects and case studies where these technologies were applied.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/projects" className="btn btn-teal d-inline-flex align-items-center gap-2">
              <span>View Practical Projects</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
            <Link to="/contact" className="btn btn-outline-custom">
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

