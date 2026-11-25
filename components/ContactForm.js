"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ status: "idle", msg: "" });
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setState({ status: "loading", msg: "" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      form.reset();
      setState({ status: "ok", msg: "Thank you. We have received your enquiry and will contact you shortly." });
    } catch (err) {
      setState({ status: "err", msg: err.message });
    }
  }
  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="row2">
        <label>Full name<input name="name" required autoComplete="name" /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
      </div>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Service needed
        <select name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          {["Forest Diversion", "Land Acquisition", "Railway / Highway Engineering", "Mining Engineering", "Urban Town Planning", "Preparation of Scheme", "Wildlife Management Plan", "Surveying (Drone, DGPS, ETS)", "Geo-Technical Investigations", "GIS & Environment Studies", "Other"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label>Project details<textarea name="message" rows={5} required /></label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button className="btn btn-primary" disabled={state.status === "loading"}>{state.status === "loading" ? "Sending..." : "Send enquiry"}</button>
      {state.msg && <p role="status" className={`fmsg ${state.status}`}>{state.msg}</p>}
    </form>
  );
}
