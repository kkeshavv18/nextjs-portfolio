"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="w-full px-[12%] py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          My Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Here are some of the projects I've worked on
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project cards will go here */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Project 1
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Description of project 1
          </p>
        </motion.div>
      </div>
    </section>
  );
}
