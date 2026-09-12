import { CloudCog, Database, Layers3, ShieldCheck } from "lucide-react";
import { profile } from "@/config/profile";
import { SectionHeading } from "@/components/ui/section-heading";

const points = [
  { label: "Backend", icon: Layers3 },
  { label: "API REST", icon: ShieldCheck },
  { label: "Bases de données", icon: Database },
  { label: "Cloud & Docker", icon: CloudCog }
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="À propos"
          title="Un profil backend orienté systèmes fiables et solutions métier."
          description={profile.summary}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <article className="card p-6" key={point.label}>
                <Icon className="text-electric dark:text-fresh" aria-hidden="true" size={28} />
                <h2 className="mt-5 text-lg font-bold text-night dark:text-white">{point.label}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Une approche structurée pour construire des applications lisibles, sécurisées et évolutives.
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
