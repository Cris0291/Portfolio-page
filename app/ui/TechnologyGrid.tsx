import React from "react";
import { motion } from "framer-motion";
import {
  SiSharp,
  SiCplusplus,
  SiTypescript,
  SiDotnet,
  SiNextdotjs,
} from "react-icons/si";
import { FcCopyright } from "react-icons/fc";
import { DiDotnet, DiGit, DiDatabase } from "react-icons/di";

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
  <motion.div
    className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-indigo-300 rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-300/20 group"
    whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-white bg-opacity-30 border border-indigo-300 p-4 rounded-full mb-4 transition-colors duration-300 group-hover:bg-opacity-50">
      <Icon className="text-5xl" style={{ color }} />
    </div>
    <span className="text-lg font-medium text-gray-800 text-center">
      {name}
    </span>
  </motion.div>
);

const TechnologyGrid: React.FC = () => {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-100 to-red-100">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-5xl font-bold text-center mb-8 text-indigo-800"
            variants={itemVariants}
          >
            Essential Tools I Use
          </motion.h2>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <p className="text-xl text-gray-700">
              Discover the technologies I leverage to create amazing apps
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
    </section>
  );
};

export default TechnologyGrid;
