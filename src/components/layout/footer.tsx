"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full px-[12%] py-8 bg-gray-900 dark:bg-gray-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-300">
            © 2024 {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Medium
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
