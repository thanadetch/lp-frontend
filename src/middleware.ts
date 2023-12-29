import createMiddleware from "next-intl/middleware";
import {locales} from "@/lib/navigation";

export default createMiddleware({
    locales: locales,
    defaultLocale: "th",
});

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(th|en)/:path*"]
};
