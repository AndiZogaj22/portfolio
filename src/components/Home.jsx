import React from 'react';
import {  FaTwitter, FaInstagram, FaLinkedinIn, FaGithub  } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-gradient-to-t from-cyan-50 via-cyan-200 to-blue-300 text-white h-screen flex items-center justify-between">
      <div className="flex flex-col space-y-4 ml-8 bg-inherit"> {/* Updated styles for vertical alignment */}
        {/* Use react-icons instead of Font Awesome */}
        <a href="#" className="text-xl bg-black rounded "><FaLinkedinIn /></a>
        <a href="#" className="text-xl bg-black rounded"><FaGithub /></a>
        <a href="#" className="text-xl bg-black rounded"><FaInstagram /></a>
        <a href="#" className="text-xl bg-black rounded"><FaTwitter /></a>
        {/* Add more social media links as needed */}
      </div>
      <div className="mx-auto text-center">
        <h1 className="text-7xl font-bold text-black">HEY, I'M Andi Zogaj</h1>
        <p className="text-lg mt-4 text-black">
          I am a Web Developer from Prishtina building and managing Websites and Web Applications that lead to the success of the overall product
        </p>
        
        <div class="flex justify-center items-center">
  <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-9">
    <div class="absolute inset-0 w-3 bg-cyan-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative  text-black group-hover:text-white">Projects</span>
  </button>
</div>


      </div>
    </div>
  );
};

export default Home;
