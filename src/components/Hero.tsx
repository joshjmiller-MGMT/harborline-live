import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import bandHero from "../assets/images/band-hero.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${bandHero})` }}
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__content">
        <motion.p
          className="hero__eyebrow display"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          BALTIMORE'S PREMIER EVENT BAND
        </motion.p>

        <motion.h1
          className="hero__headline display"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          The best of the old.
          <br />
          The best of the new.
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        >
          One nonstop, feel-good set for events, weddings, and celebrations across the DMV.
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link to="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
          <a href="#see-us-live" className="btn btn-outline">
            See Us Live
          </a>
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
