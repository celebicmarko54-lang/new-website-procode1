'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/context/LanguageContext';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
  company?: string;
  createdAt: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const avatarColors = [
    'from-orange-600 to-amber-600',
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-gray-900',
    'from-green-500 to-emerald-500',
    'from-red-500 to-rose-500',
    'from-indigo-500 to-violet-500',
  ];

  useEffect(() => {
    const currentUser = localStorage.getItem('appnode_current_user');
    if (!currentUser) {
      router.push('/login');
      return;
    }
    const userData = JSON.parse(currentUser);
    setUser(userData);
    setName(userData.name);
    setCompany(userData.company || '');
    setSelectedAvatar(userData.avatar);
  }, [router]);

  const handleSave = () => {
    if (!user) return;
    setIsSaving(true);

    const updatedUser = {
      ...user,
      name,
      company,
      avatar: selectedAvatar,
    };

    // Update in localStorage
    localStorage.setItem('appnode_current_user', JSON.stringify(updatedUser));

    // Update in users list
    const users = JSON.parse(localStorage.getItem('appnode_users') || '[]');
    const updatedUsers = users.map((u: User) => 
      u.id === user.id ? updatedUser : u
    );
    localStorage.setItem('appnode_users', JSON.stringify(updatedUsers));

    setUser(updatedUser);
    setIsEditing(false);
    setIsSaving(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-gray-900 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h1 className="text-lg font-semibold text-gray-900">{t('profilePage.title')}</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-[#1f2937] to-[#374151] h-32"></div>
          
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12">
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${user.avatar} flex items-center justify-center text-white text-3xl font-bold border-4 border-white shadow-lg`}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 sm:pb-2">
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {isEditing ? t('common.cancel') : t('profilePage.editProfile')}
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="border-t border-gray-200 px-6 py-6">
            {isEditing ? (
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('profilePage.fullName')}</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('profilePage.companyOptional')}</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder={t('profilePage.companyPlaceholder')}
                  />
                </div>

                {/* Avatar Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{t('profilePage.avatarColor')}</label>
                  <div className="flex flex-wrap gap-3">
                    {avatarColors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedAvatar(color)}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold transition-all ${
                          selectedAvatar === color ? 'ring-2 ring-offset-2 ring-gray-900 scale-110' : 'hover:scale-105'
                        }`}
                      >
                        {name.charAt(0).toUpperCase() || 'U'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleSave}
                    disabled={isSaving || !name.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-medium rounded-xl hover:from-orange-700 hover:to-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSaving ? t('profilePage.saving') : t('profilePage.saveChanges')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">{t('profilePage.fullName')}</label>
                    <p className="text-gray-900">{user.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">{t('profilePage.email')}</label>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">{t('profilePage.role')}</label>
                    <p className="text-gray-900 capitalize">{user.role}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">{t('profilePage.company')}</label>
                    <p className="text-gray-900">{user.company || t('profilePage.notSpecified')}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">{t('profilePage.memberSince')}</label>
                    <p className="text-gray-900">{new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
