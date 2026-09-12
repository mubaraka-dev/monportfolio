import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/common/experience-timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Expérience",
  "Expériences professionnelles et projets entrepreneuriaux de Mubaraka Gembesse C'arrive.",
  "/experience"
);

export default function ExperiencePage() {
  return (
    <section className="section-padding bg-mist dark:bg-slate-950">
      <div className="container-page">
        <SectionHeading
          eyebrow="Expérience"
          title="Timeline professionnelle"
          description="Une base claire et modifiable pour ajouter les expériences de développement logiciel, formation, backend, bases de données et projets entrepreneuriaux."
        />
        <div className="mt-10 max-w-5xl">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
