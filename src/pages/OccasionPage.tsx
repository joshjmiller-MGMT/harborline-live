import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { getOccasionBySlug } from "../data/occasions";
import "./DetailPage.css";

export default function OccasionPage() {
  const { slug } = useParams();
  const occasion = slug ? getOccasionBySlug(slug) : undefined;

  if (!occasion) {
    return (
      <div className="page">
        <div className="container">
          <h1 className="page__title">Occasion not found</h1>
          <p>
            <Link to="/occasions">← Back to all occasions</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${occasion.name} | Harborline`}
        description={occasion.description}
        canonical={`https://harborlineband.com/occasions/${occasion.slug}`}
      />
      <div className="detail">
        <div
          className="detail__hero"
          style={{ backgroundImage: `url(${occasion.image})` }}
        >
          <div className="detail__hero-overlay" />
          <div className="container detail__hero-content">
            <p className="page__eyebrow">Occasion</p>
            <h1 className="page__title">{occasion.name}</h1>
            <p className="detail__tagline">{occasion.tagline}</p>
          </div>
        </div>

        <div className="container detail__body">
          <div className="detail__copy">
            {occasion.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="detail__aside">
            <h3 className="detail__aside-heading display">Get Started</h3>
            <p style={{ color: "hsl(var(--cream) / 0.8)", marginTop: 0 }}>
              Send us your date and venue — we'll come back with a clean proposal.
            </p>
            <Link to="/contact" className="btn btn-primary detail__cta">
              Request a Quote
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
