import React from 'react';

export const Navigation = () => {
    return (
        <nav className="relative z-50 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6 animate-fade-in-down">
            <div className="text-xl sm:text-2xl font-bold tracking-wider">
                AM
            </div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
                <a href="#" className="hover:text-red-400 transition-colors duration-300">Top artists</a>
                <a href="#" className="hover:text-red-400 transition-colors duration-300">Marketplace</a>
                <a href="#" className="hover:text-red-400 transition-colors duration-300">Collections</a>
                <a href="#" className="hover:text-red-400 transition-colors duration-300">About us</a>
            </div>

            <button className="bg-red-500 hover:bg-red-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95">
                Get Started
            </button>
        </nav>
    );
};