import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] pb-10">
      <h4 className="text-center text-3xl font-ovo font-semibold">About Me</h4>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-10 ">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none ">
          <Image
            src={assets.about_me_image}
            alt="Profile Image"
            className="w-full border-[0.5px] border-gray-400 rounded-xl shadow-black "
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 mw-2xl text-gray-600">
            I'm a passionate Frontend Developer with a strong focus on building
            modern, performant, and user-friendly web applications. I specialize
            in React, Next.js, and TypeScript, creating clean and maintainable
            code that brings design to life. Whether it's crafting responsive
            UIs or optimizing frontend performance, I enjoy turning complex
            problems into elegant solutions.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }) => (
              <li
                key={title}
                className="border-[0.5px] border-gray-400 rounded-xl hover:bg-lightHover hover:-translate-y-1 hover:shadow-black  duration-500 p-6 cursor-pointer"
              >
                <Image className="w-7 mt-3" src={icon} alt={`${title} Icon`} />

                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-ovo">Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt={`${tool} Icon`} className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
