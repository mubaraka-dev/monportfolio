import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};

export type Experience = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
};

export type Education = {
  school: string;
  faculty: string;
  department: string;
  program: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Project = {
  name: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  status: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};
