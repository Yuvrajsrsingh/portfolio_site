import type { Metadata } from "next";
import Container from "@/components/container";
import { Header } from "@/components/header";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";
import { DottedSeparator } from "@/components/separator";
import { Companies } from "@/components/companies";
import { Certifications } from "@/components/certifications";
import { Achievements } from "@/components/achievements";
import { Education } from "@/components/education";
import { WorkWithMe } from "@/components/work-with-me";
import { portfolioConfig } from "@/data/portfolio-config";

export const metadata: Metadata = {
  title: portfolioConfig.personal.name,
  description: portfolioConfig.siteMetadata.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <Container>
      <Header />
      <DottedSeparator className="my-10" />
      <Skills />
      <DottedSeparator className="my-10" />
      <Companies />
      <DottedSeparator className="my-10" />
      <Work />
      <DottedSeparator className="my-10" />
      <Certifications />
      <DottedSeparator className="my-10" />
      <Achievements />
      <DottedSeparator className="my-10" />
      <Education />
      <DottedSeparator className="my-10" />
      <WorkWithMe />
      <DottedSeparator className="my-10" />
    </Container>
  );
}
