import './Contact.css'

const CHANNELS = [
  { label: 'Email', value: 'adarshku.official@gmail.com', href: 'mailto:adarshku.official@gmail.com', icon: 'mail' },
  { label: 'Phone', value: '+91 72097 98901', href: 'tel:+917209798901', icon: 'phone' },
  { label: 'GitHub', value: 'github.com/adarsh0707-kumar', href: 'https://github.com/adarsh0707-kumar', icon: 'github', external: true },
  { label: 'LinkedIn', value: 'linkedin.com/in/Adarsh-kumar-657315251', href: 'https://linkedin.com/in/Adarsh-kumar-657315251', icon: 'linkedin', external: true },
]

function ChannelIcon({ name }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'mail') return <svg {...common}><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22 6 12 13 2 6" /></svg>
  if (name === 'phone') return <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
  if (name === 'github') return <svg {...common}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19.9 5a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.6 0C6.9 1.1 5.8 1.4 5.8 1.4A4.9 4.9 0 0 0 5.7 5a5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22" /></svg>
  return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
}

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-cta">
            <p className="eyebrow">Let's Work Together</p>
            <h2 className="section-title contact-title">Have a project in mind?</h2>
            <p className="contact-sub">
              I'm open to full-stack, frontend, and data roles, and to freelance
              work. Based in Greater Noida, India — the fastest way to reach me
              is email, and I usually reply within a day.
            </p>
            <a href="mailto:adarshku.official@gmail.com" className="btn btn-primary">
              Get in Touch <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact-panel">
            <p className="panel-label">Reach Me</p>
            <div className="channel-list">
              {CHANNELS.map((c) => (
                <a
                  href={c.href}
                  className="channel-row"
                  key={c.label}
                  {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="channel-icon"><ChannelIcon name={c.icon} /></span>
                  <span className="channel-text">
                    <span className="channel-label">{c.label}</span>
                    <span className="channel-value">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
