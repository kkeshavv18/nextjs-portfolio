import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Button from "./shared/Button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-[8%] pt-20 md:pt-40 pb-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <motion.div
          className="w-36 h-36 rounded-full p-[3px] bg-gray-400"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={assets.profile_image}
            alt="Profile Image"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          className="flex items-end gap-2 text-xl md:text-2xl mb-3"
        >
          Hi! I am Keshav Kattel{" "}
          <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="text-3xl sm:text-5xl  font-semibold"
        >
          A Frontend Web Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
          }}
          className="max-w-2xl mx-auto text-gray-600"
        >
          Passionate Frontend Developer skilled in React.js, Next.js, and
          TypeScript. I craft fast, responsive, and accessible web applications
          focused on performance, clean code, and seamless user experiences
          across all devices. Let's build something amazing together.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
          >
            <Button variant="dark" endIcon={<ArrowRight />} href="#contact">
              Contact Me
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
          >
            <Button
              variant="light"
              href="/sample-resume.pdf"
              endIcon={<Download />}
              download
            >
              Resume
            </Button>
          </motion.div>
          {/* <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            href="/sample-resume.pdf"
            download
            className="px-10 py-3 border border-gray-500 rounded-full ml-4 cursor-pointer flex items-center gap-2"
          >
            Resume
            <Image
              src={assets.download_icon}
              alt="Arrow Icon"
              className=" w-4"
            />
          </motion.a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
