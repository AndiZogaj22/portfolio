import React from "react";
import Animation from '../assets/animation.mp4';

const Hero = () => {
  return (
    <div className="text-black bg-white flex items-center h-screen">
      <div className="container mx-auto flex px-10">
        <div className="w-1/2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-800">Hi, I'm Andi</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600">I'm a web developer from Prishtina, Kosovo.</p>
          <p className="italic text-lg md:text-xl lg:text-2xl text-gray-600">I build websites with a focus on responsive design and accessibility.</p>
        </div>
        <div className="w-4/5">
          <video
            className="w-full h-auto object-cover "
            src={Animation}
            alt="portfolio"
            autoPlay
            loop
            style={{ width: "100%", height: "auto" }} // Adjust the style here
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
