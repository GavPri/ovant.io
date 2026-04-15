"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

const MotionImage = motion.create(Image);

interface Process4Props {
  className?: string;
}

const Process4 = ({ className }: Process4Props) => {
  const process = [
    {
      title: "Tell us about your business",
      description:
        "Hop on a 30 minute call to tell us about your business.",
      image: "/process-1.png",
      alt: "A 30-minute discovery call to discuss your business",
    },
    {
      title: "We design & build",
      description:
        "Your site is crafted in Next.js, optimised for performance from day one.",
      image: "/process-2.png",
      alt: "Designing and building your website in Next.js",
    },
    {
      title: "You go live, ready to grow",
      description:
        "Website crafted for performance with analytics, forms, and everything configured.",
      image: "/process-3.png",
      alt: "Your finished website live and ready for business",
    },
  ];

  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="how-it-works"
      className={cn("bg-background py-12 mx-auto bg-secondary px-6", className)}
      style={
        {
          "--font-mono": "var(--font-antonio)",
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <h2 className="text-5xl mt-10 font-semibold tracking-tight lg:text-7xl">
              {" "}
              Process
              <sup className="align-top font-mono text-lg tracking-tight text-foreground/40">
                0003
              </sup>{" "}
            </h2>
            <p className="text-base text-foreground/90">
              Three simple steps — from brief to live site, with everything
              configured and ready for real business.
            </p>
          </div>
          <ul className="relative col-span-4 w-full space-y-10">
            {process.map((step, index) => (
              <li
                onMouseEnter={() => setActive(index)}
                key={index}
                className={cn(
                  "relative mr-20 ml-auto flex w-full max-w-xl cursor-pointer flex-col justify-between gap-10 rounded-3xl bg-background p-10 md:flex-row lg:items-center",
                  index === active ? "bg-background" : "lg:bg-transparent",
                )}
              >
                <AnimatePresence mode="wait">
                  {index === active && (
                    <MotionImage
                      key={step.image}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      src={step.image}
                      alt={step.alt}
                      width={160}
                      height={160}
                      className="absolute top-0 right-0 size-30 translate-x-1/4 -translate-y-1/2 rounded-2xl object-cover lg:size-40 lg:translate-x-1/2"
                    />
                  )}
                </AnimatePresence>
                <div className="">
                  <p className="mb-4 font-bold tracking-tight lg:text-3xl">
                    Step {index + 1}
                  </p>
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="line-clamp-2 text-foreground/50">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Process4 };
