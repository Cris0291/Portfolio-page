"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function AboutSection({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
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

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center scroll-smooth py-16 px-4"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <Image
        src="/main2.jpg"
        alt="Background Image"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
          Welcome to My Portfolio
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-white text-black font-semibold py-4 sm:py-5 px-6 rounded-full hover:bg-opacity-90 transition duration-300 text-sm sm:text-base"
          >
            <Link href="/CV.pdf">Download CV</Link>
          </Button>
          <Button
            className="bg-transparent border-2 border-white text-white font-semibold py-4 sm:py-5 px-6 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm sm:text-base"
            onClick={() => scrollToSection("contact")}
          >
            Send an Email
          </Button>
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
          <Image
            src="/me.jpeg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </motion.div>
      )}
    </section>
  );
}
