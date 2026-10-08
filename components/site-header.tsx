import Link from "next/link";
import { nav, profile } from "@/content/site";
import { ActionLink } from "./section";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-5">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            {profile.wordmark}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft sm:block">
            {profile.tagline}
          </span>
        </Link>
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
        <ActionLink href={`mailto:${profile.email}`} className="hidden shrink-0 px-5 py-2.5 sm:inline-flex">
          Get in Touch
        </ActionLink>
      </div>
    </header>
  );
}
