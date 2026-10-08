import { finalCta } from "@/content/site";
import { ActionLink } from "./section";

export function FinalCta() {
  return (
    <section className="bg-forest px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-6xl font-semibold leading-[1.05] tracking-[-0.02em] text-ivory md:text-8xl">
          {finalCta.lines.map((line) => (
            <span key={line} className="block">
              {line.replace(/\.$/, "")}
              <span className="text-gold">.</span>
            </span>
          ))}
        </h2>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-ivory/70">{finalCta.body}</p>
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
