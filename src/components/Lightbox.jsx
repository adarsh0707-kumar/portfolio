import { useEffect } from 'react'
import './Lightbox.css'

export default function Lightbox({ src, label, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-bar">
          <span className="lightbox-title">{label}</span>
          <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <img src={src} alt={label} />
      </div>
    </div>
  )
}
