import { entrepreneurship } from "@/content/entrepreneurship";
import { ActionLink, Eyebrow } from "./section";

export function EntrepreneurshipHeader() {
  const data = entrepreneurship;
  return (
    <section className="border-b border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <Eyebrow>{data.header.eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-ink md:text-6xl">
          {data.header.heading}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">{data.header.body}</p>
        <div className="mt-10">
          <ActionLink href={data.header.cta.href}>{data.header.cta.label}</ActionLink>
        </div>
      </div>
    </section>
  );
}
