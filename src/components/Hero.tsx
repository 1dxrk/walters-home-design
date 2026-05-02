import { ArrowRight, ShieldCheck, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-plumber.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      {/* Flowing water lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/40 blur-3xl animate-float" />
        <div
          className="absolute right-0 top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            24/7 Emergency Service
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Reliable Plumbing &{" "}
            <span className="text-primary">
              Heating
            </span>{" "}
            You Can Trust
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Fast, affordable, and expert service for your home. From leaky faucets to full
            heating system installs — Walters delivers craftsmanship you can count on.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-base shadow-glow">
              <a href="#contact">
                Request Service <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-2 px-7 text-base"
            >
              <a href="#contact">Get a Free Estimate</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              Same-Day Service
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="h-4 w-4 fill-primary text-primary" />
              4.9 / 5 (820 reviews)
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-glow ring-1 ring-border/50">
            <img
              src={heroImg}
              alt="Professional plumber working on a modern piping system"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-card ring-1 ring-border/60 sm:block">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold">25+ yrs</div>
                <div className="text-xs text-muted-foreground">Trusted experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
