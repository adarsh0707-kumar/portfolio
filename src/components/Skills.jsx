import Certifications from './Certifications'
import './Skills.css'

const SKILLS = [
  { name: 'HTML', short: 'H', color: '#E34F26', level: 90 },
  { name: 'CSS / Tailwind', short: 'C', color: '#1572B6', level: 85 },
  { name: 'JavaScript', short: 'JS', color: '#F7DF1E', level: 88 },
  { name: 'TypeScript', short: 'TS', color: '#3178C6', level: 78 },
  { name: 'React.js', short: 'R', color: '#61DAFB', level: 85 },
  { name: 'Next.js', short: 'N', color: '#E5E7EB', level: 72 },
  { name: 'Node.js / Express', short: 'No', color: '#3C873A', level: 80 },
  { name: 'Python', short: 'Py', color: '#4B8BBE', level: 78 },
  { name: 'SQL / PostgreSQL', short: 'SQ', color: '#E38C00', level: 82 },
  { name: 'MongoDB', short: 'M', color: '#47A248', level: 70 },
  { name: 'C / C++', short: 'C+', color: '#9C7BEA', level: 71 },
  { name: 'Tableau / Power BI', short: 'BI', color: '#F2994A', level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">My Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
        </div>

        <div className="skill-grid">
          {SKILLS.map((s) => (
            <div className="skill-row" key={s.name}>
              <span className="skill-badge" style={{ '--chip': s.color }}>{s.short}</span>
              <div className="skill-main">
                <div className="skill-top">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Certifications />
      </div>
    </section>
  )
}
