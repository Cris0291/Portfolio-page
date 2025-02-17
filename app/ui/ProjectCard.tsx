// components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";

// Define the type for the Product object
type Product = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
};

// Define the props for the ProductCard component
type ProductCardProps = {
  product: Product;
};

const ProjectCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, description, imageUrl, projectUrl, tags } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Product Content */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {/* Tags */}
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project Link */}
      <div className="px-6 pb-4">
        <Link
          href={projectUrl}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
