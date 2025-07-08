import React from 'react';
import images from '../assets/images';

const PropertyDescription = ({ property }) => {
  return (
    <div id="PropertyDescription_1" className="bg-white rounded-lg shadow-lg p-6">
      <h1 id="PropertyDescription_2" className="text-3xl font-bold mb-4">{property?.title || 'Luxury Villa'}</h1>
      <div id="PropertyDescription_3" className="flex items-center gap-4 mb-6">
        <span className="text-2xl font-bold text-blue-600">${property?.price?.toLocaleString() || '1,200,000'}</span>
        <span className="text-gray-500">|</span>
        <span className="text-gray-600">{property?.location || 'Beverly Hills, CA'}</span>
      </div>
      <div id="PropertyDescription_4" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded">
          <p className="font-semibold">{property?.bedrooms || 4}</p>
          <p className="text-gray-500">Bedrooms</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded">
          <p className="font-semibold">{property?.bathrooms || 3}</p>
          <p className="text-gray-500">Bathrooms</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded">
          <p className="font-semibold">{property?.sqft || 3200}</p>
          <p className="text-gray-500">Sq Ft</p>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded">
          <p className="font-semibold">{property?.yearBuilt || 2020}</p>
          <p className="text-gray-500">Year Built</p>
        </div>
      </div>
      <div id="PropertyDescription_5" className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-600 mb-6">
          {property?.description || 'This stunning luxury villa offers modern amenities and spectacular views. Features include high-end finishes, smart home technology, and a private pool.'}
        </p>
        <h2 className="text-xl font-semibold mb-3">Features</h2>
        <ul className="grid grid-cols-2 gap-2 list-disc list-inside mb-6">
          {(property?.features || ['Pool', 'Smart Home', 'Security System', 'Garden', 'Garage', 'Central AC']).map((feature, index) => (
            <li key={index} className="text-gray-600">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDescription;