import { NextResponse, NextRequest } from "next/server";

export const config = {
    // matcher: "/about:path*",     single url middleware
    // matcher: ["/about:path*","/study:path*"]   multiple url middleware
};

export default function middleware(request: NextRequest) {
    // if (request.nextUrl.pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", request.url));
    // }
}
