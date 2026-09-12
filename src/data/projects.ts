import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Kisinet",
    slug: "kisinet",
    description:
      "Plateforme SaaS de gestion des pharmacies conçue pour centraliser les opérations métier, le stock, les ventes, les abonnements et les analyses.",
    image: "/images/project-kisinet.svg",
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Next.js", "Tailwind CSS", "Docker", "Redis", "AWS S3"],
    features: [
      "Gestion des pharmacies",
      "Gestion des produits et du stock",
      "Ventes, facturation et abonnements",
      "Paiements, membres, rôles et permissions",
      "Analyse d'ordonnances avec IA",
      "Architecture SaaS multi-pharmacies"
    ],
    demo: "https://kisinet.com",
    status: "En développement actif"
  },
  {
    name: "Carri Account",
    slug: "carri-account",
    description:
      "Système centralisé d'identité et d'authentification pensé pour connecter plusieurs applications autour d'un compte unique sécurisé.",
    image: "/images/project-carri-account.svg",
    technologies: ["Python", "Django", "OAuth 2.0", "OpenID Connect", "JWT", "PostgreSQL", "Docker"],
    features: [
      "Single Sign-On",
      "OAuth Authorization Code",
      "PKCE",
      "OpenID Connect",
      "JWT",
      "Gestion de clients OAuth",
      "Authentification centralisée"
    ],
    status: "Prototype avancé"
  },
  {
    name: "Djana Academy",
    slug: "djana-academy",
    description:
      "Plateforme consacrée à la formation numérique, avec gestion des contenus, apprenants, cours, ressources et interactions pédagogiques.",
    image: "/images/project-djana-academy.svg",
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "Next.js", "Docker", "REST API"],
    features: [
      "Gestion des formations",
      "Gestion des utilisateurs",
      "Ressources pédagogiques",
      "Paiements et abonnements",
      "APIs pour applications web et mobiles"
    ],
    status: "En construction"
  }
];
