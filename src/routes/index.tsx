import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Walters Plumbing & Heating — Reliable Service You Can Trust" },
      {
        name: "description",
        content:
          "Walters Plumbing & Heating offers 24/7 emergency plumbing, water heater, drain, and heating services. Licensed, insured, and trusted for 25+ years.",
      },
      { property: "og:title", content: "Walters Plumbing & Heating" },
      {
        property: "og:description",
        content: "24/7 emergency plumbing & heating service. Fast, affordable, expert care.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
