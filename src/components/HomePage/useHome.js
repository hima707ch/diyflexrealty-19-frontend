import { useState, useEffect } from 'react';

export default function useHome() {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  const fetchFeaturedProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/properties/search?limit=6');
      if (response.ok) {
        const data = await response.json();
        setFeaturedProperties(data);
      } else {
        // Fallback data if API fails
        setFeaturedProperties([
          {
            id: 1,
            title: 'Modern Luxury Villa',
            location: 'Beverly Hills, CA',
            price: '2,500,000',
            type: 'Villa',
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
          },
          {
            id: 2,
            title: 'Downtown Penthouse',
            location: 'Manhattan, NY',
            price: '3,200,000',
            type: 'Penthouse',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
          },
          {
            id: 3,
            title: 'Beachfront Condo',
            location: 'Miami Beach, FL',
            price: '1,800,000',
            type: 'Condo',
            image: 'https://images.unsplash.com/photo-1571492913808-9e9f26e9ad3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching featured properties:', error);
      setFeaturedProperties([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchParams) => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams();
      
      Object.entries(searchParams).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });
      
      const response = await fetch(`/api/properties/search?${queryParams}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        const errorData = await response.json();
        console.error('Search error:', errorData.error);
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error searching properties:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const contactSubmit = async (formData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending contact message:', error);
      throw error;
    }
  };

  return {
    featuredProperties,
    searchResults,
    loading,
    handleSearch,
    contactSubmit
  };
}