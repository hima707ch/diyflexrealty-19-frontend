import React from 'react';
import Hero from './Hero';
import FeaturedProperties from './FeaturedProperties';
import SearchSection from './SearchSection';
import AboutUs from './AboutUs';
import CallToAction from './CallToAction';
import Footer from './Footer';
import useHome from './useHome';
import images from '../assets/images';

export default function Body() {
  const { 
    featuredProperties, 
    searchResults, 
    loading, 
    handleSearch, 
    contactSubmit 
  } = useHome();

  return (
    <div id="Body_1" className="min-h-screen bg-white">
      <Hero />
      <SearchSection onSearch={handleSearch} searchResults={searchResults} loading={loading} />
      <FeaturedProperties properties={featuredProperties} loading={loading} />
      <AboutUs />
      <CallToAction onContactSubmit={contactSubmit} />
      <Footer />
    </div>
  );
}