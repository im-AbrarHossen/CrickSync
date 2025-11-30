import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    // 1️⃣ Logged-in users trying to access login/register → redirect to their dashboard
    if (token && (pathname === "/loginPage" || pathname === "/registerPage")) {
        return NextResponse.redirect(
            new URL(`/${token.role}-dashboard`, req.url)
        );
    }

    // 2️⃣ Unauthenticated users trying to access any dashboard → redirect to login
    if (!token && pathname.endsWith("-dashboard")) {
        return NextResponse.redirect(new URL("/loginPage", req.url));
    }

    // 3️⃣ Role-based protection
    if (token) {
        if (pathname.startsWith("/admin-dashboard") && token.role !== "admin") {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }
        if (pathname.startsWith("/coach-dashboard") && token.role !== "coach") {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }
        if (pathname.startsWith("/player-dashboard") && token.role !== "player") {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/loginPage",
        "/registerPage",
        "/admin-dashboard/:path*",
        "/coach-dashboard/:path*",
        "/player-dashboard/:path*",
    ],
};