import React from 'react';
import images from '../assets/images';
import { useSavedProperties } from './useSavedProperties';

const SavedProperties = () => {
  const { savedProperties, removeSavedProperty } = useSavedProperties();

  return (
    <div id="SavedProperties_1" className="bg-white rounded-lg shadow p-6">
      <h2 id="SavedProperties_2" className="text-2xl font-bold mb-6">Saved Properties</h2>
      <div id="SavedProperties_3" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {savedProperties.map((property, index) => (
          <div id={`SavedProperties_4_${index}`} key={property.id} className="border rounded-lg overflow-hidden">
            <img src={images[index % images.length]} alt={property.title} className="w-full h-48 object-cover" />
            <div id={`SavedProperties_5_${index}`} className="p-4">
              <h3 id={`SavedProperties_6_${index}`} className="text-xl font-semibold mb-2">{property.title}</h3>
              <p id={`SavedProperties_7_${index}`} className="text-gray-600 mb-2">${property.price.toLocaleString()}</p>
              <p id={`SavedProperties_8_${index}`} className="text-gray-500 mb-4">{property.location}</p>
              <div id={`SavedProperties_9_${index}`} className="flex justify-between items-center">
                <button
                  onClick={() => window.location.href = `/property/${property.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View Details
                </button>
                <button
                  onClick={() => removeSavedProperty(property.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedProperties;