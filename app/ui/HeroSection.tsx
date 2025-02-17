"use client";

import { Button } from "@/components/ui/button";
import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full py-5 md:py-10 lg:py-15 xl:py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6 max-w-lg mx-auto lg:mx-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <Button
                size="icon"
                className="bg-green-500 text-white hover:bg-green-600 transition duration-300"
              >
                <BriefcaseBusiness className="h-5 w-5" />
              </Button>
              <p className="font-semibold text-white text-lg">
                Available for work
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Building Software For The Future
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl sm:text-2xl leading-relaxed text-gray-300"
            >
              I'm a passionate C#/C++ developer creating amazing apps.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                className="bg-yellow-400 text-black hover:bg-yellow-500 transition duration-300 text-lg py-6 px-8"
              >
                Download CV
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 text-lg py-6 px-8"
              >
                Send an email
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full h-[450px] rounded-2xl overflow-hidden relative shadow-2xl mx-auto lg:mx-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1517964603305-11c0f6f66012?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="My Portrait"
              className="rounded-2xl"
              objectFit="cover"
              layout="fill"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
