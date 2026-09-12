import type { Metadata } from "next";
import { Download } from "lucide-react";
import { EducationList } from "@/components/common/education-list";
import { ExperienceTimeline } from "@/components/common/experience-timeline";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/config/profile";
import { pageMetadata } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "CV",
  "CV en ligne de Mubaraka Gembesse C'arrive, développeur backend Python et Django.",
  "/resume"
);

export default function ResumePage() {
  return (
    <section className="section-padding bg-mist dark:bg-slate-950">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="CV"
            title="CV structuré"
            description="Une version web lisible du parcours professionnel, des compétences, de la formation et des projets principaux."
          />
          <LinkButton href={profile.resumePath} variant="secondary" download>
            <Download aria-hidden="true" size={18} />
            Télécharger mon CV PDF
          </LinkButton>
        </div>

        <div className="mt-12 grid gap-12">
          <section aria-labelledby="resume-profile" className="card p-6 sm:p-8">
            <h2 id="resume-profile" className="text-2xl font-bold text-night dark:text-white">
              {profile.name}
            </h2>
            <p className="mt-2 font-semibold text-electric dark:text-fresh">{profile.title}</p>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">{profile.summary}</p>
          </section>

          <section aria-labelledby="resume-skills">
            <h2 id="resume-skills" className="mb-6 text-2xl font-bold text-night dark:text-white">
              Compétences
            </h2>
            <SkillsGrid />
          </section>

          <section aria-labelledby="resume-experience">
            <h2 id="resume-experience" className="mb-6 text-2xl font-bold text-night dark:text-white">
              Expérience
            </h2>
            <ExperienceTimeline />
          </section>

          <section aria-labelledby="resume-education">
            <h2 id="resume-education" className="mb-6 text-2xl font-bold text-night dark:text-white">
              Formation
            </h2>
            <EducationList />
          </section>
        </div>
      </div>
    </section>
  );
}
