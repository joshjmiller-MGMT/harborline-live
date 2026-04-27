import SEO from "../components/SEO";
import FadeInCard from "../components/FadeInCard";
import { ENSEMBLES } from "../data/ensembles";

export default function Ensembles() {
  return (
    <>
      <SEO
        title="Ensembles | Harborline Band Configurations"
        description="From a solo pianist to a 12-piece dance band — pick the right Harborline configuration for your event."
        canonical="https://harborlineband.com/ensembles"
      />
      <div className="page">
        <div className="container">
          <div className="page__header">
            <p className="page__eyebrow">Our Ensembles</p>
            <h1 className="page__title">Band Configurations</h1>
            <p className="page__lede">
              From a solo pianist to a 12-piece dance band — pick the configuration that
              fits your room, your moment, and your budget.
            </p>
          </div>

          <div className="card-grid card-grid--3">
            {ENSEMBLES.map((e, i) => (
              <FadeInCard key={e.slug} to={`/ensembles/${e.slug}`} index={i} className="entity-card">
                <div className="entity-card__media">
                  <img src={e.image} alt={e.name} loading="lazy" />
                </div>
                <div className="entity-card__body">
                  <h3 className="entity-card__title">{e.name}</h3>
                  <p className="entity-card__tagline">{e.tagline}</p>
                  <p className="entity-card__desc">{e.description}</p>
                </div>
              </FadeInCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
