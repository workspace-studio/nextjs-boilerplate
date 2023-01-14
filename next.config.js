/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
        @import 'styles/utils/rem-calc';
        @import 'styles/settings/variables';
        @import 'styles/mixins/breakpoints';
    `,
  },
};

module.exports = nextConfig;
