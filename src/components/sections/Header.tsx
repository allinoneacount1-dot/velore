"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)] shadow-[0_4px_12px_rgb(163,177,198,0.15)]">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-center px-6 lg:px-12">
        {/* 3-column grid: logo | nav | cta — nav centered */}
        <div className="grid w-full max-w-5xl grid-cols-[auto_1fr_auto] items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 font-display font-extrabold text-xl tracking-tight text-[var(--fg)]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-sm font-bold text-white shadow-[3px_3px_6px_rgb(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.4)]">
              V
            </span>
            Velore
          </a>

          {/* Desktop Nav — centered */}
          <nav className="hidden items-center justify-center gap-10 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[var(--fg-muted)] transition-colors duration-200 hover:text-[var(--fg)] font-body"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="secondary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] shadow-[var(--neu-extruded-sm)] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[rgba(163,177,198,0.2)] bg-[var(--bg)] px-6 pb-6 pt-4 shadow-[0_8px_24px_rgb(163,177,198,0.25)] md:hidden">
          <nav className="flex flex-col items-center gap-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="w-full text-center rounded-xl px-4 py-3 text-sm font-medium text-[var(--fg-muted)] transition-all duration-200 hover:bg-[rgba(163,177,198,0.1)] hover:text-[var(--fg)] font-body"
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="md" className="mt-2 w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
