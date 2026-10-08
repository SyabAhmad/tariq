import { finalCta } from "@/content/site";
import { ActionLink } from "./section";

export function FinalCta() {
  return (
    <section className="bg-ink px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-7xl font-semibold leading-[1.02] tracking-[-0.03em] text-paper md:text-9xl">
          {finalCta.lines.map((line) => (
            <span key={line} className="block">
              {line.replace(/\.$/, "")}
              <span className="text-oxblood-soft">.</span>
            </span>
          ))}
        </h2>
        <p className="mt-12 max-w-xl text-lg leading-relaxed text-paper/60">{finalCta.body}</p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <ActionLink href={finalCta.links.primary.href} variant="onDark">
            {finalCta.links.primary.label}
          </ActionLink>
          <ActionLink href={finalCta.links.secondary.href} variant="onDarkSecondary">
            {finalCta.links.secondary.label}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
