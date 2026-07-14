import { SITE } from "@/lib/constants";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)", minHeight: "100vh" }}>
      <div style={{ padding: "80px var(--page-px) 120px", display: "grid", gridTemplateColumns: "var(--contact-cols)", gap: "var(--contact-gap)", alignItems: "start" }}>
        <div>
          <div className="tag tag-accent" style={{ marginBottom: 16, display: "inline-block" }}>
            Contact
          </div>
          <h1 style={{ fontSize: "clamp(36px,4.5vw,54px)", margin: "0 0 24px", lineHeight: 1.1 }}>
            Let&apos;s build something reliable.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--color-neutral-300)", maxWidth: "38ch", margin: "0 0 40px" }}>
            Open to React Native / mobile engineering roles and select freelance projects. Based in Karachi, working across
            time zones.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <a href={`mailto:${SITE.email}`} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 17, fontWeight: 600, color: "var(--color-text)" }}>
              <span style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--color-accent-900)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                ✉
              </span>
              {SITE.email}
            </a>
            <a href={SITE.linkedin} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 17, fontWeight: 600, color: "var(--color-text)" }}>
              <span style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--color-accent-900)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                in
              </span>
              linkedin.com/in/faiza-zafar-3b8a521b2
            </a>
            <a href={SITE.resumePath} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 17, fontWeight: 600, color: "var(--color-text)" }}>
              <span style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--color-surface)", border: "1px solid var(--color-divider)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                ↓
              </span>
              Download résumé (PDF)
            </a>
          </div>
        </div>

        <div className="card elev-md" style={{ padding: "clamp(24px, 6vw, 44px)", position: "relative", overflow: "hidden" }}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
