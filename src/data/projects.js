// Sourced from github.com/adarsh0707-kumar. Forks, the profile-config repo,
// and the portfolio repos themselves are excluded. Where GitHub had no
// description, the summary is derived from the repo's README, name, and
// primary language — worth replacing with your own wording.

export const CATEGORIES = ['All', 'Full-Stack', 'Systems & C++', 'Data & AI', 'Frontend']

export const TINTS = {
  'Full-Stack': '#7C5CFC',
  'Systems & C++': '#61DAFB',
  'Data & AI': '#F2994A',
  Frontend: '#22C55E',
}

export const PROJECTS = [
  // ---------- Featured ----------
  {
    name: 'CodeForge Cloud',
    slug: 'codeforge-cloud',
    monogram: 'CF',
    category: 'Full-Stack',
    year: '2026',
    desc: 'Architecture-first cloud development platform exploring a browser IDE, asynchronous execution, collaboration, and isolated code execution. The repository currently contains architecture, contracts, documentation, and implementation skeletons.',
    stack: ['React', 'Node.js', 'TypeScript', 'Python', 'C++', 'PostgreSQL', 'Redis', 'Docker'],
    link: 'https://github.com/adarsh0707-kumar/CodeForge-Cloud',
  },
  {
    name: 'Distributed Media Analytics Platform',
    slug: 'distributed-media-analytics-platform',
    monogram: 'MA',
    category: 'Data & AI',
    year: '2026',
    featured: true,
    desc: 'Architecture-first distributed media-processing platform for video/audio workloads, with a documented control-plane/data-plane design around FFmpeg workers, Python analytics, PostgreSQL, Redis, and asynchronous jobs. The first complete vertical slice is still under development.',
    stack: ['C++17', 'FFmpeg', 'Python', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    link: 'https://github.com/adarsh0707-kumar/High-Performance-Distributed-Media-Analytics-Platform',
  },
  {
    name: 'Cloud-Based Algorithmic Trading Engine',
    slug: 'cloud-based-algorithmic-trading-engine',
    monogram: 'TE',
    category: 'Systems & C++',
    year: '2026',
    featured: true,
    desc: 'Polyglot trading simulation platform combining a C++ matching engine and order book with Python quantitative analytics, a Node.js gateway and a real-time React dashboard. Includes risk and PnL analytics, socket-based service communication, WebSockets, PostgreSQL integration tests, Docker and observability.',
    stack: ['C++', 'Python', 'Node.js', 'React', 'PostgreSQL', 'WebSocket', 'Docker'],
    link: 'https://github.com/adarsh0707-kumar/Trading-Engine',
  },
  {
    name: 'MedBill Pro',
    slug: 'medbill-pro',
    monogram: 'MB',
    category: 'Full-Stack',
    year: '2026',
    desc: 'Full-stack medical billing system covering billing operations, inventory, customers and reporting for medical facilities. React + TypeScript frontend and a Node/Express/Prisma backend, containerised behind nginx.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'Docker'],
    link: 'https://github.com/adarsh0707-kumar/medical-billing',
  },
  {
    name: 'Database Engine',
    slug: 'database-engine',
    monogram: 'DB',
    category: 'Systems & C++',
    year: '2026',
    desc: 'MiniDB — a SQL-like database engine written from scratch in C++, demonstrating core database internals. Supports CREATE TABLE, INSERT, SELECT with WHERE filtering, UPDATE and DELETE, with in-memory execution over file-based persistence.',
    stack: ['C++', 'Query Parser', 'Filesystem'],
    link: 'https://github.com/adarsh0707-kumar/Database-engine',
  },
  {
    name: 'Welth — Finance Tracker',
    slug: 'welth-finance-tracker',
    monogram: 'W',
    category: 'Full-Stack',
    year: '2025',
    desc: 'AI-powered personal finance application built on Next.js — expense and income tracking with intuitive categorisation, transaction history with advanced filtering, and spending analysis. Secured with Clerk authentication and Arcjet rate limiting.',
    stack: ['Next.js', 'React', 'PostgreSQL', 'Clerk', 'Arcjet'],
    link: 'https://github.com/adarsh0707-kumar/welth',
    demo: 'https://welth-eosin.vercel.app',
  },
  {
    name: 'Team Task Manager',
    slug: 'team-task-manager',
    monogram: 'TM',
    category: 'Full-Stack',
    year: '2026',
    desc: 'TaskFlow — a full-stack team task manager where users create projects, assign tasks, track progress, and manage members with JWT authentication and role-aware team operations. Its organization model is lightweight and not hardened multi-tenant isolation.',
    stack: ['React', 'Node.js', 'Express', 'RBAC', 'Multi-tenant'],
    link: 'https://github.com/adarsh0707-kumar/taskmanager',
    demo: 'https://taskmanager-frontend-dusky.vercel.app',
  },
  {
    name: 'Scientific Calculator Engine',
    slug: 'scientific-calculator-engine',
    monogram: 'CA',
    category: 'Systems & C++',
    year: '2026',
    desc: 'A calculator engine written from scratch in C/C++ — custom tokenizer, parser and postfix evaluation, with complex numbers, matrices, statistics, unit and base conversion, variables, history and plotting. Version 1.1.2, with 493 passing unit tests.',
    stack: ['C', 'C++', 'CMake', 'Makefile', 'Unit Testing'],
    link: 'https://github.com/adarsh0707-kumar/Projects-in-C-C---basic-to-Advanced/tree/main/Calculator',
  },
  {
    name: 'Digital Clock System',
    slug: 'digital-clock-system',
    monogram: 'DC',
    category: 'Systems & C++',
    year: '2026',
    desc: 'A C++17 clock that runs in a terminal or a window — recurring alarms, stopwatch, countdown timer, world clock, themeable colours, a plugin system and external configuration. Version 2.1.0, with 136 passing tests. The console build has zero third-party dependencies; the Qt GUI is a separate target.',
    stack: ['C++17', 'Qt6', 'CMake', 'Makefile'],
    link: 'https://github.com/adarsh0707-kumar/Projects-in-C-C---basic-to-Advanced/tree/main/DigitalClock',
  },
  {
    name: 'Guess The Number',
    slug: 'guess-the-number',
    monogram: 'GN',
    category: 'Systems & C++',
    year: '2026',
    desc: 'A terminal game in C11 — picks a number between 1 and 100 and narrows you in with too-high/too-low feedback until you find it, then reports your attempt count. Standard library only, version 1.0.0, verified by 50 checks.',
    stack: ['C11', 'CMake', 'Makefile'],
    link: 'https://github.com/adarsh0707-kumar/Projects-in-C-C---basic-to-Advanced/tree/main/GuessTheNumber',
  },
  {
    name: 'Real-time Chat App',
    slug: 'real-time-chat-app',
    monogram: 'CA',
    category: 'Systems & C++',
    year: '2026',
    desc: 'Real-time multi-client chat application in C++ over POSIX sockets — message broadcast, private messaging via /msg, timestamps, join and leave notifications, unique-username validation and robust handling of network errors.',
    stack: ['C++', 'POSIX Sockets', 'Multithreading'],
    link: 'https://github.com/adarsh0707-kumar/Chat-app',
  },
  {
    name: 'Movie Recommender',
    slug: 'movie-recommender',
    monogram: 'MR',
    category: 'Data & AI',
    year: '2025',
    desc: 'Content-based movie recommendation system using TMDB metadata, text feature engineering, cosine similarity, and a deployed Streamlit interface.',
    stack: ['Python', 'Jupyter', 'ML'],
    link: 'https://github.com/adarsh0707-kumar/Movie-Recommender-AI-ML',
    // demo https://movie-recommender-ai-ml.vercel.app currently returns 404
  },

  // ---------- Systems & C++ ----------
  {
    name: 'Redis Clone',
    slug: 'redis-clone',
    monogram: 'RC',
    category: 'Systems & C++',
    year: '2026',
    desc: 'A Redis-style TCP server prototype built from scratch in C++17. The current milestone covers socket lifecycle, concurrent client handling, raw byte reads, and a fixed OK response; Redis commands and key-value storage are not implemented yet.',
    stack: ['C++'],
    link: 'https://github.com/adarsh0707-kumar/redis-clone',
  },

  // ---------- Full-Stack ----------

  // ---------- Data & AI ----------

  // ---------- Frontend ----------
]
