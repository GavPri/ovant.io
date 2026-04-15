"use client";

import { BarChart2, Mail, Moon, Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Feature101Props {
  className?: string;
}

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  accentClass?: string;
  children?: React.ReactNode;
}

const Card = ({ icon: Icon, title, description, className, iconClassName, accentClass, children }: CardProps) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={cn(
      "group relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl p-8 transition-shadow duration-300 hover:shadow-lg",
      className,
    )}
  >
    {/* Subtle accent glow in the corner */}
    <div className={cn("absolute -top-6 -right-6 size-24 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40", accentClass)} />

    <div className={cn("flex size-12 items-center justify-center rounded-lg", iconClassName)}>
      <Icon className="size-6" strokeWidth={1.75} />
    </div>

    <div>
      <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>

    {children}
  </motion.div>
);

const Feature101 = ({ className }: Feature101Props) => {
  const { theme, toggle } = useTheme();

  return (
    <section id="whats-included" className={cn("py-32 px-4", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex flex-col justify-center gap-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">What&apos;s Included</h2>
          <p className="text-xl text-muted-foreground">
            Every Ovant.io package ships with everything your business needs — no extras, no surprises.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Large feature card */}
          <Card
            icon={Zap}
            title="95+ PageSpeed Score, Guaranteed"
            description="Every site we build hits 95 or above across all Google PageSpeed Insights metrics — the same standard we promise every client."
            className="bg-primary/10 border border-primary/20 md:col-span-2 lg:row-span-2 lg:justify-start lg:gap-10 min-h-80"
            iconClassName="bg-primary/20 text-primary"
            accentClass="bg-primary"
          >
            <div className="hidden lg:block absolute bottom-0 right-0 rounded-tl-xl overflow-hidden p-6 bg-background mt-12">
              <Image
                src="/google-psi-scores.png"
                alt="Google PageSpeed Insights scores"
                width={320}
                height={200}
                className="block object-cover rounded-md"
              />
            </div>
          </Card>

          <Card
            icon={Moon}
            title="Light & Dark Mode"
            description="Full light and dark mode support, built in from day one."
            className="h-80 bg-muted/70 border border-border"
            iconClassName="bg-accent/30 text-accent-foreground"
            accentClass="bg-accent"
          >
            <Button variant="outline" size="sm" className="w-fit" onClick={toggle}>
              {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            </Button>
          </Card>

          <Card
            icon={BarChart2}
            title="Google Analytics"
            description="Know who's visiting and where they're coming from — analytics wired up and ready to go."
            className="h-80 bg-muted/70 border border-border"
            iconClassName="bg-secondary text-secondary-foreground"
            accentClass="bg-primary"
          />

          <Card
            icon={Mail}
            title="Contact Form"
            description="Enquiries routed straight to your inbox — no third-party services, no monthly fees."
            className="h-80 bg-muted/70 border border-border"
            iconClassName="bg-accent/30 text-accent-foreground"
            accentClass="bg-accent"
          />

          <Card
            icon={Phone}
            title="Mobile Call-Now Buttons"
            description="One tap to call on mobile. Gallery and testimonials sections included and ready to populate when you are."
            className="h-80 bg-muted/70 border border-border lg:col-span-2"
            iconClassName="bg-primary/20 text-primary"
            accentClass="bg-primary"
          />
        </div>
      </div>
    </section>
  );
};

export { Feature101 };
