import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request received! We'll call you within 15 minutes.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Request service today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fill out the form and we'll be in touch within 15 minutes during business hours.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required placeholder="Jane Doe" className="h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" required type="tel" placeholder="(555) 123-4567" className="h-11 rounded-xl" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" required type="email" placeholder="you@email.com" className="h-11 rounded-xl" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <Select>
                    <SelectTrigger className="h-11 rounded-xl">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency Plumbing</SelectItem>
                      <SelectItem value="water-heater">Water Heater</SelectItem>
                      <SelectItem value="drain">Drain Cleaning</SelectItem>
                      <SelectItem value="leak">Leak Detection</SelectItem>
                      <SelectItem value="heating">Heating System</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="msg">Tell us what's going on</Label>
                  <Textarea id="msg" rows={4} placeholder="Brief description..." className="rounded-xl" />
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-7 h-12 w-full rounded-full text-base shadow-glow">
                Request Service
              </Button>
            </form>
          </div>

          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: Phone, label: "Call us anytime", value: "(555) 123-4567", href: "tel:5551234567" },
              { icon: Mail, label: "Email", value: "hello@waltersph.com", href: "mailto:hello@waltersph.com" },
              { icon: MapPin, label: "Service area", value: "Greater Metro Region" },
              { icon: Clock, label: "Hours", value: "Mon–Fri 7am–7pm · 24/7 Emergency" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href ?? "#"}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-primary/30"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary shadow-soft">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-0.5 font-semibold">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Service area map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.05%2C40.68%2C-73.88%2C40.82&amp;layer=mapnik"
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
