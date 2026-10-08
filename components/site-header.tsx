import { nav, profile } from "@/content/site";
import { ActionLink } from "./section";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
        <a href="#top" className="flex flex-col gap-0.5" aria-label={`${profile.name} — home`}>
          <span className="font-display text-lg font-semibold tracking-tight text-forest">
            {profile.wordmark}
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.18em] text-charcoal/45 sm:block">
            {profile.tagline}
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-charcoal/65 transition-colors hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ActionLink href={`mailto:${profile.email}`} className="hidden shrink-0 sm:inline-flex">
          Get in Touch
        </ActionLink>
      </div>
    </header>
  );
}
