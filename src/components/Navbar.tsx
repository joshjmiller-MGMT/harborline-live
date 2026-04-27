import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Lock, Menu, X } from "lucide-react";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/services", label: "Ensembles" },
  { to: "/services", label: "Occasions" },
  { to: "/locations", label: "Where We Perform" },
  { to: "/songs", label: "Songs" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className={`nav ${scrolled || mobileOpen ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand display" aria-label="Harborline home">
          HARBORLINE
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.label} to={l.to} className="nav__link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <Link to="/contact" className="btn btn-primary nav__cta">
            Request a Quote
          </Link>
          <Link to="/admin" className="nav__lock" aria-label="Admin login">
            <Lock size={16} />
          </Link>
          <button
            className="nav__burger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="nav__mobile" role="menu">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.label} to={l.to} className="nav__mobile-link">
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary nav__mobile-cta">
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
