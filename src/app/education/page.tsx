import type { Metadata } from "next";
import { EducationList } from "@/components/common/education-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/utils";

export const metadata: Metadata = pageMetadata(
  "Formation",
  "Formation académique de Mubaraka Gembesse C'arrive à l'Université de Kinshasa.",
  "/education"
);

export default function EducationPage() {
  return (
    <section className="section-padding bg-mist dark:bg-slate-950">
      <div className="container-page">
        <SectionHeading
          eyebrow="Formation académique"
          title="Master en Informatique à l'Université de Kinshasa"
          description="Parcours académique orienté informatique, développement logiciel, systèmes et bases de données."
        />
        <div className="mt-10 max-w-5xl">
          <EducationList />
        </div>
      </div>
    </section>
  );
}
