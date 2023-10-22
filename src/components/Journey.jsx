import React from "react";

const Journey = () => {
  const timelineData = [
    { year: 2018, technologies: ["HTML", "CSS", "JavaScript"] },
    { year: 2019, technologies: ["React", "Tailwind CSS"] },
    { year: 2020, technologies: ["ASP.NET", "MS SQL"] },
    { year: 2021, technologies: ["Express.js"] },
    { year: 2022, technologies: ["Docker", "Kubernetes"] },
    { year: 2023, technologies: ["GraphQL", "AWS"] },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Timeline</h2>
        {timelineData.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{item.year}</h3>
            <ul className="list-disc list-inside">
              {item.technologies.map((tech, idx) => (
                <li key={idx} className="text-lg">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
