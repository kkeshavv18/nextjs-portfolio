import Image from "next/image";
import Button from "./shared/Button";
import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "../constants/projectsData";
import { motion } from "framer-motion";
import { useState } from "react";

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalProjects = projectsData.length;
  const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projectsData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="projects" className="w-full px-[12%] ">
      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-3xl font-ovo mb-2 font-semibold text-gray-900 dark:text-gray-100"
      >
        My Projects
      </motion.h4>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
      >
        A showcase of my recent work and personal projects. Each project
        demonstrates different aspects of modern web development, from frontend
        interfaces to full-stack applications.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {currentProjects.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            key={project.id}
            className="border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-gray-600/20 duration-500 cursor-pointer overflow-hidden group bg-white dark:bg-gray-900"
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
                <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 duration-300">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techNames.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[11px] sm:text-xs px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:-translate-y-1 duration-300"
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center gap-2 mt-8"
        >
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </motion.div>
      )}

      {/* Projects Info */}
      {totalProjects > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"
        >
          Showing {startIndex + 1} to {Math.min(endIndex, totalProjects)} of{" "}
          {totalProjects} projects
        </motion.p>
      )}
    </div>
  );
};

export default Projects;
