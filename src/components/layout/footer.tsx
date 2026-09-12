import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "@/config/profile";

export function Footer() {
  const year = new Date().getFullYear();
  const emailHref = profile.email ? `mailto:${profile.email}` : "/contact";

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-page flex flex-col gap-5 py-8 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>© {year} {profile.name}. Tous droits réservés.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link className="inline-flex items-center gap-2 hover:text-electric dark:hover:text-fresh" href={profile.github} target="_blank">
            <Github aria-hidden="true" size={17} />
            GitHub
          </Link>
          <Link className="inline-flex items-center gap-2 hover:text-electric dark:hover:text-fresh" href={profile.linkedin || "/contact"}>
            <Linkedin aria-hidden="true" size={17} />
            LinkedIn
          </Link>
          <Link className="inline-flex items-center gap-2 hover:text-electric dark:hover:text-fresh" href={emailHref}>
            <Mail aria-hidden="true" size={17} />
            Email
          </Link>
          <span className="text-slate-400">Built with Next.js & Firebase</span>
        </div>
      </div>
    </footer>
  );
}
