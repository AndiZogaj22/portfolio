import React from "react";

const Skills = () => {
  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "ASP.NET",
    "Express.js",
    "MS SQL"
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skillsList.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-300 text-gray-800 text-sm font-semibold m-2 p-2 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
