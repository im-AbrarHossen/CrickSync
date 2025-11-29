'use client'

import React from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';

export default function Sidebar({ isOpen, toggleSidebar, setActiveMenu, activeMenu }) {
  const menuItems = [
    { icon: <FaHome />, label: 'Home', key: 'home' },
    { icon: <FaUser />, label: 'Profile', key: 'profile' },
    { icon: <FaCog />, label: 'Settings', key: 'settings' },
    { icon: <FaSignOutAlt />, label: 'Logout', key: 'logout', color: 'text-red-500' },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-blue-600 text-white shadow-lg z-50 transition-all duration-300
      ${isOpen ? 'w-64' : 'w-20'}`}
    >
      {/* Collapse/Expand Button */}
      <div className="flex justify-end p-4">
        <button
          className="bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition-all"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      </div>

      {/* Brand */}
      {isOpen && (
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold">MyDashboard</h1>
        </div>
      )}

      {/* Menu Items */}
      <nav className="mt-4 flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 px-6 py-3 cursor-pointer rounded-lg transition-all ${
                item.color ? item.color : 'text-white'
              } ${activeMenu === item.key ? 'bg-red-500' : ''}`}
              onClick={() => setActiveMenu(item.key)}
            >
              <span className="text-lg">{item.icon}</span>
              {isOpen && <span className="font-medium">{item.label}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
