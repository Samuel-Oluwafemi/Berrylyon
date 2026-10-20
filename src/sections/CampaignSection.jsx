export default function CampaignSection({ christyImage }) {
  return (
    <section className="section-shell campaign-section" data-reveal>
      <div className="campaign-copy">
        <p className="eyebrow">Featured campaign</p>
        <h2>Kavitah Studio Men's Month</h2>
        <p>
          A bold campaign story using a luxury, editorial lens to celebrate
          identity, confidence, and modern masculinity through refined portraiture
          and cinematic styling.
        </p>
        <a href="#contact" className="primary-btn">Start a Project</a>
      </div>
      <div className="campaign-visual">
        <img src={christyImage} alt="Campaign portrait featured in a brand story" />
      </div>
    </section>
  );
}