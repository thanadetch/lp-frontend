import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    defaultLocale: 'th',
    locales: ['th', 'en'],
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(th|en)/:path*']
};
