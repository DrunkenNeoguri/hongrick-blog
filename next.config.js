/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => ({
    ...config,
    externals: [
      ...config.externals,
      {
        sharp: "commonjs sharp",
      },
    ],
  }),
};

module.exports = nextConfig;
