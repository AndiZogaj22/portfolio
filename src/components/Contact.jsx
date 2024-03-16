import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900 p-8 lg:p-6 flex flex-wrap justify-center ">
      <div className="w-full lg:w-1/2">
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
        <p className="mb-8  text-center text-gray-500 dark:text-gray-500 sm:text-base">Are you interested in my skills and experience? Looking to discuss potential collaboration opportunities or have questions about my work? Don't hesitate to reach out. I'm here to connect and explore possibilities with you.</p>

        <form className="space-y-6">
        <label htmlFor="name" className="block  text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
          <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Smith" required />

          <label htmlFor="email" className="block  text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
          
          <label htmlFor="message" className="block  text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
          <textarea id="message" rows="4" className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
          <button type="submit" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Send Message
</button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
