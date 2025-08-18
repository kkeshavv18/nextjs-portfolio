"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Button from "./shared/Button";
import { motion } from "framer-motion";
import { useSendEmail } from "../hooks/useSendEmail";
import { TemplateParams } from "@/app/hooks/useSendEmail";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [displayStatus, setDisplayStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    isPending: isSubmitting,
    status: submitStatus,
    mutate: sendEmail,
  } = useSendEmail("https://api.emailjs.com/api/v1.0/email/send");

  // Clear status message after 5 seconds
  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      setDisplayStatus(submitStatus);
      const timer = setTimeout(() => {
        setDisplayStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      template_params: formData,
      service_id: "service_6xajbis",
      template_id: "template_gfi1zz9",
      user_id: "v632i4L5kGl4vPcVk",
      accessToken: "1BsuwqH2p3nXxdd-b3a7G",
    };
    sendEmail(payload, {
      onSuccess: () => {
        setFormData({ user_name: "", email: "", message: "", subject: "" });
      },
    });
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-16 flex flex-col items-center justify-center gap-6"
    >
      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className=" text-3xl font-ovo font-semibold primaryText dark:text-primaryText-dark"
      >
        Get In Touch
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.7,
        }}
        className=" text-secondaryText dark:text-secondaryText-dark"
      >
        Have a project in mind or want to collaborate? I'd love to hear from
        you. Send me a message and I'll get back to you as soon as possible.
      </motion.p>

      {/* Contact Form Card */}
      <div className="w-full lg:w-3/5">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl dark:shadow-gray-900/20 hover:shadow-2xl dark:hover:shadow-gray-900/40 transition-all duration-500">
          <div className="mb-4">
            <h3 className="text-xl font-ovo text-gray-800 dark:text-gray-200 mb-2">
              Send Me a Message
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gray-400 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full"></div>
          </div>

          <motion.form
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Full Name Field */}
            <div className="group">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700 dark:text-secondaryText-dark mb-2"
              >
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-2 bg-gray-50/50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryText-dark dark:focus:ring-secondaryText focus:border-transparent focus:bg-white dark:focus:bg-gray-900 focus:shadow-md transition-all duration-300 hover:border-secondaryText-dark dark:hover:border-gray-500 hover:bg-white dark:hover:bg-gray-900 hover:shadow-sm"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-secondaryText-dark mb-2"
              >
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-2 bg-gray-50/50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryText-dark dark:focus:ring-secondaryText focus:border-transparent focus:bg-white dark:focus:bg-gray-900 focus:shadow-md transition-all duration-300 hover:border-secondaryText-dark dark:hover:border-gray-500 hover:bg-white dark:hover:bg-gray-900 hover:shadow-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="group">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-secondaryText-dark mb-2"
              >
                Subject *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-2 bg-gray-50/50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryText-dark dark:focus:ring-secondaryText focus:border-transparent focus:bg-white dark:focus:bg-gray-900 focus:shadow-md transition-all duration-300 hover:border-secondaryText-dark dark:hover:border-gray-500 hover:bg-white dark:hover:bg-gray-900 hover:shadow-sm"
                  placeholder="Enter a subject"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-secondaryText-dark mb-2"
              >
                Message *
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="text-white w-full px-5 py-2 bg-gray-50/50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryText-dark dark:focus:ring-secondaryText focus:border-transparent focus:bg-white dark:focus:bg-gray-900 focus:shadow-md transition-all duration-300 hover:border-secondaryText-dark dark:hover:border-gray-500 hover:bg-white dark:hover:bg-gray-900 hover:shadow-sm resize-vertical"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
            </div>

            <Button
              variant="dark"
              loading={isSubmitting}
              className="w-full cursor-pointer"
              type="submit"
            >
              Send Message
            </Button>

            {/* Status Messages */}
            {displayStatus === "success" && (
              <div className="p-5 bg-green-50/80 dark:bg-green-900/60 backdrop-blur-sm border border-green-200 dark:border-green-700 rounded-xl shadow-sm">
                <p className="text-green-700 dark:text-green-200 text-sm font-medium">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {displayStatus === "error" && (
              <div className="p-5 bg-red-50/80 dark:bg-red-900/60 backdrop-blur-sm border border-red-200 dark:border-red-700 rounded-xl shadow-sm">
                <p className="text-red-700 dark:text-red-200 text-sm font-medium">
                  ✗ Something went wrong. Please try again or contact me
                  directly.
                </p>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
