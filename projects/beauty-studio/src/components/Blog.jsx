import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Blog1Img from '../assets/images/Blog_1.png';
import Blog2Img from '../assets/images/Blog_2.png';

const Blog = () => {
    const blogRef = useRef(null);
    const contentRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo([contentRef.current, cardsRef.current],
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: blogRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, blogRef);

        return () => ctx.revert();
    }, []);

    const posts = [
        {
            title: "5 Essential Steps for Your Daily Skincare Routine",
            desc: "Discover the fundamental skincare steps that will transform your skin and give you a natural, healthy glow every day.",
            gradient: "from-green-100 to-emerald-200",
            image: Blog1Img
        },
        {
            title: "The Benefits of Professional Facial Treatments",
            desc: "Learn why professional facial treatments are essential for maintaining healthy skin and achieving long-lasting beauty results.",
            gradient: "from-orange-100 to-red-200",
            image: Blog2Img
        }
    ];

    return (
        <section id="blog" ref={blogRef} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div ref={contentRef} className="space-y-8">
                        <div>
                            <h3 className="text-yellow-400 text-sm font-bold tracking-wider uppercase mb-6 relative inline-block">
                                BLOG
                                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-yellow-400"></div>
                            </h3>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Beauty insights and
                                <span className="text-yellow-400"> expert tips</span>
                            </h2>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Stay updated with the latest beauty trends, skincare tips, and wellness advice from our expert team. Discover valuable insights to enhance your beauty routine.
                        </p>

                        <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 hover:scale-105 hover:shadow-xl transition-all duration-300 group">
                            <span className="flex items-center space-x-2">
                                <span>VIEW MORE</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>

                    <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {posts.map((post, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                <div className={`h-40 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-all duration-500"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {post.desc}
                                    </p>
                                    <button className="text-yellow-400 text-sm font-bold hover:text-yellow-500 transition-colors group/btn">
                                        <span className="flex items-center space-x-1">
                                            <span>READ MORE</span>
                                            <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;