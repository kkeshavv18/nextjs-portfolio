"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="w-full px-[12%] pt-32 pb-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">Keshav</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Frontend Developer passionate about creating beautiful and
            functional web experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              href="#projects"
              variant="dark"
              size="lg"
              className="text-lg px-8 py-3"
            >
              View My Work
            </Button>

            <Button
              href="#contact"
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <Image
              src={assets.profile_image}
              alt="Keshav Kattel"
              width={400}
              height={400}
              className="rounded-full shadow-2xl"
              priority
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-4 -right-4"
            >
              <Image
                src={assets.hand_icon}
                alt="Wave"
                width={60}
                height={60}
                className="animate-bounce"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
