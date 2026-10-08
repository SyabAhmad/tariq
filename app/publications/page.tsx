import type { Metadata } from "next";
import { FeaturedPublications } from "@/components/featured-publications";
import { ExternalProfiles } from "@/components/external-profiles";
import { Collaborations, PublicationsBrowser } from "@/components/publications-browser";
import { PublicationsCta } from "@/components/publications-cta";
import { PublicationsHeader, PublicationsMetrics } from "@/components/publications-header";
import { featuredPublicationIds, publications } from "@/content/publications";

const featuredItems = featuredPublicationIds.map((id, index) => {
  const publication = publications.find((entry) => entry.id === id)!;
  return {
    index: String(index + 1).padStart(2, "0"),
    publicationId: id,
    shortTitle: publication.shortTitle,
    summary: publication.summary,
  };
});

export const metadata: Metadata = {
  title: "Publications",
  description:
    "A scholarly archive of Dr. Muhammad Tariq Yousafzai's research — searchable by topic, year and category, with DOI and publisher links.",
};

export default function PublicationsPage() {
  return (
    <>
      <PublicationsHeader />
      <PublicationsMetrics />
      <FeaturedPublications
        eyebrow="Selected Research"
        heading="Featured Publications"
        items={featuredItems}
        tone="paper"
      />
      <PublicationsBrowser
        eyebrow="Publication Library"
        heading="Explore the complete research portfolio."
        note="Records are structured data (content/publications.ts). Adding a paper is a data edit — the search, filter and sort interface updates automatically."
      />
      <Collaborations />
      <ExternalProfiles />
      <PublicationsCta />
    </>
  );
}
