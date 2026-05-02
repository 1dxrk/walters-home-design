import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    role: "Homeowner, Maple Heights",
    text: "Pipe burst at 11pm — Walters had a tech at our door in under an hour. Professional, kind, and reasonably priced. Saved our basement.",
  },
  {
    name: "David L.",
    role: "Café Owner",
    text: "They installed a new tankless water heater for our café. Clean install, great communication, zero downtime. Couldn't ask for more.",
  },
  {
    name: "Priya K.",
    role: "Homeowner, Riverside",
    text: "Honest pricing and no upselling. Fixed three things on our plumbing list and explained everything along the way. Found our forever plumber.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Customer Stories
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Loved by neighbors across town
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-accent" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-foreground/85 leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
