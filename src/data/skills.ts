import { Cloud, Code2, Database, GitBranch, LockKeyhole, ServerCog } from "lucide-react";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    description: "Conception de services robustes, sécurisés et maintenables.",
    icon: ServerCog,
    skills: ["Python", "Django", "Django REST Framework", "REST API", "Authentication", "OAuth 2.0", "OpenID Connect", "JWT"]
  },
  {
    title: "Frontend",
    description: "Interfaces modernes, rapides et responsive.",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    title: "Bases de données",
    description: "Modélisation, requêtes SQL et administration applicative.",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQL", "Modélisation de bases de données"]
  },
  {
    title: "DevOps",
    description: "Déploiement, automatisation et exploitation Linux.",
    icon: GitBranch,
    skills: ["Docker", "Docker Compose", "Linux", "Ubuntu Server", "Traefik", "Nginx", "CI/CD", "GitHub Actions"]
  },
  {
    title: "Cloud",
    description: "Hébergement, stockage, DNS et sécurité réseau.",
    icon: Cloud,
    skills: ["AWS S3", "Firebase", "VPS", "DNS", "HTTPS / TLS"]
  },
  {
    title: "Outils",
    description: "Environnement quotidien de développement et documentation d'API.",
    icon: LockKeyhole,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Swagger / OpenAPI", "pgAdmin"]
  }
];
