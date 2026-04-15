import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const included = [
  "95+ Google PageSpeed score (guaranteed)",
  "Light & dark mode",
  "Google Analytics integration",
  "Contact form routed to your email",
  "Call-now buttons (mobile-optimised)",
  "Gallery section for past work",
  "Testimonials section",
];

const plans = [
  {
    name: "Landing Page",
    pages: "1 page",
    price: "€600",
    featured: false,
  },
  {
    name: "Starter Site",
    pages: "1–5 pages",
    price: "€800",
    featured: true,
  },
  {
    name: "Growth Site",
    pages: "5–12 pages",
    price: "€1,200",
    featured: false,
  },
];

interface Pricing22Props {
  className?: string;
}

const Pricing22 = ({ className }: Pricing22Props) => {
  return (
    <section id="pricing" className={cn("py-16 bg-background", className)}>
      <div className="container mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Pricing
          </h2>
          <p className="mx-auto max-w-xl leading-snug font-medium text-balance text-muted-foreground">
            Simple, transparent pricing. No hidden fees, no ongoing costs —
            just a complete website built right.
          </p>
        </div>

        <div className="mt-8 grid gap-6 text-start md:mt-12 lg:mt-20 lg:grid-cols-3 px-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.featured ? "border-4 border-primary lg:h-[110%]" : ""}
            >
              <CardContent className="flex h-full flex-col justify-between gap-6 p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.pages}</p>
                  <div className="text-4xl font-bold">{plan.price}</div>
                </div>

                <div className="space-y-3">
                  {included.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-1.5 text-muted-foreground"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  <a href="#contact">Get a Free Quote</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 lg:mt-16 text-center text-sm text-muted-foreground">
          All packages include dark mode, Google Analytics, contact forms, call
          buttons, and a 95+ PageSpeed score — guaranteed.
        </p>
      </div>
    </section>
  );
};

export { Pricing22 };
