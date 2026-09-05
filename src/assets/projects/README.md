# Project screenshots

Drop images into a folder here and they appear in that project's gallery.
There is no list to maintain — `scripts/generate-image-manifest.mjs` scans
this directory before every `npm run dev` and `npm run build` and picks up
whatever it finds.

    public/projects/<Folder>/01.png
    public/projects/<Folder>/02-kanban-board.png
    public/projects/<Folder>/03.png

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
  imageFolder: 'TaskFlow',   // public/projects/TaskFlow/
  ...
}
```

Run `npm run images` and read the output — it prints every folder it found
and how many images are in each. A folder no project claims will never show
up on the site, so check the name if a gallery is empty.

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

PNG for UI screenshots, WebP or JPG for photos. These are served as-is from
`public/`, so compress large files before committing them — a 3 MB
screenshot is a 3 MB download for every visitor.

## How many?

As many as you like. One image renders as a single frame; two or more get
arrows, a counter, a thumbnail strip, keyboard arrows and swipe.
