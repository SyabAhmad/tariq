import type { Metadata } from "next";
import { CollaborationAreas } from "@/components/collaboration-areas";
import { ContactForm } from "@/components/contact-form";
import { ContactHeader } from "@/components/contact-header";
import { DirectContact } from "@/components/direct-contact";
import { ResearchCollaboration } from "@/components/research-collaboration";
import { FinalStatement, LocationSection, SpeakingInvitations } from "@/components/speaking-invitations";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    "Research collaboration, entrepreneurship education, speaking invitations and academic partnerships with Dr. Muhammad Tariq Yousafzai.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <CollaborationAreas />
      <ContactForm />
      <DirectContact />
      <ResearchCollaboration />
      <SpeakingInvitations />
      <LocationSection />
      <FinalStatement />
    </>
  );
}
