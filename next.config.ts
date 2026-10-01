import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deployment protection requires authentication. The default image
  // optimizer does not forward auth headers when it fetches local source files,
  // so serve the already web-ready assets directly.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
