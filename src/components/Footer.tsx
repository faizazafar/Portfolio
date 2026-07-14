import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <div
      style={{
        padding: "56px var(--page-px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        borderTop: "1px solid var(--color-divider)",
      }}
    >
      <span style={{ fontSize: 14, color: "var(--color-neutral-500)" }}>
        © {new Date().getFullYear()} Faiza Zafar. Karachi, Pakistan.
      </span>
      <div style={{ display: "flex", gap: 28 }}>
        <a href={`mailto:${SITE.email}`} style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text)" }}>
          {SITE.email}
        </a>
        <a href={SITE.linkedin} style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text)" }}>
          LinkedIn
        </a>
      </div>
    </div>
  );
}
