import { useEffect, useRef, useState } from 'react'
import './ProjectGallery.css'

const SWIPE_THRESHOLD = 45
const AUTOPLAY_MS = 3800

// Honours the OS "reduce motion" setting: no auto-advance, no slide animation.
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  )

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!mq) return
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export default function ProjectGallery({ images, projectName, onOpen }) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [paused, setPaused] = useState(false)

  const touchStartX = useRef(null)
  const thumbStripRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  const count = images.length
  const go = (i) => setIndex(((i % count) + count) % count)
  const next = () => go(index + 1)
  const prev = () => go(index - 1)

  // Any manual navigation stops the carousel — it should not yank the slide
  // out from under someone who has just taken control of it.
  const takeOver = (fn) => () => {
    setPlaying(false)
    fn()
  }

  const autoplayActive = playing && !paused && !reducedMotion && count > 1

  useEffect(() => {
    if (!autoplayActive) return
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => clearTimeout(id)
  }, [autoplayActive, index, count])

  // Keep the active thumbnail in view as the slide changes.
  useEffect(() => {
    const active = thumbStripRef.current?.children[index]
    active?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [index, reducedMotion])

  if (count === 0) return null

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      takeOver(next)()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      takeOver(prev)()
    }
  }

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      setPlaying(false)
      delta < 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  const current = images[index]

  return (
    <div className="gallery">
      <div
        className="gallery-stage"
        role="group"
        aria-roledescription="carousel"
        aria-label={`${projectName} screenshots`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className={`gallery-track ${reducedMotion ? 'is-static' : ''}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <button
              type="button"
              className="gallery-slide"
              key={img.url}
              onClick={() => onOpen?.(i)}
              tabIndex={i === index ? 0 : -1}
              aria-hidden={i !== index}
              aria-label={`Open ${img.caption || `screenshot ${i + 1}`} full size`}
            >
              <img
                src={img.url}
                alt={img.caption || `${projectName} screenshot ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable="false"
              />
            </button>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="gallery-arrow is-prev"
              onClick={takeOver(prev)}
              aria-label="Previous screenshot"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="gallery-arrow is-next"
              onClick={takeOver(next)}
              aria-label="Next screenshot"
            >
              <span aria-hidden="true">›</span>
            </button>

            <div className="gallery-controls">
              {!reducedMotion && (
                <button
                  type="button"
                  className="gallery-play"
                  onClick={() => setPlaying((p) => !p)}
                  aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
                >
                  <span aria-hidden="true">{playing ? '❙❙' : '▶'}</span>
                </button>
              )}
              <span className="gallery-counter">
                {index + 1} / {count}
              </span>
            </div>

            {/* Progress bar restarts on each slide while autoplay is running */}
            {autoplayActive && (
              <div className="gallery-progress" key={index} aria-hidden="true">
                <span style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
              </div>
            )}
          </>
        )}
      </div>

      <div className="gallery-caption-row">
        <p className="gallery-caption" aria-live="polite">
          {current.caption || ' '}
        </p>
        <span className="gallery-hint">Click to enlarge</span>
      </div>

      {count > 1 && (
        <div className="gallery-thumbs" ref={thumbStripRef}>
          {images.map((img, i) => (
            <button
              type="button"
              key={img.url}
              className={`gallery-thumb ${i === index ? 'is-active' : ''}`}
              onClick={takeOver(() => go(i))}
              aria-label={`Go to ${img.caption || `screenshot ${i + 1}`}`}
              aria-current={i === index}
            >
              <img src={img.url} alt="" loading="lazy" draggable="false" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
