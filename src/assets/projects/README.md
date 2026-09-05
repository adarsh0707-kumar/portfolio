# Project screenshots

Drop images into a folder here and they appear in that project's gallery.
There is no list to maintain — Vite reads this directory at build time via
`import.meta.glob`, so it picks up whatever it finds.

    src/assets/projects/<Folder>/01.png
    src/assets/projects/<Folder>/02-kanban-board.png
    src/assets/projects/<Folder>/03.png

## Which folder belongs to which project?

By default the folder name is matched against the project's slug, ignoring
case and punctuation — so `MedBillPro` finds the project at
`/projects/medbill-pro` on its own.

When the folder name is nothing like the slug, set `imageFolder` on that
project in `src/data/projects.js`:

```js
{
  name: 'Team Task Manager',
  slug: 'team-task-manager',
  imageFolder: 'TaskFlow',   // src/assets/projects/TaskFlow/
  ...
}
```

A folder no project claims never shows up on the site. In development the
console warns about any such folder by name, so check there first if a
gallery is empty.

## Ordering

Natural sort on filename, so `2.png` comes before `10.png`. A numeric
prefix is the simplest way to control the sequence.

## Captions

The caption comes from whatever the filename says beyond its number:

| Filename | Caption |
| --- | --- |
| `02-kanban-board.png` | "Kanban board" |
| `02.png` | none |
| `MedBillPro07.png` | none — just the folder name and a number |

Captions are worth adding. They show under the image, and they become the
alt text a screen reader announces. `07-gst-report.png` tells a recruiter
what they are looking at; `MedBillPro07.png` does not.

## Formats

`.png` `.jpg` `.jpeg` `.webp` `.avif` `.gif`

PNG for UI screenshots, WebP or JPG for photos. Vite fingerprints every
file for long-term caching and inlines anything under 4 KB, but it does not
recompress — so shrink a 3 MB screenshot before committing it.

## How many?

As many as you like. One image renders as a single frame. Two or more get arrows, a counter, a
thumbnail strip, keyboard arrows, swipe, and an automatic slideshow that
pauses on hover and stops the moment anyone navigates by hand.
