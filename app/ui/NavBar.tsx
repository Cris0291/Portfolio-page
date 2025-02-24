"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const colors = [
  { name: "Teal", value: "#6fdddd" },
  { name: "Beige", value: "#f5f5dc" },
  { name: "Orange", value: "#ec4e39" },
  { name: "Yellow", value: "#f7b32b" },
  { name: "Purple", value: "#a855f7" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Red", value: "#8b0000" },
  { name: " Dark Gray", value: "#afa18f" },
  { name: "Green", value: "#16a34a" },
  { name: "Pink", value: "#db2777" },
];

const NavBar = ({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const changeColor = (color: (typeof colors)[0]) => {
    setCurrentColor(color);
    document.documentElement.style.setProperty("--color-test", color.value);
  };

  return (
    <div className="w-full bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          <nav>
            <div className="flex items-center space-x-4">
              {["Home", "About", "Technologies", "Projects", "Contact"].map(
                (item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className={`text-[--color-test] hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition duration-300`}
                    onClick={() => scrollToSection(item.toLowerCase())}
                  >
                    {item}
                  </Button>
                )
              )}
            </div>
          </nav>
          <div className="flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gray-800 text-[--color-test] hover:bg-white hover:text-black transition duration-300">
                  <Palette className="h-5 w-5 mr-2" />
                  Theme
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {colors.map((color) => (
                  <DropdownMenuItem
                    key={color.name}
                    onClick={() => changeColor(color)}
                    className="flex items-center justify-between bg-gray-900 text-white"
                  >
                    <span>{color.name}</span>
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: color.value }}
                    />
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/Cris0291"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[--color-test] hover:text-white text-2xl transition duration-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/cristian-blanco-64142a191/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[--color-test] hover:text-white text-2xl transition duration-300" />
              </Link>
              <Link
                href="https://x.com/cbg_070"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-[--color-test] hover:text-white text-2xl transition duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-primary"></div>
    </div>
  );
};

export default NavBar;
