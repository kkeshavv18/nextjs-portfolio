"use client";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <>
      <Navbar />
      <ThemeToggle />

      <Hero />
      <About />
      <Blogs />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
