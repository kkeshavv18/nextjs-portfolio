"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-[12%] py-20 bg-gray-50 dark:bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm a passionate frontend developer with expertise in React, Next.js,
          and TypeScript. I love creating beautiful, accessible, and performant
          web applications that provide exceptional user experiences.
        </p>
      </motion.div>
    </section>
  );
}
