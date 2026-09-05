import './About.css'

const STATS = [
  { value: '42', label: 'Projects Built', icon: 'code' },
  { value: '3 mo', label: 'Internship Experience', icon: 'calendar' },
  { value: '6', label: 'Certifications', icon: 'award' },
  { value: '629', label: 'Unit Tests Written', icon: 'check' },
]

const TIMELINE = [
  {
    tag: 'Jan – Mar 2026',
    title: 'Software Development Intern',
    org: 'Satyam Software Solution',
    body: 'Built the FlexCom module of the DS24 project — a multi-process, multi-threaded architecture for concurrent communication. Implemented IPC via message queues, shared memory, pipes, and sockets, synchronised with mutexes, semaphores, and condition variables, and used the Drools rule engine for business-logic automation.',
  },
  {
    tag: '2022 – 2026',
    title: 'B.Tech, Computer Science & Engineering',
    org: 'ITS Engineering College, Noida',
  },
  {
    tag: '2022',
    title: 'Class 12 — BSEB',
    org: 'Gopal Shah High School, Motihari',
  },
  {
    tag: '2020',
    title: 'Class 10 — CBSE',
    org: 'Arya Vidhyapith, East Champaran, Motihari',
  },
]

function StatIcon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'code') return <svg {...common}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
  if (name === 'calendar') return <svg {...common}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
  if (name === 'award') return <svg {...common}><circle cx="12" cy="8" r="6" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
  return <svg {...common}><polyline points="20 6 9 17 4 12" /></svg>
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <p className="eyebrow">About Me</p>
            <h2 className="section-title about-title">
              I build things that turn data into decisions
            </h2>
            <p className="about-body">
              I'm a final-year Computer Science &amp; Engineering student,
              originally from Motihari and now based in Greater Noida. I
              started out in low-level systems work — C/C++, inter-process
              communication, multithreading — and grew outward into full-stack
              web development and data science.
            </p>
            <p className="about-body">
              Today that means I'm equally happy engineering a PERN-stack
              application or pulling a dataset apart in Python and turning it
              into a dashboard someone can actually read.
            </p>
            <a href="#contact" className="btn btn-ghost about-cta">Let's work together</a>
          </div>

          <div className="stat-grid">
            {STATS.map((s) => (
              <div className="stat-tile" key={s.label}>
                <span className="stat-icon"><StatIcon name={s.icon} /></span>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline">
          {TIMELINE.map((item) => (
            <div className="timeline-item" key={item.title}>
              <span className="timeline-tag">{item.tag}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-org">{item.org}</p>
              {item.body && <p className="timeline-body">{item.body}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
