import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { getLocationBySlug } from "../data/locations";
import "./DetailPage.css";

export default function LocationPage() {
  const { slug } = useParams();
  const location = slug ? getLocationBySlug(slug) : undefined;

  if (!location) {
    return (
      <div className="page">
        <div className="container">
          <h1 className="page__title">Location not found</h1>
          <p>
            <Link to="/locations">← Back to all locations</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`Live Music in ${location.name} | Harborline`}
        description={location.description}
        canonical={`https://harborlineband.com/locations/${location.slug}`}
      />
      <div className="detail">
        <div
          className="detail__hero"
          style={{ backgroundImage: `url(${location.image})` }}
        >
          <div className="detail__hero-overlay" />
          <div className="container detail__hero-content">
            <p className="page__eyebrow">{location.region}</p>
            <h1 className="page__title">Live in {location.name}</h1>
            <p className="detail__tagline">{location.tagline}</p>
          </div>
        </div>

        <div className="container detail__body">
          <div className="detail__copy">
            {location.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="detail__aside">
            <h3 className="detail__aside-heading display">Booking in {location.name}</h3>
            <p style={{ color: "hsl(var(--cream) / 0.8)", marginTop: 0 }}>
              Have a venue in mind? Tell us your date and we'll quote it cleanly.
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
