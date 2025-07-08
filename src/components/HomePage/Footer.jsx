import React from 'react';
import images from '../assets/images';

export default function Footer() {
  return (
    <footer id="Footer_1" className="bg-gray-900 text-white py-12">
      <div id="Footer_2" className="container mx-auto px-4">
        <div id="Footer_3" className="grid md:grid-cols-4 gap-8">
          <div id="Footer_4">
            <h3 id="Footer_5" className="text-2xl font-bold mb-4">DreamHome</h3>
            <p id="Footer_6" className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect home. We make real estate dreams come true.
            </p>
            <div id="Footer_7" className="flex space-x-4">
              <a id="Footer_8" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Facebook
              </a>
              <a id="Footer_9" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Twitter
              </a>
              <a id="Footer_10" href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Instagram
              </a>
            </div>
          </div>
          
          <div id="Footer_11">
            <h4 id="Footer_12" className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul id="Footer_13" className="space-y-2">
              <li id="Footer_14"><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li id="Footer_15"><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Properties</a></li>
              <li id="Footer_16"><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li id="Footer_17"><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div id="Footer_18">
            <h4 id="Footer_19" className="text-lg font-semibold mb-4">Services</h4>
            <ul id="Footer_20" className="space-y-2">
              <li id="Footer_21"><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Buy Property</a></li>
              <li id="Footer_22"><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sell Property</a></li>
              <li id="Footer_23"><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Property Management</a></li>
              <li id="Footer_24"><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Investment</a></li>
            </ul>
          </div>
          
          <div id="Footer_25">
            <h4 id="Footer_26" className="text-lg font-semibold mb-4">Contact Info</h4>
            <div id="Footer_27" className="space-y-2 text-gray-400">
              <p id="Footer_28">123 Real Estate St.</p>
              <p id="Footer_29">New York, NY 10001</p>
              <p id="Footer_30">Phone: (555) 123-4567</p>
              <p id="Footer_31">Email: info@dreamhome.com</p>
            </div>
          </div>
        </div>
        
        <div id="Footer_32" className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p id="Footer_33" className="text-gray-400">
            © 2024 DreamHome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}