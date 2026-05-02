import { Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-soft">
            <Wrench className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold">Walters</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Plumbing & Heating
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Services", "#services"],
            ["About", "#about"],
            ["Why Us", "#why"],
            ["Reviews", "#reviews"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:5551234567"
            className="hidden items-center gap-2 text-sm font-semibold text-foreground sm:flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            (555) 123-4567
          </a>
          <Button asChild size="sm" className="rounded-full">
            <a href="#contact">Book Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
