import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <h2 className="mb-14 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Let's get in touch.</h2>
      <section className="bg-white dark:bg-gray-900 p-6 lg:p-8 flex flex-wrap justify-center items-start h-full">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start mt-12">
          <p className="mb-8 text-gray-500 dark:text-gray-500 sm:text-base">Are you interested in my skills and experience? <br />Looking to discuss potential collaboration opportunities or have questions about my work? <br /> Don't hesitate to reach out. I'm here to connect and explore possibilities with you. <br></br> you can contact me throught my email system or throught other email providers. </p>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-gray-900 dark:text-white" />
            <p className="text-gray-900 dark:text-white">andizogaj000@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4 mt-2">
            <FaMapMarkerAlt className="text-gray-900 dark:text-white" />
            <p className="text-gray-900 dark:text-white">Prishtina, Kosovo</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start mt-8">
          <form className="w-full lg:w-4/5 space-y-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Smith" required />

            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />

            <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
            <textarea id="message" rows="4" className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
            <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
