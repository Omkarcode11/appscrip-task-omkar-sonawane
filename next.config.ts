import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.googleapis.com'], // ✅ Add allowed domain here
  },
};

export default nextConfig;
