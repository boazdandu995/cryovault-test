import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the request is for the root URL
  if (request.nextUrl.pathname === "/") {
    // If yes, redirect to the /login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // For all other paths, return the response as is
  return NextResponse.next();
}
