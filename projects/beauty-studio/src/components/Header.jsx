import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/images/Logo.png';

const Header = () => {
    const headerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            );
        }, headerRef);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            ctx.revert();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-xl' : 'bg-white'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className=" text-black px-3 py-1 rounded font-bold text-xl hover:scale-105 transition-all duration-200 cursor-pointer flex items-center">
                            <img
                                src={Logo}
                                alt="Clary Logo"
                                className="h-8 w-auto"
                            />
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {[
                                { name: 'Home', href: '#home' },
                                { name: 'About', href: '#about' },
                                { name: 'Services', href: '#services' },
                                { name: 'Team', href: '#team' },
                                { name: 'Blog', href: '#blog' }
                            ].map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`${index === 0 ? 'text-gray-900' : 'text-gray-600'} hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group`}
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <button className="bg-yellow-400 text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 hover:scale-105 hover:shadow-lg transition-all duration-200">
                            MAKE APPOINTMENT
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-600 hover:text-yellow-400 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-b-lg shadow-lg">
                        {[
                            { name: 'Home', href: '#home' },
                            { name: 'About', href: '#about' },
                            { name: 'Services', href: '#services' },
                            { name: 'Team', href: '#team' },
                            { name: 'Blog', href: '#blog' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-gray-600 hover:text-yellow-400 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="w-full mt-4 bg-yellow-400 text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 transition-colors">
                            MAKE APPOINTMENT
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;