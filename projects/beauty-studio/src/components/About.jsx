import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import TreatmentImg from '../assets/images/Treatment.png';
import ToolsImg from '../assets/images/Tools.png';

const About = () => {
    const aboutRef = useRef(null);
    const imagesRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo([imagesRef.current, contentRef.current],
                { y: 80, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: "top 75%",
                        end: "bottom 25%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            gsap.fromTo(imagesRef.current.children,
                { y: 0 },
                {
                    y: -30,
                    duration: 1,
                    stagger: 0.1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        }, aboutRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={aboutRef} className="py-24 bg-gradient-to-tr from-grey-50 via-white to-yellow-50 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div ref={imagesRef} className="grid grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-3xl overflow-hidden h-72 hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-lg group">
                                <div className="w-full h-full flex items-center justify-center relative">
                                    <img
                                        src={TreatmentImg}
                                        alt="Treatment"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500"></div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 pt-12">
                            {/* <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl overflow-hidden h-40 hover:scale-105 hover:-rotate-1 transition-all duration-500 shadow-lg group">
                                <div className="w-full h-full flex items-center justify-center relative">
                                    <div className="text-gray-500 text-sm font-medium">Products</div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500"></div>
                                </div>
                            </div> */}
                            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl overflow-hidden h-64 hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-lg group">
                                <div className="w-full h-full flex items-center justify-center relative">
                                    <img
                                        src={ToolsImg}
                                        alt="Tools"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={contentRef} className="space-y-8">
                        <div>
                            <h3 className="text-yellow-400 text-sm font-bold tracking-wider uppercase mb-4 relative">
                                ABOUT
                                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400"></div>
                            </h3>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                We provide special care for your
                                <span className="text-yellow-400"> appearance and beauty</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At Clary Beauty Studio, we combine years of experience with the latest beauty innovations. Our mission is to help you discover your natural beauty and boost your confidence through personalized treatments.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Using premium products and state-of-the-art equipment, our certified professionals deliver exceptional results. From rejuvenating facials to relaxing spa treatments, we create a sanctuary where beauty meets wellness.
                            </p>
                        </div>

                        <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 hover:scale-105 hover:shadow-xl transition-all duration-300 group">
                            <span className="flex items-center space-x-2">
                                <span>DISCOVER MORE</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;