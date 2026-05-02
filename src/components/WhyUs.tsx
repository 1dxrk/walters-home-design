import { ShieldCheck, Clock4, BadgeDollarSign, ThumbsUp } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully certified pros with full liability coverage." },
  { icon: Clock4, title: "24/7 Emergency", desc: "Real people answer day or night. No call centers." },
  { icon: BadgeDollarSign, title: "Transparent Pricing", desc: "Flat-rate quotes before any work begins." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "If it's not right, we fix it — at no cost." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            The Walters difference
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border bg-card p-7 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent">
                <it.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
