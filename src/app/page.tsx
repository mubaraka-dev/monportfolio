import { ArrowRight } from "lucide-react";
import { AboutPreview } from "@/components/common/about-preview";
import { ExperienceTimeline } from "@/components/common/experience-timeline";
import { ServicesGrid } from "@/components/common/services-grid";
import { Hero } from "@/components/home/hero";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <section className="section-padding bg-mist dark:bg-slate-900/45">
        <div className="container-page">
          <SectionHeading
            eyebrow="Compétences"
            title="Technologies principales"
            description="Un ensemble de compétences organisé autour du backend, de l'API design, des bases de données et du déploiement."
          />
          <div className="mt-10">
            <SkillsGrid />
          </div>
        </div>
      </section>
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Projets"
              title="Solutions numériques construites autour de vrais besoins métier"
              description="Une sélection de projets représentatifs: SaaS pharmacie, identité centralisée et formation numérique."
            />
            <LinkButton href="/projects" variant="outline">
              Tous les projets
              <ArrowRight aria-hidden="true" size={18} />
            </LinkButton>
          </div>
          <div className="mt-10">
            <ProjectsGrid />
          </div>
        </div>
      </section>
      <section className="section-padding bg-mist dark:bg-slate-900/45">
        <div className="container-page">
          <SectionHeading
            eyebrow="Expérience"
            title="Parcours professionnel"
            description="Des expériences orientées développement logiciel, backend, bases de données et produits numériques."
          />
          <div className="mt-10 max-w-5xl">
            <ExperienceTimeline />
          </div>
        </div>
      </section>
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services"
            title="Services professionnels"
            description="Accompagnement technique pour concevoir, développer et déployer des applications web fiables."
          />
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </div>
      </section>
    </>
  );
}
