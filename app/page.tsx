"use client";

import NavBar from "./ui/NavBar";
import { useEffect, useState } from "react";
import HeroWithMask from "./ui/HeroWithMak";
import Footer from "./ui/Footer";
import EmailForm from "./ui/EmailForm";
import ProjectCarousel from "./ui/ProjectCarousel";
import AboutSection from "./ui/AboutSection";
import TechnologyGrid from "./ui/TechnologyGrid";

export default function PortfolioPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-1">
      <NavBar scrollToSection={scrollToSection} />
      <HeroWithMask />
      <AboutSection scrollToSection={scrollToSection} />
      <TechnologyGrid />
      <ProjectCarousel />
      <EmailForm />

      <Footer />
    </div>
  );
}
