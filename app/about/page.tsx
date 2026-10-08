import type { Metadata } from "next";
import { AboutClosing } from "@/components/about-closing";
import { AboutGlobal } from "@/components/about-global";
import { AboutHeader } from "@/components/about-header";
import { AboutLeadership } from "@/components/about-leadership";
import { AboutProfile } from "@/components/about-profile";
import { AboutRoles, Journey } from "@/components/about-journey";
import { AboutSelectedResearch } from "@/components/about-selected-research";
import { ClassroomCommunity } from "@/components/classroom-community";
import { ResearchInterests } from "@/components/research-interests";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dr. Muhammad Tariq Yousafzai — Associate Professor at the Centre for Management and Commerce and Director of the Quality Enhancement Cell, University of Swat. Academic journey, research interests and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutProfile />
      <AboutRoles />
      <Journey />
      <ResearchInterests />
      <ClassroomCommunity />
      <AboutSelectedResearch />
      <AboutLeadership />
      <AboutGlobal />
      <AboutClosing />
    </>
  );
}
