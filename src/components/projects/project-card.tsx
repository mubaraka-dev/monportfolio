import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { BadgeList } from "@/components/ui/badge-list";
import { LinkButton } from "@/components/ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card overflow-hidden hover:-translate-y-1 hover:border-electric/40 dark:hover:border-fresh/40">
      <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-900">
        <Image alt={`Aperçu du projet ${project.name}`} className="object-cover" fill src={project.image} />
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-electric dark:text-fresh">{project.status}</p>
            <h2 className="mt-2 text-2xl font-bold text-night dark:text-white">{project.name}</h2>
          </div>
          <div className="flex gap-2">
            {project.github ? (
              <Link aria-label={`GitHub ${project.name}`} className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:text-electric dark:border-slate-800 dark:text-slate-300 dark:hover:text-fresh" href={project.github} target="_blank">
                <Github aria-hidden="true" size={18} />
              </Link>
            ) : null}
            {project.demo ? (
              <Link aria-label={`Démo ${project.name}`} className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:text-electric dark:border-slate-800 dark:text-slate-300 dark:hover:text-fresh" href={project.demo} target="_blank">
                <ExternalLink aria-hidden="true" size={18} />
              </Link>
            ) : null}
          </div>
        </div>
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
        <ul className="mt-5 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
          {project.features.slice(0, 4).map((feature) => (
            <li className="flex gap-2" key={feature}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fresh" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <BadgeList items={project.technologies.slice(0, 7)} />
        </div>
        <div className="mt-6">
          <LinkButton className="w-full sm:w-auto" href={project.demo || project.github || "/contact"} variant="outline">
            Voir le projet
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
