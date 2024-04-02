import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Expert4Img from '../assets/images/Expert_4.png';

const Testimonial = () => {
    const testimonialRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(testimonialRef.current.children,
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: testimonialRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, testimonialRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={testimonialRef} className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-12 leading-relaxed">
                    "Clary Beauty Studio transformed my skin completely. The staff is incredibly professional and the treatments are
                    <span className="text-white"> absolutely amazing!"</span>
                </blockquote>

                <div className="flex justify-center mb-6">
                    <div className="bg-white rounded-full w-20 h-20 overflow-hidden shadow-xl hover:scale-110 transition-transform duration-300">
                        <img
                            src={Expert4Img}
                            alt="Jane Doe"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="text-black">
                    <div className="font-bold text-lg mb-1">MARIA RODRIGUEZ</div>
                    <div className="text-sm opacity-80">Happy Client</div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;