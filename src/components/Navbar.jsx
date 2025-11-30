'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LoginButton from './LoginButton';
import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();
    // Default avatar if user has no image
    const avatarUrl = session?.user?.image || "/assets/images/default-avatar.webp";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const goToDashboard = () => {
        if (!session?.user?.role) return;
        const role = session.user.role;
        if (role === 'admin') router.push('/admin-dashboard');
        else if (role === 'coach') router.push('/coach-dashboard');
        else router.push('/player-dashboard');
    };

    {/* Navigation Path Control */ }
    const pathname = usePathname();
    if (!pathname.includes("dashboard")) {
        return (
            <div
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/70 backdrop-blur-md shadow-sm'
                    : 'bg-white/10 backdrop-blur-md'
                    }`}
            >
                <div className="navbar max-w-7xl mx-auto text-gray-800">
                    {/* Navbar Start */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden text-black"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-white/80 backdrop-blur-md text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                <li><a>Home</a></li>
                                <li>
                                    <a>Who We Are</a>
                                    <ul className="p-2">
                                        <li><Link href='/AboutUs'>About Us</Link></li>
                                        <li><Link href='/OurManagement'>Our Management</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Our Programs</a>
                                    <ul className="p-2">
                                        <li><Link href='/Practice-Sessions'>Practice Sessions and Matches</Link></li>
                                        <li><Link href='/Camp-with-Certified-Coaches'>Camp with Certified Coaches</Link></li>
                                        <li><a>Domestic & International Tours</a></li>
                                        <li><Link href='/AdvanceTrainingProgram'>Advance Training Program</Link></li>
                                    </ul>
                                </li>
                                <li><Link href='/OurCenters'>Our Centres</Link></li>
                                <li><a>Blogs & Insights</a></li>
                                <li>
                                    <a>Contact Us</a>
                                    <ul className="p-2">
                                        <li><a>Get Enrolled</a></li>
                                        <li><a>Franchise & Partner Opportunities</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <Link href="/" className="text-xl">
                            <img
                                src="/assets/images/CrickSync-Logo.png"
                                alt="CrickSync-Logo"
                                className="w-[60px]"
                            />
                        </Link>
                    </div>

                    {/* Navbar Center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-black font-medium">
                            <li><Link href="/">Home</Link></li>
                            <li>
                                <details>
                                    <summary>Who We Are</summary>
                                    <ul className="p-2 bg-white/80 backdrop-blur-md">
                                        <li><Link href='/AboutUs'>About Us</Link></li>
                                        <li><Link href='/OurManagement'>Our Management</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Our Programs</summary>
                                    <ul className="p-2 bg-white/80 backdrop-blur-md">
                                        <li><Link href='/Practice-Sessions'>Practice Sessions and Matches</Link></li>
                                        <li><Link href='/Camp-with-Certified-Coaches'>Camp with Certified Coaches</Link></li>
                                        <li><a>Domestic & International Tours</a></li>
                                        <li><Link href='/AdvanceTrainingProgram'>Advance Training Program</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link href='/OurCenters'>Our Centres</Link></li>
                            <li><a>Blogs & Insights</a></li>
                            <li>
                                <details>
                                    <summary>Contact Us</summary>
                                    <ul className="p-2 bg-white/80 backdrop-blur-md">
                                        <li><a>Get Enrolled</a></li>
                                        <li><a>Franchise & Partner Opportunities</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>

                    {/* Navbar End */}
                    <div className="navbar-end">
                        {status === 'loading' ? (
                            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                        ) : session ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={avatarUrl} alt="User Avatar" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
                                    <li>
                                        <button onClick={goToDashboard}>Dashboard</button>
                                    </li>
                                    <li>
                                        <button onClick={() => signOut()} className="text-red-600">Logout</button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <LoginButton />
                        )}
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <></>
        );
    }
};

export default Navbar;