import { useEffect, useState } from "react";
import berryImage from "./assets/berry.jpg";
import berryAbout from "./assets/berry-1.jpg";
import christyImage from "./assets/christy.jpg";
import clientImage from "./assets/client.webp";

const stats = [
  { value: "8+", label: "Years behind the camera" },
  { value: "120+", label: "Stories captured" },
  { value: "40+", label: "Brands collaborated with" },
  { value: "100%", label: "Intentional creative direction" },
];

const services = [
  {
    title: "Lifestyle Photography",
    text: "Authentic portraits and everyday moments shaped into visual stories that feel natural, elevated, and deeply personal.",
  },
  {
    title: "Brand Campaigns",
    text: "Editorial imagery for businesses that want polished storytelling, cultural relevance, and content that converts attention into trust.",
  },
  {
    title: "Creative Direction",
    text: "From planning to execution, I help shape the look, mood, and narrative of your content so it feels cohesive and premium.",
  },
  {
    title: "Content Production",
    text: "High-impact visuals for social media, campaigns, digital launches, and personal brands designed to perform beautifully across platforms.",
  },
];

const process = [
  "Discovery and creative brief",
  "Moodboards and visual planning",
  "Production day with artful direction",
  "Edit, curation, and delivery",
];

const gallery = [
  { image: christyImage, title: "Portrait Story", tag: "Editorial" },
  { image: clientImage, title: "Brand Narrative", tag: "Campaign" },
  { image: berryImage, title: "Lagos Light", tag: "Lifestyle" },
  { image: berryAbout, title: "Quiet Luxury", tag: "Portrait" },
];

const testimonials = [
  {
    quote:
      "BerryLyon captured every detail with intention. The images felt honest, elevated, and completely aligned with our brand voice.",
    name: "Aisha Bello",
    role: "Founder, Kavitah Studio",
  },
  {
    quote:
      "The process was effortless, creative, and incredibly professional. We saw a huge shift in how people responded to our campaign.",
    name: "Michael Okafor",
    role: "Creative Lead, Studio North",
  },
  {
    quote:
      "His eye for light, rhythm, and storytelling transformed a simple session into a visual experience our audience still talks about.",
    name: "Christy Ade",
    role: "Model & Creative Director",
  },
];

const brandLogos = [
  "NEST",
  "AURA",
  "FORTE",
  "KAVITAH",
  "VANTAGE",
  "NOIR",
  "LUMA",
  "MUSE",
];

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "I work across lifestyle, portrait, brand, and campaign photography—particularly for individuals, founders, creatives, and businesses who want imagery with real emotion and a premium finish.",
  },
  {
    question: "Do you offer creative direction alongside photography?",
    answer:
      "Yes. I can help shape the visual story, plan the shoot, and translate your ideas into a refined visual direction that feels cohesive and intentional.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "Most projects are booked 2–6 weeks in advance, depending on the season and the scale of the shoot. Early booking is always recommended for brands and campaigns.",
  },
  {
    question: "What can I expect from the process?",
    answer:
      "From planning through delivery, the process is collaborative, thoughtful, and designed to make your vision feel effortless while still capturing authenticity and polish.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className={`nav-pill ${menuOpen ? "nav-open" : ""}`}>
          <div className="brand-block">
            <span className="brand-mark">B</span>
            <div>
              <div className="brand-name">BerryLyon</div>
              <div className="brand-subtitle">Visual storyteller</div>
            </div>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a
              href="#contact"
              className="mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Book a Shoot
            </a>
          </div>

          <a href="#contact" className="nav-cta">
            Book a Shoot
          </a>
        </nav>
      </header>

      <main>
        <section className="section-shell hero-section" id="home" data-reveal>
          <div className="hero-copy">
            <p className="eyebrow">
              Lifestyle Photographer • Creative Storyteller
            </p>
            <h1>Creating Visual Stories That People Remember.</h1>
            <p className="hero-lead">
              Helping brands and individuals tell timeless stories through
              intentional photography, elevated direction, and a refined
              editorial eye.
            </p>

            <div className="cta-row">
              <a href="#contact" className="primary-btn">
                Book a Shoot
              </a>
              <a href="#work" className="secondary-btn">
                View Portfolio
              </a>
            </div>

            <div className="mini-stats">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="mini-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img
                src={berryImage}
                alt="BerryLyon portrait in warm natural light"
              />
            </div>
            <div className="floating-note note-one">
              <span>Editorial</span>
              <strong>Story-led photography</strong>
            </div>
            <div className="floating-note note-two">
              <span>Available</span>
              <strong>Q4 bookings</strong>
            </div>
          </div>
        </section>

        <div className="trust-bar" aria-label="Featured brands and partners" data-reveal>
          <span>Featured in</span>
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...brandLogos, ...brandLogos].map((logo, index) => (
                <span key={`${logo}-${index}`} className="trust-logo">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="section-shell about-section" id="about" data-reveal>
          <div className="about-image-panel">
            <img src={berryAbout} alt="BerryLyon portrait profile" />
          </div>

          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h2>
              Luxury imagery shaped around real life, not just aesthetics.
            </h2>
            <p>
              BerryLyon is a multidisciplinary creative and photographer
              dedicated to transforming raw moments into unforgettable stories.
              With a sharp eye for light, mood, and composition, his work blends
              editorial elegance with natural authenticity.
            </p>
            <p>
              From personal portraits to brand campaigns, each frame is built to
              feel intentional, warm, and memorable—crafted for people and
              businesses who want more than just images; they want meaning,
              atmosphere, and presence.
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
                <span className="service-index">
                  0{services.indexOf(service) + 1}
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell difference-section" data-reveal>
          <div className="section-heading narrow">
            <p className="eyebrow">Why work with me</p>
            <h2>
              Thoughtful direction, refined execution, and images that last.
            </h2>
          </div>

          <div className="value-grid">
            <div className="value-card" data-reveal>
              <h3>Premium storytelling</h3>
              <p>
                Every image is crafted to feel elevated, cinematic, and
                emotionally resonant.
              </p>
            </div>
            <div className="value-card" data-reveal style={{ transitionDelay: "120ms" }}>
              <h3>Authentic direction</h3>
              <p>
                Natural posing, confident styling, and a relaxed process that
                keeps your energy genuine.
              </p>
            </div>
            <div className="value-card" data-reveal style={{ transitionDelay: "240ms" }}>
              <h3>Brand-first thinking</h3>
              <p>
                Creative choices are aligned with your business goals, audience,
                and long-term identity.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell campaign-section" data-reveal>
          <div className="campaign-copy">
            <p className="eyebrow">Featured campaign</p>
            <h2>Kavitah Studio Men's Month</h2>
            <p>
              A bold campaign story using a luxury, editorial lens to celebrate
              identity, confidence, and modern masculinity through refined
              portraiture and cinematic styling.
            </p>
            <a href="#contact" className="primary-btn">
              Start a Project
            </a>
          </div>

          <div className="campaign-visual">
            <img
              src={christyImage}
              alt="Campaign portrait featured in a brand story"
            />
          </div>
        </section>

        <section className="section-shell process-section" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Creative process</p>
            <h2>
              A calm, collaborative process from concept to final delivery.
            </h2>
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

        <section
          className="section-shell testimonial-section"
          id="testimonials"
          data-reveal
        >
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

        <section className="section-shell behind-section" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Behind the scenes</p>
            <h2>Every detail is intentionally composed.</h2>
          </div>

          <div className="behind-grid">
            <div className="behind-card tall" data-reveal>
              <img
                src={berryImage}
                alt="Behind the scenes portrait photograph"
              />
            </div>
            <div className="behind-card small" data-reveal style={{ transitionDelay: "120ms" }}>
              <img src={clientImage} alt="Camera and creative setup details" />
            </div>
            <div className="behind-card small" data-reveal style={{ transitionDelay: "240ms" }}>
              <div className="mini-panel">
                <span>Camera</span>
                <strong>Natural light storytelling</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell faq-section" id="faq" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Everything you need to know before booking.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={faq.question === "What types of projects do you take on?"}
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-shell cta-section" id="contact" data-reveal>
          <div className="cta-panel">
            <p className="eyebrow">Let’s create</p>
            <h2>Let’s create something worth remembering.</h2>
            <p>
              Whether it is a personal portrait or a brand story, your next
              chapter deserves imagery that feels elevated, honest, and
              unmistakably yours.
            </p>
            <a href="mailto:hello@berrylyon.com" className="primary-btn">
              hello@berrylyon.com
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <div className="brand-name">BerryLyon</div>
          <span>Creative photography & direction</span>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#work">Portfolio</a>
          <a href="#services">Services</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
