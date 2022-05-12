const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["kidsloop.net"],
    },
};

module.exports = withContentlayer(nextConfig);