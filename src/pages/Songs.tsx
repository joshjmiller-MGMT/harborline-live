import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { SONG_CATEGORIES } from "../data/songs";
import "./Songs.css";

export default function Songs() {
  return (
    <>
      <SEO
        title="Song List | Harborline 100+ Song Repertoire"
        description="From Motown to today's chart-toppers — browse Harborline's repertoire by category."
        canonical="https://harborlineband.com/songs"
      />
      <div className="page">
        <div className="container">
          <div className="page__header">
            <p className="page__eyebrow">Our Repertoire</p>
            <h1 className="page__title">100+ Songs</h1>
            <p className="page__lede">
              The best of the old and the best of the new — woven into one nonstop,
              feel-good set. A taste of what we play, organized by category.
            </p>
          </div>

          <div className="songs">
            {SONG_CATEGORIES.map((cat) => (
              <section key={cat.name} className="songs__cat">
                <h2 className="songs__cat-title display">{cat.name}</h2>
                <p className="songs__cat-blurb">{cat.blurb}</p>
                <ul className="songs__list">
                  {cat.artists.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="songs__cta">
            <h3 className="display songs__cta-title">Don't see your song?</h3>
            <p>We honor unlimited song requests and learn custom arrangements for first dances, parent dances, and special moments.</p>
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
