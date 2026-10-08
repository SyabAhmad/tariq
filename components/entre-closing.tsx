import { entrepreneurship } from "@/content/entrepreneurship";
import { ActionLink } from "./section";

export function EntrepreneurialClosing() {
  const { statement, closing } = entrepreneurship;
  return (
    <>
      <section className="bg-ivory px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-2xl font-semibold leading-[1.3] tracking-[-0.01em] text-forest md:text-4xl">
            {statement.text}
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-charcoal/40">{statement.note}</p>
        </div>
      </section>

      <section className="bg-forest px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">{closing.eyebrow}</p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ivory md:text-6xl">
            {closing.lines.map((line) => (
              <span key={line} className="block">
                {line.replace(/\.$/, "")}
                <span className="text-gold">.</span>
              </span>
            ))}
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-ivory/70">{closing.body}</p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            {closing.links.map((link) => (
              <ActionLink
                key={link.label}
                href={link.href}
                variant={link.variant === "onDark" ? "onDark" : "onDarkSecondary"}
              >
                {link.label}
              </ActionLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
