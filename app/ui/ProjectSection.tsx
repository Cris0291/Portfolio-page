"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    shortDescription: "A full-stack e-commerce solution with advanced features",
    fullDescription:
      "Developed a comprehensive e-commerce platform with user authentication, product management, shopping cart functionality, and secure payment integration. This project showcases the ability to create complex, scalable web applications.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 2,
    title: "Task Management App",
    shortDescription: "Efficient task organization tool for teams",
    fullDescription:
      "Created a responsive task management application with real-time updates, task prioritization, and team collaboration features. This project demonstrates proficiency in front-end development and real-time data handling.",
    technologies: ["Vue.js", "Firebase", "Vuex"],
    image: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 3,
    title: "AI-powered Chatbot",
    shortDescription: "Intelligent customer service bot with NLP capabilities",
    fullDescription:
      "Implemented an AI-driven chatbot for customer support, capable of handling inquiries, processing natural language, and learning from interactions. This project showcases skills in AI and natural language processing.",
    technologies: ["Python", "TensorFlow", "NLP", "AWS"],
    image: "/placeholder.svg?height=300&width=400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  // Add more projects here if needed
];

const ProjectShowcase: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainerRef.current) {
        e.preventDefault();
        scrollContainerRef.current.scrollTop += e.deltaY;
      }
    };

    const currentScrollContainer = scrollContainerRef.current;
    if (currentScrollContainer) {
      currentScrollContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (currentScrollContainer) {
        currentScrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          My Projects
        </h2>
        <div
          ref={scrollContainerRef}
          className="space-y-8 h-[calc(100vh-12rem)] overflow-y-auto pr-4 custom-scrollbar [&::-webkit-scrollbar]:w-0"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`
                bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg
                rounded-xl overflow-hidden cursor-pointer
                border border-gray-700 shadow-lg
                transition-all duration-300 ease-in-out
                hover:bg-opacity-70 hover:shadow-xl
              `}
              onClick={() =>
                setExpandedProject(
                  expandedProject === project.id ? null : project.id
                )
              }
              layout
            >
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">
                    {project.title}
                  </h3>
                  {expandedProject === project.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <p className="text-gray-300 mt-2 text-lg">
                  {project.shortDescription}
                </p>
              </div>
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 sm:px-8 pb-8"
                  >
                    <div className="relative w-full h-64 sm:h-80 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                      {project.fullDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-600 bg-opacity-50 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          GitHub Repo
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
