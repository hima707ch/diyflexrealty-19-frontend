import React, { useEffect, useState } from 'react';
import images from '../assets/images';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="Hero_1" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and SVG shapes */}
      <div id="Hero_2" className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <svg id="Hero_3" className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1920 1080" fill="none">
          <circle cx="200" cy="200" r="150" fill="rgba(255,255,255,0.1)" />
          <circle cx="1600" cy="300" r="200" fill="rgba(255,255,255,0.05)" />
          <path d="M0,400 Q400,200 800,400 T1600,400 L1600,1080 L0,1080 Z" fill="rgba(255,255,255,0.02)" />
          <polygon points="1200,100 1400,300 1000,300" fill="rgba(255,255,255,0.08)" />
        </svg>
      </div>

      <div id="Hero_4" className="container mx-auto px-4 relative z-10">
        <div id="Hero_5" className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div id="Hero_6" className={`text-white transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h1 id="Hero_7" className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Find Your Dream{' '}
              <span id="Hero_8" className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                <span id="Hero_9" className="inline-block transform transition-transform duration-700 hover:translate-y-[-10px]">
                  Home
                </span>
              </span>
            </h1>
            <p id="Hero_10" className="text-xl mb-8 text-gray-300 max-w-lg">
              Discover premium properties in prime locations. Your perfect home awaits with our curated selection of luxury real estate.
            </p>
            <div id="Hero_11" className="flex flex-col sm:flex-row gap-4">
              <button id="Hero_12" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Explore Properties
              </button>
              <button id="Hero_13" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300">
                Schedule Tour
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div id="Hero_14" className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div id="Hero_15" className="relative">
              <img 
                id="Hero_16"
                src={images[0] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}
                alt="Luxury Home"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div id="Hero_17" className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div id="Hero_18" className="text-2xl font-bold text-gray-800">500+</div>
                <div id="Hero_19" className="text-gray-600">Properties Sold</div>
              </div>
              <div id="Hero_20" className="absolute -top-6 -right-6 bg-yellow-400 p-6 rounded-xl shadow-lg">
                <div id="Hero_21" className="text-2xl font-bold text-gray-800">24/7</div>
                <div id="Hero_22" className="text-gray-800">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}