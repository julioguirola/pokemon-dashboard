import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";

const protectedRoute = "/dashboard";
const loginRoute = "/login";

/**
 * Middleware function to handle authentication and route protection
 *
 * This function checks if the requested route is protected or a login route,
 * and redirects the user based on their authentication status.
 *
 * @param req - The incoming Next.js request object
 * @returns A redirect response if needed, otherwise undefined
 */
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoute.includes(path);
  const isLogin = loginRoute.includes(path);

  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isProtectedRoute) {
    const headers = new Headers(req.headers);
    const page = req.nextUrl.searchParams.get("page");
    if (page === null || isNaN(Number(page))) {
      return NextResponse.redirect(new URL("/_not-found", req.nextUrl));
    }
    //preventing page under 1
    headers.set("x-current-page", page === null ? "1" : page);
    return NextResponse.next({ headers });
  }

  if (isLogin && session?.userId) {
    const response = NextResponse.redirect(
      new URL("/dashboard?page=1", req.nextUrl),
    );
    return response;
  }
}

//routes where the middleware works
export const config = {
  matcher: ["/dashboard", "/login"],
};
