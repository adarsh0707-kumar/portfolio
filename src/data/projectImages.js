import { PROJECTS } from './projects'

// Every image under src/assets/projects/<folder>/ is discovered by Vite at
// build time. Add a file, and it is in the gallery on the next build — there is
// no list to maintain and no folder scan at runtime.
//
// This only works because the images live under src/. Files in public/ are
// copied verbatim and never enter the module graph, so nothing can enumerate
// them. Living here also means Vite fingerprints each file for long-term
// caching and inlines the very small ones.
//
// Ordering is a natural sort on filename, so 2.png comes before 10.png.

const MODULES = import.meta.glob(
  '../assets/projects/**/*.{png,jpg,jpeg,webp,avif,gif}',
  { eager: true, query: '?url', import: 'default' }
)

const normalise = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

// "02-kanban-board.png" -> "Kanban board"
// "02.png"              -> null  (nothing to say)
// "MedBillPro07.png"    -> null  (just the folder name and an index)
function captionFrom(filename, folder) {
  const base = filename.replace(/\.[^.]+$/, '')

  const stripped = base
    .replace(/^\d+\s*[-_.]*\s*/, '')
    .replace(/\s*[-_.]*\s*\d+$/, '')
    .trim()

  if (!stripped || normalise(stripped) === normalise(folder)) return null

  const words = stripped
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .trim()

  if (!words || /^\d+$/.test(words)) return null
  return words.charAt(0).toUpperCase() + words.slice(1)
}

const BY_FOLDER = {}

for (const [path, url] of Object.entries(MODULES)) {
  const match = path.match(/\/projects\/([^/]+)\/([^/]+)$/)
  if (!match) continue
  const [, folder, filename] = match
  ;(BY_FOLDER[folder] ||= []).push({
    url,
    filename,
    caption: captionFrom(filename, folder),
  })
}

for (const list of Object.values(BY_FOLDER)) {
  list.sort((a, b) =>
    a.filename.localeCompare(b.filename, undefined, { numeric: true, sensitivity: 'base' })
  )
}

const NORMALISED = new Map(
  Object.keys(BY_FOLDER).map((folder) => [normalise(folder), folder])
)

// A project reads from the folder named by its `imageFolder`, else its slug.
// Matching also ignores case and punctuation, so a folder called "MedBillPro"
// is found by the slug "medbill-pro" with no configuration.
function resolveFolder(project) {
  if (project.imageFolder && BY_FOLDER[project.imageFolder]) return project.imageFolder
  if (BY_FOLDER[project.slug]) return project.slug

  return (
    NORMALISED.get(normalise(project.imageFolder || project.slug)) ||
    NORMALISED.get(normalise(project.name)) ||
    null
  )
}

export function getProjectImages(slug) {
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return []

  const folder = resolveFolder(project)
  return folder ? BY_FOLDER[folder] : []
}

// Folders no project claims — surfaced so a mistyped folder name does not
// silently hide a gallery. Logged once in development.
export function orphanedImageFolders() {
  const claimed = new Set(PROJECTS.map(resolveFolder).filter(Boolean))
  return Object.keys(BY_FOLDER).filter((f) => !claimed.has(f))
}

if (import.meta.env?.DEV) {
  const orphans = orphanedImageFolders()
  if (orphans.length) {
    console.warn(
      `[images] no project matches these folders in src/assets/projects: ${orphans.join(', ')}. ` +
        'Rename the folder to the project slug, or set `imageFolder` on that project in src/data/projects.js.'
    )
  }
}
