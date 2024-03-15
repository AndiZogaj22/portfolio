import React from 'react';
import DeveloperGif from '../assets/Developer.gif'; // Remove this line

const AboutMe = () => {
  return (
    <section className="bg-white dark:bg-gray-900 p-28">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:items-center lg:justify-center text-center lg:py-16 lg:px-12">
        <div className="lg:w-1/2 lg:mr-12">
          <img src={require('../assets/Developer.gif').default} alt="Developer" className="mx-auto " /> {/* Modify this line */}
        </div>
        <div className="lg:w-1/2">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About Me</h1>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">I'm a passionate web developer with a love for creating sleek and efficient websites. My expertise lies in front-end development, where I excel in crafting engaging user interfaces and optimizing user experiences. With a strong foundation in HTML, CSS, and JavaScript, coupled with React and Tailwind, I'm equipped to tackle a wide range of projects. I thrive in collaborative environments, where I can leverage my communication skills to bring visions to life. Let's build something amazing together!</p>
          <div className="flex justify-center">
            <a href="#" className="inline-block px-6 py-3 text-lg font-semibold text-black border border-black rounded hover:text-white hover:bg-blue-600">Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
