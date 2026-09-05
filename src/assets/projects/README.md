# Project screenshots

Every project has a folder here, named exactly after its slug. Drop images
into the matching folder and they appear in that project's gallery on the
next build — nothing to register, no list to update.

    src/assets/projects/<slug>/01.png
    src/assets/projects/<slug>/02-kanban-board.png

Vite reads this directory at build time with `import.meta.glob`, so it picks
up whatever it finds. Empty folders contribute nothing and are simply
skipped, which is why the Screenshots section stays hidden until a project
actually has images.

## Ordering

Natural sort on filename, so `2.png` comes before `10.png`. A numeric prefix
is the simplest way to control the sequence.

## Captions

The caption is whatever the filename says beyond its number:

| Filename | Caption |
| --- | --- |
| `02-kanban-board.png` | "Kanban board" |
| `02.png` | none |
| `medbill-pro-07.png` | none — just the folder name and an index |

Captions are worth adding. They show under the image and become the alt text
a screen reader announces. `07-gst-report.png` tells a recruiter what they
are looking at; `07.png` does not.

## Formats

`.png` `.jpg` `.jpeg` `.webp` `.avif` `.gif`

PNG for UI screenshots, WebP or JPG for photos. Vite fingerprints each file
for long-term caching and inlines anything under 4 KB, but it does not
recompress — shrink a 3 MB screenshot before committing it.

## How many?

As many as you like. One image renders as a single frame. Two or more get
arrows, a counter, a thumbnail strip, keyboard arrows, swipe, and an
automatic slideshow with a visible pause control.

## The folders

`.gitkeep` marks a folder as empty; delete it once you add real images.


### Full-Stack

| Folder | Project |
| --- | --- |
| `meta-micro-coaching-saas` | Meta Micro — Coaching SaaS |
| `football-club-platform` | Football Club Platform |
| `medbill-pro` | MedBill Pro |
| `visitor-management-module` | Visitor Management Module |
| `welth-finance-tracker` | Welth — Finance Tracker |
| `team-task-manager` | Team Task Manager |
| `orthonow-landing-page` | OrthoNow Landing Page |
| `keycloak-auth-integration` | Keycloak Auth Integration |
| `expense-manager` | Expense Manager |
| `expense-tracker` | Expense Tracker |
| `mern-lms` | MERN LMS |
| `online-learning-platform` | Online Learning Platform |
| `mern-blog-app` | MERN Blog App |
| `youtube-clone` | YouTube Clone |
| `invoice-app` | Invoice App |
| `goddevai` | GodDev.AI |
| `firebase-app` | Firebase App |
| `crud-app` | CRUD App |
| `finance-web-app` | Finance Web App |

### Systems & C++

| Folder | Project |
| --- | --- |
| `database-engine` | Database Engine |
| `multi-threaded-web-server` | Multi-threaded Web Server |
| `scientific-calculator-engine` | Scientific Calculator Engine |
| `digital-clock-system` | Digital Clock System |
| `guess-the-number` | Guess The Number |
| `real-time-chat-app` | Real-time Chat App |
| `redis-clone` | Redis Clone |
| `hotel-management-system` | Hotel Management System |
| `transit-discount-system` | Transit Discount System |

### Data & AI

| Folder | Project |
| --- | --- |
| `movie-recommender` | Movie Recommender |
| `tableau-dashboards` | Tableau Dashboards |
| `data-science-notebooks` | Data Science Notebooks |
| `ai-and-ml-training` | AI & ML Training |
| `python-course` | Python Course |
| `qr-code-generator` | QR Code Generator |
| `django-projects` | Django Projects |

### Frontend

| Folder | Project |
| --- | --- |
| `calculator` | Calculator |
| `clock` | Clock |
| `coffee-website` | Coffee Website |
| `colliery-town-afc-demo` | Colliery Town AFC — Demo |
| `vite-project` | Vite Project |
| `react-router-example` | React Router Example |
| `goals-page` | Goals Page |
