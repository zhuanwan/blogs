# nextjs项目开发

## 安装
```shell
npx create-next-app@latest my-next-app
```
下面一些提示，选择你要的配置

## 添加多语言、pc/mobile

* [多语言项目参考链接](https://github.com/i18next/next-app-dir-i18next-example-ts)
* [项目链接](https://github.com/zhuanwan/nexjs-demo)

::: note
参考链接中url是对应的 **/en/about**、**/zh/about** 这种,我们统一希望改成 **/about**，并且区分移动端和pc端，所以修改目录和中间件
:::

::: details
::: tabs

@tab 目录

``` js
src
 ┣ app
 ┃ ┣ mobile
 ┃ ┃ ┣ about-us
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ contact-us
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ home
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ news
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ news-detail
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ product-center
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┗ solution
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┣ pc
 ┃ ┃ ┣ about-us
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ contact-us
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ home
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ news
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ news-detail
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ product-center
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┗ solution
 ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┣ layout.tsx
 ┃ ┗ page.tsx
 ┣ components
 ┃ ┣ mobile
 ┃ ┃ ┣ footer
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┣ header
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┗ MobileFontScript.tsx
 ┃ ┗ pc
 ┃ ┃ ┣ footer
 ┃ ┃ ┃ ┗ index.tsx
 ┃ ┃ ┗ header
 ┃ ┃ ┃ ┗ index.tsx
 ┣ i18n
 ┃ ┣ locales
 ┃ ┃ ┣ de
 ┃ ┃ ┃ ┣ about-us.json
 ┃ ┃ ┃ ┣ contact-us.json
 ┃ ┃ ┃ ┣ home.json
 ┃ ┃ ┃ ┣ index.json
 ┃ ┃ ┃ ┣ news-detail.json
 ┃ ┃ ┃ ┣ news.json
 ┃ ┃ ┃ ┣ product-center.json
 ┃ ┃ ┃ ┗ solution.json
 ┃ ┃ ┣ en
 ┃ ┃ ┃ ┣ about-us.json
 ┃ ┃ ┃ ┣ contact-us.json
 ┃ ┃ ┃ ┣ home.json
 ┃ ┃ ┃ ┣ index.json
 ┃ ┃ ┃ ┣ news-detail.json
 ┃ ┃ ┃ ┣ news.json
 ┃ ┃ ┃ ┣ product-center.json
 ┃ ┃ ┃ ┗ solution.json
 ┃ ┃ ┗ zh
 ┃ ┃ ┃ ┣ about-us.json
 ┃ ┃ ┃ ┣ contact-us.json
 ┃ ┃ ┃ ┣ home.json
 ┃ ┃ ┃ ┣ index.json
 ┃ ┃ ┃ ┣ news-detail.json
 ┃ ┃ ┃ ┣ news.json
 ┃ ┃ ┃ ┣ product-center.json
 ┃ ┃ ┃ ┗ solution.json
 ┃ ┣ client.ts
 ┃ ┣ i18next.ts
 ┃ ┣ index.ts
 ┃ ┗ settings.ts
 ┣ styles
 ┃ ┣ mobile
 ┃ ┃ ┣ about-us.scss
 ┃ ┃ ┣ ani.scss
 ┃ ┃ ┣ comm.scss
 ┃ ┃ ┣ contact-us.scss
 ┃ ┃ ┣ footer.scss
 ┃ ┃ ┣ header.scss
 ┃ ┃ ┣ home.scss
 ┃ ┃ ┣ index-en.scss
 ┃ ┃ ┣ index.scss
 ┃ ┃ ┣ news-detail.scss
 ┃ ┃ ┣ news.scss
 ┃ ┃ ┣ product-center.scss
 ┃ ┃ ┗ solution.scss
 ┃ ┗ pc
 ┃ ┃ ┣ about-us.scss
 ┃ ┃ ┣ ani.scss
 ┃ ┃ ┣ comm.scss
 ┃ ┃ ┣ contact-us.scss
 ┃ ┃ ┣ footer.scss
 ┃ ┃ ┣ header.scss
 ┃ ┃ ┣ home.scss
 ┃ ┃ ┣ index-en.scss
 ┃ ┃ ┣ index.scss
 ┃ ┃ ┣ news-detail.scss
 ┃ ┃ ┣ news.scss
 ┃ ┃ ┣ product-center.scss
 ┃ ┃ ┗ solution.scss
 ┣ utils
 ┃ ┣ client.ts
 ┃ ┗ service.ts
 ┗ middleware.ts
```

@tab 中间件 middleware.ts

``` ts
import { NextResponse, NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName, headerName } from "@/i18n/settings";
import { isMobileByUserAgent } from "./utils/service";

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    // 仅匹配需要处理的非静态请求
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
  ],
};

export function isLanguage(lang: string) {
  return languages.includes(lang);
}

const rewriteUrls = [
  "/about-us",
  "/contact-us",
  "/news",
  "/news-detail",
  "/product-center",
  "/solution",
];
export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const url = req.nextUrl.clone();

  // 静态资源直接跳过（保险起见）
  if (/\.(png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf)$/i.test(pathname) || pathname.includes('/_next/')) {
    return NextResponse.next();
  }

  // 检查 Cookie 和 Accept-Language
  let lng: string | undefined = req.cookies.get(cookieName)?.value;
  if (!lng || !isLanguage(lng)) {
    const headerLang = acceptLanguage.get(req.headers.get("Accept-Language"));
    if (headerLang && isLanguage(headerLang)) {
      lng = headerLang;
    } else {
      lng = fallbackLng;
    }
  }

  // 创建带自定义 Header 的响应
  const headers = new Headers(req.headers);
  headers.set(headerName, lng); // 设置语言 Header

  const userAgent = req.headers.get("user-agent") || "";
  const isMobile = isMobileByUserAgent(userAgent);
  const deviceDir = isMobile ? "mobile" : "pc";

  // 内部重写路径但保持URL不变
  if (rewriteUrls.some((route) => pathname.startsWith(route))) {
    url.pathname = `/${deviceDir}${pathname}`;
    const response = NextResponse.rewrite(url, { headers });
    response.cookies.set(cookieName, lng, {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  // 处理根路径 /
  if (pathname === "/") {
    url.pathname = `/${deviceDir}/home`;
    const response = NextResponse.rewrite(url, { headers });
    response.cookies.set(cookieName, lng, {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  // 其他请求处理
  const response = NextResponse.next({ headers });
  response.cookies.set(cookieName, lng, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}


```

:::

## 首次加载特别慢

第一次tab切换，访问页面速度特别慢，是因为页面第一次访问时nextjs需要构建页面，那么我们可以把页面页面或组件以类似 SSG（静态生成） 的方式构建

下面是nextjs服务端三种模式
|  模式 |    场景          |  服务端构建行为                 |  页面是否实时更新  |  用法                                             |  性能
| ---- | ----             | ----                           | ----             | ----                                              | ----
| SSG  | 只在构建时拉取数据 | 构建时一次性生成 HTML（静态）    | 需要重新build    | export const dynamic = 'force-static' + fetch()   | 极快
| SSR  | 实时更新          | 每次请求都由服务端动态生成 HTML   | 总是更新         | fetch(..., { cache: 'no-store' })                | 较慢
| ISR  | 定期更新          | 构建时生成 HTML，后续定期自动刷新 |半实时（渐进更新） | fetch(..., { next: { revalidate: 60 } })         | 优


``` js 
// app/pc/home/page.tsx
export const dynamic = 'force-static';

async function getData() {
  const res = await fetch('https://api.example.com/home', {
    // 为确保静态化，使用 `cache: 'force-cache'`（默认）
    // 这在构建时会执行，生成静态 HTML
  });
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <h1>{data.title}</h1>
    </main>
  );
}
```

::: danger
但是这样用不了多语言切换，放弃，在**Link**中加prefetch，好像也没多大作用，目前暂时没有找到好的解决方案
:::


```js
import Link from "next/link";
<Link
  href={item.url}
  prefetch={true}
>
  name
</Link>
```



