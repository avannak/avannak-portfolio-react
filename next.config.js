/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // Only include allowed properties here
    adjustFontFallbacks: true,
    adjustFontFallbacksWithSizeAdjust: true,
    allowedRevalidateHeaderKeys: [],
    amp: {},
    clientRouterFilter: true,
    // Specify the directory where your pages are located
  },
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? "";
    const withOptimizedImages = require("next-optimized-images");

    module.exports = withOptimizedImages({});
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
