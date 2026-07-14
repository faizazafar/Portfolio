"use client";

import { useEffect, useRef } from "react";

const JOURNEY_DATA = [
  {
    period: "Jun 2025 – Present", role: "Software Engineer", company: "Think Digitally", initials: "TD",
    blurb: "Retrofitted role-based access and timezone-aware scheduling into a production healthcare app; hardened mobile security; mentor a junior developer.",
  },
  {
    period: "Dec 2023 – May 2025", role: "React Native Developer", company: "TekRevol", initials: "TR",
    blurb: "Shipped fitness and consumer apps end-to-end — Stripe payments, dark mode, RTL localization and major performance fixes.",
  },
  {
    period: "Jan 2022 – Dec 2023", role: "Junior Software Engineer", company: "Technyx Systems", initials: "TS",
    blurb: "Built government and tourism apps for UAE clients (MOFAIC, ADIBF, Visit Abu Dhabi) with Redux Saga and React.",
  },
  {
    period: "Sep 2021 – Dec 2021", role: "Project IT Trainee", company: "HBL – Habib Bank Limited", initials: "HBL",
    blurb: "Completed a structured IT trainee program, gaining exposure to enterprise software and fintech systems.",
  },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const vh = window.innerHeight;
      const viewportCenter = vh / 2;

      rowRefs.current.forEach((row) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const dist = Math.abs(rowCenter - viewportCenter);
        const norm = Math.max(0, 1 - dist / (vh * 0.65));
        const opacity = 0.25 + 0.75 * norm;
        const scale = 0.9 + 0.1 * norm;
        const translate = (1 - norm) * 24 * (rowCenter > viewportCenter ? 1 : -1) * 0.3;
        row.style.opacity = String(opacity);
        row.style.transform = `translateY(${translate}px) scale(${scale})`;
      });

      if (lineRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const fillPx = Math.max(0, Math.min(containerRect.height, viewportCenter - containerRect.top));
        lineRef.current.style.height = `${fillPx}px`;
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ padding: "60px var(--page-px) 140px", textAlign: "center" }}>
      <h2 style={{ fontSize: 34, margin: "0 0 12px" }}>My Journey</h2>
      <p style={{ fontSize: 16, color: "var(--color-neutral-400)", margin: "0 0 64px" }}>
        Roles and projects that shaped how I build mobile products.
      </p>
      <div ref={containerRef} style={{ position: "relative", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ position: "absolute", left: "var(--journey-line-left)", top: 0, bottom: 0, width: 2, background: "var(--color-neutral-800)", transform: "translateX(-50%)" }} />
        <div ref={lineRef} style={{ position: "absolute", left: "var(--journey-line-left)", top: 0, width: 2, background: "var(--color-accent)", transform: "translateX(-50%)", height: 0 }} />

        {JOURNEY_DATA.map((step, i) => {
          const onLeft = i % 2 === 0;
          const accentVar = onLeft ? "var(--color-accent-300)" : "var(--color-accent-400)";
          const content = (
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", color: "var(--color-neutral-500)", textTransform: "uppercase", marginBottom: 8 }}>
                {step.period}
              </div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 23, fontWeight: 500, marginBottom: 4, color: accentVar }}>
                {step.role}
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "var(--color-text)", marginBottom: 10 }}>{step.company}</div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-neutral-400)", margin: 0 }}>{step.blurb}</p>
            </div>
          );
          return (
            <div
              key={step.company}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              style={{
                position: "relative", display: "grid", gridTemplateColumns: "var(--journey-row-cols)",
                alignItems: "center", minHeight: 220, textAlign: "left",
                transition: "opacity 0.15s linear, transform 0.15s linear", willChange: "opacity, transform",
              }}
            >
              <div
                className="journey-content"
                style={{ gridColumn: onLeft ? "1" : "3", textAlign: onLeft ? "right" : "left", paddingRight: onLeft ? 36 : 0, paddingLeft: onLeft ? 0 : 36 }}
              >
                {content}
              </div>
              <div
                className="journey-badge-col"
                style={{ gridColumn: "2", position: "relative", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}
              >
                <div
                  style={{
                    width: 56, height: 56, borderRadius: "50%", background: "var(--color-neutral-100)",
                    border: "3px solid var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 12, color: "var(--color-bg)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  {step.initials}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
