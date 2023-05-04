/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    font: true, // enable font support
  },
  webpack(config, options) {
    return config;
  },
};

module.exports = nextConfig;
