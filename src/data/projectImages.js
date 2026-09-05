import MANIFEST from './projectImages.generated.json'
import { PROJECTS } from './projects'

// The manifest is regenerated from public/projects/ before every dev run and
// build by scripts/generate-image-manifest.mjs — never edit it by hand.
//
// A project reads from the folder named by its `imageFolder`, falling back to
// its slug. Matching is also tried case- and punctuation-insensitively, so a
// folder called "MedBillPro" is found by the slug "medbill-pro" without any
// configuration.

const normalise = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

const NORMALISED = new Map(
  Object.keys(MANIFEST).map((folder) => [normalise(folder), folder])
)

function resolveFolder(project) {
  if (project.imageFolder && MANIFEST[project.imageFolder]) return project.imageFolder
  if (MANIFEST[project.slug]) return project.slug

  const byName = NORMALISED.get(normalise(project.imageFolder || project.slug))
  if (byName) return byName

  return NORMALISED.get(normalise(project.name)) || null
}

export function getProjectImages(slug) {
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return []

  const folder = resolveFolder(project)
  return folder ? MANIFEST[folder] : []
}

// Folders present in public/projects that no project claims — surfaced so a
// typo in a folder name does not silently hide a gallery.
export function orphanedImageFolders() {
  const claimed = new Set(
    PROJECTS.map((p) => resolveFolder(p)).filter(Boolean)
  )
  return Object.keys(MANIFEST).filter((f) => !claimed.has(f))
}
