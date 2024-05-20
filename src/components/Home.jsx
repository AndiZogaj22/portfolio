import React from 'react';
import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { LuBookOpen } from "react-icons/lu";


const Home = () => {
  return (
    <section className="bg-white dark:bg-slate-950 p-8 md:p-14 lg:p-20 xl:p-28">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">HEY, I'M Andi Zogaj 👋</h1>
        <p className="mb-8 text-lg md:text-xl lg:text-lg xl:text-xl font-normal text-gray-500 lg:mb-16 lg:px-8 xl:px-16 dark:text-white"> I am a front-end Web Developer from Prishtina building and managing Websites and Web Applications that lead to the success of the overall product</p>
        <div className="flex flex-col pt-10 md:pt-14 lg:pt-16 lg:mb-16 space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-4">
          <div className="flex justify-center md:justify-start">
            <a href="https://github.com/AndiZogaj22/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-400">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/andi-zogaj-20a8a2242/" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-400">
              <FaLinkedin size={28} />
            </a>
            <a href="https://portfolio-starter-kit-orpin-eight-16.vercel.app/" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-400">
              <LuBookOpen size={28} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center space-y-4 md:space-x-4">
          <div className="md:flex md:items-center md:space-x-2 mt-3">
            <h1 className="text-lg md:text-xl mr-2 md:mr-5 font-normal text-black dark:text-white">My Tech Stack |</h1>
          </div>
          <div className="flex items-center space-x-4">
            <FaHtml5 size={36} className="text-orange-500" title="HTML" />
            <FaCss3Alt size={36} className="text-blue-500" title="CSS" />
            <FaJs size={36} className="text-yellow-500" title="JavaScript" />
            <FaReact size={36} className="text-blue-400" title="React" />
            <BiLogoTailwindCss size={36} className="text-blue-400" title="tailwind" />
            <BiLogoMongodb size={36} className="text-green-500" title="MongoDb" />
            <SiExpress size={36} className="text-black" title="express" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
