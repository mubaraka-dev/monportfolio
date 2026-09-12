import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";

export function EducationList() {
  return (
    <div className="grid gap-5">
      {education.map((item) => (
        <article className="card p-6" key={item.program}>
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-blue-50 text-electric dark:bg-green-400/10 dark:text-fresh">
              <GraduationCap aria-hidden="true" size={28} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-night dark:text-white">{item.school}</h2>
                  <p className="mt-1 font-semibold text-electric dark:text-fresh">{item.program}</p>
                </div>
                <p className="rounded-md bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {item.startDate} - {item.endDate}
                </p>
              </div>
              <dl className="mt-5 grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                <div>
                  <dt className="font-semibold text-night dark:text-white">Faculté</dt>
                  <dd className="mt-1">{item.faculty}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-night dark:text-white">Département</dt>
                  <dd className="mt-1">{item.department}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="font-semibold text-night dark:text-white">Localisation</dt>
                  <dd className="mt-1">{item.location}</dd>
                </div>
              </dl>
              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
