import { entrepreneurship } from "@/content/entrepreneurship";
import { ActionLink, Eyebrow } from "./section";

export function EntrepreneurshipHeader() {
  const data = entrepreneurship;
  return (
    <section className="relative overflow-hidden border-b border-charcoal/10 bg-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 hidden h-[420px] w-[420px] rounded-full border border-forest/10 md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-32 hidden h-[260px] w-[260px] rounded-full border border-gold/25 md:block"
      />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-24">
        <Eyebrow>{data.header.eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-forest md:text-6xl">
          {data.header.heading}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-charcoal/70">{data.header.body}</p>
        <div className="mt-10">
          <ActionLink href={data.header.cta.href}>{data.header.cta.label}</ActionLink>
        </div>
      </div>
    </section>
  );
}
