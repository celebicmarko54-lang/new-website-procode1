'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/context/LanguageContext';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('appnode_current_user');
    if (!currentUser) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(currentUser));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('appnode_current_user');
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
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('dashboardPage.welcome')}, {user.name}!</h1>
        <p className="text-gray-500 mb-8">{t('dashboardPage.loggedInAs')} {user.email}</p>
        
        {/* Coming Soon Banner */}
        <div className="mb-8">
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1f2937] via-[#db2777] to-[#374151] tracking-tight">
            {t('dashboardPage.comingSoon')}
          </h2>
          <p className="text-gray-400 mt-4 text-lg">{t('dashboardPage.buildingMagic')}</p>
        </div>
        
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          {t('dashboardPage.signOut')}
        </button>
      </div>
    </div>
  );
}
