"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = PROJECTS.find((p) => p.id === selectedId) ?? null;

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)", minHeight: "100vh", position: "relative" }}>
      <div style={{ padding: "80px var(--page-px) 56px" }}>
        <div className="tag tag-accent" style={{ marginBottom: 16, display: "inline-block" }}>
          Selected Work
        </div>
        <h1 style={{ fontSize: "clamp(36px,4.5vw,56px)", margin: 0, maxWidth: "18ch", lineHeight: 1.08 }}>
          Seven products, shipped across four industries.
        </h1>
      </div>

      <div style={{ padding: "0 var(--page-px) 120px", display: "grid", gridTemplateColumns: "var(--projects-cols)", gap: 24, perspective: 1200 }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpen={setSelectedId} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelectedId(null)} />
    </div>
  );
}
