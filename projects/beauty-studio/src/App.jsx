import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ClaryBeautyClinic = () => {
  const mainRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      gsap.fromTo(mainRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    }, mainRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div ref={mainRef} className="min-h-screen bg-white">
          <Header />
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Team />
          <Testimonial />
          <Blog />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ClaryBeautyClinic;