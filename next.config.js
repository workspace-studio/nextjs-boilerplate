/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
        @import '@styles/utils/rem-calc';
        @import '@styles/settings/variables';
        @import '@styles/mixins/breakpoints';
    `,
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
