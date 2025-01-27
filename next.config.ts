import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**", // Allow all images from this domain
      },
    ],
  },
};

export default nextConfig;
