import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than the height of the navbar
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white shadow dark:bg-gray-800 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-10' : ''
      }`}
    >
      <div className="text-2xl space-x-6 sm:space-x-8 md:space-x-12 lg:space-x-16 container flex items-center justify-center p-4 lg:p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-2">
          Home
        </a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-2">
          About
        </a>

       

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-2">
          Projects
        </a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-2">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
