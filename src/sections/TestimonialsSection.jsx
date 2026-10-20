export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="section-shell testimonial-section" id="testimonials" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Testimonials</p>
        <h2>Real people. Real stories. Real results.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.name}
            className="testimonial-card"
            data-reveal
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="quote-mark">“</div>
            <p>{testimonial.quote}</p>
            <div className="testimonial-user">
              <div className="user-badge">{testimonial.name.charAt(0)}</div>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}