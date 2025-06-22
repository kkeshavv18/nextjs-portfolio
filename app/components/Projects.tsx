import Image from "next/image";
import Button from "./shared/Button";
import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "../constants/projectsData"; // Import your project data
import { motion } from "framer-motion";

// Mock project data - replace with your actual project data

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%] ">
      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="text-center text-3xl font-ovo mb-2 font-semibold"
      >
        My Projects
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.7,
        }}
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
      >
        A showcase of my recent work and personal projects. Each project
        demonstrates different aspects of modern web development, from frontend
        interfaces to full-stack applications.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {projectsData.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            key={project.id}
            className="border-[0.5px] border-gray-400 rounded-xl hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 cursor-pointer overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={project?.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 duration-500"
              />
              <div className="absolute top-8 left-3">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-700 mb-3 group-hover:text-gray-900 duration-300">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techNames.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[11px] sm:text-xs px-2 py-1 border border-gray-300 rounded-full bg-white text-gray-700 hover:-translate-y-1 duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Button startIcon={<Github />} href={project.githubLink}>
                  Github
                </Button>
                <Button
                  variant="dark"
                  startIcon={<ExternalLink />}
                  href={project.liveLink}
                >
                  Live Site
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
