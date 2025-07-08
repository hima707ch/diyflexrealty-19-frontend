import React from 'react';
import images from '../assets/images';
import { useAccountSettings } from './useAccountSettings';

const AccountSettings = () => {
  const { formData, handleChange, handleSubmit, isLoading } = useAccountSettings();

  return (
    <div id="AccountSettings_1" className="bg-white rounded-lg shadow p-6">
      <h2 id="AccountSettings_2" className="text-2xl font-bold mb-6">Account Settings</h2>
      <form id="AccountSettings_3" onSubmit={handleSubmit} className="space-y-6">
        <div id="AccountSettings_4" className="flex items-center gap-4 mb-6">
          <img src={images[0]} alt="Profile" className="w-20 h-20 rounded-full" />
          <button type="button" className="text-blue-500 hover:text-blue-600">Change Photo</button>
        </div>
        
        <div id="AccountSettings_5">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div id="AccountSettings_6">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div id="AccountSettings_7">
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div id="AccountSettings_8">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default AccountSettings;