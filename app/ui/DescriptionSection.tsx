"use client";

import { Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function DescriptionSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center p-8 md:p-12">
            <div className="flex flex-col gap-6">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-lg leading-relaxed text-gray-300">
                  Hello! My name is Cristian, I'm a developer with a passion for
                  building amazing apps that deliver real value. I specialize in
                  C# and C++, with a strong focus on creating efficient,
                  scalable solutions that drive user engagement and
                  satisfaction.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Whether it's designing user-friendly interfaces or optimizing
                  complex systems behind the scenes, I love tackling challenges
                  that push the boundaries of what technology can achieve.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row lg:flex-col gap-8 mt-8 lg:mt-0"
            >
              <StatCard number={2} text="Projects done" />
              <StatCard number={0} text="Years of experience" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex flex-col items-center bg-gray-700 rounded-xl p-6 transition-transform hover:scale-105">
      <div className="flex items-center mb-2">
        <span className="text-5xl md:text-6xl font-bold text-white mr-2">
          {number}
        </span>
        <Plus className="text-yellow-400 w-8 h-8 md:w-10 md:h-10" />
      </div>
      <span className="text-lg md:text-xl text-center text-gray-300">
        {text}
      </span>
    </div>
  );
}
