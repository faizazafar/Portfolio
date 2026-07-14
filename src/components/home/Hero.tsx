"use client";

import { useEffect, useRef } from "react";
import { SITE } from "@/lib/constants";

export default function Hero() {
  const phoneBackRef = useRef<HTMLDivElement>(null);
  const phoneFrontRef = useRef<HTMLDivElement>(null);
  const codeIconRef = useRef<HTMLDivElement>(null);
  const wifiIconRef = useRef<HTMLDivElement>(null);
  const gridIconRef = useRef<HTMLDivElement>(null);
  const cloudIconRef = useRef<HTMLDivElement>(null);
  const spinnerIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const mx = (e.clientX / window.innerWidth) * 2 - 1;
      const my = (e.clientY / window.innerHeight) * 2 - 1;

      if (phoneBackRef.current) {
        phoneBackRef.current.style.transform = `rotate(-8deg) translate(${mx * 10}px, ${my * 10}px)`;
      }
      if (phoneFrontRef.current) {
        phoneFrontRef.current.style.transform = `rotate(5deg) translate(${mx * -14}px, ${my * -14}px)`;
      }
      if (codeIconRef.current) codeIconRef.current.style.transform = `translate(${mx * 16}px, ${my * 16}px)`;
      if (wifiIconRef.current) wifiIconRef.current.style.transform = `translate(${mx * -20}px, ${my * -20}px)`;
      if (gridIconRef.current) gridIconRef.current.style.transform = `translate(${mx * 14}px, ${my * 14}px)`;
      if (cloudIconRef.current) cloudIconRef.current.style.transform = `translate(${mx * -12}px, ${my * -12}px)`;
      if (spinnerIconRef.current) spinnerIconRef.current.style.transform = `translate(${mx * 10}px, ${my * 10}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div style={{ position: "relative", padding: "var(--hero-pt) var(--page-px) var(--hero-pb)" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1200px 500px at 15% -10%, var(--color-accent-900) 0%, transparent 60%), linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "var(--hero-cols)",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            className="tag tag-accent"
            style={{ marginBottom: 28, display: "inline-block", opacity: 0, animation: "fadeUp 0.7s 0.05s ease forwards" }}
          >
            React Native Developer · Mobile Engineer
          </div>
          <h1
            style={{
              fontSize: "clamp(40px,5.6vw,72px)",
              lineHeight: 1.02,
              fontWeight: 500,
              margin: "0 0 32px",
              maxWidth: "15ch",
              color: "var(--color-text)",
              opacity: 0,
              animation: "fadeUp 0.8s 0.2s ease forwards",
            }}
          >
            Mobile products, engineered with intent.
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.6,
              color: "var(--color-neutral-300)",
              maxWidth: "44ch",
              margin: "0 0 32px",
              opacity: 0,
              animation: "fadeUp 0.8s 0.35s ease forwards",
            }}
          >
            4.5+ years shipping cross-platform apps for healthcare, fitness, tourism and government — from Karachi to the App Store.
          </p>
          <div style={{ display: "flex", gap: 16, opacity: 0, animation: "fadeUp 0.8s 0.5s ease forwards" }}>
            <a href="/projects" className="btn btn-primary">
              View Projects →
            </a>
            <a href={SITE.resumePath} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            height: 460,
            width: "100%",
            maxWidth: 380,
            minWidth: 260,
            justifySelf: "var(--hero-phones-justify, end)",
            margin: "var(--hero-phones-margin, 0)",
            overflow: "visible",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 70,
              top: 70,
              width: 140,
              height: 280,
              borderRadius: "50%",
              background: "var(--color-accent)",
              filter: "blur(60px)",
              opacity: 0.25,
              animation: "glowPulse 4s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />

          <div
            ref={codeIconRef}
            style={{
              position: "absolute", left: 2, top: 4, width: 48, height: 48, borderRadius: 14,
              background: "var(--color-surface)", border: "1px solid var(--color-divider)",
              display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-md)",
              animation: "floatA 5s ease-in-out infinite", zIndex: 2,
            }}
          >
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: "var(--color-accent-200)" }}>
              {"</>"}
            </span>
          </div>

          <div
            ref={wifiIconRef}
            style={{
              position: "absolute", right: -6, top: "38%", width: 54, height: 44, borderRadius: 14,
              background: "var(--color-surface)", border: "1px solid var(--color-divider)",
              display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-md)",
              animation: "floatB 6s ease-in-out infinite 0.4s", zIndex: 2,
            }}
          >
            <svg width="34" height="26" viewBox="0 0 34 26" fill="none">
              <circle cx="17" cy="22" r="2.4" fill="var(--color-accent-300)" />
              <path
                d="M11 15.5a9 9 0 0 1 12 0"
                stroke="var(--color-accent-400)"
                strokeWidth="2.4"
                strokeLinecap="round"
                style={{ animation: "wifiBar2 2.4s ease-in-out infinite 0.2s", transformOrigin: "center" }}
              />
              <path
                d="M5.5 9.5a17 17 0 0 1 23 0"
                stroke="var(--color-accent-500)"
                strokeWidth="2.4"
                strokeLinecap="round"
                style={{ animation: "wifiBar3 2.4s ease-in-out infinite 0.4s", transformOrigin: "center" }}
              />
            </svg>
          </div>

          <div
            ref={gridIconRef}
            style={{
              position: "absolute", left: "14%", bottom: "4%", width: 44, height: 44, borderRadius: 12,
              background: "var(--color-surface)", border: "1px solid var(--color-divider)",
              display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-md)",
              animation: "floatC 5.5s ease-in-out infinite 0.8s", zIndex: 2,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 5 }}>
              <div style={{ width: 12, height: 12, borderRadius: 4, background: "var(--color-accent-400)" }} />
              <div style={{ width: 12, height: 12, borderRadius: 4, background: "var(--color-accent-600)" }} />
              <div style={{ width: 12, height: 12, borderRadius: 4, background: "var(--color-accent-600)" }} />
              <div style={{ width: 12, height: 12, borderRadius: 4, background: "var(--color-accent-400)" }} />
            </div>
          </div>

          <div
            ref={cloudIconRef}
            style={{
              position: "absolute", right: -10, top: -36, width: 46, height: 34, borderRadius: 11,
              background: "var(--color-surface)", border: "1px solid var(--color-divider)",
              display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-md)",
              animation: "floatA 6.5s ease-in-out infinite 1.2s", zIndex: 3,
            }}
          >
            <svg width="30" height="20" viewBox="0 0 36 24" fill="none">
              <path
                d="M9 20a6 6 0 0 1-1-11.9A8 8 0 0 1 23 6.5 5.5 5.5 0 0 1 27 17v0a5 5 0 0 1-1 3H9Z"
                fill="var(--color-accent-800)"
                stroke="var(--color-accent-400)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div
            ref={spinnerIconRef}
            style={{
              position: "absolute", left: -4, bottom: "30%", width: 42, height: 42, borderRadius: "50%",
              background: "var(--color-surface)", border: "1px solid var(--color-divider)",
              display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-md)",
              zIndex: 2,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={{ animation: "spinSlow 5s linear infinite" }}>
              <circle cx="13" cy="13" r="10" stroke="var(--color-neutral-700)" strokeWidth="2.5" />
              <path d="M13 3a10 10 0 0 1 10 10" stroke="var(--color-accent-400)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div
            ref={phoneBackRef}
            style={{
              position: "absolute", left: 60, top: 60, width: 175, height: 350,
              background: "var(--color-surface)", borderRadius: 30, border: "6px solid var(--color-neutral-900)",
              boxShadow: "var(--shadow-lg)", transform: "rotate(-8deg)",
              transition: "transform 0.15s ease-out", overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)", width: 50, height: 5, background: "var(--color-neutral-700)", borderRadius: 4 }} />
            <div style={{ position: "absolute", top: 32, left: 12, right: 12, bottom: 12, borderRadius: 16, overflow: "hidden", background: "var(--color-bg)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: 14, animation: "screenScroll 6s ease-in-out infinite alternate" }}>
                <div style={{ height: 34, borderRadius: 8, background: "var(--color-accent-800)" }} />
                <div style={{ height: 60, borderRadius: 8, background: "var(--color-neutral-800)" }} />
                <div style={{ height: 34, borderRadius: 8, background: "var(--color-accent-700)" }} />
                <div style={{ height: 60, borderRadius: 8, background: "var(--color-neutral-800)" }} />
                <div style={{ height: 34, borderRadius: 8, background: "var(--color-accent-800)" }} />
                <div style={{ height: 60, borderRadius: 8, background: "var(--color-neutral-800)" }} />
              </div>
            </div>
          </div>

          <div
            ref={phoneFrontRef}
            style={{
              position: "absolute", right: 30, top: 10, width: 195, height: 400,
              background: "var(--color-surface)", borderRadius: 34, border: "7px solid var(--color-neutral-900)",
              boxShadow: "var(--shadow-lg)", transform: "rotate(5deg)",
              transition: "transform 0.15s ease-out", overflow: "visible",
            }}
          >
            <div style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)", width: 56, height: 5, background: "var(--color-neutral-600)", borderRadius: 4 }} />
            <div style={{ position: "absolute", top: 34, left: 14, right: 14, bottom: 14, borderRadius: 18, overflow: "hidden", background: "var(--color-bg)", display: "flex", flexDirection: "column", border: "1px solid var(--color-divider)" }}>
              <div style={{ padding: "16px 16px 10px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--color-accent)" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ width: "70%", height: 8, borderRadius: 4, background: "var(--color-neutral-400)", marginBottom: 6 }} />
                  <div style={{ width: "45%", height: 6, borderRadius: 4, background: "var(--color-neutral-700)" }} />
                </div>
              </div>
              <div style={{ flex: 1, margin: "0 16px 16px", borderRadius: 12, background: "var(--color-accent-900)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--color-accent-700)" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", border: "3px solid var(--color-accent-400)" }} />
              </div>
            </div>
            <div
              style={{
                position: "absolute", top: -14, left: -38, width: 180,
                background: "var(--color-neutral-100)", borderRadius: 14, padding: "10px 12px",
                display: "flex", alignItems: "center", gap: 10,
                boxShadow: "var(--shadow-md)", animation: "notifPop 5s ease-in-out infinite 1s", zIndex: 2,
              }}
            >
              <div style={{ width: 26, height: 26, borderRadius: 8, background: "var(--color-accent)", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-bg)" }}>New reminder</div>
                <div style={{ fontSize: 10, color: "var(--color-neutral-700)" }}>Take medication at 9:00 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
