export default function FAQSection({ faqs }) {
  return (
    <section className="section-shell faq-section" id="faq" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2>Everything you need to know before booking.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            open={index === 0}
            data-reveal
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}