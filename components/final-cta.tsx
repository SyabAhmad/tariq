import { finalCta } from "@/content/site";
import { ActionLink } from "./section";

export function FinalCta() {
  return (
    <section className="bg-ink px-6 py-20 md:py-40">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-paper sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
          {finalCta.lines.map((line) => (
            <span key={line} className="block">
              {line.replace(/\.$/, "")}
              <span className="text-oxblood-soft">.</span>
            </span>
          ))}
        </h2>
        <p className="mt-10 max-w-xl text-base leading-relaxed text-paper/60 md:mt-12 md:text-lg">
          {finalCta.body}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
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
