/** @type {import('next').NextConfig} */
const { merge } = require("webpack-merge");
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "utils"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

const videoLoaderConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};
module.exports = merge(nextConfig, videoLoaderConfig);
