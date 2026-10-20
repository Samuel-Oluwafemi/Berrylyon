import { useEffect, useState } from "react";
import AboutSection from "./sections/AboutSection.jsx";
import BehindScenesSection from "./sections/BehindScenesSection.jsx";
import CampaignSection from "./sections/CampaignSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import FAQSection from "./sections/FAQSection.jsx";
import FeaturedWorkSection from "./sections/FeaturedWorkSection.jsx";
import FooterSection from "./sections/FooterSection.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import Navbar from "./sections/Navbar.jsx";
import ProcessSection from "./sections/ProcessSection.jsx";
import ServicesSection from "./sections/ServicesSection.jsx";
import TestimonialsSection from "./sections/TestimonialsSection.jsx";
import TrustBar from "./sections/TrustBar.jsx";
import WhyWorkWithMeSection from "./sections/WhyWorkWithMeSection.jsx";
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
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <HeroSection berryImage={berryImage} stats={stats} />
        <TrustBar brandLogos={brandLogos} />
        <AboutSection berryAbout={berryAbout} stats={stats} />
        <FeaturedWorkSection gallery={gallery} />
        <ServicesSection services={services} />
        <WhyWorkWithMeSection />
        <CampaignSection christyImage={christyImage} />
        <ProcessSection process={process} />
        <TestimonialsSection testimonials={testimonials} />
        <BehindScenesSection berryImage={berryImage} clientImage={clientImage} />
        <FAQSection faqs={faqs} />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
