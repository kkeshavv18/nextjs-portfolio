"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useTheme } from "@/contexts/theme-context";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onClick={toggleTheme}
      className="fixed top-20 right-8 z-40 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-600"
      aria-label={`Switch to ${
        resolvedTheme === "light" ? "dark" : "light"
      } mode`}
    >
      <Image
        src={resolvedTheme === "light" ? assets.moon_icon : assets.sun_icon}
        alt={`${resolvedTheme === "light" ? "Dark" : "Light"} mode icon`}
        className="w-6 h-6"
      />
    </motion.button>
  );
}
