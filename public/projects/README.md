# Project screenshots

Drop screenshots here and they appear on that project's detail page
automatically — no code change needed.

    public/projects/<slug>/01.png
    public/projects/<slug>/02.png
    public/projects/<slug>/03.png
    public/projects/<slug>/04.png

The slug is the last part of the project's URL. For example, the page at
`/projects/meta-micro-coaching-saas` reads from
`public/projects/meta-micro-coaching-saas/`.

Up to four slots are checked per project. Any that are missing are skipped
silently, so you can add one now and the rest later. PNG only, and the
Screenshots section stays hidden until at least one image loads.

Slugs are defined in `src/data/projects.js`.
