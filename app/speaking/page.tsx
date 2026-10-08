import type { Metadata } from "next";
import { EngagementFormats } from "@/components/engagement-formats";
import { FeaturedSpeaking } from "@/components/featured-speaking";
import { SpeakingArchive } from "@/components/speaking-archive";
import { SpeakingHeader } from "@/components/speaking-header";
import { SpeakingIntro } from "@/components/speaking-intro";
import { SpeakingInvite, SpeakingPhilosophy } from "@/components/speaking-philosophy";
import { SpeakingResearchLink } from "@/components/speaking-research-link";
import { SpeakingTopics } from "@/components/speaking-topics";

export const metadata: Metadata = {
  title: "Speaking & Engagement",
  description:
    "Seminars, guest lectures and public engagement by Dr. Muhammad Tariq Yousafzai on entrepreneurship, innovation and sustainability.",
};

export default function SpeakingRoutePage() {
  return (
    <>
      <SpeakingHeader />
      <SpeakingIntro />
      <FeaturedSpeaking />
      <SpeakingTopics />
      <EngagementFormats />
      <SpeakingResearchLink />
      <SpeakingArchive />
      <SpeakingPhilosophy />
      <SpeakingInvite />
    </>
  );
}
