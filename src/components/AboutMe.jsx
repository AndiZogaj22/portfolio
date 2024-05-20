import React from 'react';

const AboutMe = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    // Link directly to the file in the public folder
    downloadLink.href = '/CV.pdf';
    downloadLink.download = 'CV.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
   <section className="bg-white dark:bg-slate-950 p-6 sm:p-10 md:p-16 lg:p-28">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:items-center lg:justify-center text-center lg:py-16 lg:px-12">
    <div className="lg:w-1/2 lg:mr-12 mb-8 lg:mb-0">
      <img src="https://miro.medium.com/v2/resize:fit:1400/0*NgUtI3tYLhuq5Vy0.gif" alt="Developer" className="mx-auto w-full" />
    </div>
    <div className="lg:w-1/2">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About Me</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">With a bachelor's degree in Computer Science and Engineering from Universiteti per Biznes dhe Teknologji "UBT", prishtina 10000 (academic year 20/21), I am a passionate web developer with a penchant for crafting sleek and efficient websites. My expertise primarily lies in front-end development, where I specialize in creating captivating user interfaces and enhancing user experiences. Armed with a robust knowledge of HTML, CSS, and JavaScript, complemented by proficiency in React and Tailwind, I am well-prepared to tackle diverse projects. Thriving in collaborative settings, I leverage my strong communication skills to translate visions into reality. Let's collaborate and create something truly extraordinary together!</p>
      <button className="bg-transparent hover:bg-blue-500 dark:text-white text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Download CV
      </button>
    </div>
  </div>
</section>

  );
}

export default AboutMe;
