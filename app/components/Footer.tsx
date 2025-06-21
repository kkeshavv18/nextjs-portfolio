"use client";

import Image from "next/image";
import Button from "./shared/Button";
import { MoveUp } from "lucide-react";
import { socialLinks } from "../constants/socialLinks";

// Footer navigation links
const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

// Quick contact info
const quickContact = [
  {
    label: "Email",
    value: "keshavkattel1998@gmail.com",
    href: "mailto:keshavkattel1998@gmail.com",
  },
  {
    label: "Phone",
    value: "+977 9814321355",
    href: "tel:+9779814321355",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="w-full px-[12%] py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold font-ovo text-gray-700 mb-4">
              Keshav Kattel
            </h3>
            <p className="text-gray-600 text-sm mb-6 max-w-md">
              Passionate Frontend Developer specializing in React, Next.js, and
              TypeScript. I create modern, performant, and user-friendly web
              applications that bring designs to life.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg cursor-pointer hover:-translate-y-1 hover:bg-white hover:shadow-md duration-500"
                  title={social.name}
                >
                  <social.icon className="w-4.5 h-4.5 text-gray-600 hover:text-gray-900" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-gray-900 hover:translate-x-1 duration-300 transition-all inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              {quickContact.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="text-gray-600 text-sm hover:text-gray-900 duration-300 transition-colors block"
                  >
                    <span className="text-xs text-gray-500 block">
                      {contact.label}
                    </span>
                    {contact.value}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-xs text-gray-500 block">Location</span>
                <span className="text-gray-600 text-sm">Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Keshav. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/privacy"
                className="text-gray-600 text-sm hover:text-gray-900 duration-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-600 text-sm hover:text-gray-900 duration-300 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Back to Top Button */}
          <Button endIcon={<MoveUp />} href="#top">
            Back to Top
          </Button>
        </div>
      </div>

      {/* Optional: Made with love section */}
      <div className="bg-gray-100 py-4">
        <div className="w-full px-[12%]">
          <p className="text-center text-xs text-gray-500">
            Made with{" "}
            <span className="text-red-500 animate-pulse" title="love">
              ❤️
            </span>{" "}
            using Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
