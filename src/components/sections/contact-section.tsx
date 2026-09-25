"use client";

import { FormEvent, useState } from "react";

type Status = { kind: "success" | "error"; message: string } | null;

export function ContactSection() {
  const [status, setStatus] = useState<Status>(null);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSending(true);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      setStatus({ kind: "success", message: result.message });
      form.reset();
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Pesan belum berhasil dikirim. Silakan coba lagi." });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="content-section contact-section" id="contact">
      <p className="contact-description">Have a project in mind or just want to say hi? My inbox is always open.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row"><label>Name<input name="name" autoComplete="name" placeholder="Your name" required minLength={2} maxLength={100} /></label><label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label></div>
        <label>Subject <span className="optional">(optional)</span><input name="subject" placeholder="What’s this about?" maxLength={150} /></label>
        <label>Message<textarea name="message" placeholder="Tell me a little about it…" required minLength={10} maxLength={5000} rows={5} /></label>
        <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <div className="form-submit"><button className="button button-dark" type="submit" disabled={isSending}>{isSending ? "Sending…" : "Send message"}<span aria-hidden="true">↗</span></button>{status && <p className={`form-status ${status.kind}`} role="status">{status.message}</p>}</div>
      </form>
    </section>
  );
}
