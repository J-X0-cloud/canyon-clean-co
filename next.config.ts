import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Keep the old flat URLs from the first version of the site working.
    return [
      { source: "/quote.html", destination: "/quote", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      {
        source: "/house-cleaning-:area.html",
        destination: "/house-cleaning/:area",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
