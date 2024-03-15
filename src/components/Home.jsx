import React from 'react';
import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const Home = () => {
  return (
    <section className="bg-white dark:bg-gray-900 p-28">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">HEY, I'M Andi Zogaj 👋</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"> I am a front-end Web Developer from Prishtina building and managing Websites and Web Applications that lead to the success of the overall product</p>
        <div className="flex flex-col pt-14 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="https://github.com/AndiZogaj22/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/andi-zogaj-20a8a2242/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <FaLinkedin size={28} />
          </a>
        </div>
        <div className="flex justify-center items-center space-x-4">
  <div>
    <h1 className="text-lg font-normal text-black lg:text-xl mr-5 dark:text-gray-400">My Tech Stock | </h1>
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
