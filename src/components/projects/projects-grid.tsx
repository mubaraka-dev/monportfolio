import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
