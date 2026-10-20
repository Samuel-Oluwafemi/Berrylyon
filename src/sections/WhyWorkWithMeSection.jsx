const reasons = [
  {
    title: "Premium storytelling",
    text: "Every image is crafted to feel elevated, cinematic, and emotionally resonant.",
  },
  {
    title: "Authentic direction",
    text: "Natural posing, confident styling, and a relaxed process that keeps your energy genuine.",
  },
  {
    title: "Brand-first thinking",
    text: "Creative choices are aligned with your business goals, audience, and long-term identity.",
  },
];

export default function WhyWorkWithMeSection() {
  return (
    <section className="section-shell difference-section" data-reveal>
      <div className="section-heading narrow">
        <p className="eyebrow">Why work with me</p>
        <h2>Thoughtful direction, refined execution, and images that last.</h2>
      </div>
      <div className="value-grid">
        {reasons.map((reason, index) => (
          <article
            key={reason.title}
            className="value-card"
            data-reveal
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}