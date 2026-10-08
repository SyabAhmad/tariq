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
    <footer id="contact" className="scroll-mt-24 border-t border-ivory/10 bg-forest-deep px-6 py-16 text-ivory">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">{profile.wordmark}</p>
            <p className="mt-4 leading-relaxed text-ivory/60">
              Associate Professor · Centre for Management and Commerce
              <br />
              University of Swat
            </p>
          </div>
          <nav aria-label="Explore">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Explore</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-ivory/60 transition-colors hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-gold">Connect</h2>
            <ul className="mt-5 space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/60 transition-colors hover:text-ivory"
                    {...(link.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Muhammad Tariq Yousafzai</p>
          <p>Content compiled from public professional profiles; figures pending his confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
