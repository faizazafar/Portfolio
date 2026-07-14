"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CATEGORIES = [
  { name: "Languages & Frameworks", skills: ["React Native", "React.js", "TypeScript", "JavaScript (ES6+)"] },
  { name: "Architecture & State", skills: ["Redux / RTK", "Redux Saga", "Cross-Platform (iOS & Android)", "WBS"] },
  { name: "Performance & Security", skills: ["Performance Optimization", "Mobile Security", "Code Obfuscation", "Jailbreak/Root Detection"] },
  { name: "Integrations", skills: ["REST API Integration", "Stripe Payments"] },
  { name: "AI-Augmented Development", skills: ["Cursor AI", "Claude", "Structured Project Context"] },
  { name: "Tools & Process", skills: ["Jest", "Agile/Scrum", "Git", "Jira", "Postman"] },
];

export default function SkillsPage() {
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.1 });

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)", minHeight: "100vh" }}>
      <div style={{ padding: "80px var(--page-px) 56px" }}>
        <div className="tag tag-accent" style={{ marginBottom: 16, display: "inline-block" }}>
          Capabilities
        </div>
        <h1 style={{ fontSize: "clamp(36px,4.5vw,56px)", margin: 0, maxWidth: "20ch", lineHeight: 1.08 }}>
          Tools I reach for to ship reliable mobile products.
        </h1>
      </div>

      <div ref={listRef} style={{ padding: "0 var(--page-px) 120px" }}>
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <div className="skills-row" style={{ display: "flex", gap: 16, alignItems: "baseline", padding: "32px 0", borderTop: "1px solid var(--color-divider)", flexWrap: "wrap" }}>
              <div style={{ width: "var(--skills-label-w)", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 500, color: "var(--color-text)" }}>
                  {cat.name}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, flex: 1 }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag tag-outline skill-tag"
                    style={{ padding: "10px 18px", fontSize: 15, fontWeight: 500 }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ padding: "0 var(--page-px) 120px", display: "grid", gridTemplateColumns: "var(--intro-cols)", gap: 24 }}>
        <div className="card elev-sm">
          <div className="card-kicker">Education</div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 500, marginBottom: 4, color: "var(--color-text)" }}>
            M.S. Computer Science
          </div>
          <div style={{ fontSize: 15, color: "var(--color-neutral-400)", marginBottom: 20 }}>
            NED University of Engineering &amp; Technology · 2022–2024 · GPA 3.52/4.00
          </div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 500, marginBottom: 4, color: "var(--color-text)" }}>
            B.S. Computer Science
          </div>
          <div style={{ fontSize: 15, color: "var(--color-neutral-400)" }}>
            Usman Institute of Technology (NED Affiliated) · 2017–2021 · GPA 3.42/4.00 · 7th academic position
          </div>
        </div>
        <div className="card elev-sm" style={{ background: "var(--color-accent-900)" }}>
          <div className="card-kicker">Recognition</div>
          <div style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-neutral-200)" }}>
            🏆 Best Nutrition Mobile App — Cycle Vita PKU, 10th Annual MedTech Breakthrough Awards
            <br />
            <br />
            🥇 1st Place — Code Girls Competition (Code Fest), Oct 2022
            <br />
            <br />
            🎓 7th Academic Position — B.S. Computer Science
          </div>
        </div>
      </div>
    </div>
  );
}
