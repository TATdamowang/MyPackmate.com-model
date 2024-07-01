import { NextRequest, NextResponse } from "next/server";
import { locales } from "./lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 使用正则表达式检查路径是否是 '/trip' 或 '/trip/语言代码'
  const tripPathPattern = /^\/trip(\/(zh|ar|es|ja|ru|en|en-US|zh-CN|zh-TW|zh-HK))?$/;
  if (tripPathPattern.test(pathname)) {
    return NextResponse.next();
  }

  // 检查路径是否是 '/suggestion' 或 '/suggestion/语言代码'
  const suggestionPathPattern = /^\/suggestion(\/(zh|ar|es|ja|ru|en|en-US|zh-CN|zh-TW|zh-HK))?$/;
  if (suggestionPathPattern.test(pathname)) {
    return NextResponse.next();
  }

  const isLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (isLocale) {
    return NextResponse.next();
  }

  request.nextUrl.pathname = `/`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next)(?!.*\\.(?:ico|png|svg|jpg|jpeg|xml|txt)$)(?!/api).*)"],
};
