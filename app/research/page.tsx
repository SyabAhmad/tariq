import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research on entrepreneurship, value creation, sustainability, circular economy, entrepreneurship education and informal economic activity.",
};

export default function ResearchPage() {
  return (
    <PagePlaceholder
      title="Research"
      blurb="Research themes, featured studies, philosophy and the complete publication library are being prepared. Content is saved — the design follows."
    />
  );
}
