import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PREVIEW_COUNT = 4;

export function Projects() {
  const preview = projects.slice(0, PREVIEW_COUNT);

  return (
    <section id="projects" className="scroll-mt-16 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
        <p className="mt-4 text-muted-foreground">A selection of things I&apos;ve built.</p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {preview.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-2xl">
        <Link href="/projects" className={cn(buttonVariants({ variant: "outline" }))}>
          See more projects
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
