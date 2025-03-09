"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import VideoBackground from "./VideoBackground";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  comingSoon: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution using clean architecture with ASP.Net Core and React",
    imageUrl: "/ecommerce.png",
    technologies: ["ASP.Net Core", "Entity Framework", "SQL", "React", "C#"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Cris0291/RunApp-Eshop",
    comingSoon: false,
  },
  {
    id: 2,
    title: "Tetris Game",
    description: "A classic game made with c++ and raylib",
    imageUrl: "/Tetris.png",
    technologies: ["C++", "Raylib"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Cris0291/Tetris-Game-Cpp",
    comingSoon: false,
  },
  {
    id: 3,
    title: "Real Time Messaging System",
    description:
      "A modular monolith real time messaging system also with management tool capabilities built with ASP.Net Core and React",
    imageUrl: "/soon.jpg",
    technologies: ["ASP.Net Core", "Entity Framework", "SQL", "React", "C#"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Cris0291/Babylon",
    comingSoon: true,
  },
  {
    id: 4,
    title: "Json Parser",
    description: "A json parser library made in c++",
    imageUrl: "/soon.jpg",
    technologies: ["C++"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Cris0291/Json-Parser-Cpp",
    comingSoon: true,
  },
];

const ProjectCarousel: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="projects"
      className="flex items-center justify-center min-h-screen w-full py-12 sm:py-16 md:py-20 lg:py-32 text-white overflow-hidden scroll-smooth relative"
    >
      <VideoBackground videoSrc="/coding.mp4" />
      <div className="container mx-auto px-4">
        <Carousel opts={{ loop: true }} className="w-full">
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
                    className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 md:gap-12 items-center max-w-6xl mx-auto"
                  >
                    <motion.div
                      className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.05, rotate: -1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </motion.div>
                    <div className="space-y-4 md:space-y-6">
                      <motion.h3
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-[--color-test]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-300 text-base md:text-lg leading-relaxed"
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
                            className="px-2 py-1 bg-[--color-test] text-black rounded-full text-xs md:text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                      <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        {!project.comingSoon ? (
                          <Button
                            asChild
                            className="bg-[--color-test] text-black hover:bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                          >
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink
                                size={16}
                                className="mr-2 inline-block"
                              />
                              <span className="inline-block">Live Demo</span>
                            </motion.a>
                          </Button>
                        ) : (
                          <Button className="bg-[--color-test] text-black hover:bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base">
                            <Send size={16} className="mr-2 inline-block" />
                            <span className="inline-block">Coming Soon</span>
                          </Button>
                        )}

                        <Button
                          asChild
                          variant="outline"
                          className="bg-[--color-test] text-black hover:bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                        >
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={16} className="mr-2 inline-block" />
                            <span className="inline-block">View Code</span>
                          </motion.a>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </AnimatePresence>
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-[--color-test] bg-opacity-50 hover:bg-opacity-75 text-[--color-test] rounded-full p-2 sm:p-3 transition-all duration-300 ease-in-out">
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-[--color-test] bg-opacity-50 hover:bg-opacity-75 text-[--color-test] rounded-full p-2 sm:p-3 transition-all duration-300 ease-in-out">
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectCarousel;
