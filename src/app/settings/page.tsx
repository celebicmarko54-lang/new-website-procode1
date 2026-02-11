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

export default function SettingsPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('general');
  
  // Settings state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('UTC');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem('appnode_current_user');
    if (!currentUser) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(currentUser));
  }, [router]);

  const handleDeleteAccount = () => {
    if (!user) return;
    
    // Remove user from users list
    const users = JSON.parse(localStorage.getItem('appnode_users') || '[]');
    const updatedUsers = users.filter((u: User) => u.id !== user.id);
    localStorage.setItem('appnode_users', JSON.stringify(updatedUsers));
    
    // Clear current user and projects
    localStorage.removeItem('appnode_current_user');
    localStorage.removeItem('appnode_projects');
    
    router.push('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-[#1A1A1A]">
        <div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const tabs = [
    { id: 'general', label: 'General', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
    { id: 'notifications', label: 'Notifications', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
    { id: 'security', label: 'Security', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { id: 'danger', label: 'Danger Zone', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A]">
      {/* Header */}
      <header className="bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-b-2 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h1 className="text-lg font-semibold text-gray-900">{t('settingsPage.title')}</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="md:w-56 border-b md:border-b-0 md:border-r border-gray-200 p-4">
              <nav className="flex md:flex-col gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors w-full text-left ${
                      activeTab === tab.id
                        ? 'bg-gray-50 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                    </svg>
                    <span className="hidden md:inline">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('settingsPage.generalSettings')}</h2>
                    
                    <div className="space-y-4">
                      {/* Language */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('settingsPage.language')}</label>
                        <select
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                        >
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                          <option value="de">Deutsch</option>
                        </select>
                      </div>

                      {/* Timezone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('settingsPage.timezone')}</label>
                        <select
                          value={timezone}
                          onChange={(e) => setTimezone(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                        >
                          <option value="UTC">UTC</option>
                          <option value="EST">Eastern Time (EST)</option>
                          <option value="PST">Pacific Time (PST)</option>
                          <option value="CET">Central European Time (CET)</option>
                        </select>
                      </div>

                      {/* Dark Mode */}
                      <div className="flex items-center justify-between py-3">
                        <div>
                          <p className="font-medium text-gray-900">{t('settingsPage.darkMode')}</p>
                          <p className="text-sm text-gray-500">{t('settingsPage.darkModeDesc')}</p>
                        </div>
                        <button
                          onClick={() => setDarkMode(!darkMode)}
                          className={`relative w-12 h-6 rounded-full transition-colors ${darkMode ? 'bg-orange-500' : 'bg-gray-300'}`}
                        >
                          <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${darkMode ? 'left-7' : 'left-1'}`}></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('settingsPage.notificationPreferences')}</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <p className="font-medium text-gray-900">{t('settingsPage.emailNotifications')}</p>
                        <p className="text-sm text-gray-500">{t('settingsPage.emailNotificationsDesc')}</p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${emailNotifications ? 'bg-orange-500' : 'bg-gray-300'}`}
                      >
                        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${emailNotifications ? 'left-7' : 'left-1'}`}></span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <p className="font-medium text-gray-900">{t('settingsPage.pushNotifications')}</p>
                        <p className="text-sm text-gray-500">{t('settingsPage.pushNotificationsDesc')}</p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${pushNotifications ? 'bg-orange-500' : 'bg-gray-300'}`}
                      >
                        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${pushNotifications ? 'left-7' : 'left-1'}`}></span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-medium text-gray-900">{t('settingsPage.marketingEmails')}</p>
                        <p className="text-sm text-gray-500">{t('settingsPage.marketingEmailsDesc')}</p>
                      </div>
                      <button
                        onClick={() => setMarketingEmails(!marketingEmails)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${marketingEmails ? 'bg-orange-500' : 'bg-gray-300'}`}
                      >
                        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${marketingEmails ? 'left-7' : 'left-1'}`}></span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('settingsPage.securitySettings')}</h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{t('settingsPage.password')}</p>
                          <p className="text-sm text-gray-500">{t('settingsPage.passwordLastChanged')}</p>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-orange-600 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                          {t('settingsPage.changePassword')}
                        </button>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{t('settingsPage.twoFactorAuth')}</p>
                          <p className="text-sm text-gray-500">{t('settingsPage.twoFactorAuthDesc')}</p>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg hover:from-orange-700 hover:to-amber-700 transition-colors">
                          {t('settingsPage.enable2FA')}
                        </button>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{t('settingsPage.activeSessions')}</p>
                          <p className="text-sm text-gray-500">{t('settingsPage.activeSessionsDesc')}</p>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                          {t('settingsPage.viewSessions')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'danger' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-red-600 mb-4">{t('settingsPage.dangerZone')}</h2>
                  
                  <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{t('settingsPage.deleteAccount')}</p>
                        <p className="text-sm text-gray-500">{t('settingsPage.deleteAccountDesc')}</p>
                      </div>
                      <button 
                        onClick={() => setShowDeleteModal(true)}
                        className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        {t('settingsPage.deleteAccount')}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{t('settingsPage.deleteAccountConfirm')}</h3>
            <p className="text-gray-500 text-center mb-6">{t('settingsPage.deleteAccountWarning')}</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              >
                {t('common.cancel')}
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 px-4 py-3 text-sm font-medium text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors"
              >
                {t('settingsPage.deleteAccount')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
