import Image from "next/image";
import Button from "./shared/Button";
import { ExternalLink, Github } from "lucide-react";

// Mock project data - replace with your actual project data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management features.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: [
      "/placeholder.svg?height=20&width=20", // React
      "/placeholder.svg?height=20&width=20", // Next.js
      "/placeholder.svg?height=20&width=20", // TypeScript
      "/placeholder.svg?height=20&width=20", // Tailwind
      "/placeholder.svg?height=20&width=20", // MongoDB
    ],
    techNames: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    githubLink: "https://github.com/username/ecommerce-dashboard",
    liveLink: "https://ecommerce-dashboard-demo.vercel.app",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: [
      "/placeholder.svg?height=20&width=20", // React
      "/placeholder.svg?height=20&width=20", // Node.js
      "/placeholder.svg?height=20&width=20", // Express
      "/placeholder.svg?height=20&width=20", // PostgreSQL
    ],
    techNames: ["React", "Node.js", "Express", "PostgreSQL"],
    githubLink: "https://github.com/username/task-management",
    liveLink: "https://task-manager-app.vercel.app",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using modern APIs.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: [
      "/placeholder.svg?height=20&width=20", // React
      "/placeholder.svg?height=20&width=20", // JavaScript
      "/placeholder.svg?height=20&width=20", // CSS3
      "/placeholder.svg?height=20&width=20", // API
    ],
    techNames: ["React", "JavaScript", "CSS3", "Weather API"],
    githubLink: "https://github.com/username/weather-app",
    liveLink: "https://weather-forecast-react.vercel.app",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js featuring smooth animations, dark mode, and optimized performance.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: [
      "/placeholder.svg?height=20&width=20", // Next.js
      "/placeholder.svg?height=20&width=20", // TypeScript
      "/placeholder.svg?height=20&width=20", // Tailwind
      "/placeholder.svg?height=20&width=20", // Framer Motion
    ],
    techNames: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/username/portfolio",
    liveLink: "https://myportfolio.vercel.app",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description:
      "An analytics dashboard for social media metrics with data visualization, engagement tracking, and automated reporting features.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: [
      "/placeholder.svg?height=20&width=20", // React
      "/placeholder.svg?height=20&width=20", // Python
      "/placeholder.svg?height=20&width=20", // Django
      "/placeholder.svg?height=20&width=20", // Chart.js
    ],
    techNames: ["React", "Python", "Django", "Chart.js"],
    githubLink: "https://github.com/username/social-analytics",
    liveLink: "https://social-analytics-dashboard.vercel.app",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description:
      "A recipe discovery application with ingredient-based search, nutritional information, and meal planning capabilities.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: [
      "/placeholder.svg?height=20&width=20", // Vue.js
      "/placeholder.svg?height=20&width=20", // JavaScript
      "/placeholder.svg?height=20&width=20", // SCSS
      "/placeholder.svg?height=20&width=20", // Firebase
    ],
    techNames: ["Vue.js", "JavaScript", "SCSS", "Firebase"],
    githubLink: "https://github.com/username/recipe-finder",
    liveLink: "https://recipe-finder-vue.vercel.app",
    category: "Frontend",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%]">
      <h4 className="text-center text-3xl font-ovo mb-2 font-semibold">
        My Projects
      </h4>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        A showcase of my recent work and personal projects. Each project
        demonstrates different aspects of modern web development, from frontend
        interfaces to full-stack applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="border-[0.5px] border-gray-400 rounded-xl hover:bg-lightHover hover:-translate-y-1 hover:shadow-black duration-500 cursor-pointer overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover group-hover:scale-105 duration-500"
              />
              <div className="absolute top-3 left-3">
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
                <div className="flex items-center gap-2 flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-lg hover:-translate-y-1 duration-300"
                      title={project.techNames[index]}
                    >
                      <Image
                        src={tech || "/placeholder.svg"}
                        alt={project.techNames[index]}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Button startIcon={<Github />}>Github</Button>
                <Button variant="dark" startIcon={<ExternalLink />}>
                  Live Site
                </Button>
                {/* <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-3 border-[0.5px] border-gray-400 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:-translate-y-1 duration-300 transition-all"
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </span>
                </a> */}
                {/* <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-3 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 hover:-translate-y-1 duration-300 transition-all"
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Site
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
