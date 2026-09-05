import { useEffect, useRef, useState } from 'react'
import './ProjectGallery.css'

const SWIPE_THRESHOLD = 45

export default function ProjectGallery({ images, projectName, onOpen }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)
  const thumbStripRef = useRef(null)

  const count = images.length
  const go = (i) => setIndex(((i % count) + count) % count)
  const next = () => go(index + 1)
  const prev = () => go(index - 1)

  // Keep the active thumbnail scrolled into view as the slide changes.
  useEffect(() => {
    const strip = thumbStripRef.current
    const active = strip?.children[index]
    if (active) {
      active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [index])

  if (count === 0) return null

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    }
  }

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
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
      >
        <div
          className="gallery-track"
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
              onClick={prev}
              aria-label="Previous screenshot"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="gallery-arrow is-next"
              onClick={next}
              aria-label="Next screenshot"
            >
              <span aria-hidden="true">›</span>
            </button>
          </>
        )}

        <span className="gallery-counter">
          {index + 1} / {count}
        </span>
      </div>

      <div className="gallery-caption-row">
        <p className="gallery-caption" aria-live="polite">
          {current.caption || ' '}
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
              onClick={() => go(i)}
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
