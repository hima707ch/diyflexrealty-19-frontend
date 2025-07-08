import React from 'react';
import PropertyImagesCarousel from './PropertyImagesCarousel';
import PropertyDescription from './PropertyDescription';
import ContactForm from './ContactForm';
import usePropertyDetail from './usePropertyDetail';
import images from '../assets/images';

const Body = () => {
  const { property, loading, error, handleContactSubmit } = usePropertyDetail();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center min-h-screen">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <PropertyImagesCarousel images={property?.images || images} />
      <div id="Body_4" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div id="Body_5" className="lg:col-span-2">
          <PropertyDescription property={property} />
        </div>
        <div id="Body_6" className="lg:col-span-1">
          <ContactForm onSubmit={handleContactSubmit} propertyId={property?.id} />
        </div>
      </div>
    </div>
  );
};

export default Body;