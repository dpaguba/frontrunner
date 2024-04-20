import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Newsletter = () => {
    const newsletterRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(newsletterRef.current.children,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: newsletterRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, newsletterRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={newsletterRef} className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                            Start subscribing to the
                            <span className="text-yellow-400"> newsletter</span> via your email
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-6 py-4 border border-gray-300 rounded-lg w-full lg:w-80 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                        />
                        <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;