import { useState, useEffect } from 'react';

export const usePropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('price-asc');
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        ...filters,
        sort: sortOption
      }).toString();

      const response = await fetch(`/api/properties/search?${queryParams}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    if (key === 'reset') {
      setFilters({
        location: '',
        minPrice: '',
        maxPrice: '',
        type: ''
      });
    } else {
      setFilters(prev => ({ ...prev, [key]: value }));
    }
  };

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  useEffect(() => {
    fetchProperties();
  }, [filters, sortOption]);

  return {
    properties,
    loading,
    filters,
    handleFilterChange,
    sortOption,
    handleSortChange
  };
};