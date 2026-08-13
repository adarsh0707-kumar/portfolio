import './Header.css'

const LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">{'</>'}</span>
          <span className="logo-text">Adarsh</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a className="hire-btn" href="#contact">Hire Me <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}
