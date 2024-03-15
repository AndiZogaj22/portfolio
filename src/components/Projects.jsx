import React from 'react';
import p1 from '../assets/p1.png';

const Projects = () => {
  // Define an array of projects
  const projects = [
    {
      name: "Project 1",
      techStack: "React, Node.js",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: p1,
      visitLink: "https://example.com",
      githubLink: "https://github.com/example/project1"
    }
    // Add more projects as needed
  ];

  return (
    <section className="bg-red-50 dark:bg-gray-900 p-28">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My Projects</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Map through projects array */}
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src={project.image} alt={project.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.techStack}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex justify-center space-x-4">
                <a href={project.visitLink} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300">Visit</a>
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
