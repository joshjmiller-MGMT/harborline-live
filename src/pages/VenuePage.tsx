import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { getVenueBySlug } from "../data/venues";
import "./DetailPage.css";

export default function VenuePage() {
  const { slug } = useParams();
  const venue = slug ? getVenueBySlug(slug) : undefined;

  if (!venue) {
    return (
      <div className="page">
        <div className="container">
          <h1 className="page__title">Venue not found</h1>
          <p>
            <Link to="/venues">← Back to all venues</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`Live Music at ${venue.name} | Harborline`}
        description={venue.description}
        canonical={`https://harborlineband.com/venues/${venue.slug}`}
      />
      <div className="detail">
        <div
          className="detail__hero"
          style={{ backgroundImage: `url(${venue.image})` }}
        >
          <div className="detail__hero-overlay" />
          <div className="container detail__hero-content">
            <p className="page__eyebrow">{venue.city}</p>
            <h1 className="page__title">{venue.name}</h1>
            <p className="detail__tagline">{venue.tagline}</p>
          </div>
        </div>

        <div className="container detail__body">
          <div className="detail__copy">
            {venue.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {venue.gallery && venue.gallery.length > 1 && (
              <div className="venue-gallery">
                {venue.gallery.map((src, i) => (
                  <img key={i} src={src} alt={`${venue.name} ${i + 1}`} loading="lazy" />
                ))}
              </div>
            )}
          </div>
          <aside className="detail__aside">
            <h3 className="detail__aside-heading display">Booking at {venue.name}</h3>
            <p style={{ color: "hsl(var(--cream) / 0.8)", marginTop: 0 }}>
              Performing here? Tell us your date — we already know the load-in.
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
