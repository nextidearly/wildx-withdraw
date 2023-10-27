/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/apirone/:slug*",
        destination: "https://apirone.com/api/v2/:slug*",
      },
      {
        source: "/mempool/:slug*",
        destination: "https://mempool.space/api/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
