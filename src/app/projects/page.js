import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description: "A collection of web apps, freelance client sites, and experiments built by Andi Zogaj.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>

          <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">Projects</h1>
          <p className="mt-4 text-muted-foreground">
            Everything I&apos;ve built, from first experiments to freelance client work.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}
