import { assets, toolsData } from "@/assets/assets";
import { motion } from "framer-motion";

import Image from "next/image";
import React from "react";
import { infoList } from "../constants/infoList";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] pb-10"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-3xl font-ovo font-semibold"
      >
        About Me
      </motion.h4>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-10 "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none "
        >
          <Image
            src={assets.about_me_image}
            alt="Profile Image"
            className="w-full border-[0.5px] border-gray-400 rounded-xl shadow-black "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10 mw-2xl text-gray-600"
          >
            I'm a passionate Frontend Developer with a strong focus on building
            modern, performant, and user-friendly web applications. I specialize
            in React, Next.js, and TypeScript, creating clean and maintainable
            code that brings design to life. Whether it's crafting responsive
            UIs or optimizing frontend performance, I enjoy turning complex
            problems into elegant solutions.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon: Icon, iconProps, title, description }) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                key={title}
                className="border-[0.5px] border-gray-400 rounded-xl hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 p-6 cursor-pointer"
              >
                <div className="mt-3">
                  <Icon {...iconProps} />
                </div>

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6 text-gray-700 font-ovo"
          >
            Tools I Use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-5 flex-wrap"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt={`${tool} Icon`} className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
