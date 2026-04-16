import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.varad.fyi" }],
        destination: "https://varad.fyi/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
