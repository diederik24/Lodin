import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // De banner is de bron van de hero en mag nauwelijks gecomprimeerd worden
    qualities: [75, 95],
  },
};

export default nextConfig;
