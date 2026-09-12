import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Projets",
  "Portfolio de projets de Mubaraka Gembesse C'arrive: Kisinet, Carri Account, Djana Academy et autres solutions backend.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <section className="section-padding bg-mist dark:bg-slate-950">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projets"
          title="Portfolio développeur"
          description="Des projets conçus comme des produits réels: architecture backend, APIs, sécurité, bases de données et déploiement."
        />
        <div className="mt-10">
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
}
