import ProjectCard from "./ProjectCard";

// Define the type for the Product object
type Product = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
};
const products: Product[] = [
  {
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website built with React and Node.js.",
    imageUrl: "/images/ecommerce.jpg",
    projectUrl: "https://example.com/ecommerce",
    tags: ["React", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills.",
    imageUrl: "/images/portfolio.jpg",
    projectUrl: "https://example.com/portfolio",
    tags: ["Next.js", "Tailwind CSS"],
  },
  // Add more products here
];

const ProjectContainer: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 xl:py-36 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6x">
        <h1 className="text-4xl font-bold text-center mb-10">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProjectCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
