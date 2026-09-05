import { Link } from 'react-router-dom'
import './Header.css'

// Absolute "/#id" targets so the nav still works from a project detail page.
const LINKS = [
  { href: '/#top', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/#top" className="logo">
          <span className="logo-mark">{'</>'}</span>
          <span className="logo-text">Adarsh</span>
        </Link>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.href} to={l.href}>{l.label}</Link>
          ))}
        </nav>

        <Link className="hire-btn" to="/#contact">Hire Me <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  )
}
