'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

const featureIcons = [
  <svg key="security" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="collaboration" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="performance" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="support" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>,
  <svg key="integrations" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="analytics" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
];

const featureKeys = ['security', 'collaboration', 'performance', 'support', 'integrations', 'analytics'];

const testimonialData = [
  {
    key: 'testimonial1',
    avatar: "SC",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    key: 'testimonial2',
    avatar: "MT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    key: 'testimonial3',
    avatar: "EW",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    key: 'testimonial4',
    avatar: "JK",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    key: 'testimonial5',
    avatar: "AL",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  },
  {
    key: 'testimonial6',
    avatar: "RP",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

const LogoMeta = () => (
  <svg viewBox="0 0 280 60" className="h-10 w-auto" aria-label="Meta">
    <defs>
      <linearGradient id="metaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0081FB" />
        <stop offset="100%" stopColor="#0064E0" />
      </linearGradient>
    </defs>
    <path d="M21.5 8C15.5 8 12.5 14 10.5 18C8.5 22 6 30 3.5 30C1.5 30 0 26 0 20C0 14 2 8 7.5 8C11 8 13 11 14.5 14L10.5 22L14.5 14C16 11 18 8 21.5 8C27 8 29 14 29 20C29 26 27.5 30 25.5 30C23 30 20.5 22 18.5 18C16.5 14 15.5 8 21.5 8Z" fill="url(#metaGrad)">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
    </path>
    <text x="38" y="35" fontSize="28" fontWeight="700" fill="#0081FB" fontFamily="system-ui, -apple-system, sans-serif">
      Meta
    </text>
  </svg>
);

const LogoClickUp = () => (
  <svg viewBox="0 0 280 60" className="h-10 w-auto" aria-label="ClickUp">
    <defs>
      <linearGradient id="clickupGrad1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8930FD" />
        <stop offset="100%" stopColor="#49CCF9" />
      </linearGradient>
      <linearGradient id="clickupGrad2" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#FF02F0" />
        <stop offset="100%" stopColor="#FFC800" />
      </linearGradient>
    </defs>
    <g transform="translate(2,8)">
      <path d="M6 30L15 20L24 30" stroke="url(#clickupGrad1)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="stroke-dasharray" values="0 50;50 0" dur="2s" fill="freeze" />
      </path>
      <path d="M10 24L15 16L20 24" stroke="url(#clickupGrad2)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="stroke-dasharray" values="0 40;40 0" dur="2s" begin="0.3s" fill="freeze" />
      </path>
    </g>
    <text x="34" y="38" fontSize="26" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
      <tspan fill="#7B68EE">Click</tspan><tspan fill="#49CCF9">Up</tspan>
    </text>
  </svg>
);

const LogoPayPal = () => (
  <svg viewBox="0 0 280 60" className="h-10 w-auto" aria-label="PayPal">
    <g transform="translate(0,6)">
      <path d="M12 4C12 4 24 4 26 4C30 4 33 6.5 33 11C33 17 29 22 22 22H18L16 34H8L12 4Z" fill="#003087">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
      </path>
      <path d="M18 8C18 8 28 8 30 8C34 8 37 10.5 37 15C37 21 33 26 26 26H22L20 38H14L18 8Z" fill="#009CDE">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
      </path>
    </g>
    <text x="44" y="38" fontSize="28" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">
      <tspan fill="#003087">Pay</tspan><tspan fill="#009CDE">Pal</tspan>
    </text>
  </svg>
);

const LogoCoinbase = () => (
  <svg viewBox="0 0 280 60" className="h-10 w-auto" aria-label="Coinbase">
    <g transform="translate(4,8)">
      <circle cx="20" cy="22" r="18" fill="#0052FF" stroke="none">
        <animate attributeName="r" values="17;18;17" dur="3s" repeatCount="indefinite" />
      </circle>
      <rect x="12" y="18" width="16" height="8" rx="2" fill="white" />
    </g>
    <text x="48" y="38" fontSize="25" fontWeight="700" fill="#0052FF" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5">
      coinbase
    </text>
  </svg>
);

const LogoBoeing = () => (
  <svg viewBox="0 0 280 60" className="h-10 w-auto" aria-label="Boeing">
    <g transform="translate(0,6)">
      <path d="M4 24C4 24 14 8 25 8C29 8 31 12 31 16C31 22 26 30 18 30C14 30 10 28 8 26" stroke="#0033A0" strokeWidth="3" fill="none" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0 80;80 0" dur="2s" fill="freeze" />
      </path>
      <line x1="12" y1="6" x2="32" y2="6" stroke="#0033A0" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0 20;20 0" dur="1.5s" fill="freeze" />
      </line>
    </g>
    <text x="40" y="38" fontSize="30" fontWeight="700" fill="#0033A0" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1">
      BOEING
    </text>
  </svg>
);

const LogoMonday = () => (
  <svg viewBox="0 0 300 60" className="h-10 w-auto" aria-label="Monday.com">
    <g transform="translate(2,12)">
      <ellipse cx="8" cy="20" rx="7" ry="14" fill="#FF3D57" transform="rotate(-12,8,20)">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="26" cy="20" rx="7" ry="14" fill="#FFCB00" transform="rotate(-12,26,20)">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.2s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="44" cy="20" rx="7" ry="14" fill="#00CA72" transform="rotate(-12,44,20)">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.4s" repeatCount="indefinite" />
      </ellipse>
    </g>
    <text x="60" y="38" fontSize="26" fontWeight="700" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif">
      monday<tspan fontSize="18" fill="#FF3D57">.com</tspan>
    </text>
  </svg>
);

const animatedLogos = [
  { name: 'Meta', component: LogoMeta, color: '#0081FB' },
  { name: 'ClickUp', component: LogoClickUp, color: '#7B68EE' },
  { name: 'PayPal', component: LogoPayPal, color: '#003087' },
  { name: 'Coinbase', component: LogoCoinbase, color: '#0052FF' },
  { name: 'Boeing', component: LogoBoeing, color: '#0033A0' },
  { name: 'Monday', component: LogoMonday, color: '#FF3D57' },
];

export default function EnterprisePage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full border border-gray-200/60 dark:border-gray-800 mb-6">
              <span className="text-xs font-semibold text-white bg-gradient-to-r from-[#ff6b6b] to-[#ee5a24] px-2.5 py-0.5 rounded-full">{t('enterprisePage.badge')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              {t('enterprisePage.title')} {t('enterprisePage.titleHighlight')} {t('enterprisePage.titleEnd')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {t('enterprisePage.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}>
                {t('common.contactSales')}
              </a>
              <Link href="/pricing" className="px-8 py-4 bg-white/80 dark:bg-black backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-white dark:hover:bg-black transition-colors">
                {t('enterprisePage.viewPricing')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-12">{t('enterprisePage.trustedBy')}</p>
          <div className="relative w-full overflow-hidden logo-marquee-mask">
            <div className="flex items-center gap-24 animate-marquee">
              {[...animatedLogos, ...animatedLogos, ...animatedLogos, ...animatedLogos, ...animatedLogos, ...animatedLogos, ...animatedLogos, ...animatedLogos].map((logo, index) => {
                const LogoComp = logo.component;
                return (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex-shrink-0 h-16 flex items-center justify-center logo-float group cursor-pointer text-gray-800 dark:text-white"
                    style={{ animationDelay: `${(index % 6) * 0.3}s` }}
                  >
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg" style={{ filter: `drop-shadow(0 0 0px ${logo.color}00)`, transition: 'filter 0.3s, transform 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.filter = `drop-shadow(0 0 12px ${logo.color}66)`)} onMouseLeave={(e) => (e.currentTarget.style.filter = `drop-shadow(0 0 0px ${logo.color}00)`)}>
                      <LogoComp />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes logoFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
            will-change: transform;
          }
          .logo-float {
            animation: logoFloat 4s ease-in-out infinite;
          }
          .logo-marquee-mask {
            -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
            mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          }
          @media (max-width: 768px) {
            .animate-marquee {
              animation: marquee 18s linear infinite;
            }
          }
        `}</style>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('enterprisePage.featuresTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('enterprisePage.featuresSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureKeys.map((featureKey, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg transition-all bg-white dark:bg-black group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1f2937] to-[#374151] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {featureIcons[index]}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t(`enterprisePage.features.${featureKey}.title`)}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t(`enterprisePage.features.${featureKey}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('enterprisePage.testimonialsTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('enterprisePage.testimonialsSubtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialData.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">&ldquo;{t(`enterprisePage.testimonials.${testimonial.key}.quote`)}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={t(`enterprisePage.testimonials.${testimonial.key}.author`)}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{t(`enterprisePage.testimonials.${testimonial.key}.author`)}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t(`enterprisePage.testimonials.${testimonial.key}.role`)}, {t(`enterprisePage.testimonials.${testimonial.key}.company`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('enterprisePage.contactTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {t('enterprisePage.contactSubtitle')}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg"
            >
              {t('common.contactSales')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          {submitted ? (
            <div className="text-center py-12 px-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('enterprisePage.thankYou')}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t('enterprisePage.thankYouMessage')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('enterprisePage.form.fullName')}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent"
                    placeholder={t('enterprisePage.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('enterprisePage.form.workEmail')}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent"
                    placeholder={t('enterprisePage.form.emailPlaceholder')}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('enterprisePage.form.company')}</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent"
                    placeholder={t('enterprisePage.form.companyPlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('enterprisePage.form.teamSize')}</label>
                  <select
                    required
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent bg-white dark:bg-black text-gray-900 dark:text-white"
                  >
                    <option value="">{t('enterprisePage.form.selectTeamSize')}</option>
                    <option value="1-10">{t('enterprisePage.form.teamSize1')}</option>
                    <option value="11-50">{t('enterprisePage.form.teamSize2')}</option>
                    <option value="51-200">{t('enterprisePage.form.teamSize3')}</option>
                    <option value="201-500">{t('enterprisePage.form.teamSize4')}</option>
                    <option value="500+">{t('enterprisePage.form.teamSize5')}</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('enterprisePage.form.message')}</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent resize-none"
                  placeholder={t('enterprisePage.form.messagePlaceholder')}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('enterprisePage.form.sending')}
                  </>
                ) : (
                  t('common.contactSales')
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
