import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export static (Cloudflare Pages): un HTML per rută în `out/`, fără server.
  output: "export",
  // Loader-ul implicit de imagini cere un server → la export folosim imaginile ca atare.
  images: { unoptimized: true },
};

export default nextConfig;
