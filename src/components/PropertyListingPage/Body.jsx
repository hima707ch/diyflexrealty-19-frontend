import React from 'react';
import PropertyList from './PropertyList';
import FiltersPanel from './FiltersPanel';
import { usePropertyListing } from './usePropertyListing';
import images from '../assets/images';

const Body = () => {
  const { properties, loading, filters, handleFilterChange, sortOption, handleSortChange } = usePropertyListing();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold text-gray-800 mb-8">Property Listings</h1>
      <div id="Body_3" className="flex flex-col lg:flex-row gap-8">
        <FiltersPanel filters={filters} onFilterChange={handleFilterChange} />
        <PropertyList 
          properties={properties} 
          loading={loading} 
          sortOption={sortOption}
          onSortChange={handleSortChange}
        />
      </div>
    </div>
  );
};

export default Body;