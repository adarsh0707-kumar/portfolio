import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Adarsh Kumar. All rights reserved.</span>
        <span className="footer-note">
          Made with <span className="footer-heart" aria-label="love">♥</span> by Adarsh
        </span>
      </div>
    </footer>
  )
}
