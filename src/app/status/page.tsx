'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

export default function StatusPage() {
  const { t } = useTranslation();

  const services = [
    { name: 'API', status: 'operational', uptime: '99.99%' },
    { name: 'Web Application', status: 'operational', uptime: '99.98%' },
    { name: 'Code Generation', status: 'operational', uptime: '99.95%' },
    { name: 'Deployment Services', status: 'operational', uptime: '99.97%' },
    { name: 'Database Connections', status: 'operational', uptime: '99.99%' },
    { name: 'Authentication', status: 'operational', uptime: '99.99%' },
    { name: 'CDN & Assets', status: 'operational', uptime: '99.99%' },
    { name: 'Real-time Collaboration', status: 'operational', uptime: '99.90%' },
  ];

  const incidents = [
    {
      date: 'November 25, 2025',
      title: 'Elevated API Response Times',
      status: 'resolved',
      duration: '23 minutes',
      description: 'Some users experienced slower than normal API response times. The issue was identified and resolved.',
    },
    {
      date: 'November 18, 2025',
      title: 'Deployment Service Degradation',
      status: 'resolved',
      duration: '45 minutes',
      description: 'Deployments were delayed due to high traffic. Additional capacity was added to resolve the issue.',
    },
    {
      date: 'November 5, 2025',
      title: 'Scheduled Maintenance',
      status: 'completed',
      duration: '2 hours',
      description: 'Planned infrastructure upgrade to improve performance and reliability.',
    },
  ];

  const uptimeData = [
    { day: 'Mon', uptime: 100 },
    { day: 'Tue', uptime: 100 },
    { day: 'Wed', uptime: 99.9 },
    { day: 'Thu', uptime: 100 },
    { day: 'Fri', uptime: 100 },
    { day: 'Sat', uptime: 100 },
    { day: 'Sun', uptime: 100 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-500';
      case 'degraded': return 'bg-yellow-500';
      case 'outage': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational': return 'Operational';
      case 'degraded': return 'Degraded Performance';
      case 'outage': return 'Major Outage';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-medium">{t('statusPage.allOperational')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t('statusPage.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('statusPage.subtitle')}
            </p>
          </div>
        </div>

        {/* Uptime Overview */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">{t('statusPage.uptimeTitle')}</h2>
              <span className="text-2xl font-bold text-green-600">99.98%</span>
            </div>
            <div className="flex gap-1">
              {uptimeData.map((day) => (
                <div key={day.day} className="flex-1">
                  <div 
                    className={`h-10 rounded ${day.uptime === 100 ? 'bg-green-500' : 'bg-green-400'}`}
                    title={`${day.day}: ${day.uptime}% uptime`}
                  ></div>
                  <p className="text-xs text-gray-500 text-center mt-1">{day.day}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Status */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t('statusPage.servicesTitle')}</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {services.map((service, index) => (
              <div 
                key={service.name}
                className={`flex items-center justify-between p-4 ${
                  index !== services.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`}></span>
                  <span className="font-medium text-gray-900">{service.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{service.uptime} uptime</span>
                  <span className="text-sm text-green-600 font-medium">{getStatusText(service.status)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t('statusPage.incidentsTitle')}</h2>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{incident.title}</h3>
                    <p className="text-sm text-gray-500">{incident.date}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    incident.status === 'resolved' ? 'bg-green-100 text-green-700' :
                    incident.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{incident.description}</p>
                <p className="text-xs text-gray-400">Duration: {incident.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">{t('statusPage.subscribeTitle')}</h2>
            <p className="text-gray-100 mb-6">
              {t('statusPage.subscribeSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('statusPage.emailPlaceholder')}
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-50 rounded-xl font-semibold transition-colors">
                {t('statusPage.subscribeButton')}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
