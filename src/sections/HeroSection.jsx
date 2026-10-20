export default function HeroSection({ berryImage, stats }) {
  return (
    <section className="section-shell hero-section" id="home" data-reveal>
      <div className="hero-copy">
        <p className="eyebrow">Lifestyle Photographer • Creative Storyteller</p>
        <h1>Creating Visual Stories That People Remember.</h1>
        <p className="hero-lead">
          Helping brands and individuals tell timeless stories through intentional
          photography, elevated direction, and a refined editorial eye.
        </p>
        <div className="cta-row">
          <a href="#contact" className="primary-btn">Book a Shoot</a>
          <a href="#work" className="secondary-btn">View Portfolio</a>
        </div>
        <div className="mini-stats">
          {stats.slice(0, 3).map((stat) => (
            <div key={stat.label} className="mini-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrap">
          <img src={berryImage} alt="BerryLyon portrait in warm natural light" />
        </div>
        <div className="floating-note note-one">
          <span>Editorial</span>
          <strong>Story-led photography</strong>
        </div>
        <div className="floating-note note-two">
          <span>Available</span>
          <strong>Q4 bookings</strong>
        </div>
      </div>
    </section>
  );
}