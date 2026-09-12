import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <article className="card p-6 hover:-translate-y-1 hover:border-electric/40 dark:hover:border-fresh/40" key={service.title}>
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-blue-50 text-electric dark:bg-green-400/10 dark:text-fresh">
              <Icon aria-hidden="true" size={24} />
            </div>
            <h2 className="mt-5 text-xl font-bold text-night dark:text-white">{service.title}</h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
          </article>
        );
      })}
    </div>
  );
}
