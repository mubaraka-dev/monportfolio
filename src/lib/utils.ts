import type { Metadata } from "next";
import { profile } from "@/config/profile";

const baseUrl = profile.website;

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path = "/") {
  return new URL(path, baseUrl).toString();
}

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: profile.name,
      locale: "fr_CD",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
