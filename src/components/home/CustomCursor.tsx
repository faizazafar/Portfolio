"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const hoverRef = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
      if (ringRef.current) {
        const size = hoverRef.current ? 52 : 32;
        ringRef.current.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2}px)`;
      }
    };

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element && !!el.closest("a, button, input, textarea, [role='button']");

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) {
        hoverRef.current = true;
        setHover(true);
      }
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) {
        hoverRef.current = false;
        setHover(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "var(--color-accent)",
          pointerEvents: "none",
          zIndex: 999,
          transform: "translate(-100px, -100px)",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 998,
          border: "1.5px solid var(--color-accent)",
          width: hover ? 52 : 32,
          height: hover ? 52 : 32,
          background: hover ? "color-mix(in srgb, var(--color-accent) 15%, transparent)" : "transparent",
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease, transform 0.12s ease-out",
        }}
      />
    </>
  );
}
