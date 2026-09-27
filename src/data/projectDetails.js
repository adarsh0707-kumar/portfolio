// Long-form content for the project detail pages, keyed by the `slug` in
// projects.js. Everything here is drawn from each repository's own README.
//
// A project with no entry still gets a detail page — it just shows the summary,
// stack and links from projects.js.
//
// Screenshots: drop images into `public/projects/<slug>/` and list them below.
// Any path that fails to load is dropped from the gallery automatically, so it
// is safe to list images before they exist.

export const PROJECT_DETAILS = {
  'meta-micro-coaching-saas': {
    tagline: 'A micro-SaaS built from a real system requirements document.',
    overview: [
      'Coaching centres in Patna run on paper registers and WhatsApp messages typed by hand. Meta Micro replaces that with one system: enrol students into batches, track who paid this month, record attendance and test scores, and let the software send the reminders.',
      'The messaging is the part that matters most to the people using it. Fee reminders and parent updates go out in Hindi or English over the WhatsApp Cloud API, on a schedule, without anyone typing them. In development the provider just logs what it would have sent, so the whole flow is testable without credentials.',
      'It is multi-tenant: every institute is isolated, and tenant isolation is the rule the codebase is organised around. The implementation follows a written System Requirements Document rather than being invented as it went.',
    ],
    features: [
      {
        title: 'Institute operations',
        items: [
          'Students and batches, with enrolment managed per institute',
          'Monthly fee tracking with payment status per student',
          'Attendance recording',
          'Test score entry and history',
        ],
      },
      {
        title: 'Automated messaging',
        items: [
          'Bilingual Hindi/English templates via react-i18next',
          'Fee reminders and parent updates over the WhatsApp Cloud API',
          'APScheduler drives the monthly automations',
          'Pluggable provider — logs in development, calls Meta in production',
        ],
      },
      {
        title: 'Platform',
        items: [
          'Multi-tenant with strict per-institute isolation',
          'JWT authentication with auth dependencies in the core layer',
          'One router per resource; Pydantic schemas on every request and response',
          'Runs end to end under Docker Compose',
        ],
      },
    ],
    stackDetail: [
      { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'react-i18next', 'axios'] },
      { group: 'Backend', items: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'APScheduler'] },
      { group: 'Data & infra', items: ['PostgreSQL', 'Docker Compose', 'nginx'] },
      { group: 'Messaging', items: ['WhatsApp Cloud API'] },
    ],
    docs: 'The repository ships a full documentation set — PRD, architecture, data model, API reference, an operations runbook, and a known-issues list ordered by severity.',
  },

  'football-club-platform': {
    tagline: 'A client engagement run end to end, documented from PRD to dev log.',
    overview: [
      'A football club website with two halves: public pages where supporters see the squad, fixtures and results, and an admin panel where club staff update all of it without touching code or asking a developer.',
      'The point of the project was the process as much as the product. It was built as a client-style engagement, so the repository carries the paper trail — a product requirements document, a requirements breakdown, an architecture document, a phased build plan, an API specification, and a running development log.',
      'Password reset is implemented properly: with no SMTP configured the reset link is printed to the server log instead of emailed, so the whole flow can be exercised locally without an email account.',
    ],
    features: [
      {
        title: 'Public site',
        items: [
          'Squad pages backed by the database, not hardcoded',
          'Fixtures and results',
          'Club information pages',
        ],
      },
      {
        title: 'Admin panel',
        items: [
          'Staff manage squad, fixtures and results directly',
          'JWT authentication with bcrypt-hashed passwords',
          'Password reset with tokenised email links',
          'Seeded bootstrap admin for first run',
        ],
      },
      {
        title: 'Engineering',
        items: [
          'Prisma migrations and a seed script',
          'Rate limiting that reads real client IPs behind a proxy',
          'Split deployment — frontend and API deploy independently',
        ],
      },
    ],
    stackDetail: [
      { group: 'Frontend', items: ['React', 'Vite', 'React Router'] },
      { group: 'Backend', items: ['Node.js', 'Express', 'JWT', 'bcrypt'] },
      { group: 'Data', items: ['PostgreSQL', 'Prisma ORM'] },
    ],
    docs: 'Read in order: PRD, requirements, architecture, phases, API spec, then the dev log.',
  },

  'medbill-pro': {
    tagline: 'Billing, inventory and GST reporting for a retail pharmacy.',
    overview: [
      'A React single-page app over a Node/Express API, with PostgreSQL through Prisma, all containerised. It handles money, stock and tax records — which is exactly why the project treats correctness as more important than delivery speed.',
      'That priority shows up in the contributing guide, which is mostly a list of the places where the obvious change is the wrong one. Anything touching money or stock has a reason for being written the way it is.',
      'Multiple shops are supported through open registration: a new pharmacy can create its own account from the login page and become the administrator of an isolated shop, rather than needing to be provisioned by hand.',
    ],
    features: [
      {
        title: 'Retail operations',
        items: [
          'Point-of-sale billing',
          'Inventory and stock tracking',
          'Customer records',
          'GST reporting',
        ],
      },
      {
        title: 'Multi-shop',
        items: [
          'Open registration — a new shop signs up and self-administers',
          'Per-shop data isolation',
          'Seeded bootstrap admin for the first run',
        ],
      },
      {
        title: 'Deployment',
        items: [
          'Docker Compose brings up the whole system',
          'nginx serves the SPA and proxies /api on the same origin, so CORS never applies',
          'Health endpoint exposed for the API',
          'JWT secret required at boot — no insecure default',
        ],
      },
    ],
    stackDetail: [
      { group: 'Frontend', items: ['React', 'TypeScript', 'Vite'] },
      { group: 'Backend', items: ['Node.js', 'Express', 'JWT'] },
      { group: 'Data & infra', items: ['PostgreSQL', 'Prisma', 'Docker Compose', 'nginx'] },
    ],
  },

  'visitor-management-module': {
    tagline: 'A scoped proof of concept — one module, working, before the full build.',
    overview: [
      'Front-desk visitor management: check someone in, print them a badge, and keep a searchable record of who was in the building and when.',
      'This was built as a standalone working demo of one module from a larger "Visitor, Task, CRM" brief — a way to show functioning code rather than a proposal document. The badge, complete with a unique number and QR code, is generated the moment a visitor checks in.',
      'It is deliberately dependency-light and stores data in localStorage. That is a demo decision, not an architectural one: in the full build the same data model maps directly onto a REST API and a PostgreSQL table, matching the shared-database architecture the brief asked for.',
    ],
    features: [
      {
        title: 'Front desk',
        items: [
          'Check in with name, company, host and purpose of visit',
          'Printable ID badge with unique badge number and QR code',
          'Check-out flow marking a visitor as departed',
        ],
      },
      {
        title: 'Visitor log',
        items: [
          'Search by name, company, host or badge ID',
          'Filter by "in building" or "checked out"',
          'Live status strip — currently in the building, signed in today, total logged',
        ],
      },
    ],
    stackDetail: [
      { group: 'Frontend', items: ['React 19', 'Vite', 'qrcode.react'] },
      { group: 'Styling', items: ['Plain CSS with custom properties — no framework'] },
      { group: 'Storage', items: ['localStorage (demo only)'] },
    ],
    notes: 'Scoped demo of one module, not the final architecture. The full system would add a Node/Express REST API across all three modules, PostgreSQL as the shared database, single sign-on, and real badge printing through a thermal label printer.',
  },

  'welth-finance-tracker': {
    tagline: 'Personal finance with AI insights, built on Next.js 15 and React 19.',
    overview: [
      'A personal finance manager for tracking expenses and income, analysing spending patterns, and getting intelligent insight into where the money actually goes.',
      'The interesting part is the supporting cast around the core CRUD: Clerk handles authentication, Arcjet provides rate limiting and abuse protection, Inngest runs background jobs, and Resend with React Email sends transactional mail. Insights come from Google Generative AI.',
      'The interface is built on Radix UI primitives with Tailwind, charts through Recharts, and forms validated with React Hook Form and Zod. Dark and light modes both ship.',
    ],
    features: [
      {
        title: 'Money management',
        items: [
          'Expense tracking with categorisation',
          'Income management for a complete picture',
          'Transaction history with advanced filtering',
          'Financial analytics visualised with Recharts',
          'AI-powered insights via Google Generative AI',
        ],
      },
      {
        title: 'Security',
        items: [
          'Authentication through Clerk',
          'Rate limiting and abuse protection with Arcjet',
          'Session management with secure tokens',
        ],
      },
      {
        title: 'Experience',
        items: [
          'Dark and light mode via next-themes',
          'Radix UI component primitives',
          'Toast notifications with Sonner',
          'Responsive, following WCAG guidance',
        ],
      },
    ],
    stackDetail: [
      { group: 'Framework', items: ['Next.js 15.5', 'React 19', 'Turbopack'] },
      { group: 'UI', items: ['Tailwind CSS 4', 'Radix UI', 'Lucide React', 'Recharts', 'Sonner'] },
      { group: 'Data & auth', items: ['PostgreSQL', 'Prisma', 'Clerk', 'Arcjet'] },
      { group: 'Services', items: ['Google Generative AI', 'Resend', 'React Email', 'Inngest'] },
      { group: 'Forms', items: ['React Hook Form', 'Zod', 'date-fns'] },
    ],
  },

  'team-task-manager': {
    tagline: 'TaskFlow — multi-organization task management with strict isolation.',
    overview: [
      'A team task manager where an admin runs their own organization: they create projects, add members, assign work, and watch progress. Members see only what belongs to them.',
      'The isolation is the substance of the project. Each admin manages a team completely independently, and members of one organization cannot be seen or added by another organization\'s admin. Admins create members and receive auto-generated credentials to hand over, can reset any member\'s password, and can remove people from the org.',
      'Work is viewable as a Kanban board with To Do / In Progress / Done columns, or as a list, with priorities, due dates and overdue detection.',
    ],
    features: [
      {
        title: 'Authentication & access',
        items: [
          'JWT login and signup',
          'Change password with current-password verification and auto-logout',
          'Protected routes redirect unauthenticated users',
          'Role-based route guards on admin-only pages',
        ],
      },
      {
        title: 'Multi-organization',
        items: [
          'Complete org isolation between admins',
          'Auto-generated member credentials with one-click copy',
          'Admin can reset member passwords or remove members',
          'Cross-org visibility blocked entirely',
        ],
      },
      {
        title: 'Projects & tasks',
        items: [
          'Kanban board and list/table views',
          'Progress bars showing completion percentage',
          'Project status: active, completed, archived',
          'Priorities, due dates, and overdue highlighting',
          'Quick status changes directly on Kanban cards',
        ],
      },
      {
        title: 'Dashboard',
        items: [
          'Totals for tasks, completed, overdue, active projects, team size',
          'Task breakdown with animated progress bars',
          'Recent activity feed with project context',
        ],
      },
    ],
    stackDetail: [
      { group: 'Frontend', items: ['React', 'Vite'] },
      { group: 'Backend', items: ['Node.js', 'Express', 'JWT'] },
      { group: 'Data', items: ['MongoDB'] },
    ],
    demoCreds: [
      { role: 'Admin', email: 'admin@demo.com', password: 'demo1234' },
      { role: 'Member', email: 'member@demo.com', password: 'demo1234' },
    ],
    notes: 'The API runs on a free Render tier and can take 30-60 seconds to wake after inactivity. Give the first load a moment.',
  },

  'database-engine': {
    tagline: 'MiniDB — database internals, written from scratch.',
    overview: [
      'A SQL-like database engine in C++, built to understand what actually happens between typing a query and getting rows back: parsing the statement, planning what to do with it, executing against in-memory structures, and persisting the result to disk.',
      'It supports the core query set rather than a toy subset — creating tables, inserting rows, selecting with WHERE filtering, updating and deleting.',
    ],
    features: [
      {
        title: 'Query support',
        items: [
          'CREATE TABLE',
          'INSERT INTO',
          'SELECT with WHERE filtering',
          'UPDATE',
          'DELETE',
        ],
      },
      {
        title: 'Engine',
        items: [
          'Custom query parser written by hand',
          'In-memory execution for fast queries',
          'File-based persistence so data survives restarts',
        ],
      },
    ],
    stackDetail: [
      { group: 'Language', items: ['C++'] },
      { group: 'Concepts', items: ['Query parsing', 'Execution', 'Persistence', 'File I/O'] },
    ],
  },

  'multi-threaded-web-server': {
    tagline: 'An HTTP/1.1 server on a thread pool, in C++17.',
    overview: [
      'A web server written from the socket up in C++17. Requests are handled concurrently by a configurable thread pool rather than a thread per connection, which is the difference between a server that survives load and one that falls over.',
      'It parses HTTP/1.1 properly, serves static files with MIME types detected from the extension, and defends against directory traversal — the classic mistake in a naive static file server is happily serving `../../etc/passwd`, and this one checks for it.',
    ],
    features: [
      {
        title: 'Concurrency',
        items: [
          'Configurable thread pool',
          'Efficient socket I/O and buffer management',
          'Proper resource cleanup and error handling',
        ],
      },
      {
        title: 'HTTP',
        items: [
          'Full HTTP/1.1 request parsing and response generation',
          'Static file serving — HTML, CSS, JavaScript, images',
          'Automatic content-type detection from file extension',
        ],
      },
      {
        title: 'Safety & observability',
        items: [
          'Directory-traversal protection',
          'Structured logging to server.log with timestamps',
        ],
      },
    ],
    stackDetail: [
      { group: 'Language', items: ['C++17'] },
      { group: 'Concepts', items: ['Thread pools', 'BSD sockets', 'HTTP/1.1', 'MIME detection'] },
    ],
  },

  'real-time-chat-app': {
    tagline: 'Multi-client chat over POSIX sockets.',
    overview: [
      'A chat server and client in C++, built directly on POSIX sockets. Multiple clients connect at once, messages broadcast to everyone, and the server stays responsive because each connection is handled concurrently.',
      'Beyond broadcast it supports private messaging, timestamps every message, announces joins and leaves, and refuses duplicate or empty usernames. Network errors and abrupt disconnections are handled rather than crashing the server.',
    ],
    features: [
      {
        title: 'Messaging',
        items: [
          'Real-time broadcast to all connected clients',
          'Private messages with /msg <username> <message>',
          'Timestamps on every message in HH:MM',
          '/help lists available commands',
        ],
      },
      {
        title: 'Users & robustness',
        items: [
          'Unique usernames, validated on join',
          'Join and leave notifications',
          'Empty and duplicate username rejection',
          'Handles network errors and disconnections cleanly',
        ],
      },
    ],
    stackDetail: [
      { group: 'Language', items: ['C++'] },
      { group: 'Concepts', items: ['POSIX sockets', 'Multithreading', 'Protocol design'] },
    ],
  },

  'scientific-calculator-engine': {
    tagline: '493 passing unit tests behind a calculator you type into.',
    overview: [
      'A scientific calculator built from first principles in C/C++. Input is tokenised, parsed, converted to postfix and evaluated — no expression-evaluation library doing the hard part.',
      'What grew out of that core is substantial: variables and history, statistics, unit and base conversion, complex numbers, matrix operations, and plotting. It is developed phase by phase, each phase self-contained and shipping with its own tests.',
      'The test suite is the reason to look at this one. 493 unit tests across the modules, maintained as a hard requirement rather than an afterthought — new functionality does not land without tests.',
    ],
    features: [
      {
        title: 'Evaluation core',
        items: [
          'Custom tokenizer and parser',
          'Postfix conversion and evaluation',
          'Variables and calculation history',
        ],
      },
      {
        title: 'Mathematics',
        items: [
          'Statistics',
          'Complex numbers',
          'Matrix operations',
          'Unit conversion and base conversion',
          'Plotting',
        ],
      },
      {
        title: 'Engineering',
        items: [
          '493 passing unit tests, organised per module',
          'Phase-by-phase development, one feature area at a time',
          'Builds and releases independently of the sibling projects',
        ],
      },
    ],
    stackDetail: [
      { group: 'Languages', items: ['C', 'C++'] },
      { group: 'Build', items: ['CMake', 'Makefile'] },
      { group: 'Testing', items: ['Per-module unit test suites'] },
    ],
  },

  'digital-clock-system': {
    tagline: 'One codebase, two interfaces — terminal or window.',
    overview: [
      'A clock that runs in a terminal or as a desktop window from the same core, refreshing in real time on a configurable interval.',
      'It carries the features a clock accumulates when you keep going: recurring alarms, a stopwatch, a countdown timer, a world clock across timezones, themeable colours, external configuration and file-based logging. There is a plugin system for extending it.',
      'The console build has zero third-party dependencies — it compiles with nothing but a C++17 toolchain. The Qt GUI is a separate optional target, so the dependency is opt-in.',
    ],
    features: [
      {
        title: 'Timekeeping',
        items: [
          'Real-time display on a configurable refresh interval',
          'Recurring alarms',
          'Stopwatch and countdown timer',
          'World clock across timezones',
        ],
      },
      {
        title: 'Customisation',
        items: [
          'Themeable colours',
          'External configuration file',
          'Plugin system',
          'File-based logging',
        ],
      },
      {
        title: 'Builds',
        items: [
          'Console build with zero third-party dependencies',
          'Optional Qt GUI as a separate target',
          '136 passing tests at version 2.1.0',
        ],
      },
    ],
    stackDetail: [
      { group: 'Language', items: ['C++17'] },
      { group: 'GUI', items: ['Qt (optional target)'] },
      { group: 'Build', items: ['CMake', 'Makefile'] },
    ],
  },

  'guess-the-number': {
    tagline: 'Small on purpose — C11, standard library only.',
    overview: [
      'A terminal guessing game: the program picks a number between 1 and 100, and narrows you in with too-high and too-low feedback until you find it, then tells you how many attempts it took.',
      'It is deliberately small. Written in C11 against nothing but the standard library, it exists as the simplest complete example in the collection — build, test and release working the same way as its much larger siblings.',
    ],
    features: [
      {
        title: 'Gameplay',
        items: [
          'Random target between 1 and 100',
          'Too-high / too-low feedback each guess',
          'Attempt count reported on a win',
        ],
      },
      {
        title: 'Implementation',
        items: [
          'C11, standard library only',
          'Input validation on every guess',
          'Verified by 50 checks at version 1.0.0',
        ],
      },
    ],
    stackDetail: [
      { group: 'Language', items: ['C11'] },
      { group: 'Build', items: ['CMake', 'Makefile'] },
    ],
  },

  'orthonow-landing-page': {
    tagline: 'Client web and martech for a nine-clinic orthopaedic group.',
    overview: [
      'A developer assignment for OrthoNow, a group of nine orthopaedic clinics across Bengaluru, Hyderabad and Chennai, covering the client web and marketing technology side of the role.',
      'It came in three parts: a Google Tag Manager event schema with the booking form\'s dataLayer payload specified, a single-file mobile-first landing page in plain HTML, CSS and vanilla JavaScript, and a written integration design connecting HubSpot, WhatsApp and Google Ads.',
    ],
    features: [
      {
        title: 'Deliverables',
        items: [
          'GTM event schema with booking-form dataLayer JSON',
          'Single-file mobile-first landing page',
          'HubSpot + WhatsApp + Google Ads integration design',
        ],
      },
    ],
    stackDetail: [
      { group: 'Front end', items: ['HTML', 'CSS', 'Vanilla JavaScript'] },
      { group: 'Martech', items: ['Google Tag Manager', 'dataLayer', 'HubSpot', 'Google Ads'] },
    ],
  },

  'colliery-town-afc-demo': {
    tagline: 'A pitch, not a template — built to win the brief.',
    overview: [
      'A single-page football club demo built for a Freelancer.com project, using a fictional club so the layout, colours and content structure could be swapped for the real client\'s crest, roster and branding.',
      'The design deliberately avoids looking like a stock sports template. The palette is coal black, brass gold, deep pitch green and chalk white — an industrial "pit village football club" identity. Oswald carries the headlines, Inter the body, and IBM Plex Mono the scores and ticker, which gives the numbers a scoreboard feel.',
    ],
    features: [
      {
        title: 'Sections',
        items: [
          'Hero with club identity, next-fixture card and quick-nav CTAs',
          'Matchday ticker — a scrolling W/D/L strip like a stadium LED board',
          'Squad grid with position, number, goals, assists, apps and clean sheets',
          'Fixtures table with date, opponent, home/away and kick-off',
          'Results table with final scores and outcomes',
          'Club history with a stat block',
        ],
      },
      {
        title: 'Craft',
        items: [
          'Stacks cleanly on mobile — nav collapses, tables simplify',
          'Visible keyboard focus states',
          'Ticker animation respects prefers-reduced-motion',
        ],
      },
    ],
    stackDetail: [
      { group: 'Front end', items: ['HTML', 'CSS', 'Vanilla JavaScript'] },
      { group: 'Type', items: ['Oswald', 'Inter', 'IBM Plex Mono'] },
    ],
  },

  'keycloak-auth-integration': {
    tagline: 'Identity done with a real IAM server, not a hand-rolled login.',
    overview: [
      'A Spring Boot REST API configured as an OAuth2 resource server, with Keycloak acting as the identity and access management provider. The API validates JWT access tokens issued by Keycloak, so only authenticated callers reach protected endpoints.',
      'It is the pattern real organisations use rather than the one tutorials teach — authentication is delegated to a dedicated IAM server instead of being reimplemented in every service. A React client pairs with it.',
    ],
    features: [
      {
        title: 'Backend',
        items: [
          'Spring Security OAuth2 resource server configuration',
          'JWT access token validation against Keycloak',
          'Protected REST endpoints',
        ],
      },
      {
        title: 'Integration',
        items: [
          'Keycloak as the identity provider',
          'React frontend client',
          'Ready to extend to mobile clients',
        ],
      },
    ],
    stackDetail: [
      { group: 'Backend', items: ['Java 17+', 'Spring Boot', 'Spring Security'] },
      { group: 'Identity', items: ['Keycloak', 'OAuth2', 'JWT'] },
      { group: 'Frontend', items: ['React'] },
    ],
  },,

  'codeforge-cloud': {
    tagline: 'A distributed online IDE where untrusted code runs inside a layered sandbox.',
    overview: [
      'CodeForge Cloud combines a browser-based collaborative IDE with a distributed execution platform. The system separates the React workspace, API gateway, persistence, queueing, evaluator, sandbox runtime and infrastructure so expensive or untrusted workloads do not sit inside the public API process.',
      'The execution path is deliberately defensive: source is validated, authenticated and authorized, captured as an immutable snapshot, placed behind a resource policy and queued before reaching the evaluator and C++ sandbox. Docker isolation, Linux namespaces, cgroups, seccomp, restricted capabilities, filesystem and network controls provide multiple layers of containment.',
      'The project also treats collaboration and operations as first-class concerns, with WebSocket events, project membership and roles, execution history, structured identifiers and observability built into the architecture.',
    ],
    features: [
      {
        title: 'Browser IDE',
        items: [
          'Monaco Editor with syntax highlighting and project file exploration',
          'Workspace, terminal output, execution controls and execution status',
          'Real-time collaboration indicators and WebSocket updates',
        ],
      },
      {
        title: 'Execution platform',
        items: [
          'Immutable execution snapshots for reproducible runs',
          'Asynchronous Redis-backed job processing',
          'Python evaluator connected to a C++ sandbox through gRPC',
          'Persistent execution history including status, timings, output and resource usage',
        ],
      },
      {
        title: 'Security & operations',
        items: [
          'Docker isolation with namespaces, cgroups and seccomp',
          'CPU, memory, process, disk, output and execution-time limits',
          'Authentication, authorization and project-level access control',
          'Request, trace, execution and job identifiers for observability',
        ],
      },
    ],
    stackDetail: [
      { group: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Monaco Editor', 'Tailwind CSS'] },
      { group: 'Gateway', items: ['Node.js', 'TypeScript', 'Fastify / Express', 'REST', 'WebSocket / Socket.IO'] },
      { group: 'Execution', items: ['Python', 'FastAPI', 'gRPC', 'C++', 'Docker'] },
      { group: 'Data & infrastructure', items: ['PostgreSQL', 'Redis', 'Nginx', 'Docker Compose', 'Protocol Buffers'] },
    ],
    docs: 'The repository includes product requirements, architecture, data model, API reference, development guide, security model, testing strategy, gap analysis and ADRs.',
    notes: 'Status: Under development. The repository describes the platform as an implementation-ready portfolio project and the core platform is still being built; it is not presented as a production-hosted coding service yet.',
  },

  'distributed-media-analytics-platform': {
    tagline: 'A polyglot media pipeline that separates the control plane from heavy processing workers.',
    overview: [
      'This platform is designed around a simple distributed-systems constraint: large media workloads should not block or destabilize the API layer. React and Node.js handle the control plane while C++/FFmpeg and Python workers perform the expensive processing and analytics.',
      'Media moves through an asynchronous pipeline from upload and registration to object storage, Redis job dispatch, native C++ processing, generated artifacts and Python analytics. PostgreSQL remains the durable source of metadata and job state, while object storage holds large binaries and generated media.',
      'The architecture is built for recoverability and independent scaling. Jobs have attempts, leases, retries, backoff, cancellation and idempotency, while workers are intended to be disposable, observable and resource-limited.',
    ],
    features: [
      {
        title: 'Media processing',
        items: [
          'Media probing, stream discovery, decoding and metadata extraction',
          'Thumbnail, clip and audio generation through native FFmpeg libraries',
          'Audio resampling, downmixing and frame processing',
          'Processing manifests connecting C++ artifacts with downstream analytics',
        ],
      },
      {
        title: 'AI & analytics',
        items: [
          'Speech transcription and transcript segmentation',
          'Scene, object and face analysis',
          'Sentiment and image recognition workflows',
          'AI-generated insights with normalized processing results',
        ],
      },
      {
        title: 'Distributed platform',
        items: [
          'Asynchronous Redis job queue with PostgreSQL as durable state',
          'Object storage for original media, clips, thumbnails and artifacts',
          'Real-time progress through WebSocket events',
          'Worker heartbeats, leases, retries, backoff and failure recovery',
        ],
      },
    ],
    stackDetail: [
      { group: 'Frontend', items: ['React', 'TypeScript'] },
      { group: 'Control plane', items: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSocket'] },
      { group: 'Media & analytics', items: ['C++17', 'FFmpeg', 'Python', 'AI/ML tooling'] },
      { group: 'Infrastructure', items: ['Docker', 'Docker Compose', 'S3-compatible Object Storage'] },
      { group: 'Testing', items: ['GoogleTest', 'pytest', 'Vitest', 'Playwright', 'k6'] },
    ],
    docs: 'The repository includes architecture, data model, API, security, testing, roadmap and ADR documentation covering FFmpeg integration, Redis queues, object storage, PostgreSQL and worker isolation.',
    notes: 'Status: Under development. The architecture and engineering targets are documented, but the core vertical slice, automated validation, security hardening, observability and deployment work are still being completed before production readiness.',
  },

  'trao-ai-interview-prep-kit': {
    tagline: 'An AI interview-preparation workflow built around deterministic output and editable state.',
    overview: [
      'Trao turns a company URL and job description into a structured interview-preparation kit. The workflow combines retrieval, AI generation, schema validation and deterministic planning so the result is more than a single generated answer.',
      'The Builder is designed around preserving user work: candidates can edit, reorder and pin material, then regenerate individual categories without losing those edits. The kit is also checked for requirement coverage, with second-pass generation triggered when gaps remain.',
      'The project includes a mandatory batch evaluation entry point as well as the web application. Its security layer treats crawled content as untrusted data and includes SSRF protections, payload limits and prompt-injection quarantine around scraped pages.',
    ],
    features: [
      {
        title: 'Interview kit generation',
        items: [
          'Company and job-description research feeding a structured preparation kit',
          'Strict Zod validation against the project schema',
          'Requirement coverage analysis with second-pass triggers',
          'Arithmetic study schedules across 1, 5, 14 and 60-day plans',
        ],
      },
      {
        title: 'Builder & practice',
        items: [
          'Inline editing and reordering of generated categories',
          'Pin/unpin controls with edit-preserving category regeneration',
          'Flashcard Practice Mode with confidence tracking and adaptive queue',
          'Readiness diagnostic with one-click cheat-sheet support',
        ],
      },
      {
        title: 'Security & evaluation',
        items: [
          'Production SSRF protection for loopback, private and cloud-metadata ranges',
          'robots.txt-aware crawling with bounded page payloads and context truncation',
          'Crawled HTML isolated as untrusted data to reduce prompt-injection risk',
          'CLI batch evaluator: npm run evaluate -- --input <cases.json> --output <kits.json>',
        ],
      },
    ],
    stackDetail: [
      { group: 'Frontend', items: ['Next.js 16', 'React 18', 'TypeScript', 'Tailwind CSS'] },
      { group: 'Backend', items: ['Node.js', 'Express', 'TypeScript', 'JWT', 'Zod'] },
      { group: 'Data & AI', items: ['MongoDB', 'Mongoose', 'Google Generative AI'] },
      { group: 'Retrieval & tooling', items: ['Cheerio', 'robots-parser', 'Commander', 'tsx', 'Vitest'] },
    ],
    docs: 'The README documents the assessment requirements, architecture and pipeline, state-preserving Builder design, retrieval approach, resilience matrix, security safeguards and submission checklist.',
    notes: 'The repository is an assessment-oriented full-stack application with shared types across client and server and a deterministic batch-evaluation entry point.',
  },

  'cloud-based-algorithmic-trading-engine': {
    tagline: 'A polyglot trading simulation connecting a C++ matching engine to real-time analytics and visualization.',
    overview: [
      'The Trading Engine models an end-to-end exchange-style simulation without connecting to real markets. A C++ engine owns order validation, the order book, price-time-priority matching, partial fills and trade generation, while Python computes portfolio and risk analytics.',
      'A Node.js gateway keeps browser clients away from the internal services. It exposes REST endpoints and a WebSocket stream for market ticks, trades, order-book changes, analytics and engine state, while the React dashboard turns those events into a live operational view.',
      'The architecture is intentionally polyglot and measurable: services communicate through lightweight socket-based protocols, Docker Compose provides reproducible environments, and the project includes unit, integration and end-to-end testing plus observability and performance targets.',
    ],
    features: [
      {
        title: 'Trading engine',
        items: [
          'Market-data simulation and order creation/validation',
          'Price-time-priority order-book matching',
          'Partial fills and trade generation',
          'Low-level network communication and engine lifecycle controls',
        ],
      },
      {
        title: 'Analytics & risk',
        items: [
          'VWAP, SMA and EMA indicators',
          'PnL, exposure and drawdown calculations',
          'Risk metrics and aggregated analytics events',
          'Streaming analytics from the engine into the gateway',
        ],
      },
      {
        title: 'Gateway & dashboard',
        items: [
          'REST API for health, market, order-book, trades, analytics and engine controls',
          'WebSocket events for market ticks, trades, order-book updates and analytics',
          'React dashboard for charts, recent trades, portfolio metrics and controls',
          'Dockerized multi-service development and deployment',
        ],
      },
    ],
    stackDetail: [
      { group: 'Trading engine', items: ['C++17', 'CMake', 'Socket networking'] },
      { group: 'Analytics', items: ['Python', 'VWAP', 'SMA', 'EMA', 'Risk analytics'] },
      { group: 'Gateway', items: ['Node.js', 'TypeScript', 'REST', 'WebSocket'] },
      { group: 'Dashboard & infrastructure', items: ['React', 'PostgreSQL', 'Docker', 'Docker Compose'] },
    ],
    docs: 'The repository includes ADRs covering the polyglot architecture, socket IPC, JSON wire format, WebSocket gateway, Docker Compose and future shared-memory optimization.',
    notes: 'Status: Under development. This is a simulation, not a real trading system: market data is simulated and there is no real exchange connectivity, real order execution or real-money trading. The platform is being developed incrementally across the matching engine, analytics, gateway, dashboard, persistence and observability layers.',
  },

}
