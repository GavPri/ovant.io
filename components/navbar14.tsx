"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const links = [
  { label: "What's Included", href: "#whats-included" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

interface Navbar14Props {
  className?: string;
}

const Navbar14 = ({ className }: Navbar14Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <section
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background w-screen px-12",
        isOpen && "fixed inset-0 flex h-dvh flex-col border-b-0",
        className,
      )}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Ovant.io
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <Button asChild>
              <a href="#contact">Get a Free Quote</a>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <button
              className="flex size-10 items-center justify-center rounded-md border"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex w-3.5 flex-col gap-1">
                <span
                  className={cn(
                    "h-[1.5px] w-full origin-center rounded-full bg-foreground transition-all duration-300",
                    isOpen && "translate-y-[5.5px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-[1.5px] w-full origin-center rounded-full bg-foreground transition-all duration-300",
                    isOpen && "scale-x-0 opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "h-[1.5px] w-full origin-center rounded-full bg-foreground transition-all duration-300",
                    isOpen && "-translate-y-[5.5px] -rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto border-t bg-background lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block border-b border-border py-4 text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="container mx-auto block">{link.label}</span>
            </a>
          ))}
          <div className="container mx-auto mt-auto flex flex-col gap-2 py-8">
            <Button className="w-full" asChild>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Get a Free Quote
              </a>
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export { Navbar14 };
