"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/constants";

const QUOTES = [
  {
    initials: "DA", name: "Daniyal Aslam", role: "Software Engineer, Think Digitally",
    text: "She is a reliable React Native developer and a great teammate. She is humble, open to learn and always ready to understand the requirements before rushing to implement. She takes feedback well and is committed to delivering her work. I would recommend her to any team looking for a solid React Native developer.",
  },
  {
    initials: "RN", name: "Rahayma Nafees", role: "Software Engineer, Think Digitally",
    text: "As a senior mobile application developer, she has consistently demonstrated strong technical expertise, attention to detail, and a calm, solution-oriented approach to every challenge. She is always approachable, willing to share her knowledge, and patient when guiding team members. I've learned a lot from her, not only about mobile development and debugging but also about writing better code and approaching problems with the right mindset.",
  },
  {
    initials: "AH", name: "Adnan Hussain", role: "Principal Software Engineer",
    text: "Her technical depth is genuinely impressive. She has a strong command of the React Native ecosystem, writes clean and maintainable code, and consistently brings well thought out solutions to complex problems.",
  },
  {
    initials: "NA", name: "Nayyer Ali", role: "Application Engineer, LMKR",
    text: "She consistently stood out as one of the most driven and proactive engineers on the team. Faiza brings a rare combination of strong ownership and collaborative energy — her solutions were always thoughtful and well-executed.",
  },
  {
    initials: "UK", name: "Usman Ahmed Khan", role: "React Native Developer, TekRevol",
    text: "Extremely talented and hardworking — she handles deadlines delicately and finds solutions in no time. She smartly handles any situation while making sure it doesn't compromise the coding standards. Highly recommended!",
  },
  {
    initials: "SR", name: "Syeda Umm E Abiha Rizvi", role: "Software Engineer, Think Digitally",
    text: "A skilled developer with a solid technical foundation and a practical approach to solving problems. Easy to collaborate with, communicates effectively, and someone I would confidently recommend to any engineering team.",
  },
  {
    initials: "AT", name: "Areesha Tanvir", role: "SQA Engineer",
    text: "A skilled mobile application developer who consistently delivers quality work. One of her key strengths is how quickly she understands issues and identifies the root cause, making the bug-fixing process efficient and smooth.",
  },
];

const LOOPED_QUOTES = [...QUOTES, ...QUOTES];
const TRACK_WIDTH = QUOTES.length * (380 + 24);

export default function RecommendationsPage() {
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.1 });

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)", minHeight: "100vh" }}>
      <div style={{ padding: "80px var(--page-px) 56px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
        <div>
          <div className="tag tag-accent" style={{ marginBottom: 16, display: "inline-block" }}>
            Recommendations
          </div>
          <h1 style={{ fontSize: "clamp(36px,4.5vw,56px)", margin: 0, maxWidth: "18ch", lineHeight: 1.08 }}>
            What teams and managers say.
          </h1>
        </div>
        <a href={SITE.linkedin} className="btn btn-secondary">
          View on LinkedIn ↗
        </a>
      </div>

      <motion.div
        ref={listRef}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          padding: "0 0 100px",
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent, black var(--page-px), black calc(100% - var(--page-px)), transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black var(--page-px), black calc(100% - var(--page-px)), transparent)",
        }}
      >
        <div
          className="reco-track"
          style={{
            display: "flex", gap: 24, width: `${TRACK_WIDTH * 2}px`, paddingLeft: "var(--page-px)",
            animation: `recoScroll ${TRACK_WIDTH / 40}s linear infinite`,
          }}
        >
          {LOOPED_QUOTES.map((q, i) => (
            <div key={`${q.initials}-${i}`} className="card elev-sm" style={{ width: 380, height: 320, flexShrink: 0 }}>
              <div style={{ fontSize: 34, fontFamily: "var(--font-heading)", color: "var(--color-accent-400)", lineHeight: 1 }}>
                &ldquo;
              </div>
              <p
                style={{
                  fontSize: 16, lineHeight: 1.7, color: "var(--color-neutral-300)", margin: "12px 0 24px",
                  display: "-webkit-box", WebkitLineClamp: 6, WebkitBoxOrient: "vertical", overflow: "hidden",
                }}
              >
                {q.text}
              </p>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid var(--color-divider)" }}>
                <div
                  style={{
                    width: 44, height: 44, borderRadius: "50%", background: "var(--color-accent-800)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-heading)",
                    fontWeight: 600, color: "var(--color-accent-200)", fontSize: 13, flexShrink: 0,
                  }}
                >
                  {q.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: "var(--color-text)" }}>{q.name}</div>
                  <div style={{ fontSize: 13, color: "var(--color-neutral-500)" }}>{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
