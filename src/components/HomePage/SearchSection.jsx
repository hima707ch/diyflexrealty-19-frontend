import React, { useState } from 'react';
import images from '../assets/images';

export default function SearchSection({ onSearch, searchResults, loading }) {
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <section id="SearchSection_1" className="py-20 bg-white">
      <div id="SearchSection_2" className="container mx-auto px-4">
        <div id="SearchSection_3" className="text-center mb-12">
          <h2 id="SearchSection_4" className="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Property</h2>
          <p id="SearchSection_5" className="text-gray-600 max-w-2xl mx-auto">Search through thousands of properties to find your dream home.</p>
        </div>
        
        <form id="SearchSection_6" onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 mb-12">
          <div id="SearchSection_7" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div id="SearchSection_8">
              <label id="SearchSection_9" htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                id="SearchSection_10"
                type="text"
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                placeholder="Enter location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div id="SearchSection_11">
              <label id="SearchSection_12" htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-2">
                Min Price
              </label>
              <input
                id="SearchSection_13"
                type="number"
                name="minPrice"
                value={searchParams.minPrice}
                onChange={handleInputChange}
                placeholder="Minimum price"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div id="SearchSection_14">
              <label id="SearchSection_15" htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-2">
                Max Price
              </label>
              <input
                id="SearchSection_16"
                type="number"
                name="maxPrice"
                value={searchParams.maxPrice}
                onChange={handleInputChange}
                placeholder="Maximum price"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div id="SearchSection_17">
              <label id="SearchSection_18" htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                id="SearchSection_19"
                name="type"
                value={searchParams.type}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="condo">Condo</option>
              </select>
            </div>
          </div>
          
          <div id="SearchSection_20" className="mt-6 text-center">
            <button
              id="SearchSection_21"
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? 'Searching...' : 'Search Properties'}
            </button>
          </div>
        </form>
        
        {searchResults.length > 0 && (
          <div id="SearchSection_22" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((property, index) => (
              <div key={property.id || index} id={`SearchSection_${23 + index}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  id={`SearchSection_${33 + index}`}
                  src={property.image || images[index % images.length] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'}
                  alt={property.title || 'Property'}
                  className="w-full h-48 object-cover"
                />
                <div id={`SearchSection_${43 + index}`} className="p-6">
                  <h3 id={`SearchSection_${53 + index}`} className="text-xl font-bold text-gray-800 mb-2">
                    {property.title || 'Property Title'}
                  </h3>
                  <p id={`SearchSection_${63 + index}`} className="text-gray-600 mb-4">
                    {property.location || 'Location'}
                  </p>
                  <div id={`SearchSection_${73 + index}`} className="flex justify-between items-center">
                    <span id={`SearchSection_${83 + index}`} className="text-2xl font-bold text-blue-600">
                      ${property.price || '500,000'}
                    </span>
                    <button id={`SearchSection_${93 + index}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}