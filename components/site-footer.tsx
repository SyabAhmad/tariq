import Link from "next/link";
import { nav, profile } from "@/content/site";

const connectLinks = [
  { label: "ResearchGate", href: profile.links.researchgate },
  { label: "ORCID", href: profile.links.orcid },
  { label: "Google Scholar", href: profile.links.scholar },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-ink px-6 py-20 text-paper">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">{profile.wordmark}</p>
            <p className="mt-5 leading-relaxed text-paper/50">
              Associate Professor · Centre for Management and Commerce
              <br />
              University of Swat
            </p>
          </div>
          <nav aria-label="Explore">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-oxblood-soft">
              Explore
            </h2>
            <ul className="mt-6 space-y-3.5">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/60 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-oxblood-soft">
              Connect
            </h2>
            <ul className="mt-6 space-y-3.5">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/60 transition-colors hover:text-paper"
                    {...(link.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-8 text-xs text-paper/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Muhammad Tariq Yousafzai</p>
          <p>Content compiled from public professional profiles; figures pending his confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
