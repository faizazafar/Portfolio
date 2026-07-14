"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/lib/projects";

const BLOCK_BG = "linear-gradient(135deg, var(--color-accent-800), var(--color-accent-900))";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (id: number) => void;
}) {
  const revealRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const inView = useInView(revealRef, { once: true, amount: 0.08 });

  const onTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * 10}deg) rotateY(${px * 10}deg) translateY(-6px) scale(1.02)`;
  };
  const onTiltLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
  };

  return (
    <motion.div
      ref={revealRef}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div
        ref={tiltRef}
        onClick={() => onOpen(project.id)}
        onMouseMove={onTiltMove}
        onMouseLeave={onTiltLeave}
        className="tilt-card"
        style={{
          cursor: "pointer", background: "var(--color-surface)", borderRadius: "var(--radius-lg)", overflow: "hidden",
          border: "1px solid var(--color-divider)", transformStyle: "preserve-3d", willChange: "transform",
          transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)",
          transition: "transform 0.35s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.25s ease, border-color 0.25s ease",
        }}
      >
        <div style={{ position: "relative", height: 160, background: BLOCK_BG, display: "flex", alignItems: "flex-end", padding: 20, overflow: "hidden" }}>
          <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600, color: "var(--color-neutral-100)", position: "relative", zIndex: 1 }}>
            {project.category}
          </span>
          {project.award && (
            <span style={{ position: "absolute", top: 16, right: 16, background: "var(--color-neutral-100)", color: "var(--color-bg)", fontSize: 11, fontWeight: 700, padding: "6px 10px", borderRadius: 999 }}>
              🏆 AWARD
            </span>
          )}
        </div>
        <div style={{ padding: 24 }}>
          <h3 style={{ fontSize: 21, margin: "0 0 8px", color: "var(--color-text)" }}>{project.title}</h3>
          <p style={{ fontSize: 15, lineHeight: 1.5, color: "var(--color-neutral-400)", margin: "0 0 16px", minHeight: 44 }}>
            {project.tagline}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: "var(--color-neutral-500)" }}>{project.period}</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-accent-300)", display: "inline-flex", alignItems: "center", gap: 6 }}>
              View details <span>→</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
