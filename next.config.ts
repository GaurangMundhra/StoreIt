import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
      allowedOrigins: [
        'localhost:3000',
        '*.app.github.dev', // Allow GitHub Codespaces domains
        '*.githubpreview.dev', // Alternative GitHub Codespaces domain
        'https://reimagined-disco-q7qj66p65j5r3ww5-3000.app.github.dev/'
      ]
    },
    
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
    ],
  },
};

export default nextConfig;
