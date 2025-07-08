import React from 'react';
import images from '../assets/images';

export default function FeaturedProperties({ properties, loading }) {
  if (loading) {
    return (
      <section id="FeaturedProperties_1" className="py-20 bg-gray-50">
        <div id="FeaturedProperties_2" className="container mx-auto px-4">
          <div id="FeaturedProperties_3" className="text-center mb-12">
            <h2 id="FeaturedProperties_4" className="text-4xl font-bold text-gray-800 mb-4">Featured Properties</h2>
            <p id="FeaturedProperties_5" className="text-gray-600 max-w-2xl mx-auto">Loading amazing properties...</p>
          </div>
          <div id="FeaturedProperties_6" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} id={`FeaturedProperties_${item + 6}`} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                <div id={`FeaturedProperties_${item + 9}`} className="h-64 bg-gray-300"></div>
                <div id={`FeaturedProperties_${item + 12}`} className="p-6">
                  <div id={`FeaturedProperties_${item + 15}`} className="h-4 bg-gray-300 rounded mb-4"></div>
                  <div id={`FeaturedProperties_${item + 18}`} className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div id={`FeaturedProperties_${item + 21}`} className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="FeaturedProperties_24" className="py-20 bg-gray-50">
      <div id="FeaturedProperties_25" className="container mx-auto px-4">
        <div id="FeaturedProperties_26" className="text-center mb-12">
          <h2 id="FeaturedProperties_27" className="text-4xl font-bold text-gray-800 mb-4">Featured Properties</h2>
          <p id="FeaturedProperties_28" className="text-gray-600 max-w-2xl mx-auto">Discover our handpicked selection of premium properties in the most sought-after locations.</p>
        </div>
        
        <div id="FeaturedProperties_29" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div key={property.id || index} id={`FeaturedProperties_${30 + index}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div id={`FeaturedProperties_${40 + index}`} className="relative overflow-hidden">
                <img 
                  id={`FeaturedProperties_${50 + index}`}
                  src={property.image || images[index % images.length] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'}
                  alt={property.title || 'Property'}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div id={`FeaturedProperties_${60 + index}`} className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property.type || 'For Sale'}
                </div>
              </div>
              <div id={`FeaturedProperties_${70 + index}`} className="p-6">
                <h3 id={`FeaturedProperties_${80 + index}`} className="text-xl font-bold text-gray-800 mb-2">
                  {property.title || 'Modern Luxury Villa'}
                </h3>
                <p id={`FeaturedProperties_${90 + index}`} className="text-gray-600 mb-4">
                  {property.location || 'Prime Location'}
                </p>
                <div id={`FeaturedProperties_${100 + index}`} className="flex justify-between items-center">
                  <span id={`FeaturedProperties_${110 + index}`} className="text-2xl font-bold text-blue-600">
                    ${property.price || '850,000'}
                  </span>
                  <button id={`FeaturedProperties_${120 + index}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}