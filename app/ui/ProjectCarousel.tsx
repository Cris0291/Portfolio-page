"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    imageUrl: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather forecasting using OpenWeatherMap API",
    imageUrl: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "OpenWeatherMap API", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A Kanban-style project management tool built with React and Firebase",
    imageUrl: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Firebase", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project3",
  },
];

const ProjectCarousel: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-blue-100 to-red-100">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-gray-800 tracking-tight"
          variants={itemVariants}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="relative bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 overflow-hidden"
          variants={itemVariants}
        >
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    <motion.div
                      className="relative aspect-video rounded-2xl overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </motion.div>
                    <div>
                      <motion.h3
                        className="text-3xl font-semibold mb-4 text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-600 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {project.technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                      <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        {project.liveUrl && (
                          <Button
                            asChild
                            className="bg-blue-500 hover:bg-blue-600"
                          >
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink size={18} className="mr-2" />
                              Live Demo
                            </motion.a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            asChild
                            variant="outline"
                            className="bg-gray-800 text-white hover:bg-gray-900 hover:text-white"
                          >
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github size={18} className="mr-2" />
                              View Code
                            </motion.a>
                          </Button>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectCarousel;
