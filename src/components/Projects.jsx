import React from 'react';
import { motion } from 'framer-motion';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';
import p9 from '../assets/p9.png';
import p10 from '../assets/p10.png';
import p11 from '../assets/p11.png';
import p12 from '../assets/p12.png';
import p13 from '../assets/p13.PNG';
import p14 from '../assets/p14.PNG'
import p15 from '../assets/p15.PNG'
import p16 from '../assets/p16.PNG'

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoTailwindCss, BiLogoUnity, BiLogoPhp } from "react-icons/bi";
import { SiExpress, SiNextdotjs, SiDotnet } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

const Projects = () => {
  const projects = [
    {
      name: "Xypo",
      techStack: [<FaHtml5 size={36} className="text-orange-500" title="HTML" />, <FaCss3Alt size={36} className="text-blue-500" title="CSS" />, <FaJs size={36} className="text-yellow-500" title="JavaScript" />],
      description: "My first attempt at creating, designing, and developing a simple web app using HTML, CSS, and JavaScript.",
      image: p1,
      visitLink: "#",
      githubLink: "https://github.com/AndiZogaj22/Xypo"
    },
    {
      name: "UpBeat",
      techStack: [<FaHtml5 size={36} className="text-orange-500" title="HTML" />, <FaCss3Alt size={36} className="text-blue-500" title="CSS" />, <FaJs size={36} className="text-yellow-500" title="JavaScript" />, <BiLogoPhp size={36} className="text-blue-500" title="csharp" />, <DiMsqlServer size={36} className="text-red-700" />],
      description: "My first full-stack app: an e-commerce platform developed with HTML, CSS, JavaScript for the frontend, PHP for the backend, and MySQL for the database.",
      image: p8,
      visitLink: "#",
      githubLink: "https://github.com/AndiZogaj22/Projekti_WEB_AndiZogaj_ErionGrainca"
    },
    {
      name: "Electronic E-Commerce",
      techStack: [<FaReact size={36} className="text-blue-400" title="React" />, <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />, <DiMsqlServer size={36} className="text-red-700" />, <BiLogoMongodb size={36} className="text-green-500" title="MongoDb" />, <SiDotnet size={36} className="text-purple-500" title="csharp" />],
      description: "A complex robust e-commerce platform designed for people interested in buying tech products and accessories.",
      image: p9,
      visitLink: "#",
      githubLink: "https://github.com/DimalMaloku1/Electronic-App"
    },
    {
      name: "UpNorth Travels",
      techStack: [<FaHtml5 size={36} className="text-orange-500" title="HTML" />, <FaCss3Alt size={36} className="text-blue-500" title="CSS" />, <FaJs size={36} className="text-yellow-500" title="JavaScript" />],
      description: "UpNorth is a great showcase of front-end work developed with a variety of animation libraries, such as jQuery, GSAP, and many more.",
      image: p2,
      visitLink: "#",
      githubLink: "https://github.com/AndiZogaj22/UpNorthWebMultimedia"
    },
    {
      name: "Recepies",
      techStack: [<FaReact size={36} className="text-blue-400" title="React" />, <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />, <BiLogoMongodb size={36} className="text-green-500" title="MongoDb" />, <SiExpress size={36} className="text-black dark:text-white" title="express" />],
      description: "Recipes is an app tailored for individuals interested in Mediterranean cuisine, offering a diverse range of dishes from various countries.",
      image: p4,
      visitLink: "#",
      githubLink: "https://github.com/AndiZogaj22/Recepies"
    },
    {
      name: "StudyNest",
      techStack: [<FaReact size={36} className="text-blue-400" title="React" />, <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />],
      description: "StudyNest is a learning platform for individuals interested in downloading or uploading courses and literature online.",
      image: p3,
      visitLink: "#",
      githubLink: "https://github.com/AndiZogaj22/StudyNest"
    },
    {
      name: "Cinema24",
      techStack: [<FaReact size={36} className="text-blue-400" title="React" />, <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />, <BiLogoMongodb size={36} className="text-green-500" title="MongoDb" />, <SiExpress size={36} className="text-black dark:text-white" title="express" />],
      description: "My attempt at developing an online streaming platform for movies and Tv shows",
      image: p5,
      visitLink: "#",
      githubLink: "https://github.com/AndiZogaj22/Cinema24"
    },
    {
      name: "TechElctronics",
      techStack: [<FaReact size={36} className="text-blue-400" title="React" />, <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />, <DiMsqlServer size={36} className="text-red-700" />, <SiDotnet size={36} className="text-purple-500" title="csharp" />],
      description: "A refined version of an Electronic E-Commerce app with many additional features, representing my magnum opus thus far.",
      image: p6,
      visitLink: "#",
      githubLink: "https://github.com/AndiZogaj22/tech-electronics"
    },
    {
      name: "Flappy Bird clone",
      techStack: [<BiLogoUnity size={36} className="text-black dark:text-white" />],
      description: "A Flappy Bird clone developed in Unity with C#, featuring additional features and characteristics inspired by the original.",
      image: p10,
      visitLink: "#",
      githubLink: "https://github.com/AndiZogaj22/FlappyBird"
    },
    {
      name: "TextShift",
      techStack: [<SiNextdotjs size={36} className="text-black dark:text-white" title="next" />, <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />],
      description: "TextShift is a transliterator that converts Latin text to any selected script. Whether you need to transliterate to Greek, Arabic, or any other script,",
      image: p11,
      visitLink: "https://textshift.vercel.app/",
      githubLink: "https://github.com/AndiZogaj22/textshift"
    },
    {
      name: "Andi's Blog",
      techStack: [<SiNextdotjs size={36} className="text-black dark:text-white" title="next" />, <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />],
      description: "A blogging platform with a variety of diffrent programing articles and code snipets and blocks",
      image: p12,
      visitLink: "https://portfolio-starter-kit-orpin-eight-16.vercel.app/",
      githubLink: "https://github.com/AndiZogaj22/portfolio-starter-kit"
    },
    {
      name: "Zogaj Construction",
      techStack: [<FaReact size={36} className="text-blue-400 dark:text-white" title="next" />, <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />],
      description: "A freelancing project in which the client required a website for their construction company.",
      image: p13,
      visitLink: "https://www.zogajconstruction.com/",

    },
    {
      name: "Obsidium Web Development",
      techStack: [<FaReact size={36} className="text-blue-400 dark:text-white" title="next" />, <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />],
      description: "A freelancing project in which the client required a website for their web development startup.",
      image: p16,
      visitLink: "https://www.obsidium-dev.com/",

    },
    {
      name: "Mati Gradnje d.o.o",
      techStack: [<FaReact size={36} className="text-blue-400 dark:text-white" title="next" />, <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />],
      description: "A freelancing project in which the client required a website for their construction company.",
      image: p14,
      visitLink: "https://www.matigradnje.com/",

    },
    {
      name: "Como Grit",
      techStack: [<FaReact size={36} className="text-blue-400 dark:text-white" title="next" />, <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />],
      description: "A freelancing project in which the client required a website for their metal fabrication and and industrial solutions company.",
      image: p15,
      visitLink: "https://www.comogrit.com/",

    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-white dark:bg-slate-950 p-4 sm:p-8 md:p-16 lg:p-20 min-h-screen transition-colors duration-300">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          variants={projectVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 dark:text-white"
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <motion.div

                className="relative overflow-hidden aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </motion.div>

              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.name}
                </h2>

                <motion.div
                  className="flex flex-wrap gap-3 justify-center mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.techStack.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.2 }}
                      className="transition-transform duration-200"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.visitLink && project.visitLink !== "#" ? project.visitLink : undefined}
                    className={`${project.visitLink && project.visitLink !== "#"
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      } px-6 py-2 rounded-full font-medium transition-colors duration-300`}
                    target={project.visitLink && project.visitLink !== "#" ? "_blank" : undefined}
                    rel={project.visitLink && project.visitLink !== "#" ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (!project.visitLink || project.visitLink === "#") e.preventDefault();
                    }}
                  >
                    Visit
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;