export default function ProcessSection({ process }) {
  return (
    <section className="section-shell process-section" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Creative process</p>
        <h2>A calm, collaborative process from concept to final delivery.</h2>
      </div>
      <div className="timeline">
        {process.map((step, index) => (
          <div
            key={step}
            className="timeline-item"
            data-reveal
            style={{ transitionDelay: `${index * 110}ms` }}
          >
            <span>{`0${index + 1}`}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}