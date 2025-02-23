"use client";

import { Button } from "@/components/ui/button";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const size = isHovered ? 400 : 40;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 bg-black text-white overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col justify-center space-y-10">
          <div className="flex items-center space-x-3">
            <Button
              size="icon"
              className="bg-[--color-test] text-black hover:bg-gray-200 transition duration-300"
            >
              <BriefcaseBusiness className="h-6 w-6" />
            </Button>
            <p className="font-semibold text-xl text-white">
              Available for work
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Crafting Innovative Software Solutions
            </span>
          </h1>
          <div className="relative">
            <p className="text-2xl sm:text-3xl lg:text-5xl leading-tight font-light text-gray-300">
              Hello! I'm Cristian, a passionate developer specializing in C# and
              C++. I create efficient, scalable solutions that drive user
              engagement and satisfaction.
            </p>
          </div>
        </div>
      </div>
      <motion.div
        className={cn(
          "mask",
          "absolute inset-0 pointer-events-none",
          "bg-[--color-test]"
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
              <div className="w-10 h-10  rounded-full"></div>
              <p className="font-semibold text-xl ">Innovating</p>
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
    </section>
  );
}
