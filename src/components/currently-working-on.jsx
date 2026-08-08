import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import obsidium from "@/assets/projects/obsidium.webp";

export function CurrentlyWorkingOn() {
  return (
    <section id="currently-working-on" className="scroll-mt-16 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardContent className="p-5 sm:p-6">
            <Image
              src={obsidium}
              alt="Obsidium Web Development"
              placeholder="blur"
              className="w-full rounded-lg border"
            />
            <div className="mt-6">
              <Badge variant="secondary">Founder</Badge>
              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                Currently building: Obsidium Web Development
              </h2>
              <p className="mt-4 text-muted-foreground">
                Obsidium Web Development is my own web development studio, where I design
                and build modern, high-performing websites for startups and small
                businesses. It&apos;s where everything I&apos;ve learned across the
                projects below comes together — now as a founder, not just a developer
                for hire.
              </p>
              <a
                href="https://www.obsidium-dev.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "default" }), "mt-6")}
              >
                Visit Obsidium
                <ArrowUpRight />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
