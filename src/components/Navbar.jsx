// Navbar.js

import DarkModeToggle from '../components/DarkModeToggle'
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <nav className={`bg-white dark:bg-slate-950 shadow ${isSticky ? 'fixed top-0 left-0 right-0 z-10' : ''}`}>
  <div className="container flex items-center justify-center p-4 lg:p-6 mx-auto text-gray-600 capitalize dark:text-white relative">
    <div className="flex space-x-4">
      <a href="#home" onClick={() => scrollToSection('home')} className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-2">Home</a>
      <a href="#about" onClick={() => scrollToSection('about')} className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-2">About Me</a>
      <a href="#projects" onClick={() => scrollToSection('projects')} className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-2">Projects</a>
      <a href="#contact" onClick={() => scrollToSection('contact')} className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-2">Contact</a>
    </div>
    <div className="absolute right-0 pr-12">
      <DarkModeToggle />
    </div>
  </div>
</nav>



  );
};

export default Navbar;
