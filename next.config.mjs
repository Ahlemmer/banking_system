/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  transpilePackages: ['@acme/ui', 'lodash-es'],
  experimental: {
    swcTraceProfiling: true,
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
