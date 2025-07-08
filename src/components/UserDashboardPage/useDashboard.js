import { useState } from 'react';

export const useDashboard = () => {
  const [activeTab, setActiveTab] = useState('saved');

  return {
    activeTab,
    setActiveTab
  };
};