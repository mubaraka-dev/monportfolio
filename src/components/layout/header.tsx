"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/config/profile";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LinkButton } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/78">
      <nav aria-label="Navigation principale" className="container-page flex min-h-20 items-center justify-between gap-4">
        <Link className="group flex items-center gap-3" href="/" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-night text-sm font-bold text-white shadow-soft dark:bg-fresh dark:text-night">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-bold leading-tight text-night group-hover:text-electric dark:text-white dark:group-hover:text-fresh sm:block">
            {profile.shortName}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-night dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white",
                  active && "bg-slate-100 text-electric dark:bg-slate-900 dark:text-fresh"
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <LinkButton href={profile.resumePath} variant="secondary" download>
            <Download aria-hidden="true" size={17} />
            Télécharger mon CV
          </LinkButton>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-night dark:border-slate-800 dark:bg-slate-950 dark:text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="container-page grid gap-2 py-4">
            {navigation.map((item) => (
              <Link
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-slate-200 pt-4 dark:border-slate-800 sm:flex-row sm:items-center">
              <ThemeToggle />
              <LinkButton className="w-full sm:w-auto" href={profile.resumePath} variant="secondary" download>
                <Download aria-hidden="true" size={17} />
                Télécharger mon CV
              </LinkButton>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
