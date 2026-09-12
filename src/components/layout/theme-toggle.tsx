"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/theme-provider";
import { cn } from "@/lib/utils";

const options = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Laptop }
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-950" aria-label="Sélection du thème">
      {options.map((option) => {
        const Icon = option.icon;
        const active = theme === option.value;
        return (
          <button
            aria-label={`Thème ${option.label}`}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900",
              active && "bg-electric text-white hover:bg-electric dark:bg-fresh dark:text-night dark:hover:bg-fresh"
            )}
            key={option.value}
            onClick={() => setTheme(option.value)}
            type="button"
            title={option.label}
          >
            <Icon aria-hidden="true" size={17} />
          </button>
        );
      })}
    </div>
  );
}
