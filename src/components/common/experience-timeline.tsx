import { experiences } from "@/data/experience";
import { BadgeList } from "@/components/ui/badge-list";

export function ExperienceTimeline() {
  return (
    <div className="relative grid gap-6 before:absolute before:left-4 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-slate-200 dark:before:bg-slate-800">
      {experiences.map((experience) => (
        <article className="relative pl-12" key={`${experience.company}-${experience.position}`}>
          <span className="absolute left-2 top-3 h-5 w-5 rounded-full border-4 border-white bg-electric dark:border-slate-950 dark:bg-fresh" />
          <div className="card p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-night dark:text-white">{experience.position}</h2>
                <p className="mt-1 font-semibold text-electric dark:text-fresh">{experience.company}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{experience.location}</p>
              </div>
              <p className="rounded-md bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">{experience.description}</p>
            <div className="mt-5">
              <BadgeList items={experience.technologies} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
