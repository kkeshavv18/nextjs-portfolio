import Image from "next/image";
import React, { useEffect } from "react";
import { assets } from "@/assets/assets";

const Navbar: React.FC = () => {
  const sideMenuRef = React.useRef<HTMLUListElement>(null);
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add("bg-white", "dark:bg-gray-900", "shadow-md");
        } else {
          nav.classList.remove("bg-white", "dark:bg-gray-900", "shadow-md");
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <nav className="w-full fixed flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <a href="#top">
          <p className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Portfolio<span className="text-3xl text-red-500">.</span>
          </p>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/80 dark:bg-gray-800/80 shadow-sm backdrop-blur-sm">
          <li>
            <a
              href="#top"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </li>
        </ul>
        <div className="cursor-pointer flex items-center gap-4 lg:gap-6">
          <button className="cursor-pointer md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt="Menu Icon"
              className="w-6 dark:invert"
            />
          </button>
        </div>

        {/* menu for mobile devices  */}
        <ul
          ref={sideMenuRef}
          className="md:hidden fixed -right-64 top-0 bottom-0 w-64 z-50 bg-gradient-to-b from-white dark:from-gray-900 to-gray-400 dark:to-gray-700 h-screen transition duration-500 flex flex-col items-center gap-4 py-20 px-10"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close icon"
              className="w-5 cursor-pointer dark:invert"
            />
          </div>
          <li>
            <a
              href="#top"
              onClick={closeMenu}
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              onClick={closeMenu}
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
