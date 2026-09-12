import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-electric text-white shadow-glow hover:bg-blue-700 dark:bg-fresh dark:text-night dark:hover:bg-green-400",
  secondary:
    "bg-night text-white hover:bg-slate-800 dark:bg-cloud dark:text-night dark:hover:bg-white",
  ghost: "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900",
  outline:
    "border border-slate-300 bg-white text-slate-800 hover:border-electric hover:text-electric dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-fresh dark:hover:text-fresh"
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
};

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export function LinkButton({ className, variant = "primary", ...props }: LinkButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
