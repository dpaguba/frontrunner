import React from 'react';

export const StatCard = ({ number, label, delay = 0 }) => (
    <div
        className="text-center group cursor-pointer animate-fade-in-scale"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:text-red-400 transition-colors duration-300">
            {number}
        </div>
        <div className="text-gray-400 text-xs sm:text-sm lg:text-base">
            {label}
        </div>
    </div>
);