import './ProjectPlaceholder.css'

// Shown in the Screenshots section for a project whose image folder is empty.
// Mirrors the tinted monogram thumb used on the project cards (Projects.jsx)
// so an unphotographed project still looks intentional rather than broken.
export default function ProjectPlaceholder({ monogram, category }) {
    return (
        <div className="pd-placeholder" role="img" aria-label="Screenshots coming soon">
            <span className="pd-placeholder-monogram" aria-hidden="true">{monogram}</span>
            <span className="pd-placeholder-cat" aria-hidden="true">{category}</span>
            <p className="pd-placeholder-note">Screenshots coming soon</p>
        </div>
    )
}