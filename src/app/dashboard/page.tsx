'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('Procode_current_user');
    if (!currentUser) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(currentUser));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('Procode_current_user');
    router.push('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin w-8 h-8 border-4 border-gray-900 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${user.avatar} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
          {user.name.charAt(0).toUpperCase()}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome, {user.name}!</h1>
        <p className="text-gray-500 mb-8">You are logged in as {user.email}</p>
        
        {/* Coming Soon Banner */}
        <div className="mb-8">
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1f2937] via-[#db2777] to-[#374151] tracking-tight">
            COMING SOON
          </h2>
          <p className="text-gray-400 mt-4 text-lg">We&apos;re building something magical for you</p>
        </div>
        
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
