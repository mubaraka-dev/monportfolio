import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { profile } from "@/config/profile";
import { pageMetadata } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Contacter Mubaraka Gembesse C'arrive pour une opportunité professionnelle, freelance, stage ou partenariat.",
  "/contact"
);

export default function ContactPage() {
  return (
    <section className="section-padding bg-mist dark:bg-slate-950">
      <div className="container-page grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Discutons d'une opportunité ou d'un projet"
            description="Pour une mission backend, un projet web, une opportunité professionnelle ou une collaboration technique."
          />
          <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <p className="inline-flex items-center gap-3">
              <MapPin aria-hidden="true" className="text-electric dark:text-fresh" size={18} />
              {profile.location}
            </p>
            <Link className="inline-flex items-center gap-3 hover:text-electric dark:hover:text-fresh" href={profile.email ? `mailto:${profile.email}` : "#"}>
              <Mail aria-hidden="true" className="text-electric dark:text-fresh" size={18} />
              {profile.email || "Email à compléter"}
            </Link>
            <p className="inline-flex items-center gap-3">
              <Phone aria-hidden="true" className="text-electric dark:text-fresh" size={18} />
              {profile.phone || "Téléphone à compléter"}
            </p>
            <Link className="inline-flex items-center gap-3 hover:text-electric dark:hover:text-fresh" href={profile.github} target="_blank">
              <Github aria-hidden="true" className="text-electric dark:text-fresh" size={18} />
              GitHub
            </Link>
            <Link className="inline-flex items-center gap-3 hover:text-electric dark:hover:text-fresh" href={profile.linkedin || "#"}>
              <Linkedin aria-hidden="true" className="text-electric dark:text-fresh" size={18} />
              {profile.linkedin || "LinkedIn à compléter"}
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
