import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Bluetooth-Campus-Mesh',
  images: {
    unoptimized: true, // Required for static export in Next.js
  },
};

export default nextConfig;
