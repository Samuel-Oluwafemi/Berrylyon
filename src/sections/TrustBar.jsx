export default function TrustBar({ brandLogos }) {
  return (
    <div className="trust-bar" aria-label="Featured brands and partners" data-reveal>
      <span>Featured in</span>
      <div className="marquee-wrap">
        <div className="marquee-track" aria-hidden="true">
          {[...brandLogos, ...brandLogos].map((logo, index) => (
            <span key={`${logo}-${index}`} className="trust-logo">{logo}</span>
          ))}
        </div>
      </div>
    </div>
  );
}