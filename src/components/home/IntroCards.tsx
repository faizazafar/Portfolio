"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function tiltMove(el: HTMLDivElement | null, e: React.MouseEvent<HTMLDivElement>) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width - 0.5;
  const py = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.transform = `perspective(1000px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
}
function tiltLeave(el: HTMLDivElement | null) {
  if (!el) return;
  el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
}

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export default function IntroCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);
  const [devCycle, setDevCycle] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf: number;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setDevCycle(30 * ease(t));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const cardBase: React.CSSProperties = {
    transformStyle: "preserve-3d",
    willChange: "transform",
  };

  return (
    <div
      ref={sectionRef}
      style={{
        padding: "20px var(--page-px) 100px",
        display: "grid",
        gridTemplateColumns: "var(--intro-cols)",
        gap: 28,
        alignItems: "stretch",
        perspective: 1200,
      }}
    >
      <motion.div
        ref={cardARef}
        onMouseMove={(e) => tiltMove(cardARef.current, e)}
        onMouseLeave={() => tiltLeave(cardARef.current)}
        className="card elev-sm tilt-card"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ ...cardBase, padding: 32 }}
      >
        <div
          style={{
            width: 48, height: 48, borderRadius: 12, background: "var(--color-accent-900)",
            border: "1px solid var(--color-accent-700)", display: "flex", alignItems: "center",
            justifyContent: "center", marginBottom: 20,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="var(--color-accent-300)" strokeWidth="1.8" />
            <path d="M4 20c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5" stroke="var(--color-accent-300)" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <h2 style={{ fontSize: 26, margin: "0 0 14px" }}>Who I am</h2>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--color-neutral-300)", margin: 0 }}>
          A results-driven React Native developer with 4.5+ years building scalable, cross-platform mobile applications for
          iOS and Android — including <strong style={{ color: "var(--color-text)" }}>Cycle Vita PKU</strong>, named Best
          Nutrition Mobile App at the 10th Annual MedTech Breakthrough Awards.
        </p>
      </motion.div>

      <motion.div
        ref={cardBRef}
        onMouseMove={(e) => tiltMove(cardBRef.current, e)}
        onMouseLeave={() => tiltLeave(cardBRef.current)}
        className="card elev-sm tilt-card"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ ...cardBase, padding: 32 }}
      >
        <div
          style={{
            width: 48, height: 48, borderRadius: 12, background: "var(--color-accent-900)",
            border: "1px solid var(--color-accent-700)", display: "flex", alignItems: "center",
            justifyContent: "center", marginBottom: 20,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"
              stroke="var(--color-accent-300)" strokeWidth="1.8" strokeLinecap="round"
            />
          </svg>
        </div>
        <h3 style={{ fontSize: 26, margin: "0 0 14px", fontWeight: 500, color: "var(--color-text)" }}>What drives my work</h3>
        <p style={{ fontSize: 17, lineHeight: 1.7, margin: 0, color: "var(--color-neutral-300)" }}>
          Performance, mobile security, and getting the details right. I pair Cursor AI and Claude with structured project
          context to ship faster without cutting corners — reducing dev cycles by{" "}
          <strong style={{ color: "var(--color-accent-300)", fontSize: 19 }}>~{Math.round(devCycle)}%</strong> on my current
          team.
        </p>
      </motion.div>
    </div>
  );
}
