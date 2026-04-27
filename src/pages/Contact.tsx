import { Mail, Phone } from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact | Request a Harborline Quote"
        description="Get a quote for live music at your wedding, gala, corporate event, or private celebration."
        canonical="https://harborlineband.com/contact"
      />
      <div className="page">
        <div className="container">
          <div className="page__header">
            <p className="page__eyebrow">Get In Touch</p>
            <h1 className="page__title">Request a Quote</h1>
            <p className="page__lede">
              Tell us your date and venue. We'll come back with a clean proposal — no
              surprise fees, no pressure.
            </p>
          </div>

          <div
            style={{
              maxWidth: 560,
              margin: "0 auto",
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
              padding: "2.5rem",
              textAlign: "center",
            }}
          >
            <p style={{ marginTop: 0, color: "hsl(var(--cream) / 0.85)" }}>
              The full quote form is coming in Phase 4. For now, reach out directly:
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginTop: "1.5rem",
                alignItems: "center",
              }}
            >
              <a
                href="mailto:harborlineband@gmail.com"
                className="btn btn-primary"
                style={{ minWidth: 280, justifyContent: "center" }}
              >
                <Mail size={16} /> harborlineband@gmail.com
              </a>
              <a
                href="tel:+14434052378"
                className="btn btn-outline"
                style={{ minWidth: 280, justifyContent: "center" }}
              >
                <Phone size={16} /> (443) 405-2378
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
