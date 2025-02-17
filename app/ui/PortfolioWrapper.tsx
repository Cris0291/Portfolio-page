import HeroSection from "./HeroSection";

export default function PortfolioWrapper({ section }: { section: string }) {
  switch (section) {
    case "Home":
      return <HeroSection />;
    default:
      return <HeroSection />;
  }
}
