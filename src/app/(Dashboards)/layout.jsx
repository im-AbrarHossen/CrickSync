'use client'

import React, { useState } from 'react';
import Sidebar from './dashboardComponents/Sidebar';
import Home from '../page';
import Profile from './dashboardComponents/Profile';
import Settings from './dashboardComponents/Settings';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');
  const router = useRouter();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    await signOut({ redirect: false }); // sign out without auto redirect
    router.push('/'); // redirect to home page
  };

  // Render main content based on active menu
  const renderContent = () => {
    switch (activeMenu) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'logout':
        handleLogout(); // call logout immediately
        return null; // nothing to render
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex">
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <main className="flex-1 p-6 ml-20 transition-all duration-300">{renderContent()}</main>
    </div>
  );
}
