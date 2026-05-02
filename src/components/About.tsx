import { CheckCircle2 } from "lucide-react";

const points = [
  "Family-owned and locally trusted since 1998",
  "Certified master plumbers on every job",
  "Upfront pricing — no hidden fees, ever",
];

export function About() {
  return (
    <section id="about" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-primary shadow-glow">
            <div className="flex h-full w-full items-center justify-center p-12">
              <div className="text-center text-primary-foreground">
                <div className="font-display text-7xl font-bold">25+</div>
                <div className="mt-2 text-lg font-medium opacity-90">Years of service</div>
                <div className="mx-auto mt-8 h-px w-16 bg-primary-foreground/40" />
                <div className="mt-8 font-display text-6xl font-bold">12k+</div>
                <div className="mt-2 text-lg font-medium opacity-90">Happy customers</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-card p-5 shadow-card ring-1 ring-border/60 sm:block">
            <div className="font-display text-3xl font-bold text-primary">A+</div>
            <div className="text-xs text-muted-foreground">BBB Rating</div>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Walters
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Two generations of plumbing craftsmanship
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            What started as a one-truck operation in 1998 is now the region's most trusted
            plumbing & heating company. We treat every home like our own — showing up on
            time, communicating clearly, and standing behind every repair.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
