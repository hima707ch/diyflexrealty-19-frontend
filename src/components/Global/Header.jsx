import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold text-white hover:text-blue-200 transition duration-300">RealEstate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" id="Header_3">
            <Link to="/" className={`text-white hover:text-blue-200 transition duration-300 ${location.pathname === '/' ? 'border-b-2 border-white' : ''}`}>Home</Link>
            <Link to="/propertylistingpage" className={`text-white hover:text-blue-200 transition duration-300 ${location.pathname === '/propertylistingpage' ? 'border-b-2 border-white' : ''}`}>Properties</Link>
            <Link to="/propertydetailpage" className={`text-white hover:text-blue-200 transition duration-300 ${location.pathname === '/propertydetailpage' ? 'border-b-2 border-white' : ''}`}>Details</Link>
            <form onSubmit={handleSearch} className="relative" id="Header_4">
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 w-64"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-600 hover:text-blue-800">
                🔍
              </button>
            </form>
            <div className="flex items-center space-x-4" id="Header_5">
              <Link to="/userloginpage" className="text-white hover:text-blue-200 transition duration-300">Login</Link>
              <Link to="/userregistrationpage" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300">Sign Up</Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            id="Header_6"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4" id="Header_7">
            <Link to="/" className="block text-white hover:text-blue-200 transition duration-300">Home</Link>
            <Link to="/propertylistingpage" className="block text-white hover:text-blue-200 transition duration-300">Properties</Link>
            <Link to="/propertydetailpage" className="block text-white hover:text-blue-200 transition duration-300">Details</Link>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-600 hover:text-blue-800">🔍</button>
            </form>
            <div className="space-y-2">
              <Link to="/userloginpage" className="block text-white hover:text-blue-200 transition duration-300">Login</Link>
              <Link to="/userregistrationpage" className="block bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300 text-center">Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;