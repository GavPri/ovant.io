import React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const FormGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-2">{children}</div>
);

interface BookADemo3Props {
  className?: string;
}

const BookADemo3 = ({ className }: BookADemo3Props) => {
  return (
    <section id="contact" className={cn("py-12 px-6 bg-secondary", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-10">
          <div className="flex max-w-lg flex-col gap-5">
            <h2 className="text-3xl font-medium md:text-4xl">
              Ready to get started?
            </h2>
            <p className="text-base font-light text-foreground md:text-lg">
              Tell us a little about your business and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <Card className="overflow-hidden bg-muted/70 px-6 py-8">
            <form className="flex flex-col gap-6">
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  className="bg-background"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="business-name">Business Name</Label>
                <Input
                  id="business-name"
                  type="text"
                  placeholder="Smith & Co."
                  className="bg-background"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@smithandco.com"
                  className="bg-background"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="package">Package Interest</Label>
                <Select>
                  <SelectTrigger id="package" className="w-full bg-background">
                    <SelectValue placeholder="Select a package..." />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="landing-page">Landing Page — €600</SelectItem>
                    <SelectItem value="starter-site">Starter Site — €800</SelectItem>
                    <SelectItem value="growth-site">Growth Site — €1,200</SelectItem>
                    <SelectItem value="unsure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your business..."
                  className="bg-background min-h-28"
                />
              </FormGroup>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { BookADemo3 };
