'use client'

import React, { useState, useEffect } from 'react';
import Sidebar from './dashboardComponents/Sidebar';
import Profile from './dashboardComponents/Profile';
import Settings from './dashboardComponents/Settings';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import PlayerDashboard from './playerDashboard/page';
import AdminDashboard from './adminDashboard/page';
import CoachDashboard from './coachDashboard/page';

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');
  const [role, setRole] = useState(null);
  const router = useRouter();
  const { data: session } = useSession();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  // Set role once session is loaded
  useEffect(() => {
    if (session?.user?.role) {
      setRole(session.user.role);
      // Optionally, set default active menu based on role
      setActiveMenu('home');
    }
  }, [session]);

  const renderContent = () => {
    if (!role) return <div>Loading...</div>; // wait for role to load

    switch (activeMenu) {
      case 'home':
        if (role === 'player') return <PlayerDashboard />;
        if (role === 'admin') return <AdminDashboard />;
        if (role === 'coach') return <CoachDashboard />;
        return <div>Unauthorized</div>;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'logout':
        handleLogout();
        return null;
      default:
        return <div>Page Not Found</div>;
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
