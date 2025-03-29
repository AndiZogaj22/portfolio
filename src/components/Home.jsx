import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { Moon, Sun } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 p-4 sm:p-8 md:p-14 lg:p-20 transition-colors duration-300">
      <div className="flex justify-center p-2">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pb-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
      >
        <motion.h1
          variants={itemVariants}
          className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white"
        >
          HEY, I'M Andi Zogaj 👋
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-8 text-lg md:text-xl lg:text-lg xl:text-xl font-normal text-gray-500 lg:mb-16 lg:px-8 xl:px-16 dark:text-white"
        >
          I am a front-end Web Developer from Prishtina building and managing Websites and Web Applications that lead to the success of the overall product
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col pt-10 md:pt-14 lg:pt-16 lg:mb-16 space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-4"
        >
          <div className="flex justify-center md:justify-start space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/AndiZogaj22/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-400 transition-colors duration-200"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/andi-zogaj-20a8a2242/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-400 transition-colors duration-200"
            >
              <FaLinkedin size={28} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={techStackVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center md:flex-row md:justify-center space-y-6 md:space-y-0 md:space-x-6"
        >
          <div className="md:flex md:items-center md:space-x-2 mt-3">
            <motion.h1
              variants={itemVariants}
              className="text-lg md:text-xl mr-2 md:mr-5 font-normal text-black dark:text-white"
            >
              My Tech Stack |
            </motion.h1>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { Icon: FaHtml5, color: "text-orange-500", title: "HTML" },
              { Icon: FaCss3Alt, color: "text-blue-500", title: "CSS" },
              { Icon: FaJs, color: "text-yellow-500", title: "JavaScript" },
              { Icon: FaReact, color: "text-blue-400", title: "React" },
              { Icon: SiNextdotjs, color: "text-black dark:text-white", title: "Next.js" },
              { Icon: BiLogoTailwindCss, color: "text-blue-400", title: "Tailwind" },
              { Icon: BiLogoMongodb, color: "text-green-500", title: "MongoDB" },
              { Icon: SiExpress, color: "text-black dark:text-white", title: "Express" }
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={iconVariants}
                whileHover={{ scale: 1.2 }}
                className={`${tech.color} transition-transform duration-200`}
                title={tech.title}
              >
                <tech.Icon size={34} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default App;