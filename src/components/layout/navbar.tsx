"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export default function Navbar() {
  const sideMenuRef = React.useRef<HTMLUListElement>(null);
  const { isScrolled } = useScrollPosition();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.right = "-100%";
    }
  };

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) {
      if (isScrolled) {
        nav.classList.add("bg-gray-900", "dark:bg-gray-900", "shadow-md");
      } else {
        nav.classList.remove("bg-white", "dark:bg-gray-900", "shadow-md");
      }
    }
  }, [isScrolled]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-[12%] py-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Keshav
          </h1>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex items-center gap-8"
        >
          <li>
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </motion.ul>

        <div className="cursor-pointer flex items-center gap-4 lg:gap-6">
          <button className="cursor-pointer md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt="Menu Icon"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuRef}
        className="fixed top-0 right-[-100%] w-[80%] h-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out z-50"
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="Close Icon"
              className="w-6 h-6"
            />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 mt-20">
          <li>
            <a
              href="#home"
              onClick={closeMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 text-lg"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 text-lg"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 text-lg"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              onClick={closeMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 text-lg"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 text-lg"
            >
              Contact
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
