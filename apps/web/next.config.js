/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@samudra/ui",
    "@samudra/utils"
  ],
  images: {
    domains: ['localhost'],
  },
  eslint: {
    dirs: ['app', 'components', 'lib', 'hooks', 'store', 'services'],
  },
};

module.exports = nextConfig;
