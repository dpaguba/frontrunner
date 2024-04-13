import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(footerRef.current.children,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    const socialIcons = [
        { Icon: Facebook, href: "#" },
        { Icon: Instagram, href: "#" },
        { Icon: Twitter, href: "#" },
        { Icon: Youtube, href: "#" }
    ];

    return (
        <footer ref={footerRef} className="bg-white py-20 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    <div className="space-y-6">
                        <div className="text-black px-3 py-1 rounded font-bold text-xl inline-block hover:scale-105 transition-all duration-200">
                            <img
                                src={Logo}
                                alt="Clary Logo"
                                className="h-8 w-auto"
                            />
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Beauty maintenance system supplemented with an exclusive personal makeover method. Find out if it's right for you.
                        </p>
                        <div>
                            <p className="text-sm text-gray-500 font-semibold mb-4 tracking-wider">SOCIAL MEDIA</p>
                            <div className="flex space-x-4">
                                {socialIcons.map(({ Icon, href }, index) => (
                                    <a
                                        key={index}
                                        href={href}
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-black hover:scale-110 transition-all duration-300"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">PAGES</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-yellow-400 transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">OUR SERVICES</h3>
                        <ul className="space-y-3">
                            {['Consultation', 'Services', 'Treatments', 'Our Team'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-yellow-400 transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-6 text-lg">CONTACT</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-gray-600 hover:text-yellow-400 transition-colors group">
                                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                <span>+1-555-0808-9873</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-600 hover:text-yellow-400 transition-colors group">
                                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                <span>clary@beautycare.io</span>
                            </div>
                            <div className="flex items-start space-x-3 text-gray-600 hover:text-yellow-400 transition-colors group">
                                <MapPin className="h-5 w-5 mt-1 group-hover:scale-110 transition-transform" />
                                <span>123 Fifth Avenue, New York, NY 12004</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-500 text-sm">
                    © Copyright by Website Studio · All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;