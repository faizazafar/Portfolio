"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, isEmailjsConfigured } from "@/lib/emailjs";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot — real users never see or fill this
  const [status, setStatus] = useState<Status>("idle");

  const reset = () => {
    setStatus("idle");
    setName("");
    setEmail("");
    setMessage("");
    setCompany("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bot filled the hidden field — silently pretend success, never send.
    if (company.trim() !== "") {
      setStatus("success");
      return;
    }

    if (!isEmailjsConfigured) {
      console.error("EmailJS is not configured — set NEXT_PUBLIC_EMAILJS_* env vars.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        { from_name: name, from_email: email, message },
        { publicKey: EMAILJS_CONFIG.publicKey }
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ animation: "popIn 0.4s ease", textAlign: "center", padding: "40px 0" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontSize: 24, margin: "0 0 8px", color: "var(--color-text)" }}>Message sent</h3>
        <p style={{ fontSize: 15, color: "var(--color-neutral-400)", margin: 0 }}>
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button onClick={reset} className="btn btn-secondary" style={{ marginTop: 24 }}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="input"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="input"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Tell me about the role or project..."
          style={{ resize: "vertical" }}
        />
      </div>

      {/* Honeypot field — hidden from sighted users, bots tend to fill every input */}
      <div style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {status === "error" && (
        <p style={{ fontSize: 14, color: "#e08585", margin: 0 }}>
          Something went wrong sending your message. Please email me directly instead.
        </p>
      )}

      <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
