import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { CurrentlyWorkingOn } from "@/components/currently-working-on";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <CurrentlyWorkingOn />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
