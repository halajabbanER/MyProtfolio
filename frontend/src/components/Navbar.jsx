import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', icon: 'bi-house-door' },
  { to: '/about', label: 'About', icon: 'bi-person' },
  { to: '/projects', label: 'Projects', icon: 'bi-grid-fill' },
  { to: '/skills', label: 'Skills', icon: 'bi-lightning-charge-fill' },
  { to: '/journey', label: 'Journey', icon: 'bi-mortarboard-fill' },
  { to: '/contact', label: 'Contact', icon: 'bi-envelope-fill' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="portfolio-navbar sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark-custom">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2" onClick={closeMenu}>
            <span className="logo-box">HJ</span>
            <span className="brand-name">Portfolio</span>
          </Link>

          <div className="d-flex align-items-center gap-2 order-lg-3">
            <button
              className="theme-toggle-btn btn btn-sm d-flex align-items-center gap-1"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={`bi ${theme === 'dark' ? 'bi-sun-fill text-warning' : 'bi-moon-stars-fill text-primary'}`}></i>
              <span className="theme-toggle-text">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

      
     

            <button
              className="navbar-toggler custom-toggler"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} fs-4`}></i>
            </button>
          </div>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="portfolioNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-1">
              {links.map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `nav-link custom-nav-link d-flex align-items-center gap-2 ${isActive ? 'active' : ''}`
                    }
                    onClick={closeMenu}
                  >
                    <i className={`bi ${link.icon}`}></i>
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

