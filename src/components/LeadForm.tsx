import { useState, FormEvent } from "react";
import "./LeadForm.css";

const EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Gala / Fundraiser",
  "Private Party",
  "Anniversary",
  "Other",
];

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = { "form-name": "lead" };
    formData.forEach((v, k) => {
      data[k] = typeof v === "string" ? v : "";
    });

    if (data["bot-field"]) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed");
    }
  };

  if (status === "success") {
    return (
      <div className="lead-form lead-form--success">
        <h3 className="display">Thanks — we got it.</h3>
        <p>We'll come back to you within 1–2 business days with availability and a clean proposal.</p>
        <p className="lead-form__small">
          Need us sooner? <a href="mailto:harborlineband@gmail.com">harborlineband@gmail.com</a>
        </p>
      </div>
    );
  }

  return (
    <form
      className="lead-form"
      name="lead"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="lead" />
      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="lead-form__row">
        <label className="lead-form__field">
          <span>Name *</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="lead-form__field">
          <span>Email *</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>

      <div className="lead-form__row">
        <label className="lead-form__field">
          <span>Phone</span>
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
        <label className="lead-form__field">
          <span>Event Date</span>
          <input type="date" name="event_date" />
        </label>
      </div>

      <div className="lead-form__row">
        <label className="lead-form__field">
          <span>Event Type</span>
          <select name="event_type" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="lead-form__field">
          <span>Guest Count</span>
          <input type="number" name="guest_count" min={0} />
        </label>
      </div>

      <label className="lead-form__field">
        <span>Venue</span>
        <input type="text" name="venue" placeholder="Where's the event?" />
      </label>

      <label className="lead-form__field">
        <span>Tell us about your event</span>
        <textarea name="message" rows={5} placeholder="Vibe, must-plays, do-not-plays — whatever helps us picture it." />
      </label>

      <button type="submit" className="btn btn-primary lead-form__submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request a Quote"}
      </button>

      {status === "error" && (
        <p className="lead-form__error">
          Something went wrong{errorMsg ? ` (${errorMsg})` : ""}. Please email{" "}
          <a href="mailto:harborlineband@gmail.com">harborlineband@gmail.com</a> directly.
        </p>
      )}
    </form>
  );
}
