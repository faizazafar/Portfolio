"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TARGETS = { years: 4.5, apps: 7, downloads: 500, awards: 1 };
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [values, setValues] = useState({ years: 0, apps: 0, downloads: 0, awards: 0 });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const e = ease(t);
      setValues({
        years: TARGETS.years * e,
        apps: TARGETS.apps * e,
        downloads: TARGETS.downloads * e,
        awards: TARGETS.awards * e,
      });
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const stats = [
    { label: "Years experience", display: `${values.years.toFixed(1)}+` },
    { label: "Shipped apps", display: `${Math.round(values.apps)}` },
    { label: "Play downloads", display: `${Math.round(values.downloads)}K+` },
    { label: "Industry award", display: `${Math.round(values.awards)}` },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        margin: "0 var(--page-px)",
        transform: "translateY(-40px)",
        background: "var(--color-surface)",
        border: "1px solid var(--color-divider)",
        borderRadius: "var(--radius-lg)",
        display: "grid",
        gridTemplateColumns: "var(--stats-cols)",
        overflow: "hidden",
        boxShadow: "var(--shadow-md)",
      }}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="stat-item" style={{ padding: "32px 24px", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 38, fontWeight: 500, color: "var(--color-accent-300)" }}>
            {stat.display}
          </div>
          <div style={{ fontSize: 14, color: "var(--color-neutral-400)", marginTop: 6, fontWeight: 500 }}>{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}
