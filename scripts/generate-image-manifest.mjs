#!/usr/bin/env node
// Scans public/projects/<folder>/ and writes a manifest of what is actually
// there, so the gallery can show every image in a folder without anyone
// maintaining a list.
//
// Files in public/ are copied verbatim and never enter Vite's module graph,
// so nothing can enumerate them at build time from inside the app. This script
// runs before `dev` and `build` (see the npm scripts) and closes that gap.
//
// Add or remove an image, restart the dev server, and the gallery follows.

import { readdirSync, statSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE = join(ROOT, 'public', 'projects')
const OUTPUT = join(ROOT, 'src', 'data', 'projectImages.generated.json')

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif'])

// "02-kanban-board.png" -> "Kanban board"
// "02.png"              -> null  (nothing to say)
// "MedBillPro07.png"    -> null  (just the folder name and a number)
//
// A caption is only produced when the filename actually carries meaning, so
// sequentially named screenshots stay clean rather than reading "Med Bill Pro07".
function captionFrom(filename, folder) {
  const base = filename.replace(/\.[^.]+$/, '')

  // Drop a leading or trailing run of digits, plus any separators around them.
  const stripped = base
    .replace(/^\d+\s*[-_.]*\s*/, '')
    .replace(/\s*[-_.]*\s*\d+$/, '')
    .trim()

  const normalise = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

  // Nothing left, or what remains is just the folder name repeated.
  if (!stripped || normalise(stripped) === normalise(folder)) return null

  const words = stripped
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .trim()

  if (!words || /^\d+$/.test(words)) return null
  return words.charAt(0).toUpperCase() + words.slice(1)
}

// Natural sort, so 2.png comes before 10.png.
const naturalSort = (a, b) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })

function build() {
  const manifest = {}

  if (!existsSync(SOURCE)) {
    console.warn(`[images] ${SOURCE} does not exist — writing an empty manifest.`)
  } else {
    for (const folder of readdirSync(SOURCE)) {
      const folderPath = join(SOURCE, folder)
      if (!statSync(folderPath).isDirectory()) continue

      const files = readdirSync(folderPath)
        .filter((f) => IMAGE_EXTENSIONS.has(extname(f).toLowerCase()))
        .sort(naturalSort)

      if (files.length === 0) continue

      manifest[folder] = files.map((filename) => ({
        // Served from public/, so the URL is the path minus "public".
        url: `/projects/${folder}/${filename}`,
        filename,
        caption: captionFrom(filename, folder),
      }))
    }
  }

  mkdirSync(dirname(OUTPUT), { recursive: true })
  writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2) + '\n')

  const folders = Object.keys(manifest)
  const total = folders.reduce((n, f) => n + manifest[f].length, 0)
  console.log(
    `[images] ${total} image${total === 1 ? '' : 's'} across ${folders.length} folder${folders.length === 1 ? '' : 's'}` +
      (folders.length ? `: ${folders.map((f) => `${f} (${manifest[f].length})`).join(', ')}` : '')
  )
}

build()
