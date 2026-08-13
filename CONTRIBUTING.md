# Contributing

Thanks for taking a look. This is my personal portfolio site, so it is a
slightly unusual thing to contribute to — the content is about me, and I am not
looking for help writing that part. What is genuinely welcome:

- **Bugs** — something broken, misaligned, or unreadable, especially on a
  browser or screen size I do not have.
- **Accessibility problems** — poor contrast, missing labels, keyboard traps,
  anything that breaks a screen reader.
- **Typos and grammar** in the site copy.
- **Dead links** — a project link, demo, or certificate that 404s.
- **Code quality** — a cleaner way to do something I did the long way round.

What I will politely decline: redesigns, new sections, changes to my
biographical content, and swapping the stack for a different one.

If you are unsure whether something is worth the effort, open an issue first
and ask.

## Running it locally

You need Node 18 or newer.

```bash
git clone https://github.com/adarsh0707-kumar/portfolio.git
cd portfolio
npm install
npm run dev
```

That serves the site at http://localhost:5173 with hot reload.

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## How the code is laid out

```
public/            static assets served as-is
  certificates/    certificate images
  profile.png      hero photo
src/
  App.jsx          composes the page sections
  main.jsx         entry point
  components/      one .jsx + one .css per section
  data/projects.js the project list
  styles/tokens.css  design tokens — colors, fonts, spacing, radii
```

A few conventions worth knowing before you change things:

- **Every section is a component pair** — `Hero.jsx` alongside `Hero.css`. Keep
  a component's styles in its own file rather than a shared stylesheet.
- **Colors and fonts come from CSS custom properties** defined in
  `src/styles/tokens.css`. Use `var(--accent)` rather than hardcoding
  `#7C5CFC`, so the theme stays changeable from one place.
- **Projects are data, not markup.** To change a project, edit the array in
  `src/data/projects.js` — do not touch `Projects.jsx` unless you are changing
  how cards render.
- **No CSS framework.** The styling is hand-written. Please do not introduce
  Tailwind, Bootstrap, or a component library.
- **No new dependencies** without discussing it in an issue first. The site
  builds from React and Vite alone, and I would like to keep it that way.

## Submitting a change

1. Fork the repository and branch off `main`.
2. Make the change. Keep it focused — one fix per pull request.
3. Run `npm run build` and confirm it completes without errors.
4. Check the change at a narrow width too; the site is responsive and it is
   easy to break a layout on mobile while fixing it on desktop.
5. Open a pull request and fill in the template.

Commit messages: a short summary line in the imperative mood, and a body
explaining *why* if it is not obvious.

```
Fix certificate lightbox trapping focus on close

Escape restored scroll but left focus on the removed dialog, so screen
readers landed on nothing. Focus now returns to the triggering card.
```

## A note on the assets

The code here is MIT licensed and you are welcome to it. The personal content
is not: my photo, my résumé, the certificate images, and the biographical copy
are mine and are not covered by that license. If you want to reuse this site as
a template, take the code and replace all of it with your own.

## Code of Conduct

Participation is governed by the [Code of Conduct](CODE_OF_CONDUCT.md).
Security issues have their own process — see the
[Security Policy](SECURITY.md).
