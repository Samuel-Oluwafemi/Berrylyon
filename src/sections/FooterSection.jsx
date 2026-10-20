const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/blstudio23?cplk=MTJpcTF%YXdkY3F6cQ" },
  { label: "Behance", href: "https://www.behance.net/sowandemicheal" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sowandemicheal?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { label: "WhatsApp", href: "https://wa.me/2347017339672" },
];

const footerLinks = [
  ["About", "#about"],
  ["Selected work", "#work"],
  ["Services", "#services"],
  ["FAQs", "#faq"],
];

export default function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <a className="footer-brand" href="#home" aria-label="BerryLyon home">
            <span className="brand-mark">B</span>
            <span className="brand-name">BerryLyon</span>
          </a>
          <p>Photography and creative direction for stories worth remembering.</p>
          <a className="footer-email" href="mailto:hello@berrylyon.com">
            hello@berrylyon.com
          </a>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          {footerLinks.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <div className="footer-column footer-socials">
          <h2>Connect</h2>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} BerryLyon. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}