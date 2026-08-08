"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress, SiNextdotjs } from "react-icons/si";

const TECH_STACK = [
  { Icon: FaHtml5, className: "text-orange-500", label: "HTML" },
  { Icon: FaCss3Alt, className: "text-blue-500", label: "CSS" },
  { Icon: FaJs, className: "text-yellow-500", label: "JavaScript" },
  { Icon: FaReact, className: "text-sky-500", label: "React" },
  { Icon: SiNextdotjs, className: "text-foreground", label: "Next.js" },
  { Icon: BiLogoTailwindCss, className: "text-sky-400", label: "Tailwind" },
  { Icon: BiLogoMongodb, className: "text-green-500", label: "MongoDB" },
  { Icon: SiExpress, className: "text-foreground", label: "Express" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="home" className="scroll-mt-16 px-4 pt-24 pb-20 sm:px-6 sm:pt-36 sm:pb-28">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto max-w-2xl"
      >
        <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-tight sm:text-4xl">
          Hey, I&apos;m Andi Zogaj 👋
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground">
          I&apos;m a front-end web developer from Prishtina, building websites and web
          applications that lead to the success of the overall product.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-6 flex gap-4">
          <a
            href="https://github.com/AndiZogaj22/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/andi-zogaj-20a8a2242/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <FaLinkedin size={24} />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            My Tech Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-5">
            {TECH_STACK.map(({ Icon, className, label }) => (
              <Icon
                key={label}
                title={label}
                size={28}
                className={`${className} transition-transform hover:scale-110`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
