"use client";

import type React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    liveUrl:
      "https://images.unsplash.com/photo-1739382120576-b1434e8bc4d3?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <section
      id="projects"
      className="flex items-center justify-center min-h-screen w-full py-20 md:py-32 bg-black text-white overflow-hidden scroll-smooth"
    >
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            <AnimatePresence mode="wait">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-[2fr_1fr] gap-12 items-center max-w-10xl mx-auto"
                  >
                    <motion.div
                      className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.05, rotate: -1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </motion.div>
                    <div className="space-y-6">
                      <motion.h3
                        className="text-4xl font-bold mb-4 text-[--color-test]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-300 text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {project.technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-[--color-test] text-black rounded-full text-sm font-medium"
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
                            className="bg-[--color-test] text-black hover:bg-white  px-16 py-6  rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
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
                            className="bg-[--color-test] text-black hover:bg-white px-16 py-6 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
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
            </AnimatePresence>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-[--color-test] bg-opacity-50 hover:bg-opacity-75 text-[--color-test] rounded-full p-3 transition-all duration-300 ease-in-out">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-blue-600 bg-opacity-50 hover:bg-opacity-75 text-[--color-test] rounded-full p-3 transition-all duration-300 ease-in-out">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectCarousel;
