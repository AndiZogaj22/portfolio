// src/components/DarkModeToggle.jsx
import React, { useEffect, useState } from 'react';
import { IoSunny, IoMoonOutline } from 'react-icons/io5';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('dark-mode', newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <IoSunny size={24} /> : <IoMoonOutline size={24} />}
    </button>
  );
};

export default DarkModeToggle;
