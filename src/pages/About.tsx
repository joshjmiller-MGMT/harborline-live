import SEO from "../components/SEO";
import { MEMBERS } from "../data/members";
import groupLaughing from "../assets/images/group-laughing.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <SEO
        title="About | Harborline — Baltimore's Premier Event Band"
        description="Harborline is the DMV's newest premiere event band — connecting some of the best musicians and bandleaders in the region."
        canonical="https://harborlineband.com/about"
      />
      <div className="page">
        <div className="container">
          <div className="page__header">
            <p className="page__eyebrow">Our Story</p>
            <h1 className="page__title">About Harborline</h1>
            <p className="page__lede">
              The DMV's newest premiere band — building the vibe, reading the room, and
              keeping dance floors moving all night.
            </p>
          </div>

          <div className="about__intro">
            <img src={groupLaughing} alt="Harborline band members" />
            <div>
              <p>
                Harborline is the DMV's newest premiere event band — connecting some of the
                best musicians and bandleaders in the region to create something special.
              </p>
              <p>
                Our seasoned players bring decades of combined experience across every
                style, from classic Motown and soul to today's hottest hits. We deliver
                the best of the old and the best of the new in one nonstop, feel-good set
                that reads the room and keeps people dancing.
              </p>
              <p>
                From timeless classics to today's chart-toppers, Harborline builds the
                vibe, reads the room, and keeps dance floors moving all night long.
              </p>
            </div>
          </div>

          <section className="about__members">
            <h2 className="display about__members-heading">Member Portraits</h2>
            <p className="about__members-blurb">
              Working pros who come from Baltimore Sound Entertainment's deep regional bench.
            </p>
            <div className="about__members-grid">
              {MEMBERS.map((m, i) => (
                <figure key={i} className="member-tile">
                  <img src={m.image} alt={m.role} loading="lazy" />
                  <figcaption className="display">{m.role}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
