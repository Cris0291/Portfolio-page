"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 bg-[--color-test] text-black p-4 flex justify-center items-center z-50"
      initial={{ height: "60px" }}
      whileHover={{ height: "100px" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <motion.p
          className="text-xs sm:text-sm mt-2 flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Made with <FaHeart className="text-primary mx-1" /> using Next.js and
          Tailwind CSS
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
