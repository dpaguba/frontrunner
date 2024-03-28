import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Instagram, Facebook, Twitter, Linkedin, Youtube, } from 'lucide-react';
import Expert1Img from '../assets/images/Expert_1.png';
import Expert2Img from '../assets/images/Expert_2.png';
import Expert3Img from '../assets/images/Expert_3.png';

const Team = () => {
    const teamRef = useRef(null);
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
                        trigger: teamRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            gsap.fromTo(cardsRef.current.children,
                { y: 80, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, teamRef);

        return () => ctx.revert();
    }, []);

    const team = [
        {
            name: "SOPHIA MARTINEZ",
            role: "Senior Aesthetician",
            gradient: "from-pink-200 to-rose-300",
            image: Expert1Img,
            socials: [
                { icon: Instagram, color: "bg-pink-500" },
                { icon: Facebook, color: "bg-blue-600" },
                { icon: Linkedin, color: "bg-blue-700" }
            ]
        },
        {
            name: "ISABELLA CHEN",
            role: "Wellness Specialist",
            gradient: "from-blue-200 to-cyan-300",
            image: Expert2Img,
            socials: [
                { icon: Instagram, color: "bg-pink-500" },
                { icon: Twitter, color: "bg-sky-500" },
                { icon: Youtube, color: "bg-red-600" }
            ]
        },
        {
            name: "ALEXANDRA JONES",
            role: "Master Therapist",
            gradient: "from-purple-200 to-violet-300",
            image: Expert3Img,
            socials: [
                { icon: Instagram, color: "bg-pink-500" },
                { icon: Twitter, color: "bg-sky-500" },
                { icon: Linkedin, color: "bg-blue-700" }
            ]
        }
    ];

    return (
        <section id="team" ref={teamRef} className="py-24 bg-gradient-to-tr from-yellow-50 via-white to-grey-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-20">
                    <h3 className="text-yellow-400 text-sm font-bold tracking-wider uppercase mb-6 relative inline-block">
                        TEAM
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-yellow-400"></div>
                    </h3>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Supported by
                        <span className="text-yellow-400"> certified experts</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Meet our team of licensed beauty professionals with years of experience in skincare, wellness, and aesthetic treatments. Each expert brings unique skills and passion for helping you look and feel your best.
                    </p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                    {team.map((member, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative mb-8">
                                <div className={`bg-gradient-to-br ${member.gradient} rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto overflow-hidden shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500 rounded-full"></div>
                                </div>

                                {/* Social Media Icons */}
                                <div className="flex justify-center space-x-3 mt-4">
                                    {member.socials.map((social, socialIndex) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <div
                                                key={socialIndex}
                                                className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                                            >
                                                <IconComponent className="h-4 w-4 text-white" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors">
                                {member.role}
                            </p>

                            <div className="flex justify-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-200"
                                        style={{ transitionDelay: `${i * 50}ms` }}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;