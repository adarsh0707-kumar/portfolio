# Adarsh Kumar — Portfolio

Personal developer portfolio built with **React 18, Vite, and React Router**.

The site is designed to present my work around **backend engineering, systems programming, distributed applications, and full-stack development**, with projects, skills, certifications, and contact information in one place.

**Live site:** https://portfolio-orpin-zeta-77.vercel.app

## What the site includes

- Responsive single-page portfolio
- Hero, About, Skills, Projects, Certifications, and Contact sections
- Project filtering by category
- Project detail routes at `/projects/:slug`
- GitHub repository links for projects
- Live demo links where a working deployment is available
- Certificate cards with image lightbox and verification links
- Responsive navigation and scroll handling
- Reduced-motion/accessibility considerations in the UI
- Static project metadata maintained in the repository

### Project categories

- **Full-Stack**
- **Systems & C++**
- **Data & AI**
- **Frontend**

The portfolio currently presents projects ranging from C/C++ networking and database work to distributed systems, full-stack applications, and machine-learning projects.

## Featured work

The portfolio's featured section is intentionally centered on projects that best represent the engineering direction of the portfolio:

| Project | Focus |
|---|---|
| Trading Engine | C++ systems, sockets, analytics, WebSockets, Docker |
| Distributed Media Analytics Platform | Distributed processing, FFmpeg, C++, Python |
| CodeForge Cloud | Distributed code execution architecture, React, Node.js, Python, C++, Docker |
| Medical Billing | Full-stack application, PostgreSQL, Prisma, RBAC |
| Database Engine | C++ database internals and persistence |
| Chat App | POSIX sockets and multithreaded networking |

The project catalogue also contains smaller learning projects and earlier frontend/full-stack work. Those are kept available for breadth without being presented as equivalent to the flagship systems projects.

## Tech stack

### Application

- React 18.3
- React DOM
- React Router 7
- Vite 8
- JavaScript / JSX

### UI

- Custom CSS
- Responsive layouts
- CSS design tokens
- Component-based sections
- Lightbox for certificate previews

### Deployment

- Vercel
- Vite production build

## Project structure

```text
portfolio/
├── public/
│   ├── certificates/
│   ├── Adarsh_Kumar_Resume.pdf
│   └── profile.png
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── ...
│   ├── data/
│   │   └── projects.js
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Local development

Requirements:

- Node.js
- npm

Clone the repository:

```bash
git clone https://github.com/adarsh0707-kumar/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local Vite URL, normally:

```text
http://localhost:5173
```

## Production build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

There is currently no dedicated automated test suite in the repository. The primary verification path is the production build plus manual browser/accessibility checks.

## Content and assets

Project metadata is maintained in:

```text
src/data/projects.js
```

Adding or changing a project should update its:

- Name
- Category
- Description
- Year
- Technology stack
- GitHub repository
- Live demo, when one actually exists
- Featured status, when appropriate

### Personal assets

The site can use:

- `public/profile.png` for the hero image
- `public/Adarsh_Kumar_Resume.pdf` for the resume download
- `public/certificates/*` for certificate images

These are personal portfolio assets rather than reusable application code.

Certificate metadata is maintained in:

```text
src/components/Certifications.jsx
```

Only certificates with an available image can currently be opened in the built-in lightbox. Verification links are included where available.

## Deployment

The portfolio is deployed on Vercel and is configured as a standard Vite application.

Typical Vercel build settings:

```text
Build command: npm run build
Output directory: dist
```

The repository does not require a backend or database.

## Design and engineering goals

The portfolio is intentionally more than a project list. Its purpose is to make the engineering progression easy to understand:

```text
C / C++ fundamentals
        │
        ▼
Sockets, concurrency, database internals
        │
        ▼
Backend and full-stack applications
        │
        ▼
Distributed systems and service architecture
        │
        ▼
Production-oriented engineering
```

The site itself stays lightweight: the frontend is a static Vite build, while project and certificate information is represented as local data and assets.

## Current limitations

- No backend or server-side content management
- Project metadata is maintained manually in `src/data/projects.js`
- No automated unit/E2E test suite
- No CMS or admin interface
- Live-demo availability depends on the deployment of each individual project
- Some older/learning projects are intentionally less detailed than flagship projects
- Portfolio content can become stale if project status, links, or deployments change

## Roadmap

- Improve Lighthouse performance and Core Web Vitals
- Add automated accessibility checks
- Add automated link/deployment validation
- Improve project case-study pages with architecture, implementation, and results
- Add concise engineering write-ups for flagship projects
- Keep project status and live-demo links synchronized with the actual repositories
- Refine mobile and reduced-motion UX

## Contributing

This is a personal portfolio, but useful fixes are welcome, especially:

- Accessibility issues
- Broken links
- Build failures
- Typos
- Clear documentation improvements

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidance. For security-related concerns, use [SECURITY.md](SECURITY.md).

## License

The **source code** is released under the [MIT License](LICENSE).

Personal content is not covered by that license. This includes the profile photo, resume, certificate images, and personal/biographical copy. If you reuse the source as a template, replace those assets and personal details with your own.
