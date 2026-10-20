export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <nav className={`nav-pill ${menuOpen ? "nav-open" : ""}`}>
        <a className="brand-block" href="#home" aria-label="BerryLyon home">
          <span className="brand-mark">B</span>
          <span className="brand-copy">
            <span className="brand-name">BerryLyon</span>
            <span className="brand-subtitle">Visual storyteller</span>
          </span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
            Book a Shoot
          </a>
        </div>
        <a href="#contact" className="nav-cta">Book a Shoot</a>
      </nav>
    </header>
  );
}