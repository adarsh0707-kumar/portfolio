import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Navigating to a new route should start at the top; navigating to "/#projects"
// should land on that section. The browser cannot resolve the hash itself here,
// because the target section does not exist until the home route has rendered.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      // Wait a frame so the destination route has mounted.
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' })
        else window.scrollTo(0, 0)
      })
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
