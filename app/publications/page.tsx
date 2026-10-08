import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "A scholarly archive of Dr. Tariq Yousafzai's research — searchable by topic, year and category.",
};

export default function PublicationsPage() {
  return (
    <PagePlaceholder
      title="Publications"
      blurb="The research archive — structured publication records with search, filtering and detail views. Content is saved — the design follows."
    />
  );
}
