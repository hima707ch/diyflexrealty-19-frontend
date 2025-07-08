import React from 'react';
import SavedProperties from './SavedProperties';
import AccountSettings from './AccountSettings';
import images from '../assets/images';
import { useDashboard } from './useDashboard';

const Body = () => {
  const { activeTab, setActiveTab } = useDashboard();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <div id="Body_2" className="flex flex-col md:flex-row gap-8">
        <div id="Body_3" className="w-full md:w-1/4">
          <div id="Body_4" className="bg-white rounded-lg shadow p-4">
            <div id="Body_5" className="flex items-center gap-4 mb-6">
              <img src={images[0]} alt="Profile" className="w-16 h-16 rounded-full" />
              <h2 id="Body_6" className="text-xl font-semibold">My Dashboard</h2>
            </div>
            <nav id="Body_7">
              <button
                id="Body_8"
                onClick={() => setActiveTab('saved')}
                className={`w-full text-left px-4 py-2 rounded mb-2 ${activeTab === 'saved' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                Saved Properties
              </button>
              <button
                id="Body_9"
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-4 py-2 rounded ${activeTab === 'settings' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                Account Settings
              </button>
            </nav>
          </div>
        </div>
        <div id="Body_10" className="w-full md:w-3/4">
          {activeTab === 'saved' ? <SavedProperties /> : <AccountSettings />}
        </div>
      </div>
    </div>
  );
};

export default Body;