import {
  Siren,
  Flame,
  Droplets,
  Search,
  Thermometer,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Siren,
    title: "Emergency Plumbing",
    desc: "24/7 rapid response for burst pipes, floods, and urgent leaks.",
  },
  {
    icon: Flame,
    title: "Water Heater Service",
    desc: "Installation, repair, and replacement for tank & tankless systems.",
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    desc: "Hydro-jetting and snaking to clear stubborn clogs for good.",
  },
  {
    icon: Search,
    title: "Leak Detection",
    desc: "Non-invasive technology pinpoints hidden leaks fast.",
  },
  {
    icon: Thermometer,
    title: "Heating Systems",
    desc: "Boiler, furnace, and radiant heat install and maintenance.",
  },
  {
    icon: Wrench,
    title: "Repairs & Remodels",
    desc: "Faucets, fixtures, and full bathroom & kitchen plumbing.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Full-service plumbing & heating
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From small fixes to major installs, our certified team handles it all with
            transparent pricing and a satisfaction guarantee.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
            >
              <div className="absolute right-5 top-5 text-muted-foreground/30 transition-colors group-hover:text-primary">
                <ArrowUpRight className="h-5 w-5" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-soft">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
