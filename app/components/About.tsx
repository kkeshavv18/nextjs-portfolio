import { motion } from "framer-motion";
import React from "react";
import { infoList } from "../constants/infoList";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-4xl font-ovo font-bold primaryText dark:text-primaryText-dark mb-4"
      >
        About Me
      </motion.h4>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg leading-relaxed text-secondaryText dark:text-secondaryText-dark mb-16 max-w-3xl mx-auto"
        >
          I'm a passionate Frontend Developer with a strong focus on building
          modern, performant, and user-friendly web applications. I specialize
          in React, Next.js, and TypeScript, creating clean and maintainable
          code that brings design to life. Whether it's crafting responsive UIs
          or optimizing frontend performance, I enjoy turning complex problems
          into elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {infoList.map(
            ({ icon: Icon, iconProps, title, description }, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                key={title}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                      <Icon
                        {...iconProps}
                        className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300"
                        size={32}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-primaryText-dark mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                  </h3>

                  <p className="text-secondaryText dark:text-secondaryText-dark leading-relaxed group-hover:text-gray-700 dark:group-hover:text-secondaryText-dark transition-colors duration-300">
                    {description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700" />
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
