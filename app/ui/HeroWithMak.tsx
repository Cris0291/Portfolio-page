"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full py-12 md:py-20 lg:py-32 bg-black text-white overflow-hidden scroll-smooth"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col justify-center space-y-6 md:space-y-10">
          <div className="flex items-center space-x-3">
            <Button
              size="icon"
              className="bg-[--color-test] text-black hover:bg-gray-200 transition duration-300"
            >
              <BriefcaseBusiness className="h-4 w-4 md:h-6 md:w-6" />
            </Button>
            <p className="font-semibold text-base md:text-xl text-white">
              Available for work
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Crafting Innovative Software Solutions
            </span>
          </h1>
          <div className="relative">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight font-light text-gray-300">
              Hello! I'm Cristian, a passionate developer specializing in C# and
              C++. I create efficient, scalable solutions that drive user
              engagement and satisfaction.
            </p>
          </div>
        </div>
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl h-full">
            <div className="flex flex-col justify-center space-y-10 h-full">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full"></div>
                <p className="font-semibold text-xl">Innovating</p>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-black">
                Pushing Boundaries in Software Development
              </h1>
              <div className="relative">
                <p className="text-2xl sm:text-3xl lg:text-5xl leading-tight font-light text-black">
                  I tackle challenges that push the boundaries of technology,
                  designing user-friendly interfaces and optimizing complex
                  systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
