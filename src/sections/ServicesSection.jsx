export default function ServicesSection({ services }) {
  return (
    <section className="section-shell services-section" id="services" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Creative services designed around your vision.</h2>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="service-card"
            data-reveal
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span className="service-index">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}