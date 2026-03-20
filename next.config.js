/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    api: 'modern-compiler',
  },
};

if (process.env.ANALYZE === 'true') {
  const bundleAnalyerLocal = '@next/bundle-analyzer';
  const withBundleAnalyzer = require(bundleAnalyerLocal)({
    enabled: true,
  });

  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}
