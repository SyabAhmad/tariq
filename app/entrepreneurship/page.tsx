import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Entrepreneurship & Impact",
  description:
    "Entrepreneurship education, community entrepreneurship, sustainable value creation and the impact model behind Dr. Tariq Yousafzai's work.",
};

export default function EntrepreneurshipPage() {
  return (
    <PagePlaceholder
      title="Entrepreneurship & Impact"
      blurb="Turning entrepreneurial thinking into meaningful impact — education, community enterprise and sustainable value creation. Content is saved — the design follows."
    />
  );
}
