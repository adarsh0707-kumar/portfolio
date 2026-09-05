import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PROJECTS, TINTS } from '../data/projects'
import { PROJECT_DETAILS } from '../data/projectDetails'
import { getProjectImages } from '../data/projectImages'
import ProjectGallery from './ProjectGallery'
import Lightbox from './Lightbox'
import './ProjectDetail.css'

function repoPath(link) {
  const m = link && link.match(/github\.com\/([^/]+)\/([^/?#]+)/)
  return m ? `${m[1]}/${m[2]}` : null
}

function issueUrl(link, kind, projectName) {
  const repo = repoPath(link)
  if (!repo) return null

  const title =
    kind === 'bug'
      ? `[Bug] ${projectName}: `
      : `[Suggestion] ${projectName}: `

  const body =
    kind === 'bug'
      ? [
          '**What went wrong?**',
          '',
          '',
          '**Steps to reproduce**',
          '1. ',
          '2. ',
          '',
          '**What did you expect instead?**',
          '',
          '',
          '---',
          '_Reported from Adarsh Kumar\'s portfolio._',
        ].join('\n')
      : [
          '**What would you improve?**',
          '',
          '',
          '**Why would it be better?**',
          '',
          '',
          '---',
          '_Suggested from Adarsh Kumar\'s portfolio._',
        ].join('\n')

  return `https://github.com/${repo}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`
}

function Section({ title, children }) {
  return (
    <section className="pd-section">
      <h2 className="pd-section-title">{title}</h2>
      {children}
    </section>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)
  const details = project ? PROJECT_DETAILS[project.slug] : null

  const images = project ? getProjectImages(project.slug) : []
  const [active, setActive] = useState(null)

  useEffect(() => {
    setActive(null)
  }, [slug])

  if (!project) {
    return (
      <main className="container pd-missing">
        <p className="pd-404">404</p>
        <h1 className="pd-missing-title">No such project</h1>
        <p className="pd-missing-body">
          There's nothing here under <code>{slug}</code>. It may have been
          renamed.
        </p>
        <Link to="/#projects" className="btn btn-primary">← All projects</Link>
      </main>
    )
  }

  const tint = TINTS[project.category]
  const bugUrl = issueUrl(project.link, 'bug', project.name)
  const ideaUrl = issueUrl(project.link, 'idea', project.name)
  const repo = repoPath(project.link)

  return (
    <main className="project-detail" style={{ '--tint': tint }}>
      <div className="container">
        <Link to="/#projects" className="pd-back">← All projects</Link>

        <header className="pd-head">
          <div className="pd-meta">
            <span className="pd-category">{project.category}</span>
            <span className="pd-year">{project.year}</span>
          </div>
          <h1 className="pd-title">{project.name}</h1>
          {details?.tagline && <p className="pd-tagline">{details.tagline}</p>}
          <p className="pd-summary">{project.desc}</p>

          <div className="pd-stack">
            {project.stack.map((s) => (
              <span className="stack-chip" key={s}>{s}</span>
            ))}
          </div>

          <div className="pd-actions">
            <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary">
              View Code <span aria-hidden="true">↗</span>
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-ghost">
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </header>

        {images.length > 0 && (
          <Section title="Screenshots">
            <ProjectGallery
              images={images}
              projectName={project.name}
              onOpen={(i) =>
                setActive({
                  src: images[i].url,
                  label: images[i].caption
                    ? `${project.name} — ${images[i].caption}`
                    : `${project.name} — ${i + 1} of ${images.length}`,
                })
              }
            />
          </Section>
        )}

        {details?.overview && (
          <Section title="Overview">
            {details.overview.map((para, i) => (
              <p className="pd-para" key={i}>{para}</p>
            ))}
          </Section>
        )}

        {details?.features && (
          <Section title="What it does">
            <div className="pd-features">
              {details.features.map((group) => (
                <div className="pd-feature-group" key={group.title}>
                  <h3 className="pd-feature-title">{group.title}</h3>
                  <ul className="pd-feature-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        )}

        {details?.stackDetail && (
          <Section title="Built with">
            <div className="pd-stack-groups">
              {details.stackDetail.map((g) => (
                <div className="pd-stack-group" key={g.group}>
                  <h3 className="pd-stack-label">{g.group}</h3>
                  <div className="pd-stack-items">
                    {g.items.map((it) => (
                      <span className="stack-chip" key={it}>{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {details?.demoCreds && (
          <Section title="Try the demo">
            <p className="pd-para">Sign in to the live demo with either account:</p>
            <div className="pd-creds">
              {details.demoCreds.map((c) => (
                <div className="pd-cred" key={c.role}>
                  <span className="pd-cred-role">{c.role}</span>
                  <code>{c.email}</code>
                  <code>{c.password}</code>
                </div>
              ))}
            </div>
          </Section>
        )}

        {(details?.notes || details?.docs) && (
          <Section title="Worth knowing">
            {details.docs && <p className="pd-note pd-note-docs">{details.docs}</p>}
            {details.notes && <p className="pd-note">{details.notes}</p>}
          </Section>
        )}

        {!details && (
          <Section title="More detail">
            <p className="pd-para pd-thin">
              A full write-up for this one is still to come. The code and its
              README are the best place to look in the meantime.
            </p>
          </Section>
        )}

        {repo && (
          <section className="pd-feedback">
            <h2 className="pd-feedback-title">Spotted a problem, or have an idea?</h2>
            <p className="pd-feedback-body">
              Feedback goes straight to this project's issue tracker on GitHub —
              the form opens prefilled, so you only need to fill in the detail.
              You'll need a GitHub account to post.
            </p>
            <div className="pd-feedback-actions">
              <a href={bugUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Report an issue <span aria-hidden="true">↗</span>
              </a>
              <a href={ideaUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
                Suggest an improvement <span aria-hidden="true">↗</span>
              </a>
              <a
                href={`https://github.com/${repo}/issues`}
                target="_blank"
                rel="noreferrer"
                className="pd-feedback-link"
              >
                Browse open issues
              </a>
            </div>
            <p className="pd-feedback-alt">
              Would rather just email? <a href="mailto:adarshku.official@gmail.com">adarshku.official@gmail.com</a>
            </p>
          </section>
        )}
      </div>

      {active && (
        <Lightbox
          src={active.src}
          label={active.label}
          onClose={() => setActive(null)}
        />
      )}
    </main>
  )
}
