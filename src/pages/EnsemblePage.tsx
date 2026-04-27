import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import SEO from "../components/SEO";
import { getEnsembleBySlug } from "../data/ensembles";
import "./DetailPage.css";

export default function EnsemblePage() {
  const { slug } = useParams();
  const ensemble = slug ? getEnsembleBySlug(slug) : undefined;

  if (!ensemble) {
    return (
      <div className="page">
        <div className="container">
          <h1 className="page__title">Ensemble not found</h1>
          <p>
            <Link to="/ensembles">← Back to all ensembles</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${ensemble.name} | Harborline`}
        description={ensemble.description}
        canonical={`https://harborlineband.com/ensembles/${ensemble.slug}`}
      />
      <div className="detail">
        <div
          className="detail__hero"
          style={{ backgroundImage: `url(${ensemble.image})` }}
        >
          <div className="detail__hero-overlay" />
          <div className="container detail__hero-content">
            <p className="page__eyebrow">Ensemble</p>
            <h1 className="page__title">{ensemble.name}</h1>
            <p className="detail__tagline">{ensemble.tagline}</p>
          </div>
        </div>

        <div className="container detail__body">
          <div className="detail__copy">
            {ensemble.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="detail__aside">
            <h3 className="detail__aside-heading display">Ideal For</h3>
            <ul className="detail__aside-list">
              {ensemble.idealFor.map((item) => (
                <li key={item}>
                  <ChevronRight size={14} /> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary detail__cta">
              Request a Quote
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
