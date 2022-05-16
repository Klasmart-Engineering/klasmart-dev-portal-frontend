const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["kidsloop.net"],
    },
    i18n: {
        locales: ['en-US', 'fr'],
        defaultLocale: 'en-US',
    },    
};

module.exports = withContentlayer(nextConfig);