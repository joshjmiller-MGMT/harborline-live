import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { LOCATIONS } from "../data/locations";

export default function Locations() {
  return (
    <>
      <SEO
        title="Where We Perform | Harborline Live Music Across the DMV"
        description="Harborline performs at premier venues across Baltimore, Washington DC, Annapolis, and the Mid-Atlantic region."
        canonical="https://harborlineband.com/locations"
      />
      <div className="page">
        <div className="container">
          <div className="page__header">
            <p className="page__eyebrow">Where We Perform</p>
            <h1 className="page__title">Live Across the DMV</h1>
            <p className="page__lede">
              Premier venues across Baltimore, Washington DC, Annapolis, and the
              Mid-Atlantic — Harborline travels with full production setup.
            </p>
          </div>

          <div className="card-grid card-grid--3">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} to={`/locations/${l.slug}`} className="entity-card">
                <div className="entity-card__media">
                  <img src={l.image} alt={l.name} loading="lazy" />
                </div>
                <div className="entity-card__body">
                  <h3 className="entity-card__title">{l.name}</h3>
                  <p className="entity-card__tagline">{l.tagline}</p>
                  <p className="entity-card__desc">{l.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="locations__venues-cta">
            <p className="page__eyebrow">Featured Rooms</p>
            <h2 className="locations__venues-title display">Venues We Know &amp; Love</h2>
            <p className="locations__venues-blurb">
              From the Peabody Library to the Four Seasons, see the specific rooms
              we've built relationships with — and where we already know the load-in.
            </p>
            <Link to="/venues" className="btn btn-primary">
              Explore Featured Venues
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
