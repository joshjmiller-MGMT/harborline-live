import { Mail, Phone } from "lucide-react";
import SEO from "../components/SEO";
import LeadForm from "../components/LeadForm";

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

          <LeadForm />

          <div className="contact__direct">
            <p>Prefer to reach out directly?</p>
            <div className="contact__direct-row">
              <a href="mailto:harborlineband@gmail.com" className="btn btn-outline">
                <Mail size={16} /> harborlineband@gmail.com
              </a>
              <a href="tel:+14434052378" className="btn btn-outline">
                <Phone size={16} /> (443) 405-2378
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
