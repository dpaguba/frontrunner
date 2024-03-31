import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Service4Img from '../assets/images/Service_4.png';
import Service5Img from '../assets/images/Service_5.png';

const Pricing = () => {
    const pricingRef = useRef(null);
    const contentRef = useRef(null);
    const imagesRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo([contentRef.current, imagesRef.current],
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: pricingRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, pricingRef);

        return () => ctx.revert();
    }, []);

    const treatments = [
        { name: "Facial Treatments", price: "$299" },
        { name: "Skin & Wellness", price: "$149" },
        { name: "Body Care", price: "$179" },
        { name: "Massage & Facials", price: "$99" },
        { name: "Hair Styling", price: "$89" }
    ];

    return (
        <section ref={pricingRef} className="py-24 bg-gradient-to-br from-yellow-50 via-white to-grey-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div ref={contentRef} className="space-y-8">
                        <div>
                            <h3 className="text-yellow-400 text-sm font-bold tracking-wider uppercase mb-6 relative inline-block">
                                PRICE RANGE
                                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400"></div>
                            </h3>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Affordable luxury for your
                                <span className="text-yellow-400"> beauty transformation</span>
                            </h2>
                        </div>

                        <div className="space-y-8">

                            <h4 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                                <span>TREATMENTS</span>
                                <div className="flex-1 h-0.5 bg-gray-200"></div>
                                <span className="text-yellow-400 text-sm font-semibold">START FROM</span>
                            </h4>


                            <div className="space-y-6">
                                {treatments.map((treatment, index) => (
                                    <div key={index} className="flex justify-between items-center group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-colors">
                                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                                            {treatment.name}
                                        </span>
                                        <span className="font-bold text-xl text-gray-900 group-hover:text-yellow-600 transition-colors">
                                            {treatment.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div ref={imagesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-yellow-100 to-orange-200 rounded-3xl overflow-hidden h-80 hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-lg group">
                                <div className="w-full h-full flex items-center justify-center relative">
                                    <img
                                        src={Service4Img}
                                        alt="Spa Treatment"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500"></div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-12">
                            <div className="bg-gradient-to-br from-pink-100 to-purple-200 rounded-3xl overflow-hidden h-64 hover:scale-105 hover:-rotate-1 transition-all duration-500 shadow-lg group">
                                <div className="w-full h-full flex items-center justify-center relative">
                                    <img
                                        src={Service5Img}
                                        alt="Beauty Session"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;