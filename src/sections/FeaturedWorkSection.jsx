export default function FeaturedWorkSection({ gallery }) {
  return (
    <section className="section-shell showcase-section" id="work" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Featured work</p>
        <h2>Visuals with depth, emotion, and intention.</h2>
      </div>
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <article
            key={item.title}
            className={`gallery-card card-${index + 1}`}
            data-reveal
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <img src={item.image} alt={item.title} />
            <div className="gallery-overlay">
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}