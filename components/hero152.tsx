"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Hero152Props {
  className?: string;
}

const ease = [0, 0, 0.2, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
});

const Hero152 = ({ className }: Hero152Props) => {
  return (
    <section className={cn("bg-bakground pt-12 font-sans md:pt-20", className)}>
      <div className="mx-auto max-w-[99rem] px-0 sm:px-8">
        <div className="container px-4">
          <div className="mx-auto flex max-w-[25rem] flex-col items-center gap-6 sm:max-w-[31.25rem] lg:max-w-[40rem]">
            <motion.div className="mb-2" {...fadeUp(0)}>
              <h1 className="text-center text-[1.8125rem] leading-none font-bold sm:text-[2.9375rem] lg:text-[3.3125rem]">
                Everything your business needs. One website, done right.
              </h1>
            </motion.div>
            <motion.p
              className="text-center text-base leading-snug text-balance text-foreground italic sm:text-2xl"
              {...fadeUp(0.15)}
            >
              Ovant.io builds fast, beautiful websites for local businesses — with analytics, dark mode, contact forms, and more, all included as standard.
            </motion.p>
            <motion.div
              className="flex w-full flex-wrap items-center gap-4 md:w-fit"
              {...fadeUp(0.28)}
            >
              <Button
                asChild
                variant="default"
                className="group flex h-fit min-w-[11.25rem] flex-1 items-center justify-center gap-1 rounded-[5rem] border-2 border-primary bg-primary px-4 py-3 text-base font-semibold text-nowrap text-white md:min-w-fit md:flex-none"
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="relative mt-16 aspect-[1.2/1] overflow-hidden sm:-right-[10%] sm:left-auto sm:mt-28 sm:aspect-[2.788990826/1]">
          <motion.div
            className="absolute top-[11%] left-[2%] z-10 aspect-[0.7/1] w-[55%] sm:left-[2%] sm:w-[32%]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
          >
            <div className="size-full rounded-2xl shadow-xl [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)] bg-secondary p-3">
              <div className="relative size-full overflow-hidden rounded-lg">
                <Image
                  src="/hero-1.jpg"
                  alt="Website example"
                  fill
                  priority
                  sizes="(max-width: 640px) 55vw, 32vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute top-0 left-[38%] z-20 aspect-[0.7/1] w-[52%] sm:left-[26%] sm:w-[28%]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
          >
            <div className="size-full rounded-2xl shadow-xl [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)] bg-secondary p-3">
              <div className="relative size-full overflow-hidden rounded-lg">
                <Image
                  src="/hero-2.jpg"
                  alt="Website example"
                  fill
                  sizes="(max-width: 640px) 52vw, 28vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute top-[3%] left-[62%] z-30 aspect-[0.7/1] w-[60%] sm:left-[48%] sm:w-[36%]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
          >
            <div className="size-full rounded-2xl shadow-xl [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)] bg-secondary p-3">
              <div className="relative size-full overflow-hidden rounded-lg">
                <Image
                  src="/hero-3.jpg"
                  alt="Website example"
                  fill
                  sizes="(max-width: 640px) 60vw, 36vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Hero152 };
