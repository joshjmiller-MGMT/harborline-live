import { motion } from "framer-motion";
import { Music2, Volume2, Mic2 } from "lucide-react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import groupPortrait from "../assets/images/group-portrait.jpg";
import "./Home.css";

const FEATURES = [
  {
    icon: Music2,
    title: "100+ Song Repertoire",
    body: "From timeless classics to today's chart-toppers. We read the room and keep the dance floor moving.",
  },
  {
    icon: Volume2,
    title: "Professional Sound",
    body: "Concert-grade PA, lighting, and tech delivered, set up, and run by working pros.",
  },
  {
    icon: Mic2,
    title: "Dynamic Vocalists",
    body: "Lead singers and harmony stacks that translate every era — Motown, soul, pop, and modern hits.",
  },
];

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />

      <section id="about" className="home-section home-features">
        <div className="container">
          <div className="home-features__grid">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="feature-card__icon">
                  <Icon size={22} />
                </div>
                <h3 className="feature-card__title display">{title}</h3>
                <p className="feature-card__body">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-about">
        <div className="container home-about__grid">
          <motion.div
            className="home-about__media"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img src={groupPortrait} alt="The Harborline band on stage" />
          </motion.div>
          <motion.div
            className="home-about__copy"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="home-about__eyebrow display">Who We Are</p>
            <h2 className="home-about__title display">About Harborline</h2>
            <p>
              Harborline is the DMV's newest premiere event band — connecting some of the
              best musicians and bandleaders in the region to create something special.
            </p>
            <p>
              Our seasoned players bring decades of combined experience across every style,
              from classic Motown and soul to today's hottest hits. We deliver the best of
              the old and the best of the new in one nonstop, feel-good set that reads the
              room and keeps people dancing.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
