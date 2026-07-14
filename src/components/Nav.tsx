"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "color-mix(in srgb, var(--color-bg) 85%, transparent)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--space-6) var(--page-px)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 19,
            letterSpacing: "0.02em",
            color: "var(--color-text)",
          }}
        >
          FAIZA ZAFAR
        </Link>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 40 }}>
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 15,
                  fontWeight: active ? 600 : 500,
                  color: active ? "var(--color-text)" : "var(--color-neutral-300)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn btn-primary">
            Let&apos;s talk
          </Link>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            border: "1px solid var(--color-divider)",
            borderRadius: "var(--radius-md)",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {menuOpen ? (
              <path d="M3 3l12 12M15 3L3 15" stroke="var(--color-text)" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 5h14M2 9h14M2 13h14" stroke="var(--color-text)" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        style={{
          flexDirection: "column",
          gap: 4,
          padding: "8px var(--page-px) 24px",
          borderTop: "1px solid var(--color-divider)",
        }}
      >
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                padding: "12px 0",
                fontSize: 16,
                fontWeight: active ? 600 : 500,
                color: active ? "var(--color-text)" : "var(--color-neutral-300)",
                borderBottom: "1px solid var(--color-divider)",
              }}
            >
              {link.label}
            </Link>
          );
        })}
        <Link href="/contact" onClick={closeMenu} className="btn btn-primary" style={{ marginTop: 16, justifyContent: "center" }}>
          Let&apos;s talk
        </Link>
      </div>
    </div>
  );
}
