const ITEMS = [
  "React Native", "TypeScript", "Redux Saga", "Stripe", "REST APIs", "Jest", "Cursor AI", "Claude", "Agile/Scrum",
];
const LOOPED = [...ITEMS, ...ITEMS];

export default function TechMarquee() {
  return (
    <div
      style={{
        padding: "14px 0",
        background: "var(--color-surface)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderTop: "1px solid var(--color-divider)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div style={{ display: "inline-flex", animation: "marquee2 20s linear infinite" }}>
        {LOOPED.map((item, i) => (
          <span
            key={`${item}-${i}`}
            style={{
              fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 500,
              color: "var(--color-neutral-300)", padding: "0 22px", display: "inline-flex",
              alignItems: "center", gap: 22, letterSpacing: "0.03em",
            }}
          >
            {item} <span style={{ color: "var(--color-accent)" }}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
