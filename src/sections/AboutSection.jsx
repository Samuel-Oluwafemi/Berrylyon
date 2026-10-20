export default function AboutSection({ berryAbout, stats }) {
  return (
    <section className="section-shell about-section" id="about" data-reveal>
      <div className="about-image-panel">
        <img src={berryAbout} alt="BerryLyon portrait profile" />
      </div>
      <div className="about-copy">
        <p className="eyebrow">About</p>
        <h2>Luxury imagery shaped around real life, not just aesthetics.</h2>
        <p>
          BerryLyon is a multidisciplinary creative and photographer dedicated to
          transforming raw moments into unforgettable stories. With a sharp eye
          for light, mood, and composition, his work blends editorial elegance
          with natural authenticity.
        </p>
        <p>
          From personal portraits to brand campaigns, each frame is built to feel
          intentional, warm, and memorable—crafted for people and businesses who
          want more than just images; they want meaning, atmosphere, and presence.
        </p>
        <div className="stat-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}