import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-padding bg-mist dark:bg-slate-950">
      <div className="container-page text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-bold text-night dark:text-white">Page introuvable</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-300">
          La page demandée n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-8">
          <LinkButton href="/">Retour à l&apos;accueil</LinkButton>
        </div>
      </div>
    </section>
  );
}
