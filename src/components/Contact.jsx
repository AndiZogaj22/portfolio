import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-white dark:bg-slate-950 p-6 sm:p-10 md:p-16 lg:p-20 min-h-screen transition-colors duration-300">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
        >
          Let's get in touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 space-y-8"
          >
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Are you interested in my skills and experience? Looking to discuss potential collaboration opportunities or have questions about my work?
              <br /><br />
              Don't hesitate to reach out. I'm here to connect and explore possibilities with you.
              <br /><br />
              You can contact me through my email system or through other email providers.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-900 dark:text-white"
              >
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <span>andizogaj000@gmail.com</span>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-900 dark:text-white"
              >
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <span>Prishtina, Kosovo</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={formVariants}
            className="lg:w-1/2"
          >
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-200"
                  placeholder="John Smith"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-200"
                  placeholder="name@gmail.com"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none transition-all duration-200"
                  placeholder="Leave a message..."
                  required
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;