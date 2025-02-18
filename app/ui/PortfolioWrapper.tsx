import EmailForm from "./EmailForm";
import HeroSection from "./HeroSection";
import ProjectCarousel from "./ProjectCarousel";
import ToolsSection from "./ToolsSections";

export default function PortfolioWrapper({ section }: { section: string }) {
  switch (section) {
    case "Home":
      return <HeroSection />;
    case "Projects":
      return <ProjectCarousel />;
    case "Technologies":
      return <ToolsSection />;
    case "Contact":
      return <EmailForm />;
    default:
      return <HeroSection />;
  }
}
