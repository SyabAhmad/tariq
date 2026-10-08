import type { Metadata } from "next";
import { CommunityEntrepreneurship } from "@/components/entre-community";
import { EntrepreneurialCapacity } from "@/components/entre-capacity";
import { EntrepreneurialClosing } from "@/components/entre-closing";
import { EntrepreneurialEducation } from "@/components/entre-education";
import { EntrepreneurialPhilosophy } from "@/components/entre-philosophy";
import { EntrepreneurshipHeader } from "@/components/entre-header";
import { FeaturedEngagement } from "@/components/entre-engagement";
import { ImpactModel } from "@/components/entre-impact-model";
import { ImpactAreas } from "@/components/entre-impact-areas";
import { ResearchToImpactTimeline } from "@/components/entre-timeline";
import { SustainableEntrepreneurship } from "@/components/entre-sustainable";

export const metadata: Metadata = {
  title: "Entrepreneurship & Impact",
  description:
    "Entrepreneurship education, community entrepreneurship, sustainable and circular-economy research, and the impact model behind Dr. Tariq Yousafzai's work.",
};

export default function EntrepreneurshipPage() {
  return (
    <>
      <EntrepreneurshipHeader />
      <EntrepreneurialPhilosophy />
      <EntrepreneurialEducation />
      <EntrepreneurialCapacity />
      <CommunityEntrepreneurship />
      <SustainableEntrepreneurship />
      <ImpactModel />
      <ResearchToImpactTimeline />
      <ImpactAreas />
      <FeaturedEngagement />
      <EntrepreneurialClosing />
    </>
  );
}
