import type { Metadata } from "next";
import { ServicesGrid } from "@/components/common/services-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Services",
  "Services professionnels proposés par Mubaraka Gembesse C'arrive: backend, API, bases de données, web apps, déploiement et formation.",
  "/services"
);

export default function ServicesPage() {
  return (
    <section className="section-padding bg-mist dark:bg-slate-950">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="Expertise technique pour projets web et backend"
          description="Des services adaptés aux besoins des entreprises, startups, projets freelance et formations techniques."
        />
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}
