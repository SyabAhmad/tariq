import type { Metadata } from "next";
import { FeaturedPublications } from "@/components/featured-publications";
import { PublicationLibrary } from "@/components/publication-library";
import { ResearchContext } from "@/components/research-context";
import { ResearchCta } from "@/components/research-cta";
import { ResearchDirection } from "@/components/research-direction";
import { ResearchHeader } from "@/components/research-header";
import { ResearchInterdisciplinary } from "@/components/research-interdisciplinary";
import { ResearchMetrics } from "@/components/research-metrics";
import { ResearchNetwork } from "@/components/research-network";
import { ResearchPhilosophy } from "@/components/research-philosophy";
import { ResearchThemes } from "@/components/research-themes";
import { research } from "@/content/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Researching entrepreneurship where opportunity, community and sustainability intersect — themes, featured studies, philosophy and the complete publication library.",
};

export default function ResearchPage() {
  return (
    <>
      <ResearchHeader data={research.header} />
      <ResearchMetrics data={research.metrics} />
      <ResearchThemes data={research.themes} />
      <ResearchPhilosophy data={research.philosophy} />
      <FeaturedPublications
        eyebrow={research.featured.eyebrow}
        heading={research.featured.heading}
        items={research.featured.items}
        cta={{ label: "Explore All Publications", href: "#publications" }}
      />
      <ResearchContext data={research.context} />
      <ResearchInterdisciplinary data={research.interdisciplinary} />
      <ResearchDirection data={research.direction} />
      <ResearchNetwork data={research.network} />
      <PublicationLibrary
        eyebrow={research.library.eyebrow}
        heading={research.library.heading}
        note={research.library.note}
      />
      <ResearchCta data={research.cta} />
    </>
  );
}
