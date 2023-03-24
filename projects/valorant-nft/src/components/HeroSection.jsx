import React from 'react';
import { StatCard } from './StatCard';

export const HeroSection = () => {
    return (
        <div className="space-y-4 sm:space-y-6 animate-fade-in-left" style={{ animationDelay: '200ms' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover, Collect,<br />
                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                    and sell extraordinary
                </span><br />
                NFTs
            </h1>

            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-md">
                A marketplace that has popular artists from all around the world
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" style={{ animationDelay: '400ms' }}>
                <button className="bg-red-500 hover:bg-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-scale" style={{ animationDelay: '600ms' }}>
                    Explore now
                </button>
                <button className="border border-gray-600 hover:border-red-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-red-500/10 animate-fade-in-scale" style={{ animationDelay: '700ms' }}>
                    Connect wallet
                </button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <StatCard number="1526K" label="Users" delay={900} />
                <StatCard number="356K" label="Artworks" delay={1000} />
                <StatCard number="150K" label="Artists" delay={1100} />
            </div>
        </div>
    );
};