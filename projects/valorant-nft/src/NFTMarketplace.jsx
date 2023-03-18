import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { NFTCard } from './components/NFTCard';
import { useCountdown } from './hooks/useCountdown';
import './assets/styles/animations.css';

const NFTMarketplace = () => {
    const timeLeft = useCountdown({ hours: 15, minutes: 12, seconds: 25 });

    return (
        <div className="min-h-screen lg:h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-black text-white relative overflow-x-hidden">
            <div className="min-h-screen lg:h-full flex flex-col">
                <Navigation />

                <div className="flex-1 px-4 sm:px-6 lg:px-12 py-8 lg:py-8 flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto w-full">
                        <HeroSection />
                        <NFTCard timeLeft={timeLeft} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTMarketplace;