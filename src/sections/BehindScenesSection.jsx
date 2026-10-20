export default function BehindScenesSection({ berryImage, clientImage }) {
  return (
    <section className="section-shell behind-section" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Behind the scenes</p>
        <h2>Every detail is intentionally composed.</h2>
      </div>
      <div className="behind-grid">
        <div className="behind-card tall" data-reveal>
          <img src={berryImage} alt="Behind the scenes portrait photograph" />
        </div>
        <div className="behind-card small" data-reveal style={{ transitionDelay: "120ms" }}>
          <img src={clientImage} alt="Creative production detail" />
        </div>
        <div className="behind-card small" data-reveal style={{ transitionDelay: "240ms" }}>
          <div className="mini-panel">
            <span>Camera</span>
            <strong>Natural light storytelling</strong>
          </div>
        </div>
      </div>
    </section>
  );
}