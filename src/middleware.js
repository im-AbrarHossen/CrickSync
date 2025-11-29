import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const { pathname } = req.nextUrl;

    // 1️⃣ Prevent logged-in users from visiting loginPage/registerPage
    if (token && (pathname === "/loginPage" || pathname === "/registerPage")) {
        // Redirect based on role
        if (token.role === "admin") {
            return NextResponse.redirect(new URL("/adminDashboard", req.url));
        }
        if (token.role === "coach") {
            return NextResponse.redirect(new URL("/coachDashboard", req.url));
        }
        if (token.role === "player") {
            return NextResponse.redirect(new URL("/playerDashboard", req.url));
        }
    }

    // If no token & trying to access dashboard → redirect to login
    if (!token &&
        (pathname.startsWith("/adminDashboard") ||
            pathname.startsWith("/coachDashboard") ||
            pathname.startsWith("/playerDashboard"))) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Role-based protection:
    if (pathname.startsWith("/adminDashboard") && token.role !== "admin") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (pathname.startsWith("/coachDashboard") && token.role !== "coach") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (pathname.startsWith("/playerDashboard") && token.role !== "player") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/loginPage",
        "/registerPage",
        "/adminDashboard/:path*",
        "/coachDashboard/:path*",
        "/playerDashboard/:path*",
    ],
};