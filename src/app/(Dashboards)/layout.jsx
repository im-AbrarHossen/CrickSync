'use client'

import React, { useState, useEffect } from 'react';
import Sidebar from './dashboardComponents/Sidebar';
import Profile from './dashboardComponents/Profile';
import Settings from './dashboardComponents/Settings';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import PlayerDashboard from './player-dashboard/page';
import AdminDashboard from './admin-dashboard/page';
import CoachDashboard from './coach-dashboard/page';
import AdmissionForm from './admin-dashboard/AdmissionForm';
import PlayersPerformance from './coach-dashboard/PlayersPerformance';
import PlayersPage from './admin-dashboard/PlayersPage';
import CoachesPage from './admin-dashboard/CoachesPage';
import AdmissionsPage from './admin-dashboard/AdmissionsPage';

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
    if (!role) return <div>Loading...</div>;

    switch (activeMenu) {
      case 'home':
        if (role === 'player') return <PlayerDashboard />;
        if (role === 'admin') return <AdminDashboard setActiveMenu={setActiveMenu} />;
        if (role === 'coach') return <CoachDashboard />;
        return <div>Unauthorized</div>;

      case 'profile':
        return <Profile />;

      case 'settings':
        return <Settings />;

      /** ADMIN ONLY */
      case 'admission':
        return role === 'admin'
          ? <AdmissionForm />
          : <div>Unauthorized</div>;

      case 'players':
        return role === 'admin' ? <PlayersPage /> : <div>Unauthorized</div>;

      case 'coaches':
        return role === 'admin' ? <CoachesPage /> : <div>Unauthorized</div>;

      case 'admissions':
        return role === 'admin' ? <AdmissionsPage /> : <div>Unauthorized</div>;

      /** COACH ONLY */
      case 'players-performance':
        return role === 'coach'
          ? <PlayersPerformance />
          : <div>Unauthorized</div>;

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
        role={role}
      />
      <main className="flex-1 p-6 ml-20 transition-all duration-300">{renderContent()}</main>
    </div>
  );
}
