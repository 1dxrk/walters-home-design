import { Wrench, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold">Walters</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Plumbing & Heating
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Two generations of trusted plumbing & heating service for homes and small
              businesses across the region.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-muted-foreground shadow-card transition hover:text-primary"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[["Services", "#services"], ["About", "#about"], ["Reviews", "#reviews"], ["Contact", "#contact"]].map(
                ([l, h]) => (
                  <li key={h}>
                    <a href={h} className="hover:text-primary">{l}</a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>(555) 123-4567</li>
              <li>hello@waltersph.com</li>
              <li>Mon–Fri 7am–7pm</li>
              <li>24/7 Emergency Service</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Walters Plumbing & Heating. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
