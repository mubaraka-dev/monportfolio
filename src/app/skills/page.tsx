import type { Metadata } from "next";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Compétences",
  "Compétences techniques de Mubaraka Gembesse C'arrive: backend, frontend, bases de données, DevOps, cloud et outils.",
  "/skills"
);

export default function SkillsPage() {
  return (
    <section className="section-padding bg-mist dark:bg-slate-950">
      <div className="container-page">
        <SectionHeading
          eyebrow="Compétences techniques"
          title="Une stack moderne pour construire des applications solides"
          description="Les compétences sont présentées par familles plutôt que par pourcentages arbitraires, afin de montrer clairement les domaines d'intervention."
        />
        <div className="mt-10">
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}
