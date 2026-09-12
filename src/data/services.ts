import { BookOpenCheck, Code2, Database, Rocket, ServerCog, ShieldCheck } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Backend Development",
    description: "Développement d'applications backend robustes avec Python, Django et Django REST Framework.",
    icon: ServerCog
  },
  {
    title: "API Development",
    description: "Conception et développement d'API REST sécurisées, documentées et prêtes à évoluer.",
    icon: ShieldCheck
  },
  {
    title: "Database Design",
    description: "Conception, modélisation et administration de bases de données relationnelles.",
    icon: Database
  },
  {
    title: "Web Applications",
    description: "Développement d'applications web modernes avec Next.js, React, Tailwind CSS et Django.",
    icon: Code2
  },
  {
    title: "Deployment",
    description: "Déploiement d'applications avec Docker, VPS, reverse proxy, HTTPS et services cloud.",
    icon: Rocket
  },
  {
    title: "Technical Training",
    description: "Formation en programmation, Python, bases de données et technologies numériques.",
    icon: BookOpenCheck
  }
];
