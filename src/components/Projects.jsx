import React from 'react';
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
import {  FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { BiLogoUnity } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { SiDotnet } from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
const Projects = () => {
  // Define an array of projects
  const projects = [
    {
      name: "Xypo",
      techStack: [<FaHtml5 size={36} className="text-orange-500" title="HTML" /> , <FaCss3Alt size={36} className="text-blue-500" title="CSS" />, <FaJs size={36} className="text-yellow-500" title="JavaScript" />   ],
      description: "My first attempt at creating, designing, and developing a simple web app using HTML, CSS, and JavaScript.",
      image: p1,
      visitLink: "https://example.com",
      githubLink: "https://github.com/AndiZogaj22/Xypo"
    },
    {
      name: "UpBeat",
      techStack: [ <FaHtml5 size={36} className="text-orange-500" title="HTML" /> , <FaCss3Alt size={36} className="text-blue-500" title="CSS" />, <FaJs size={36} className="text-yellow-500" title="JavaScript" />, <BiLogoPhp size={36} className="text-blue-500" title="csharp" />,<DiMsqlServer size={36} className="text-red-700"/>   ],
      description: "My first full-stack app: an e-commerce platform developed with HTML, CSS, JavaScript for the frontend, PHP for the backend, and MySQL for the database.",
      image: p8,
      visitLink: "https://example.com",
      githubLink: "https://github.com/AndiZogaj22/Projekti_WEB_AndiZogaj_ErionGrainca"
    },
    {
      name: "Electronic E-Commerce",
      techStack: [ <FaReact size={36} className="text-blue-400" title="React" />,  <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />, <DiMsqlServer size={36} className="text-red-700"/>, <BiLogoMongodb size={36} className="text-green-500" title="MongoDb" />,<SiDotnet size={36} className="text-purple-500" title="csharp" /> ],
      description: "A complex robust e-commerce platform designed for people interested in buying tech products and accessories.",
      image: p9,
      visitLink: "https://example.com",
      githubLink: "https://github.com/DimalMaloku1/Electronic-App"
    },
    {
      name: "UpNorth Travels",
      techStack: [<FaHtml5 size={36} className="text-orange-500" title="HTML" /> , <FaCss3Alt size={36} className="text-blue-500" title="CSS" />, <FaJs size={36} className="text-yellow-500" title="JavaScript" />   ],
      description: "UpNorth is a great showcase of front-end work developed with a variety of animation libraries, such as jQuery, GSAP, and many more.",
      image: p2,
      visitLink: "https://example.com",
      githubLink: "https://github.com/AndiZogaj22/UpNorthWebMultimedia"
    },
    {
      name: "Recepies",
      techStack: [ <FaReact size={36} className="text-blue-400" title="React" />,  <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />, <BiLogoMongodb size={36} className="text-green-500" title="MongoDb" />, <SiExpress size={36} className="text-black" title="express" />    ],
      description: "Recipes is an app tailored for individuals interested in Mediterranean cuisine, offering a diverse range of dishes from various countries.",
      image: p4,
      visitLink: "https://example.com",
      githubLink: "https://github.com/AndiZogaj22/Recepies"
    },
    {
      name: "StudyNest",
      techStack: [ <FaReact size={36} className="text-blue-400" title="React" />,  <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />,    ],
      description: "StudyNest is a learning platform for individuals interested in downloading or uploading courses and literature online.",
      image: p3,
      visitLink: "https://example.com",
      githubLink: "https://github.com/AndiZogaj22/StudyNest"
    },
    
    {
      name: "Cinema24",
      techStack: [ <FaReact size={36} className="text-blue-400" title="React" />,  <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />, <BiLogoMongodb size={36} className="text-green-500" title="MongoDb" />, <SiExpress size={36} className="text-black" title="express" />    ],
      description: "My attempt at developing an online streaming platform for movies and Tv shows",
      image: p5,
      visitLink: "https://example.com",
      githubLink: "https://github.com/AndiZogaj22/Cinema24"
    },
    {
      name: "TechElctronics",
      techStack: [ <FaReact size={36} className="text-blue-400" title="React" />,  <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />,<DiMsqlServer size={36} className="text-red-700"/>, <SiDotnet size={36} className="text-purple-500" title="csharp" />   ],
      description: "A refined version of an Electronic E-Commerce app with many additional features, representing my magnum opus thus far.",
      image: p6,
      visitLink: "https://example.com",
      githubLink: "https://github.com/AndiZogaj22/tech-electronics"
    },
    
    {
      name: "Flappy Bird clone ",
techStack: [<BiLogoUnity size={36} className="text-black" />],
      description: "A Flappy Bird clone developed in Unity with C#, featuring additional features and characteristics inspired by the original.",
      image: p10,
      visitLink: "https://example.com",
      githubLink: "https://github.com/AndiZogaj22/FlappyBird"
    },
    {
      name: "TextShift",
      techStack: [ <SiNextdotjs size={36} className="text-black" title="next" />,  <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />  ],
      description: "TextShift is a transliterator that converts Latin text to any selected script. Whether you need to transliterate to Greek, Cyrillic, or any other script,",
      image: p11,
      visitLink: "https://textshift.vercel.app/",
      githubLink: "https://github.com/AndiZogaj22/textshift"
    },
    {
      name: "Andi's Blog",
      techStack: [ <SiNextdotjs size={36} className="text-black" title="next" />,  <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />  ],
      description: "This is a blog app where i post diffrent programing articles and code snipets and blocks",
      image: p12,
      visitLink: "https://blog-gamma-ruddy.vercel.app/",
      githubLink: "https://github.com/AndiZogaj22/blog"
    }
    // Add more projects as needed
  ];

  return (
    <section className="bg-white dark:bg-gray-900 p-28 mb-24">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
        <h1 className=" pb-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">My Projects</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 w-full">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-full">
              <img src={project.image} alt={project.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-700  dark:text-gray-300 mb-4 flex justify-center text-xl">{project.techStack}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex justify-center space-x-4">
                <button    className="bg-blue-500  text-white px-4 py-2 rounded-md transition-colors duration-300 opacity-50  cursor-not-allowed">Visit</button>
                <a href={project.githubLink} className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors duration-300">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
