import React from 'react';
import images from '../assets/images';

const FiltersPanel = ({ filters, onFilterChange }) => {
  return (
    <div id="FiltersPanel_1" className="w-full lg:w-64 bg-white p-4 rounded-lg shadow">
      <h2 id="FiltersPanel_2" className="text-xl font-semibold mb-4">Filters</h2>
      
      <div id="FiltersPanel_3" className="space-y-4">
        <div className="filter-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            id="FiltersPanel_4"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter location"
          />
        </div>

        <div className="filter-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              id="FiltersPanel_5"
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Min"
            />
            <input
              type="number"
              id="FiltersPanel_6"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Max"
            />
          </div>
        </div>

        <div className="filter-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <select
            id="FiltersPanel_7"
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <button
          id="FiltersPanel_8"
          onClick={() => onFilterChange('reset')}
          className="w-full mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FiltersPanel;