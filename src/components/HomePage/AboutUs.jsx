import React from 'react';
import images from '../assets/images';

export default function AboutUs() {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div id="AboutUs_2" className="container mx-auto px-4">
        <div id="AboutUs_3" className="grid lg:grid-cols-2 gap-12 items-center">
          <div id="AboutUs_4">
            <h2 id="AboutUs_5" className="text-4xl font-bold text-gray-800 mb-6">About Our Company</h2>
            <p id="AboutUs_6" className="text-gray-600 mb-6 text-lg leading-relaxed">
              With over 15 years of experience in the real estate industry, we have helped thousands of families find their perfect homes. Our commitment to excellence and personalized service sets us apart.
            </p>
            <p id="AboutUs_7" className="text-gray-600 mb-8 text-lg leading-relaxed">
              We understand that buying or selling a home is one of life's most important decisions. That's why we provide comprehensive support throughout the entire process, ensuring a smooth and stress-free experience.
            </p>
            
            <div id="AboutUs_8" className="grid sm:grid-cols-2 gap-6">
              <div id="AboutUs_9" className="text-center p-6 bg-gray-50 rounded-lg">
                <div id="AboutUs_10" className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div id="AboutUs_11" className="text-gray-600">Years Experience</div>
              </div>
              <div id="AboutUs_12" className="text-center p-6 bg-gray-50 rounded-lg">
                <div id="AboutUs_13" className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div id="AboutUs_14" className="text-gray-600">Happy Clients</div>
              </div>
              <div id="AboutUs_15" className="text-center p-6 bg-gray-50 rounded-lg">
                <div id="AboutUs_16" className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div id="AboutUs_17" className="text-gray-600">Properties Sold</div>
              </div>
              <div id="AboutUs_18" className="text-center p-6 bg-gray-50 rounded-lg">
                <div id="AboutUs_19" className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div id="AboutUs_20" className="text-gray-600">Expert Agents</div>
              </div>
            </div>
          </div>
          
          <div id="AboutUs_21" className="relative">
            <img 
              id="AboutUs_22"
              src={images[1] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'}
              alt="About Us"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div id="AboutUs_23" className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div id="AboutUs_24" className="text-2xl font-bold mb-1">Award Winning</div>
              <div id="AboutUs_25" className="text-blue-200">Real Estate Agency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}