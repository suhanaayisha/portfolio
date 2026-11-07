import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build the whole site as plain HTML/CSS/JS into `out/`, so it can be
  // hosted as a static site (Render Static Site: no server, no cold starts).
  output: "export",
  // Pages are written as folders (/projects/gamezone/index.html), which
  // every static host serves without extra rewrite rules.
  trailingSlash: true,
  images: {
    // Image resizing needs a server; the screenshots are already sized and
    // compressed (WebP), so they're served as-is.
    unoptimized: true,
  },
};

export default nextConfig;
