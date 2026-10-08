import type { Metadata } from "next";
import { LeadershipAtAGlance, LeadershipHeader } from "@/components/leadership-header";
import { InternationalPerspective, LeadershipCta } from "@/components/leadership-international";
import { LeadershipContributions, LeadershipJourney } from "@/components/leadership-journey";
import { LeadershipPhilosophy, ResearchLeadership, TeachingPillars } from "@/components/leadership-philosophy";
import { CurrentRoles, QualityEnhancementCell } from "@/components/leadership-roles";

export const metadata: Metadata = {
  title: "Academic Leadership",
  description:
    "Academic leadership, teaching and institutional development at the University of Swat — including the Quality Enhancement Cell.",
};

export default function LeadershipRoutePage() {
  return (
    <>
      <LeadershipHeader />
      <LeadershipAtAGlance />
      <CurrentRoles />
      <QualityEnhancementCell />
      <LeadershipJourney />
      <TeachingPillars />
      <LeadershipPhilosophy />
      <ResearchLeadership />
      <InternationalPerspective />
      <LeadershipContributions />
      <LeadershipCta />
    </>
  );
}
