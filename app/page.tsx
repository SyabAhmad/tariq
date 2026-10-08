import { AcademicImpact } from "@/components/academic-impact";
import { FeaturedResearch } from "@/components/featured-research";
import { FinalCta } from "@/components/final-cta";
import { GlobalPerspective } from "@/components/global-perspective";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { LatestResearch } from "@/components/latest-research";
import { Leadership } from "@/components/leadership";
import { Philosophy } from "@/components/philosophy";
import { ResearchAreas } from "@/components/research-areas";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Speaking } from "@/components/speaking";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Intro />
        <ResearchAreas />
        <Philosophy />
        <FeaturedResearch />
        <AcademicImpact />
        <Leadership />
        <GlobalPerspective />
        <Speaking />
        <LatestResearch />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
