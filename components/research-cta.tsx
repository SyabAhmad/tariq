import type { research as researchData } from "@/content/research";
import { ActionLink } from "./section";

export function ResearchCta({ data }: { data: typeof researchData.cta }) {
  return (
    <section className="bg-ink px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-paper md:text-6xl">
          {data.heading}
        </h2>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          {data.links.map((link) => (
            <ActionLink
              key={link.label}
              href={link.href}
              variant={link.variant === "onDark" ? "onDark" : "onDarkSecondary"}
              external={link.href.startsWith("http")}
            >
              {link.label}
            </ActionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
