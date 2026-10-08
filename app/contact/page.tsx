import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    "Research collaboration, speaking invitations and academic partnerships with Dr. Muhammad Tariq Yousafzai.",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      title="Contact & Collaboration"
      blurb="Let's build meaningful academic connections — research collaboration, entrepreneurship education and speaking invitations. Content is saved — the design follows."
    />
  );
}
