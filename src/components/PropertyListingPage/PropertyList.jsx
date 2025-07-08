import React from 'react';
import images from '../assets/images';

const PropertyList = ({ properties, loading, sortOption, onSortChange }) => {
  if (loading) {
    return (
      <div id="PropertyList_1" className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div id="PropertyList_2" className="flex-1">
      <div id="PropertyList_3" className="mb-4 flex justify-end">
        <select
          id="PropertyList_4"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="date-desc">Newest First</option>
        </select>
      </div>
      <div id="PropertyList_5" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div
            key={property.id}
            id={`PropertyList_6_${index}`}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={images[index % images.length]}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <p className="text-blue-600 font-bold">${property.price.toLocaleString()}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">{property.type}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;