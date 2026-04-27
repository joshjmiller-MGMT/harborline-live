import SEO from "../components/SEO";
import FadeInCard from "../components/FadeInCard";
import { VENUES } from "../data/venues";

export default function Venues() {
  return (
    <>
      <SEO
        title="Venues We Know & Love | Harborline"
        description="Featured venues across Baltimore and the DMV where Harborline regularly performs — Peabody Library, Cylburn, the Belvedere, Four Seasons, and more."
        canonical="https://harborlineband.com/venues"
      />
      <div className="page">
        <div className="container">
          <div className="page__header">
            <p className="page__eyebrow">Where We Perform</p>
            <h1 className="page__title">Venues We Know &amp; Love</h1>
            <p className="page__lede">
              Featured rooms across Baltimore and the DMV where Harborline regularly
              performs. We know the load-ins, the acoustics, and the staff — your
              planner will appreciate it.
            </p>
          </div>

          <div className="card-grid card-grid--3">
            {VENUES.map((v, i) => (
              <FadeInCard key={v.slug} to={`/venues/${v.slug}`} index={i} className="entity-card">
                <div className="entity-card__media">
                  <img src={v.image} alt={v.name} loading="lazy" />
                </div>
                <div className="entity-card__body">
                  <h3 className="entity-card__title">{v.name}</h3>
                  <p className="entity-card__tagline">{v.city}</p>
                  <p className="entity-card__desc">{v.tagline}</p>
                </div>
              </FadeInCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
