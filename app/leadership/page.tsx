import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Academic Leadership",
  description:
    "Academic leadership, teaching and institutional development at the University of Swat — including the Quality Enhancement Cell.",
};

export default function LeadershipRoutePage() {
  return (
    <PagePlaceholder
      title="Academic Leadership & Experience"
      blurb="Leading academic quality, teaching and institutional development at the University of Swat. Content is saved — the design follows."
    />
  );
}
