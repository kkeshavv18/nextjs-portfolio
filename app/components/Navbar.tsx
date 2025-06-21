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
          nav.classList.add("bg-white", "shadow-md");
        } else {
          nav.classList.remove("bg-white", "shadow-md");
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <nav className="w-full fixed flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 z-50">
        <a href="#top">
          <p className="text-3xl font-semibold text-gray-800">
            Portfolio<span className="text-3xl text-red-500">.</span>
          </p>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <div className="cursor-pointer flex items-center gap-4 lg:gap-6">
          <button className="cursor-pointer">
            <Image src={assets.moon_icon} alt="Moon Icon" className="w-6" />
          </button>

          {/* <Button
            endIcon={<ExternalLink />}
            className="hidden lg:flex"
            href="#blogs"
            variant="dark"
          >
            Blogs
          </Button> */}

          {/* <a className="hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4 cursor-pointer">
            Blogs
            <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
          </a> */}
          <button className="cursor-pointer md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu Icon" className="w-6" />
          </button>
        </div>

        {/* menu for mobile devices  */}
        <ul
          ref={sideMenuRef}
          className="md:hidden fixed -right-64 top-0 bottom-0 w-64 z-50 bg-gradient-to-b from-white to-gray-400  h-screen transition duration-500  flex flex-col items-center gap-4 py-20 px-10"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close icon"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#blogs" onClick={closeMenu}>
              Blogs
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
