import type { Metadata } from "next";
import { profile } from "@/config/profile";
import { pageMetadata } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = pageMetadata(
  "À propos",
  "Profil professionnel de Mubaraka Gembesse C'arrive, développeur backend Python et Django.",
  "/about"
);

export default function AboutPage() {
  return (
    <section className="section-padding bg-mist dark:bg-slate-950">
      <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <SectionHeading
          eyebrow="À propos"
          title="Développeur backend passionné par les systèmes utiles, sûrs et maintenables."
          description={profile.summary}
        />
        <div className="card p-6 sm:p-8">
          <p className="leading-8 text-slate-600 dark:text-slate-300">{profile.about}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Python & Django",
              "Django REST Framework",
              "APIs REST sécurisées",
              "PostgreSQL & modélisation",
              "Architecture logicielle",
              "Docker, cloud et déploiement"
            ].map((item) => (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 font-semibold text-night dark:border-slate-800 dark:bg-slate-900 dark:text-white" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
