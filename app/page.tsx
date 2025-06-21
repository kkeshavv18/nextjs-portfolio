"use client";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Button from "./components/shared/Button";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Blogs />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
