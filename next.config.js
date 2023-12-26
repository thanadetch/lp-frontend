const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
    // Other Next.js configuration ...
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
            },
            {
                protocol: 'https',
                hostname: 'lifre-property-cms.onrender.com',
                port: '',
            },
        ],
    },
});
