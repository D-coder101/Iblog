import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// nextUrl: {
//   href: 'http://localhost:3000/login',
//   origin: 'http://localhost:3000',
//   protocol: 'http:',
//   username: '',
//   password: '',
//   host: 'localhost:3000',
//   hostname: 'localhost',
//   port: '3000',
//   pathname: '/login',
//   search: '',
//   searchParams: URLSearchParams {  },
//   hash: ''
// },

// const PUBLIC_ROUTES = [
//   "/login",
//   "/signup",
//   // "/confirm-email",
//   // "/confirm-email-error",
// ];

// const PROTECTED_ROUTES = [
//   "/dashboard",
//   "/settings",
//   "/edit-post",
//   "/settings",
//   // "/admin",
// ];

export async function middleware(req: NextRequest) {
  // initialize cookies
  const serverCookies = await cookies();
  const url = new URL(req.url);

  //check authenticated
  const refresh = serverCookies.get("refresh")?.value;
  if (!refresh) {
    console.log("Hi from middleware");
    return NextResponse.redirect(
      url.origin + `/login?redirect=${url.pathname}`
    );
  }

  return NextResponse.next();

  // const url = new URL(req.url);
  // // const token = getCookie("accessToken");
  // const token = req.cookies.get("access")?.value;
  // // const token = sessionStorage.getItem("accessToken");
  // if (token && PUBLIC_ROUTES.includes(url.pathname)) {
  //   const redirectTo = url.searchParams.get("redirect") || "";
  //   return NextResponse.redirect(url.origin + redirectTo);
  // }
  // //Redirect user if no token and they try to access protected route
  // if (!token && PROTECTED_ROUTES.includes(url.pathname)) {
  //   return NextResponse.redirect(
  //     url.origin + `/login?redirect=${url.pathname}`
  //   );
  // }
  // return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*", "/settings/:path*"] };

// export const config = {
//   matcher: [
//     // "/admin/:path*",
//     /*
//      * Match all req paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
//   ],
// };
