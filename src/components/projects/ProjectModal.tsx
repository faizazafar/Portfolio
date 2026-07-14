"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const BLOCK_BG = "linear-gradient(135deg, var(--color-accent-800), var(--color-accent-900))";

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          onClick={onClose}
          className="dialog-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="dialog elev-lg"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={onClose}
              style={{
                position: "absolute", top: 24, right: 24, width: 36, height: 36, borderRadius: "50%",
                border: "1px solid var(--color-divider)", background: "var(--color-surface)", color: "var(--color-text)",
                fontSize: 16, cursor: "pointer",
              }}
            >
              ✕
            </button>
            <div
              style={{
                height: 120, background: BLOCK_BG, display: "flex", alignItems: "flex-end",
                padding: "20px var(--dialog-px)", borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
              }}
            >
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600, color: "var(--color-neutral-100)" }}>
                {project.category}
              </span>
            </div>
            <div style={{ padding: "40px var(--dialog-px) 48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <h2 style={{ fontSize: 32, margin: 0, color: "var(--color-text)" }}>{project.title}</h2>
                {project.award && <span className="tag tag-accent">🏆 Award-winning</span>}
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--color-neutral-500)", marginBottom: 24 }}>
                {project.period} · {project.stack}
              </div>
              {project.bullets.map((b) => (
                <div key={b} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                  <span style={{ color: "var(--color-accent)", fontWeight: 700, flexShrink: 0 }}>—</span>
                  <p style={{ fontSize: 16, lineHeight: 1.6, margin: 0, color: "var(--color-neutral-300)" }}>{b}</p>
                </div>
              ))}
              <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                {project.tags.map((t) => (
                  <span key={t} className="tag tag-neutral">
                    {t}
                  </span>
                ))}
              </div>
              {project.links && project.links.length > 0 && (
                <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {project.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
