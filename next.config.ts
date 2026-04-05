import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ПАЖЊА: Ово дозвољава продукциони build чак и ако постоје TypeScript грешке
    ignoreBuildErrors: true,
  },
  eslint: {
    // Такође занемари ESLint грешке за прво лансирање
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
