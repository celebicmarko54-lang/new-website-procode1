'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/context/LanguageContext';

export default function IntegrationsPage() {
  const { t } = useTranslation();
  const integrations = [
    { 
      name: 'OpenAI', 
      category: t('productIntegrations.categories.ai'), 
      icon: (
        <svg className="w-8 h-8 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
        </svg>
      ), 
      description: t('productIntegrations.integrations.openai'),
      categoryColor: 'text-[#10A37F]'
    },
    { 
      name: 'Stripe', 
      category: t('productIntegrations.categories.payments'), 
      icon: (
        <svg className="w-8 h-8 text-[#635BFF]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
        </svg>
      ), 
      description: t('productIntegrations.integrations.stripe'),
      categoryColor: 'text-[#635BFF]'
    },
    { 
      name: 'Twilio', 
      category: t('productIntegrations.categories.communication'), 
      icon: (
        <svg className="w-8 h-8 text-[#F22F46]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.381 0 0 5.381 0 12s5.381 12 12 12 12-5.381 12-12S18.619 0 12 0zm0 20.4c-4.638 0-8.4-3.762-8.4-8.4S7.362 3.6 12 3.6s8.4 3.762 8.4 8.4-3.762 8.4-8.4 8.4zm3.6-11.4a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0zm0 6a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0zm-6 0a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0zm0-6a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0z"/>
        </svg>
      ), 
      description: t('productIntegrations.integrations.twilio'),
      categoryColor: 'text-[#F22F46]'
    },
    { 
      name: 'SendGrid', 
      category: t('productIntegrations.categories.email'), 
      icon: (
        <svg className="w-8 h-8 text-[#1A82E2]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ), 
      description: t('productIntegrations.integrations.sendgrid'),
      categoryColor: 'text-[#1A82E2]'
    },
    { 
      name: 'Cloudflare', 
      category: t('productIntegrations.categories.cdn'), 
      icon: (
        <svg className="w-8 h-8 text-[#F38020]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.5049-1.0615-.5693l-8.6592-.1123c-.0537-.0039-.1025-.0264-.1377-.0645-.0381-.043-.0518-.0967-.0411-.1475.0283-.1231.1417-.211.2695-.211l8.7803.1113c1.0205-.0518 2.1201-.8193 2.5313-1.8203l.5205-1.2656a.2505.2505 0 0 0 .0117-.1885c-.4521-2.2051-2.4482-3.8525-4.8193-3.8525-2.6631 0-4.8613 2.0654-5.0459 4.6846-.5166-.3984-1.1729-.6367-1.8896-.6367-1.5908 0-2.9043 1.2344-3.0283 2.7939-.0322-.002-.0645-.0029-.0967-.0029A3.056 3.056 0 0 0 .9512 18h14.7744c.7646 0 1.4775-.5166 1.7315-1.2451l.0527-.1592v-.0088z"/>
        </svg>
      ), 
      description: t('productIntegrations.integrations.cloudflare'),
      categoryColor: 'text-[#F38020]'
    },
    { 
      name: 'GitHub', 
      category: t('productIntegrations.categories.versionControl'), 
      icon: (
        <svg className="w-8 h-8 text-gray-800 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ), 
      description: t('productIntegrations.integrations.github'),
      categoryColor: 'text-gray-500'
    },
    { 
      name: 'Slack', 
      category: t('productIntegrations.categories.communication'), 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
          <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
          <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/>
          <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
        </svg>
      ), 
      description: t('productIntegrations.integrations.slack'),
      categoryColor: 'text-[#611F69]'
    },
    { 
      name: 'Google Cloud', 
      category: t('productIntegrations.categories.cloud'), 
      icon: (
        <svg className="w-8 h-8 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.003a6.523 6.523 0 0 0 3.907 1.29h11.818c3.834 0 7.548-3.16 7.548-7.548 0-4.15-3.207-7.244-7.178-7.544A9.395 9.395 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-11.6a3.97 3.97 0 0 1-2.37-.769 3.966 3.966 0 0 1-.18-6.063 4.161 4.161 0 0 1 2.024-.996 5.654 5.654 0 0 1 .397-1.477 5.636 5.636 0 0 1 6.38-1.634z"/>
        </svg>
      ), 
      description: t('productIntegrations.integrations.googleCloud'),
      categoryColor: 'text-[#4285F4]'
    },
    { 
      name: 'AWS', 
      category: t('productIntegrations.categories.cloud'), 
      icon: (
        <svg className="w-8 h-8 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/>
        </svg>
      ), 
      description: t('productIntegrations.integrations.aws'),
      categoryColor: 'text-[#FF9900]'
    },
    { 
      name: 'Anthropic', 
      category: t('productIntegrations.categories.ai'), 
      icon: (
        <svg className="w-8 h-8 text-[#D4A27F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.304 3.541h-3.672l6.696 16.918h3.672zm-10.608 0L0 20.459h3.744l1.368-3.6h6.624l1.368 3.6h3.744L10.152 3.541zm-.144 10.386 2.16-5.688 2.16 5.688z"/>
        </svg>
      ), 
      description: t('productIntegrations.integrations.anthropic'),
      categoryColor: 'text-[#D4A27F]'
    },
    { 
      name: 'Vercel', 
      category: t('productIntegrations.categories.deployment'), 
      icon: (
        <svg className="w-8 h-8 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0l12-21.05 12 21.05z"/>
        </svg>
      ), 
      description: t('productIntegrations.integrations.vercel'),
      categoryColor: 'text-gray-500'
    },
    { 
      name: 'Supabase', 
      category: t('productIntegrations.categories.database'), 
      icon: (
        <svg className="w-8 h-8 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/>
        </svg>
      ), 
      description: t('productIntegrations.integrations.supabase'),
      categoryColor: 'text-[#3ECF8E]'
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('productIntegrations.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              {t('productIntegrations.title')} {t('productIntegrations.titleHighlight')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {t('productIntegrations.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/signup" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none">
                {t('common.startBuilding')}
              </Link>
              <a href="#integrations" className="px-8 py-4 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#151515] transition-colors">
                {t('productIntegrations.browseAll')}
              </a>
            </div>
          </div>
        </section>

        <section id="integrations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">{t('productIntegrations.popularIntegrations')}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, i) => (
              <div key={i} className="p-5 bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                    {integration.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{integration.name}</h3>
                    <p className={`text-xs ${integration.categoryColor} font-medium`}>{integration.category}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{integration.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('productIntegrations.howItWorks.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: t('productIntegrations.howItWorks.step1.title'), desc: t('productIntegrations.howItWorks.step1.description') },
              { step: '2', title: t('productIntegrations.howItWorks.step2.title'), desc: t('productIntegrations.howItWorks.step2.description') },
              { step: '3', title: t('productIntegrations.howItWorks.step3.title'), desc: t('productIntegrations.howItWorks.step3.description') }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-2 dark:border-gray-800">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-2 dark:border-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="p-8 bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl border border-gray-200 dark:border-2 dark:border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('productIntegrations.cta.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{t('productIntegrations.cta.subtitle')}</p>
            <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-all shadow-xl shadow-gray-900/20 dark:shadow-none text-lg">
              {t('productIntegrations.getStarted')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
