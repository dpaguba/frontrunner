import React from 'react';
import reynaImg from '../assets/images/valorant-reyna.png';

export const NFTCard = ({ timeLeft }) => {
    return (
        <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-black/50 rounded-2xl p-1 backdrop-blur-sm animate-fade-in-right">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 space-y-4">

                    <div className="aspect-[4/3] bg-gradient-to-br from-purple-600 via-red-500 to-pink-500 rounded-xl relative overflow-hidden group">
                        <img
                            src={reynaImg}
                            alt="Valorant Reyna NFT"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm">
                            <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                                Futuristic Warrior
                            </span>
                            <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                                #2847
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Current Bid</div>
                                <div className="text-2xl font-bold">5.56 ETH</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-gray-400 mb-1">Remaining time</div>
                                <div className="text-lg font-semibold">
                                    {String(timeLeft.hours).padStart(2, '0')}H : {String(timeLeft.minutes).padStart(2, '0')}M : {String(timeLeft.seconds).padStart(2, '0')}S
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95">
                            BID NOW
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-red-500 rounded-full animate-ping" />
        </div>
    );
};