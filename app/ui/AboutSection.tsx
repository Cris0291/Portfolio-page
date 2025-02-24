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
      id="about"
      className="relative h-screen w-full flex items-center justify-center scroll-smooth"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Welcome to My Portfolio
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-white text-black font-semibold py-7 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            <Link href="/dtest.pdf">Download CV</Link>
          </Button>
          <Button
            className="bg-transparent border-2 border-white text-white font-semibold py-7 px-6 rounded-full hover:bg-white hover:text-black transition duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Send an Email
          </Button>
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
        <Image
          src="/me.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
    </section>
  );
}
