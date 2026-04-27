import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import { FAQS } from "../data/faqs";
import "./FAQ.css";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="FAQ | Harborline Booking Questions Answered"
        description="Frequently asked questions about booking Harborline — pricing, configurations, sound, travel, and more."
        canonical="https://harborlineband.com/faq"
      />
      <div className="page">
        <div className="container">
          <div className="page__header">
            <p className="page__eyebrow">Frequently Asked</p>
            <h1 className="page__title">Questions</h1>
            <p className="page__lede">
              Everything we get asked when planners and clients reach out — answered up
              front so you can move fast.
            </p>
          </div>

          <div className="faq">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.question} className={`faq__item ${isOpen ? "faq__item--open" : ""}`}>
                  <button
                    className="faq__q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.question}</span>
                    <ChevronDown size={18} className="faq__chev" />
                  </button>
                  {isOpen && <div className="faq__a">{f.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
