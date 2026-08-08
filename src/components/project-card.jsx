import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }) {
  const hasVisitLink = Boolean(project.visitLink);

  return (
    <div className="rounded-3xl bg-muted/60 p-4 sm:p-5">
      <div className="relative aspect-video overflow-hidden rounded-xl shadow-sm ring-1 ring-foreground/10">
        <Image
          src={project.image}
          alt={project.name}
          fill
          placeholder="blur"
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold tracking-tight">{project.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex gap-2">
          {hasVisitLink ? (
            <a
              href={project.visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm" })}
            >
              Visit
              <ArrowUpRight />
            </a>
          ) : (
            <Button size="sm" disabled>
              Visit
            </Button>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm", variant: "secondary" }))}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
