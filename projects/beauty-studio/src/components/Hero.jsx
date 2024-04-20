import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Play, ArrowRight } from 'lucide-react';
import model1 from '../assets/images/Model_1.png';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);
    const imageRef = useRef(null);
    const floatingRef = useRef(null);
    const decorativeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(titleRef.current,
                { y: 80, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
            )
                .fromTo(subtitleRef.current,
                    { y: 60, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    "-=0.7"
                )
                .fromTo(buttonsRef.current,
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                    "-=0.5"
                )
                .fromTo(imageRef.current,
                    { scale: 0.6, opacity: 0, rotation: -10, x: 50 },
                    { scale: 1, opacity: 1, rotation: 0, x: 0, duration: 1.5, ease: "back.out(1.2)" },
                    "-=1"
                )
                .fromTo(floatingRef.current,
                    { scale: 0, rotation: -180, y: 100 },
                    { scale: 1, rotation: 0, y: 0, duration: 1, ease: "back.out(2)" },
                    "-=0.5"
                )
                .fromTo(decorativeRef.current,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 0.1, duration: 2, ease: "power2.out" },
                    "-=1.5"
                );

            gsap.to(floatingRef.current, {
                y: -15,
                rotation: 5,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });

            gsap.to(imageRef.current, {
                y: -10,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="home" ref={heroRef} className="relative bg-gradient-to-br from-gray-50 via-white to-yellow-50 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
            <div ref={decorativeRef} className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-yellow-200 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-200 rounded-full opacity-10 blur-2xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Transform Your Beauty with
                            <span className="block text-yellow-400 relative">
                                professional care
                                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-yellow-400 rounded-full"></div>
                            </span>
                        </h1>
                        <p ref={subtitleRef} className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
                            Experience premium beauty treatments and personalized care at Clary Beauty Studio. Our certified experts are dedicated to enhancing your natural beauty.
                        </p>
                        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 hover:scale-105 hover:shadow-xl transition-all duration-300 group">
                                <span className="flex items-center space-x-2">
                                    <span>BOOK APPOINTMENT</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <button className="flex items-center space-x-3 text-gray-700 hover:text-yellow-400 transition-all duration-300 group">
                                <div className="bg-yellow-400 rounded-full p-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                                    <Play className="h-5 w-5 text-black" />
                                </div>
                                <span className="font-medium">Watch Our Story</span>
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div ref={imageRef} className="relative bg-gradient-to-br from-pink-100 via-yellow-100 to-orange-100 rounded-full w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto overflow-hidden shadow-2xl">
                            <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={model1}
                                    alt="Beauty Model"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div ref={floatingRef} className="absolute -bottom-6 -right-6 bg-white rounded-full p-6 shadow-2xl">
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center relative">
                                <div className="text-xs text-center text-white font-bold">
                                    <div className="text-lg">24/7</div>
                                    <div className="text-xs">Service</div>
                                </div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                            </div>
                        </div>

                        <div className="absolute top-10 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
                        <div className="absolute bottom-20 -left-8 w-6 h-6 bg-pink-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-1/3 -right-6 w-4 h-4 bg-blue-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;