import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS, CATEGORIES, TINTS } from '../data/projects'
import './Projects.css'

const INITIAL_COUNT = 9

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState(false)

  const filtered = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  )

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT)
  const hidden = filtered.length - visible.length

  const selectFilter = (c) => {
    setFilter(c)
    setExpanded(false)
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Featured Projects</p>
          <h2 className="section-title">Some of my recent work</h2>
          <p className="projects-sub">
            {PROJECTS.length} projects pulled from my GitHub — full-stack apps,
            low-level C++ systems, and data work.
          </p>
        </div>

        <div className="filter-row" role="tablist" aria-label="Filter projects by category">
          {CATEGORIES.map((c) => {
            const count = c === 'All'
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === c).length

            return (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filter === c}
                className={`filter-btn ${filter === c ? 'is-active' : ''}`}
                onClick={() => selectFilter(c)}
              >
                {c} <span className="filter-count">{count}</span>
              </button>
            )
          })}
        </div>

        <div className="project-grid">
          {visible.map((p, i) => (
            <article
              className="project-card"
              key={p.name}
              style={{ '--tint': TINTS[p.category] }}
            >
              <Link to={`/projects/${p.slug}`} className="project-thumb">
                <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="project-monogram" aria-hidden="true">{p.monogram}</span>
                <span className="project-cat">{p.category}</span>
              </Link>

              <div className="project-body">
                <div className="project-top">
                  <h3 className="project-name">
                    <Link to={`/projects/${p.slug}`}>{p.name}</Link>
                  </h3>
                  <span className="project-date">{p.year}</span>
                </div>

                <p className="project-desc">{p.desc}</p>

                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span className="stack-chip" key={s}>{s}</span>
                  ))}
                </div>

                <div className="project-links">
                  <Link to={`/projects/${p.slug}`} className="project-link is-primary">
                    Read more <span aria-hidden="true">→</span>
                  </Link>
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                    Code <span aria-hidden="true">↗</span>
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="project-link is-demo">
                      Demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length > INITIAL_COUNT && (
          <div className="projects-more">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show fewer' : `Show all ${filtered.length} projects (+${hidden})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
