"use client";

import NavBar from "./ui/NavBar";
import PortfolioWrapper from "./ui/PortfolioWrapper";
import { useState } from "react";
import useMousePosition from "./utils/useMousePosition";
import HeroWithMask from "./ui/HeroWithMak";
import Footer from "./ui/Footer";
import EmailForm from "./ui/EmailForm";
import ProjectSection from "./ui/ProjectSection";
import ToolsSection from "./ui/ToolsSections";
import ProjectCarousel from "./ui/ProjectCarousel";
import AboutSection from "./ui/AboutSection";

export default function PortfolioPage() {
  const [section, setSection] = useState("Home");

  return (
    <div className="flex-1">
      <NavBar setSection={setSection} />
      <HeroWithMask />
      <AboutSection />
      <ToolsSection />
      <ProjectCarousel />
      <EmailForm />

      <Footer />
    </div>
  );
}
