/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.node$/,
        use: "binary-loader",
      });
    }

    return config;
  },
}

module.exports = nextConfig;
