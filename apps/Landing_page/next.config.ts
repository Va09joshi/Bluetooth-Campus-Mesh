import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/Bluetooth-Campus-Mesh' : '',
  images: {
    unoptimized: true, // Required for static export in Next.js
  },
};

export default nextConfig;
