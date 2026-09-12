import Image from "next/image";
import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { profile } from "@/config/profile";
import { LinkButton } from "@/components/ui/button";

export function Hero() {
  const emailHref = profile.email ? `mailto:${profile.email}` : "/contact";

  return (
    <section className="relative overflow-hidden bg-mist bg-grid-light bg-[length:42px_42px] dark:bg-slate-950 dark:bg-grid-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.14),transparent_30%)]" />
      <div className="container-page relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="fade-in max-w-3xl">
          <p className="eyebrow">Software Developer / Backend Developer</p>
          <h1 className="mt-5 text-4xl font-bold tracking-normal text-night dark:text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-electric dark:text-fresh sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Je conçois des applications web robustes, des API REST sécurisées et des solutions numériques adaptées
            aux besoins des entreprises.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/projects">Voir mes projets</LinkButton>
            <LinkButton href={profile.resumePath} variant="outline" download>
              <Download aria-hidden="true" size={18} />
              Télécharger mon CV
            </LinkButton>
            <LinkButton href="/contact" variant="secondary">
              <Send aria-hidden="true" size={18} />
              Me contacter
            </LinkButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <a className="inline-flex items-center gap-2 transition hover:text-electric dark:hover:text-fresh" href={profile.github} target="_blank">
              <Github aria-hidden="true" size={19} />
              GitHub
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-electric dark:hover:text-fresh" href={profile.linkedin || "/contact"}>
              <Linkedin aria-hidden="true" size={19} />
              LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-electric dark:hover:text-fresh" href={emailHref}>
              <Mail aria-hidden="true" size={19} />
              Email
            </a>
          </div>
        </div>

        <div className="fade-in flex justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <Image
              alt={`Photo professionnelle de ${profile.name}`}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 384px, 90vw"
              src="/images/profile.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white/92 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/88">
              <p className="text-sm font-bold text-night dark:text-white">Backend Developer</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Python, Django, REST APIs, PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
