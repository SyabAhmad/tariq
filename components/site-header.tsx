"use client";

import { useState } from "react";
import Link from "next/link";
import { nav, profile } from "@/content/site";
import { ActionLink } from "./section";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-5">
        <Link href="/" className="flex flex-col gap-0.5" onClick={() => setMenuOpen(false)}>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            {profile.wordmark}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft sm:block">
            {profile.tagline}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ActionLink
            href={`mailto:${profile.email}`}
            className="hidden shrink-0 px-5 py-2.5 sm:inline-flex"
          >
            Get in Touch
          </ActionLink>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-ink/15 lg:hidden"
          >
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-hairline bg-paper transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="mx-auto max-w-6xl px-6 py-6">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-hairline py-3.5 font-mono text-sm uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ActionLink href={`mailto:${profile.email}`} className="w-full justify-center">
              Get in Touch
            </ActionLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
