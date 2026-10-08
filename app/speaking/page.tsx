import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Speaking & Engagement",
  description:
    "Seminars, guest lectures and public engagement by Dr. Muhammad Tariq Yousafzai on entrepreneurship, innovation and sustainability.",
};

export default function SpeakingRoutePage() {
  return (
    <PagePlaceholder
      title="Speaking & Engagement"
      blurb="Ideas that move beyond the classroom — speaking areas, engagement formats and a verified archive of engagements. Content is saved — the design follows."
    />
  );
}
