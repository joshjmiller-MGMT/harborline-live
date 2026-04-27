import SEO from "../components/SEO";
import FadeInCard from "../components/FadeInCard";
import { OCCASIONS } from "../data/occasions";

export default function Occasions() {
  return (
    <>
      <SEO
        title="Occasions | Harborline Live Music for Every Event"
        description="Weddings, corporate events, galas, and private parties — Harborline brings the right configuration to every occasion."
        canonical="https://harborlineband.com/occasions"
      />
      <div className="page">
        <div className="container">
          <div className="page__header">
            <p className="page__eyebrow">Every Occasion</p>
            <h1 className="page__title">Deserves Live Music</h1>
            <p className="page__lede">
              Weddings, corporate events, galas, and private celebrations — same nonstop,
              feel-good set, calibrated to your night.
            </p>
          </div>

          <div className="card-grid">
            {OCCASIONS.map((o, i) => (
              <FadeInCard key={o.slug} to={`/occasions/${o.slug}`} index={i} className="entity-card">
                <div className="entity-card__media">
                  <img src={o.image} alt={o.name} loading="lazy" />
                </div>
                <div className="entity-card__body">
                  <h3 className="entity-card__title">{o.name}</h3>
                  <p className="entity-card__tagline">{o.tagline}</p>
                  <p className="entity-card__desc">{o.description}</p>
                </div>
              </FadeInCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
