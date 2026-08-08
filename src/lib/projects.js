import xypo from "@/assets/projects/xypo.webp";
import upbeat from "@/assets/projects/upbeat.webp";
import electronicEcommerce from "@/assets/projects/electronic-ecommerce.webp";
import upnorthTravels from "@/assets/projects/upnorth-travels.webp";
import recepies from "@/assets/projects/recepies.webp";
import studynest from "@/assets/projects/studynest.webp";
import cinema24 from "@/assets/projects/cinema24.webp";
import techElectronics from "@/assets/projects/tech-electronics.webp";
import flappyBirdClone from "@/assets/projects/flappy-bird-clone.webp";
import textshift from "@/assets/projects/textshift.webp";
import andisBlog from "@/assets/projects/andis-blog.webp";
import zogajConstruction from "@/assets/projects/zogaj-construction.webp";
import matiGradnje from "@/assets/projects/mati-gradnje.webp";
import comoGrit from "@/assets/projects/como-grit.webp";
import hiveBlog from "@/assets/projects/hive-blog.webp";

/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} name
 * @property {string[]} techStack - keys into TECH_ICON_MAP, see ./tech-icons.js
 * @property {string} description
 * @property {import("next/image").StaticImageData} image
 * @property {string|null} visitLink - null when there's no live URL yet
 * @property {string} [githubLink] - omitted when there's no public repo
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "xypo",
    name: "Xypo",
    techStack: ["html5", "css3", "javascript"],
    description:
      "My first attempt at creating, designing, and developing a simple web app using HTML, CSS, and JavaScript.",
    image: xypo,
    visitLink: null,
    githubLink: "https://github.com/AndiZogaj22/Xypo",
  },
  {
    slug: "upbeat",
    name: "UpBeat",
    techStack: ["html5", "css3", "javascript", "php", "mssql"],
    description:
      "My first full-stack app: an e-commerce platform developed with HTML, CSS, JavaScript for the frontend, PHP for the backend, and MySQL for the database.",
    image: upbeat,
    visitLink: null,
    githubLink: "https://github.com/AndiZogaj22/Projekti_WEB_AndiZogaj_ErionGrainca",
  },
  {
    slug: "electronic-ecommerce",
    name: "Electronic E-Commerce",
    techStack: ["react", "tailwind", "mssql", "mongodb", "dotnet"],
    description:
      "A complex robust e-commerce platform designed for people interested in buying tech products and accessories.",
    image: electronicEcommerce,
    visitLink: null,
    githubLink: "https://github.com/DimalMaloku1/Electronic-App",
  },
  {
    slug: "upnorth-travels",
    name: "UpNorth Travels",
    techStack: ["html5", "css3", "javascript"],
    description:
      "UpNorth is a great showcase of front-end work developed with a variety of animation libraries, such as jQuery, GSAP, and many more.",
    image: upnorthTravels,
    visitLink: null,
    githubLink: "https://github.com/AndiZogaj22/UpNorthWebMultimedia",
  },
  {
    slug: "recepies",
    name: "Recepies",
    techStack: ["react", "tailwind", "mongodb", "express"],
    description:
      "Recipes is an app tailored for individuals interested in Mediterranean cuisine, offering a diverse range of dishes from various countries.",
    image: recepies,
    visitLink: null,
    githubLink: "https://github.com/AndiZogaj22/Recepies",
  },
  {
    slug: "studynest",
    name: "StudyNest",
    techStack: ["react", "tailwind"],
    description:
      "StudyNest is a learning platform for individuals interested in downloading or uploading courses and literature online.",
    image: studynest,
    visitLink: null,
    githubLink: "https://github.com/AndiZogaj22/StudyNest",
  },
  {
    slug: "cinema24",
    name: "Cinema24",
    techStack: ["react", "tailwind", "mongodb", "express"],
    description: "My attempt at developing an online streaming platform for movies and Tv shows",
    image: cinema24,
    visitLink: null,
    githubLink: "https://github.com/AndiZogaj22/Cinema24",
  },
  {
    slug: "tech-electronics",
    name: "TechElctronics",
    techStack: ["react", "tailwind", "mssql", "dotnet"],
    description:
      "A refined version of an Electronic E-Commerce app with many additional features, representing my magnum opus thus far.",
    image: techElectronics,
    visitLink: null,
    githubLink: "https://github.com/AndiZogaj22/tech-electronics",
  },
  {
    slug: "flappy-bird-clone",
    name: "Flappy Bird clone",
    techStack: ["unity"],
    description:
      "A Flappy Bird clone developed in Unity with C#, featuring additional features and characteristics inspired by the original.",
    image: flappyBirdClone,
    visitLink: null,
    githubLink: "https://github.com/AndiZogaj22/FlappyBird",
  },
  {
    slug: "textshift",
    name: "TextShift",
    techStack: ["nextjs", "tailwind"],
    description:
      "TextShift is a transliterator that converts Latin text to any selected script. Whether you need to transliterate to Greek, Arabic, or any other script,",
    image: textshift,
    visitLink: "https://textshift.vercel.app/",
    githubLink: "https://github.com/AndiZogaj22/textshift",
  },
  {
    slug: "andis-blog",
    name: "Andi's Blog",
    techStack: ["nextjs", "tailwind"],
    description: "A blogging platform with a variety of diffrent programing articles and code snipets and blocks",
    image: andisBlog,
    visitLink: "https://portfolio-starter-kit-orpin-eight-16.vercel.app/",
    githubLink: "https://github.com/AndiZogaj22/portfolio-starter-kit",
  },
  {
    slug: "zogaj-construction",
    name: "Zogaj Construction",
    techStack: ["react", "tailwind"],
    description: "A freelancing project in which the client required a website for their construction company.",
    image: zogajConstruction,
    visitLink: "https://www.zogajconstruction.com/",
  },
  {
    slug: "mati-gradnje",
    name: "Mati Gradnje d.o.o",
    techStack: ["react", "tailwind"],
    description: "A freelancing project in which the client required a website for their construction company.",
    image: matiGradnje,
    visitLink: "https://www.matigradnje.com/",
  },
  {
    slug: "como-grit",
    name: "Como Grit",
    techStack: ["react", "tailwind"],
    description:
      "A freelancing project in which the client required a website for their metal fabrication and and industrial solutions company.",
    image: comoGrit,
    visitLink: "https://www.comogrit.com/",
  },
  {
    slug: "hive-blog",
    name: "Hive Blog",
    techStack: ["react", "tailwind"],
    description: "A freelancing project in which the client required a website for their online blog.",
    image: hiveBlog,
    visitLink: "https://hiveblog-id1pn5vws-andizogaj22s-projects.vercel.app/",
  },
];
