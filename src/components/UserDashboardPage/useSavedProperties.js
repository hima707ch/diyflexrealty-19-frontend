import { useState, useEffect } from 'react';

export const useSavedProperties = () => {
  const [savedProperties, setSavedProperties] = useState([
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      price: 350000,
      location: 'Downtown, City'
    },
    {
      id: 2,
      title: 'Suburban Family Home',
      price: 500000,
      location: 'Suburb Area, City'
    }
  ]);

  const removeSavedProperty = (propertyId) => {
    setSavedProperties(prev => prev.filter(prop => prop.id !== propertyId));
  };

  return {
    savedProperties,
    removeSavedProperty
  };
};