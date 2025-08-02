"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-[12%] py-20 bg-gray-50 dark:bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm always interested in hearing about new opportunities and exciting
          projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="mailto:keshavkattel1998@gmail.com"
            variant="dark"
            size="lg"
          >
            Send Email
          </Button>
          <Button
            href="https://linkedin.com/in/keshavkattel"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            Connect on LinkedIn
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
