import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    deviceSizes: [320, 480, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 1240],
    qualities: [100],
  },
};

export default nextConfig;
