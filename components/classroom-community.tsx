import { about } from "@/content/about";
import { Eyebrow, Section, SourceNote } from "./section";

export function ClassroomCommunity() {
  return (
    <Section tone="paper">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>{about.community.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-4xl">
            {about.community.heading}
          </h2>
        </div>
        <div className="space-y-6 md:col-span-7 md:pt-14">
          <p className="text-lg leading-relaxed text-ink-soft">
            A significant part of Dr. Tariq&rsquo;s research looks at entrepreneurship in{" "}
            <strong className="font-semibold text-ink">real communities</strong>, particularly in and
            around Swat.
          </p>
          <p className="leading-relaxed text-ink-soft/80">
            His research has examined groups including recycling entrepreneurs, waste pickers and
            shepherding communities, exploring how individuals create livelihoods and economic value
            despite limited resources and formal support structures.
          </p>
          <p className="leading-relaxed text-ink-soft/80">
            This approach connects{" "}
            <span className="font-medium text-ink">{about.community.emphasis}</span>.
          </p>
          <div className="pt-2">
            <SourceNote
              source={{
                label: "Waste picker sustainopreneurs study, Sustainability (MDPI)",
                href: "https://www.mdpi.com/2071-1050/13/12/6533",
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
