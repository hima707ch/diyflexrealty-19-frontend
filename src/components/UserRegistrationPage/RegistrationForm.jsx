import React from 'react';
import useRegistration from './useRegistration';
import images from '../assets/images';

const RegistrationForm = () => {
  const {
    formData,
    errors,
    isLoading,
    handleChange,
    handleSubmit
  } = useRegistration();

  return (
    <form id="RegistrationForm_1" className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div id="RegistrationForm_2" className="rounded-md shadow-sm -space-y-px">
        <div id="RegistrationForm_3">
          <label htmlFor="name" className="sr-only">Full Name</label>
          <input
            id="RegistrationForm_4"
            name="name"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div id="RegistrationForm_5">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="RegistrationForm_6"
            name="email"
            type="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div id="RegistrationForm_7">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="RegistrationForm_8"
            name="password"
            type="password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
      </div>

      <div id="RegistrationForm_9">
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isLoading ? 'Creating account...' : 'Sign up'}
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;