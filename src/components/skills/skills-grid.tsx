import { skillCategories } from "@/data/skills";
import { BadgeList } from "@/components/ui/badge-list";

export function SkillsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {skillCategories.map((category) => {
        const Icon = category.icon;
        return (
          <article className="card p-6 hover:-translate-y-1 hover:border-electric/40 dark:hover:border-fresh/40" key={category.title}>
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-blue-50 text-electric dark:bg-green-400/10 dark:text-fresh">
                <Icon aria-hidden="true" size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-night dark:text-white">{category.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{category.description}</p>
              </div>
            </div>
            <div className="mt-6">
              <BadgeList items={category.skills} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
