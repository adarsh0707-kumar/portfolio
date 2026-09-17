import { useEffect, useState } from 'react'
import './Hero.css'

const ROLES = ['build things for the web.', 'turn data into dashboards.', 'write code close to the metal.']

const TECH = [
  { label: 'HTML', color: '#E34F26' },
  { label: 'CSS', color: '#1572B6' },
  { label: 'JS', color: '#F7DF1E' },
  { label: 'TS', color: '#3178C6' },
  { label: 'React', color: '#61DAFB' },
  { label: 'Node', color: '#3C873A' },
  { label: 'Py', color: '#4B8BBE' },
  { label: 'SQL', color: '#E38C00' },
]

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [photoFailed, setPhotoFailed] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    const speed = deleting ? 30 : 60
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1))
        } else {
          setDeleting(false)
          setRoleIndex((roleIndex + 1) % ROLES.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-pill">I'M A WEB DEVELOPER</p>

          <h1 className="hero-name">
            Hi, I'm <span className="accent">Adarsh</span>
          </h1>
          <p className="hero-tagline">
            I <span className="hero-typed">{text}</span>
            <span className="hero-cursor" aria-hidden="true">|</span>
          </p>

          <p className="hero-desc">
            Final-year CS engineering student building data-driven web
            applications — from IPC and multithreading in C/C++ to PERN-stack
            apps and interactive dashboards in Tableau and Power BI.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work <span aria-hidden="true">↗</span></a>
            <a href="/Adarsh_Kumar_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">Download CV <span aria-hidden="true">↓</span></a>
          </div>

          <p className="tech-label">TECHNOLOGIES I WORK WITH</p>
          <div className="tech-row">
            {TECH.map((t) => (
              <span
                className="tech-chip"
                key={t.label}
                style={{ '--chip': t.color }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <span className="hero-blob" aria-hidden="true" />
          <span className="hero-dots" aria-hidden="true" />

          <svg className="hero-arrow" viewBox="0 0 80 92" fill="none" aria-hidden="true">
            <path
              d="M14 90C7 71 5 51 16 38c7-8 19-10 26-4 5 5 4 13-2 16-7 3-15-2-16-10C22 24 36 10 54 5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M45 2l11 3-4 11"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="hero-photo">
            {photoFailed ? (
              <div className="hero-photo-fallback" role="img" aria-label="Adarsh Kumar">AK</div>
            ) : (
              <img
                src="/profile.png"
                alt="Adarsh Kumar"
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>

          <div className="code-card" aria-hidden="true">
            <div className="code-card-bar">
              <span className="code-card-title">{'</>'} Code</span>
              <span className="code-card-dot" />
            </div>
            <pre className="code-card-body">{`const developer = {
  name: "Adarsh",
  skills: ["React", "Node",
    "Python", "C++"],
  passion: "building things
    for the web"
};`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}
