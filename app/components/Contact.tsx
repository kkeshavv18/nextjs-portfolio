"use client";

import type React from "react";
import { useState } from "react";
import Button from "./shared/Button";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
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
        className=" text-3xl font-ovo font-semibold"
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
        className=" text-gray-600"
      >
        Have a project in mind or want to collaborate? I'd love to hear from
        you. Send me a message and I'll get back to you as soon as possible.
      </motion.p>

      {/* Contact Form Card */}
      <div className="w-full lg:w-3/5">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="mb-4">
            <h3 className="text-xl font-ovo text-gray-800 mb-2">
              Send Me a Message
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full"></div>
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
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent focus:bg-white focus:shadow-md transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-sm"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="w-full px-5 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent focus:bg-white focus:shadow-md transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="w-full px-5 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent focus:bg-white focus:shadow-md transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-sm resize-vertical"
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
            {submitStatus === "success" && (
              <div className="p-5 bg-green-50/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-sm">
                <p className="text-green-700 text-sm font-medium">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-5 bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-xl shadow-sm">
                <p className="text-red-700 text-sm font-medium">
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
