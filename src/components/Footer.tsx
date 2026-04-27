import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import "./Footer.css";

const QUICK_LINKS = [
  { to: "/ensembles", label: "Ensembles" },
  { to: "/occasions", label: "Occasions" },
  { to: "/locations", label: "Where We Perform" },
  { to: "/venues", label: "Venues We Know & Love" },
  { to: "/songs", label: "Songs" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col footer__col--brand">
          <div className="footer__brand display">HARBORLINE</div>
          <p className="footer__tagline">
            Baltimore's premier event band — one nonstop, feel-good set for weddings,
            corporate events, and celebrations across the DMV.
          </p>
          <div className="footer__socials">
            <a
              href="https://www.instagram.com/harborlineband"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/harborlineband"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading display">Quick Links</h4>
          <ul className="footer__list">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading display">Get in Touch</h4>
          <ul className="footer__list">
            <li>
              <a href="mailto:harborlineband@gmail.com" className="footer__contact">
                <Mail size={16} />
                harborlineband@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+14434052378" className="footer__contact">
                <Phone size={16} />
                (443) 405-2378
              </a>
            </li>
            <li className="footer__byline">
              Booking by Baltimore Sound Entertainment
              <br />
              <a href="https://baltimoresound.net" target="_blank" rel="noreferrer">
                baltimoresound.net
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Harborline. All rights reserved.</span>
          <span>Baltimore · Washington DC · Annapolis · the DMV</span>
        </div>
      </div>
    </footer>
  );
}
