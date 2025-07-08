import React, { useState } from 'react';
import images from '../assets/images';

const PropertyImagesCarousel = ({ images: propertyImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1));
  };

  return (
    <div id="PropertyImagesCarousel_1" className="relative w-full h-[500px] overflow-hidden rounded-lg">
      <img
        id="PropertyImagesCarousel_2"
        src={propertyImages[currentIndex]}
        alt={`Property image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        id="PropertyImagesCarousel_3"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        id="PropertyImagesCarousel_4"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ›
      </button>
      <div id="PropertyImagesCarousel_5" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {propertyImages.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyImagesCarousel;