'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import MyImage from '../components/MyImage';

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    useEffect(() => {
        if (pathname !== '/') {
            setIsScrolledDown(true);
            return;
        }
        setIsScrolledDown(window.scrollY > 0);
        const onScroll = () => setIsScrolledDown(window.scrollY > 0);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [pathname]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`header fixed top-0 z-50 bg-white md:px-4 lg:px-24 w-full transition-shadow duration-300
            ${isScrolledDown ? 'shadow-[0_10px_25px_rgba(0,0,0,0.1),0_4px_10px_rgba(183,41,96,0.2)]' : ''}`}
        >
            <div className="flex justify-between max-w-7xl mx-auto items-center py-3 px-4 md:px-0">
                
                {/* Logo */}
                <div className="nav_logo flex items-center">
                    <Link href="/">
                        <MyImage src="/images/ameya_logo.png" alt="Ameya Logo" width={100} height={100} />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-8 font-semibold text-primary-text text-[16px]">
                    <Link href="/" className="hover:underline">Home</Link>

                    {/* Services → Now just link */}
                    <Link href="/services_categories" className="hover:underline">
                        Services
                    </Link>
                    <Link href="/portfolio" className="hover:underline">
                    Portfolio
                    </Link>
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/careers" className="hover:underline">Careers</Link>

                    <Link
                        href="/contact"
                        className="text-sm ml-4 inline-block bg-primary-text text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMobileMenuOpen((s) => !s)}
                    className="lg:hidden text-primary-text"
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav className="lg:hidden bg-primary-bg">
                    <Link href="/" className="block px-4 py-3 border-b border-pink-200 text-white">Home</Link>

                    {/* Services → Now simple link */}
                    <Link href="/services_categories" className="block px-4 py-3 border-b border-pink-200 text-white">
                        Services
                    </Link>

                    <Link href="/about" className="block px-4 py-3 border-b border-pink-200 text-white">About</Link>
                    <Link href="/careers" className="block px-4 py-3 border-b border-pink-200 text-white">Careers</Link>
                    <Link href="/contact" className="block px-4 py-3 border-b border-pink-200 text-white">Contact</Link>
                </nav>
            )}
        </header>
    );
}
