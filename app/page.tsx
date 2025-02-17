"use client";

import NavBar from "./ui/NavBar";
import PortfolioWrapper from "./ui/PortfolioWrapper";
import { useState } from "react";

export default function PortfolioPage() {
  const [section, setSection] = useState("Home");
  return (
    <main className="flex-1">
      <NavBar setSection={setSection} />
      <PortfolioWrapper section={section} />
    </main>
  );
}
