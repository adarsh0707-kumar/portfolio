# Adarsh Kumar — Portfolio

A React (Vite) portfolio site — dark theme, four sections (About, Skills,
Projects, Contact).

## Run it in VS Code

1. Unzip this folder and open it in VS Code.
2. Open a terminal (``Ctrl + ` ``) and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local URL it prints (usually <http://localhost:5173>).

## Files you still need to add to `public/`

The site references three files that aren't in the repo yet. Each one
degrades gracefully, but add them before you publish:

| File | Used by | If missing |
| --- | --- | --- |
| `public/profile.png` | Hero photo | Falls back to an "AK" monogram |
| `public/Adarsh_Kumar_Resume.pdf` | "Download CV ↓" button in the hero | Button 404s |
| `public/certificates/skillcourse-power-bi.png` | Power BI certification card | Card link 404s |

**About the photo.** Use the plain formal headshot (dark shirt, white
background) — it's the only one of the three that's framed tightly enough for
a circular crop. The hero clips it into a circle sitting on a violet gradient
disc, so:

- If the PNG has a **transparent** background, you get the cutout look from
  the reference design — head and shoulders floating on the violet disc.
- If it still has a **white** background, you get a white circle instead.
  It works, but the cutout looks much better. Run it through remove.bg (or
  any background remover) and save the result as `profile.png`.

## Before you publish

- **Project data** lives in `src/data/projects.js`, pulled from the GitHub
  API. Repos with no GitHub description got a summary derived from their
  README, name, and language — worth rewriting in your own words. Forks
  (`metabase`), the profile-config repo, and the portfolio repos are excluded.
- **Dead demos**: `Movie-Recommender-AI-ML` and `my-react-app` both had Vercel
  URLs that now return 404, so their Live Demo links are commented out in the
  data file. Redeploy them and uncomment.
- **More certificates**: add an entry to the `CERTS` array in
  `src/components/Certifications.jsx`. A card becomes clickable only when it
  has a `file` key pointing at something in `public/certificates/` — leave
  `file` off and it renders as a plain, non-clickable card.

## Deploying

Deployed on Vercel at <https://portfolio-orpin-zeta-77.vercel.app>, which
rebuilds automatically on every push to `main`. Netlify works the same way —
both auto-detect the Vite build (`npm run build`, output folder `dist`).

## Contributing

Bug reports, accessibility findings, typos, and dead links are all welcome —
see [CONTRIBUTING.md](CONTRIBUTING.md) for how to run the project and what
kinds of change make sense here. Participation is governed by the
[Code of Conduct](CODE_OF_CONDUCT.md). For anything security related, follow
the [Security Policy](SECURITY.md) rather than opening a public issue.

## License

The **source code** is released under the [MIT License](LICENSE) — take it,
fork it, use it as the basis for your own site.

The **personal content is not covered by that license.** That means the photo
(`public/profile.png`), the résumé, everything in `public/certificates/`, and
the biographical copy throughout the site. Those are mine. If you reuse this
project as a template, replace all of it with your own.
