import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
