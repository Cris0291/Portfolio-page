import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const NavBar = ({ setSection }: { setSection: (section: string) => void }) => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-transparent">
        <nav className="mb-4 sm:mb-0">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
            {["Home", "Technologies", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                className="text-black bg-transparent hover:text-white hover:bg-black px-3 py-1 rounded-md text-sm md:text-md transition duration-300"
                onClick={() => setSection(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-black hover:text-gray-700 text-2xl transition duration-300" />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-black hover:text-gray-700 text-2xl transition duration-300" />
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-black hover:text-gray-700 text-2xl transition duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
