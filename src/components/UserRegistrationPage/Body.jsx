import React from 'react';
import RegistrationForm from './RegistrationForm';
import images from '../assets/images';

const Body = () => {
  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-md w-full space-y-8">
        <div id="Body_3" className="text-center">
          <img id="Body_4" className="mx-auto h-12 w-auto" src={images[0]} alt="Logo" />
          <h2 id="Body_5" className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p id="Body_6" className="mt-2 text-sm text-gray-600">Join us and start your journey</p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Body;