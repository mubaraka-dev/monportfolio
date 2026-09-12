import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Kisinet",
    position: "Software Developer / Backend Developer",
    location: "Kinshasa, République Démocratique du Congo",
    startDate: "2025",
    endDate: "Présent",
    description:
      "Conception d'une plateforme SaaS de gestion des pharmacies avec architecture backend Django, API REST, gestion multi-pharmacies, authentification et intégration de services métier.",
    technologies: ["Python", "Django", "DRF", "PostgreSQL", "Next.js", "Docker", "Redis", "AWS S3"]
  },
  {
    company: "Carri Account",
    position: "Backend Developer",
    location: "Kinshasa, République Démocratique du Congo",
    startDate: "2025",
    endDate: "Présent",
    description:
      "Développement d'un système centralisé d'identité numérique et d'authentification avec OAuth 2.0, OpenID Connect, PKCE, JWT et gestion de clients applicatifs.",
    technologies: ["Python", "Django", "OAuth 2.0", "OpenID Connect", "JWT", "PostgreSQL", "Docker"]
  },
  {
    company: "Djana Academy",
    position: "Développeur logiciel",
    location: "Kinshasa, République Démocratique du Congo",
    startDate: "2024",
    endDate: "Présent",
    description:
      "Contribution à une plateforme de formation numérique avec modules pédagogiques, gestion d'utilisateurs, paiements, contenus et services backend.",
    technologies: ["Django", "REST API", "PostgreSQL", "Next.js", "Docker"]
  }
];
