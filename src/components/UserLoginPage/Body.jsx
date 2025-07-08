import React from 'react';
import LoginForm from './LoginForm';
import images from '../assets/images';

const Body = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-md w-full space-y-8" id="Body_2">
        <div id="Body_3">
          <img
            className="mx-auto h-12 w-auto"
            src={images[0]}
            alt="Logo"
            id="Body_4"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" id="Body_5">
            Sign in to your account
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Body;