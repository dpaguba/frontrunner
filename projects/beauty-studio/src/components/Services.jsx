import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Service1Img from '../assets/images/Service_1.png';
import Service2Img from '../assets/images/Service_2.png';
import Service3Img from '../assets/images/Service_3.png';

const Services = () => {
    const servicesRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            gsap.fromTo(cardsRef.current.children,
                { y: 100, opacity: 0, scale: 0.8, rotationY: 45 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, servicesRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            title: "Body care & massage",
            desc: "Rejuvenating body treatments and therapeutic massages to relax your mind and restore your body's natural balance.",
            gradient: "from-pink-100 to-rose-200",
            image: Service1Img
        },
        {
            title: "Beauty treatment",
            desc: "Premium facial treatments using advanced techniques and luxury products for radiant, youthful-looking skin.",
            gradient: "from-blue-100 to-cyan-200",
            image: Service2Img
        },
        {
            title: "Skincare routine",
            desc: "Customized skincare regimens and expert consultations tailored to your unique skin type and concerns.",
            gradient: "from-purple-100 to-violet-200",
            image: Service3Img
        }
    ];

    return (
        <section id="services" ref={servicesRef} className="py-24 bg-gradient-to-tr from-yellow-50 via-white to-grey-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-100 to-transparent rounded-full opacity-20 -translate-x-48 -translate-y-48"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-20">
                    <h3 className="text-yellow-400 text-sm font-bold tracking-wider uppercase mb-6 relative inline-block">
                        SERVICES
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-yellow-400"></div>
                    </h3>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
                        We always provide the
                        <span className="text-yellow-400"> best service</span> for you
                    </h2>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-all duration-500 group"
                        >
                            <div className={`h-56 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500"></div>
                                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <ArrowRight className="h-5 w-5 text-gray-700 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;