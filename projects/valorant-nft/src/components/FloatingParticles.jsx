import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { NFTCard } from './components/NFTCard';
import { useCountdown } from './hooks/useCountdown';
import './assets/styles/animations.css';

const NFTMarketplace = () => {
    const timeLeft = useCountdown({ hours: 15, minutes: 12, seconds: 25 });

    return (
        <div className="h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-black text-white relative overflow-hidden">
            <div className="h-full flex flex-col">
                <Navigation />

                <div className="flex-1 px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8 flex items-center min-h-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center max-w-7xl mx-auto w-full">
                        <HeroSection />
                        <NFTCard timeLeft={timeLeft} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTMarketplace;