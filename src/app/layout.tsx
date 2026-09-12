import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Analytics } from "@/components/layout/analytics";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { profile } from "@/config/profile";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: {
    default: "Mubaraka Gembesse C'arrive | Backend Developer",
    template: "%s | Mubaraka Gembesse C'arrive"
  },
  description:
    "Portfolio professionnel de Mubaraka Gembesse C'arrive, développeur backend spécialisé en Python, Django, Django REST Framework, PostgreSQL et développement d'API REST.",
  keywords: profile.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: absoluteUrl("/")
  },
  openGraph: {
    title: "Mubaraka Gembesse C'arrive | Backend Developer",
    description:
      "Portfolio professionnel de Mubaraka Gembesse C'arrive, développeur backend spécialisé en Python, Django, Django REST Framework, PostgreSQL et développement d'API REST.",
    url: absoluteUrl("/"),
    siteName: profile.name,
    locale: "fr_CD",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubaraka Gembesse C'arrive | Backend Developer",
    description:
      "Portfolio professionnel de Mubaraka Gembesse C'arrive, développeur backend spécialisé en Python, Django, Django REST Framework, PostgreSQL et développement d'API REST."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Backend Developer",
  url: profile.website,
  sameAs: [profile.github, profile.linkedin].filter(Boolean),
  knowsAbout: profile.keywords,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kinshasa",
    addressCountry: "CD"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
