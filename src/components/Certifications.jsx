import { useState } from 'react'
import Lightbox from './Lightbox'
import './Certifications.css'

// Titles, dates, and credential IDs transcribed from the certificates themselves.
// Note: INQ/AN-20622/127512/1025 appears on every SkillCourse certificate — it is
// SkillCourse's own ISO 9001 registration number, not a per-credential ID, so it is
// deliberately not shown as one.
const LINKEDIN_CERTS = 'https://www.linkedin.com/in/adarsh-kumar-657315251/details/certifications/'

const CERTS = [
  {
    name: 'Software Development Internship',
    issuer: 'Satyam Software Solutions Pvt. Ltd.',
    issued: '3-month training, Jan – Mar 2026',
    skills: ['C/C++', 'IPC', 'Multithreading', 'Drools'],
    image: '/certificates/satyam-internship.jpg',
    linkedinUrl: LINKEDIN_CERTS,
  },
  {
    name: 'Data Science with Python',
    issuer: 'RCPL × ITS Engineering College',
    issued: 'Aug – Sep 2025',
    credentialId: 'RCPL-2026/13664',
    skills: ['Python', 'Machine Learning', 'Data Analysis'],
    image: '/certificates/rcpl-data-science-python.png',
    linkedinUrl: LINKEDIN_CERTS,
  },
  {
    name: '30 Days Power BI Micro Course',
    issuer: 'SkillCourse',
    issued: '01 Jul 2026',
    credentialId: 'SC-41TV1QU1VH',
    verifyUrl: 'https://edu.skillcourse.in/view-certificate/SC-41TV1QU1VH',
    skills: ['Power BI', 'DAX', 'Dashboards'],
    image: '/certificates/skillcourse-power-bi.jpg',
    linkedinUrl: LINKEDIN_CERTS,
  },
  {
    name: '30 Days Python Micro Course',
    issuer: 'SkillCourse',
    issued: '01 Jul 2026',
    credentialId: 'SC-BAXUXNTSMF',
    verifyUrl: 'https://edu.skillcourse.in/view-certificate/SC-BAXUXNTSMF',
    skills: ['Python'],
    image: '/certificates/skillcourse-python.jpg',
    linkedinUrl: LINKEDIN_CERTS,
  },
  {
    name: '30 Days SQL Micro Course',
    issuer: 'SkillCourse',
    issued: '05 Jul 2026',
    credentialId: 'SC-I5EZD3SUZQ',
    verifyUrl: 'https://edu.skillcourse.in/view-certificate/SC-I5EZD3SUZQ',
    skills: ['SQL'],
    image: '/certificates/skillcourse-sql.png',
    linkedinUrl: LINKEDIN_CERTS,
  },
  {
    name: 'Microsoft Excel — Beginners to Advance',
    issuer: 'SkillCourse',
    issued: '01 Jul 2026',
    credentialId: 'SC-S73ZDEN3I8',
    verifyUrl: 'https://edu.skillcourse.in/view-certificate/SC-S73ZDEN3I8',
    skills: ['Excel'],
    image: '/certificates/skillcourse-excel.jpg',
    linkedinUrl: LINKEDIN_CERTS,
  },
]

// The RCPL data-science programme is listed above as a full certification, so it
// is intentionally not repeated here.
const TRAININGS = [
  {
    name: 'AI and ML Training Program',
    org: 'ITS Engineering College, Noida',
    date: 'Apr 2025',
  },
]

export default function Certifications() {
  const [active, setActive] = useState(null)
  const [broken, setBroken] = useState({})

  const hasImage = (c) => c.image && !broken[c.name]

  return (
    <div className="certs">
      <h3 className="certs-title">Certifications</h3>

      <div className="cert-grid">
        {CERTS.map((c) => (
          <article className="cert-card" key={c.name}>
            {hasImage(c) && (
              <button
                type="button"
                className="cert-thumb"
                onClick={() => setActive(c)}
                aria-label={`View ${c.name} certificate`}
              >
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  onError={() => setBroken((b) => ({ ...b, [c.name]: true }))}
                />
              </button>
            )}

            <div className="cert-body">
              <h4 className="cert-name">{c.name}</h4>
              <p className="cert-issuer">
                {c.issuer}
                <span className="dot">·</span>
                {c.issued}
              </p>

              <div className="cert-skills">
                {c.skills.map((s) => (
                  <span className="cert-chip" key={s}>{s}</span>
                ))}
              </div>

              {c.credentialId && (
                <p className="cert-id">Credential ID {c.credentialId}</p>
              )}

              {(hasImage(c) || c.verifyUrl || c.linkedinUrl) && (
                <div className="cert-links">
                  {hasImage(c) && (
                    <button type="button" className="cert-link" onClick={() => setActive(c)}>
                      View Certificate
                    </button>
                  )}
                  {c.verifyUrl && (
                    <a
                      className="cert-link is-verify"
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Verify <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {c.linkedinUrl && (
                    <a
                      className="cert-link is-linkedin"
                      href={c.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <h3 className="certs-title certs-title-sub">Training &amp; Workshops</h3>
      <ul className="training-list">
        {TRAININGS.map((t) => (
          <li className="training-item" key={t.name}>
            <span className="training-name">{t.name}</span>
            <span className="training-meta">{t.org} · {t.date}</span>
          </li>
        ))}
      </ul>

      {active && <Lightbox
          src={active.image}
          label={`${active.name} — ${active.issuer}`}
          onClose={() => setActive(null)}
        />}
    </div>
  )
}
