import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 shadow-glow sm:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Need a plumber fast? We're here to help.
              </h2>
              <p className="mt-3 text-lg text-primary-foreground/85">
                Same-day service available. Call now or book online in under a minute.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-12 rounded-full bg-card px-7 text-base text-foreground hover:bg-card/90"
              >
                <a href="tel:5551234567">
                  <Phone className="mr-2 h-4 w-4" /> Call (555) 123-4567
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-foreground px-7 text-base text-background hover:bg-foreground/90"
              >
                <a href="#contact">
                  <Calendar className="mr-2 h-4 w-4" /> Book Service
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
