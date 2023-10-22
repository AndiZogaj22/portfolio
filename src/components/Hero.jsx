import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-800 text-white flex items-center h-screen">
      <div className="container mx-auto flex px-10">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-8">
            Check out my latest projects and experience in web development!
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Projects
          </button>
        </div>
        <div className="w-1/2">
          <img
            className="w-full h-auto object-cover"
            src="https://via.placeholder.com/400"
            alt="portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
