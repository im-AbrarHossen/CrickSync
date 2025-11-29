'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function Profile() {
  const { data: session, update } = useSession();

  const [user, setUser] = useState({
    name: 'Guest User',
    email: 'guest@example.com',
    image: '/assets/images/default-avatar.webp',
    lastLogin: null
  });

  // Update user state whenever session changes
  useEffect(() => {
    if (session?.user) {
      setUser({
        name: session.user.name,
        email: session.user.email,
        image: session.user.image || '/assets/images/default-avatar.webp',
        lastLogin: session.user.lastLogin
      });
    }
  }, [session?.user]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <div className="avatar mx-auto mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
            <img src={user.image} alt="User Avatar" className="object-cover w-full h-full" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-4">{user.email}</p>

        <p className="text-gray-500 text-sm">
          Last login: <span className="font-medium">
            {user.lastLogin ? dayjs(user.lastLogin).fromNow() : 'Never logged in'}
          </span>
        </p>
      </div>
    </div>
  );
}
