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
  { name: "Next.Js", icon: SiNextdotjs, color: "#020617" },
  { name: "Git", icon: DiGit, color: "#F05032" },
];

const TechnologyCard: React.FC<{
  name: string;
  icon: React.ElementType;
  color: string;
}> = ({ name, icon: Icon, color }) => (
  <motion.div
    className="bg-transparent border border-yellow-500 rounded-xl p-4 flex flex-row items-center justify-start transition-all duration-300  hover:shadow-lg hover:shadow-blue-500/20 group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-gray-800 border border-yellow-500 p-3 rounded-lg mr-4 transition-colors duration-300 group-hover:bg-gray-700">
      <Icon className="text-4xl" style={{ color }} />
    </div>
    <span className="text-sm font-medium text-white">{name}</span>
  </motion.div>
);

const TechnologyGrid: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-4xl font-bold text-left mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
          Essential Tools I Use
        </span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <motion.p
          className="text-lg sm:text-lg  bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover all the tecnologies I use
        </motion.p>
        <motion.p
          className="text-lg sm:text-lg  bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          to create amazing apps
        </motion.p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <TechnologyCard
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechnologyGrid;
