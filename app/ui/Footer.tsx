"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaCode, FaCoffee, FaLaptopCode } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [contentHeight, setContentHeight] = useState(60);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  const iconAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 bg-[--color-test] text-black p-4 flex flex-col items-center z-50 overflow-hidden"
      initial={{ height: "60px" }}
      animate={{ height: isHovered ? contentHeight : "60px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      }}
    >
      <div ref={contentRef} className="w-full">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-4">
          <Button
            variant="ghost"
            className="border border-black mb-2 sm:mb-0"
            asChild
          >
            <Link href="/dtest.pdf">Download CV</Link>
          </Button>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm sm:text-base">
              © {new Date().getFullYear()} Cristian Blanco. All rights reserved.
            </p>
          </motion.div>

          <motion.p className="text-xs sm:text-sm mt-2 sm:mt-0 flex items-center justify-center">
            Made with <FaHeart className="text-primary mx-1" />
          </motion.p>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="w-full flex justify-center items-center space-x-8 mt-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.div
                variants={iconAnimation}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <FaCode className="text-4xl" />
                <p className="text-xs mt-1">Clean Code</p>
              </motion.div>
              <motion.div
                variants={iconAnimation}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <FaCoffee className="text-4xl" />
                <p className="text-xs mt-1">Fueled by Coffee</p>
              </motion.div>
              <motion.div
                variants={iconAnimation}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <FaLaptopCode className="text-4xl" />
                <p className="text-xs mt-1">Passionate Developer</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.footer>
  );
};

export default Footer;
