import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const FOCUS_AREAS = ["Front-End Development", "React & Next.js", "UI/UX-minded Interfaces"];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About Me</h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {FOCUS_AREAS.map((area) => (
            <Badge key={area} variant="secondary">
              {area}
            </Badge>
          ))}
        </div>

        <p className="mt-6 text-muted-foreground">
          I hold a bachelor&apos;s degree in Computer Science and Engineering from
          Universiteti për Biznes dhe Teknologji (UBT) in Prishtina. I&apos;m a passionate
          web developer with a penchant for crafting sleek and efficient websites — my
          expertise lies primarily in front-end development, where I specialize in
          building captivating user interfaces and enhancing user experiences. Armed with
          a robust knowledge of HTML, CSS, and JavaScript, complemented by proficiency in
          React and Tailwind, I&apos;m well-prepared to tackle diverse projects. I thrive
          in collaborative settings and leverage strong communication skills to translate
          visions into reality — let&apos;s create something extraordinary together.
        </p>

        <div className="mt-6">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  aria-disabled="true"
                  className="cursor-not-allowed opacity-60"
                />
              }
            >
              Download CV
            </TooltipTrigger>
            <TooltipContent>Available soon</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}
