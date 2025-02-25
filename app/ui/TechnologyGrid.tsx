"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiTypescript,
  SiDotnet,
  SiNextdotjs,
} from "react-icons/si";
import { FcCopyright } from "react-icons/fc";
import { DiDotnet, DiGit, DiDatabase } from "react-icons/di";
import { cn } from "@/lib/utils";
import Image from "next/image";

const technologies = [
  { name: "C#", icon: FcCopyright, color: "#178600" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "ASP.Net Core", icon: SiDotnet, color: "#6b21a8" },
  { name: "EF Core", icon: DiDotnet, color: "#6b21a8" },
  { name: "SQL", icon: DiDatabase, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#020617" },
  { name: "Git", icon: DiGit, color: "#F05032" },
];

const TechnologyCard: React.FC<{
  name: string;
  icon: React.ElementType;
  color: string;
}> = ({ name, icon: Icon, color }) => (
  <div className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-300/20 group">
    <div className="bg-white p-3 sm:p-4 rounded-full mb-3 sm:mb-4 transition-colors duration-300 group-hover:bg-opacity-50">
      <Icon className="text-3xl sm:text-4xl md:text-5xl" style={{ color }} />
    </div>
    <span className="text-sm sm:text-base md:text-lg font-medium text-gray-800 text-center">
      {name}
    </span>
  </div>
);

const TechnologyGrid: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    const handleMouseLeave = () => setIsHovered(false);
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const size = isHovered ? 400 : 40;

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
      id="technologies"
      className="w-full relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[--color-test] scroll-smooth"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      ref={sectionRef}
    >
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white"
            variants={itemVariants}
          >
            Essential Tools I Use
          </motion.h2>
          <motion.div
            className="text-center mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg md:text-xl text-white">
              Discover the technologies I leverage to create amazing apps
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
          >
            {technologies.map((tech) => (
              <motion.div key={tech.name} variants={itemVariants}>
                <TechnologyCard
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {!isMobile && (
        <motion.div
          className={cn(
            "mask",
            "absolute inset-0 pointer-events-none",
            "bg-[--color-test]",
            "hidden md:block" // Hide on mobile and small screens
          )}
          animate={{
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
        >
          <Image
            src="/colors1.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </motion.div>
      )}
    </section>
  );
};

export default TechnologyGrid;
