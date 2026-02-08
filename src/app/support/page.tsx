'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot' | 'system';
  timestamp: Date;
}

// Knowledge base for the AI agent
const knowledgeBase = [
  {
    keywords: ['what is appnode', 'what\'s appnode', 'appnode'],
    answer: 'AppNode is an AI-powered platform that lets you build web applications by simply describing what you want in natural language. No coding experience required!'
  },
  {
    keywords: ['pricing', 'cost', 'price', 'how much', 'free plan', 'subscription'],
    answer: 'We offer a generous free tier that lets you build and deploy apps at no cost. Our Pro plan starts at $19/month with unlimited projects, and Enterprise plans are available for larger teams. Visit our pricing page for full details!'
  },
  {
    keywords: ['export', 'download code', 'get my code', 'own code'],
    answer: 'Yes! You can export your complete project code at any time. You own everything you create on AppNode. Just go to your project settings and click "Export Code" to download the full source code.'
  },
  {
    keywords: ['coding', 'programming', 'code experience', 'developer', 'beginner'],
    answer: 'No coding experience is required! AppNode is designed for everyone - from complete beginners to experienced developers. Simply describe what you want to build in plain English, and our AI will generate the code for you.'
  },
  {
    keywords: ['technology', 'tech stack', 'react', 'next.js', 'framework'],
    answer: 'AppNode generates modern React/Next.js applications with Tailwind CSS styling. Your apps are built with production-ready code following best practices.'
  },
  {
    keywords: ['deploy', 'publish', 'hosting', 'live', 'go live'],
    answer: 'You can deploy your app with one click! AppNode provides free hosting for your projects. Once deployed, you\'ll get a shareable URL. You can also connect a custom domain.'
  },
  {
    keywords: ['custom domain', 'domain', 'my domain', 'url'],
    answer: 'Yes, you can connect your own custom domain to any AppNode project! Go to your project settings, click "Domains", and follow the instructions to add your domain. DNS changes typically take 24-48 hours to propagate.'
  },
  {
    keywords: ['team', 'collaboration', 'share', 'invite', 'members'],
    answer: 'AppNode supports team collaboration! You can invite team members to your projects, set different permission levels, and work together in real-time. Team features are available on Pro and Enterprise plans.'
  },
  {
    keywords: ['api', 'integration', 'connect', 'third-party', 'database'],
    answer: 'AppNode supports integrations with popular services and APIs. You can connect databases, authentication providers, payment systems, and more. Check our Integrations documentation for the full list.'
  },
  {
    keywords: ['delete', 'cancel', 'remove account', 'close account'],
    answer: 'You can delete your account from Settings > Account > Delete Account. Please note this action is irreversible and all your projects will be permanently removed. Consider exporting your code first.'
  },
  {
    keywords: ['password', 'reset password', 'forgot password', 'login issue'],
    answer: 'To reset your password, click "Forgot Password" on the login page and enter your email. You\'ll receive a reset link within a few minutes. Check your spam folder if you don\'t see it.'
  },
  {
    keywords: ['bug', 'error', 'not working', 'broken', 'issue', 'problem'],
    answer: 'I\'m sorry to hear you\'re experiencing issues. Could you describe what\'s happening in more detail? Common fixes include: clearing your browser cache, trying a different browser, or refreshing the page. If the issue persists, I can connect you with a live agent.'
  },
  {
    keywords: ['refund', 'money back', 'charge', 'billing issue'],
    answer: 'For billing inquiries or refund requests, please contact our billing team at contact@appnode.ai. We offer a 14-day money-back guarantee on all paid plans.'
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
    answer: 'Hello! 👋 Welcome to AppNode Support. How can I help you today? Feel free to ask me anything about our platform!'
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    answer: 'You\'re welcome! Is there anything else I can help you with? 😊'
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'that\'s all'],
    answer: 'Thank you for chatting with us! If you have any more questions in the future, don\'t hesitate to reach out. Have a great day! 👋'
  }
];

export default function SupportPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: 'Hi! 👋 I\'m AppNode\'s support assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [waitingForLiveAgent, setWaitingForLiveAgent] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userProblem, setUserProblem] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  const findAnswer = (message: string): string | null => {
    const lowerMessage = message.toLowerCase();
    
    for (const item of knowledgeBase) {
      for (const keyword of item.keywords) {
        if (lowerMessage.includes(keyword.toLowerCase())) {
          return item.answer;
        }
      }
    }
    return null;
  };

  const sendToSupport = async (email: string, name: string) => {
    // Create conversation transcript
    const transcript = chatMessages
      .map(msg => `[${msg.timestamp.toLocaleTimeString()}] ${msg.sender.toUpperCase()}: ${msg.text}`)
      .join('\n\n');
    
    // In production, this would send to your backend API
    // For now, we'll use mailto as a fallback and show success
    const subject = encodeURIComponent(`Support Request from ${name}`);
    const body = encodeURIComponent(`
Name: ${name}
Email: ${email}
Date: ${new Date().toLocaleString()}

--- Problem Description ---

${userProblem || 'No additional description provided'}

--- Conversation Transcript ---

${transcript}

--- End of Transcript ---
    `);
    
    // Open mailto link (in production, use a proper email API)
    window.open(`mailto:contact@appnode.ai?subject=${subject}&body=${body}`, '_blank');
    
    setEmailSent(true);
    setShowEmailForm(false);
    
    const confirmMessage: ChatMessage = {
      id: chatMessages.length + 1,
      text: `✅ Your conversation has been sent to our support team at contact@appnode.ai. We'll get back to you at ${email} as soon as possible!\n\nTypical response time: Within 24 hours (often much faster during business hours).`,
      sender: 'system',
      timestamp: new Date()
    };
    setChatMessages(prev => [...prev, confirmMessage]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: chatMessages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Check if user wants to talk to a live agent
    const wantsLiveAgent = inputMessage.toLowerCase().includes('live agent') || 
                          inputMessage.toLowerCase().includes('human') ||
                          inputMessage.toLowerCase().includes('real person') ||
                          inputMessage.toLowerCase().includes('speak to someone');

    setTimeout(() => {
      setIsTyping(false);
      
      if (wantsLiveAgent || waitingForLiveAgent) {
        const liveAgentMessage: ChatMessage = {
          id: chatMessages.length + 2,
          text: 'I\'d be happy to connect you with our support team! 🙋‍♂️\n\nPlease provide your contact details below so we can send your conversation to a live agent who will respond via email.',
          sender: 'bot',
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, liveAgentMessage]);
        setWaitingForLiveAgent(true);
        setShowEmailForm(true);
        return;
      }

      const answer = findAnswer(inputMessage);
      
      if (answer) {
        const botMessage: ChatMessage = {
          id: chatMessages.length + 2,
          text: answer,
          sender: 'bot',
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, botMessage]);
      } else {
        // No match found - offer to connect with live agent
        const fallbackMessage: ChatMessage = {
          id: chatMessages.length + 2,
          text: 'I\'m not sure I have the right answer for that specific question. Would you like me to connect you with a live support agent who can help you better? Just say "live agent" or I can try to help with something else!',
          sender: 'bot',
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, fallbackMessage]);
      }
    }, 1000 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { label: 'Getting Started', message: 'How do I get started with AppNode?' },
    { label: 'Pricing', message: 'What are the pricing options?' },
    { label: 'Export Code', message: 'Can I export my code?' },
    { label: 'Live Agent', message: 'I\'d like to speak to a live agent' }
  ];

  const categories = [
    {
      name: 'Getting Started',
      articles: 12,
      description: 'New to AppNode? Start here',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: 'Account & Billing',
      articles: 8,
      description: 'Manage your subscription and payments',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      name: 'Building Apps',
      articles: 24,
      description: 'Learn how to create amazing apps',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      name: 'Customization',
      articles: 15,
      description: 'Style and personalize your projects',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      name: 'Integrations',
      articles: 10,
      description: 'Connect with third-party services',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Troubleshooting',
      articles: 18,
      description: 'Fix common issues and errors',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const popularArticles = [
    { title: 'How to create your first app', views: '15.2K' },
    { title: 'Understanding prompt engineering', views: '12.8K' },
    { title: 'Connecting a custom domain', views: '9.5K' },
    { title: 'Exporting your project code', views: '8.7K' },
    { title: 'Team collaboration features', views: '7.3K' },
    { title: 'API authentication setup', views: '6.9K' },
  ];

  const faqs = [
    {
      question: 'What is AppNode?',
      answer: 'AppNode is an AI-powered platform that lets you build web applications by simply describing what you want in natural language.',
    },
    {
      question: 'Do I need coding experience?',
      answer: 'No! AppNode is designed for everyone. You can create professional apps without writing any code.',
    },
    {
      question: 'Can I export my code?',
      answer: 'Yes, you can export your complete project code at any time. You own everything you create.',
    },
    {
      question: 'What technologies does AppNode use?',
      answer: 'AppNode generates modern React/Next.js applications with Tailwind CSS styling.',
    },
    {
      question: 'Is there a free plan?',
      answer: 'Yes! We offer a generous free tier that lets you build and deploy apps at no cost.',
    },
  ];

  // Search results computed from all page content
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q.length < 2) return null;

    const matchedCategories = categories.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );

    const matchedArticles = popularArticles.filter((a) =>
      a.title.toLowerCase().includes(q)
    );

    const matchedFAQs = faqs.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q)
    );

    const matchedKB = knowledgeBase.filter(
      (kb) =>
        kb.keywords.some((k) => k.toLowerCase().includes(q)) ||
        kb.answer.toLowerCase().includes(q)
    );

    const total =
      matchedCategories.length +
      matchedArticles.length +
      matchedFAQs.length +
      matchedKB.length;

    return { matchedCategories, matchedArticles, matchedFAQs, matchedKB, total };
  }, [searchQuery, categories, popularArticles, faqs]);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black">
      <Header />
      
      {/* Hero Section with Search */}
      <section className="pt-32 pb-20 px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('supportPage.heroTitle')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {t('supportPage.heroSubtitle')}
          </p>
          <div className="relative z-50" ref={searchRef}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('supportPage.searchPlaceholder')}
              className="w-full px-6 py-4 rounded-2xl text-gray-900 dark:text-white text-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-800 focus:border-gray-300 dark:focus:border-gray-700 shadow-lg"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white rounded-xl hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Search Results Dropdown */}
            {searchResults && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl z-50 max-h-[420px] overflow-y-auto text-left">
                {searchResults.total === 0 ? (
                  <div className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                    <svg className="w-10 h-10 mx-auto mb-3 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    No results found for &ldquo;{searchQuery.trim()}&rdquo;
                  </div>
                ) : (
                  <>
                    {/* Matched Categories */}
                    {searchResults.matchedCategories.length > 0 && (
                      <div className="px-4 pt-4 pb-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-2 mb-2">Categories</p>
                        {searchResults.matchedCategories.map((cat, i) => (
                          <div key={i} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors" onClick={() => { setSearchQuery(''); document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
                            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 shrink-0">
                              {cat.icon}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white text-sm">{cat.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{cat.description} &middot; {cat.articles} articles</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Matched Articles */}
                    {searchResults.matchedArticles.length > 0 && (
                      <div className="px-4 pt-3 pb-2 border-t border-gray-100 dark:border-gray-800 first:border-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-2 mb-2">Articles</p>
                        {searchResults.matchedArticles.map((art, i) => (
                          <div key={i} className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors" onClick={() => { setSearchQuery(''); document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
                            <div className="flex items-center gap-3">
                              <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">{art.title}</span>
                            </div>
                            <span className="text-xs text-gray-400 dark:text-gray-500">{art.views} views</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Matched FAQs */}
                    {searchResults.matchedFAQs.length > 0 && (
                      <div className="px-4 pt-3 pb-2 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-2 mb-2">FAQ</p>
                        {searchResults.matchedFAQs.map((faq, i) => {
                          const faqIndex = faqs.findIndex(f => f.question === faq.question);
                          return (
                            <div key={i} className="px-3 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors" onClick={() => { setSearchQuery(''); const el = document.getElementById(`faq-${faqIndex}`); if (el) { (el as HTMLDetailsElement).open = true; el.scrollIntoView({ behavior: 'smooth', block: 'center' }); } }}>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{faq.question}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{faq.answer}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Matched Knowledge Base */}
                    {searchResults.matchedKB.length > 0 && (
                      <div className="px-4 pt-3 pb-3 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-2 mb-2">Help Topics</p>
                        {searchResults.matchedKB.slice(0, 3).map((kb, i) => (
                          <div key={i} className="px-3 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors" onClick={() => { setSearchQuery(''); setIsChatOpen(true); }}>
                            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">{kb.answer}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{t('supportPage.browseByCategory')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-400 mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{category.description}</p>
                <span className="text-xs text-gray-400 dark:text-gray-500">{category.articles} articles</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles & Contact */}
      <section id="articles" className="py-16 px-6 bg-gray-50 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Popular Articles */}
            <div className="bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{t('supportPage.popularArticles')}</h2>
              <div className="space-y-1">
                {popularArticles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800 last:border-0 cursor-pointer group"
                  >
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors font-medium">
                      {article.title}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {article.views}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-white dark:bg-black rounded-2xl p-8 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold mb-4">{t('supportPage.needMoreHelp')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {t('supportPage.needMoreHelpDescription')}
              </p>
              <div className="space-y-4">
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="w-full px-4 py-4 hover:opacity-90 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 text-white bg-gray-900 hover:bg-gray-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t('supportPage.chatWithSupport')}
                </button>
                <a 
                  href="mailto:contact@appnode.ai"
                  className="w-full px-4 py-4 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-900 dark:text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t('supportPage.emailSupport')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('supportPage.faq')}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                id={`faq-${index}`}
                className="group bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all"
              >
                <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-100 dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('supportPage.stillHaveQuestions')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-100 mb-12 max-w-2xl mx-auto">
            {t('supportPage.stillHaveQuestionsDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              {t('supportPage.viewGallery')}
            </Link>
            <Link
              href="/guides"
              className="px-8 py-4 border-2 border-gray-300 dark:border-white/30 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
            >
              {t('supportPage.browseGuides')}
            </Link>
          </div>
        </div>
      </section>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsChatOpen(false)}
          />
          
          {/* Chat Window */}
          <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col max-h-[600px] sm:max-h-[500px] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-900 dark:bg-black text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">AppNode Support</h3>
                  <p className="text-xs text-gray-300">
                    {waitingForLiveAgent ? '🟢 Live Agent Connected' : '🟢 Online'}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black">
              {chatMessages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === 'user' 
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' 
                        : message.sender === 'system'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
                        : 'bg-white dark:bg-black text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' 
                        ? 'text-gray-300 dark:text-gray-600' 
                        : 'text-gray-400 dark:text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-black rounded-2xl px-4 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {chatMessages.length <= 2 && (
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputMessage(action.message);
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                      className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Email Form for Live Agent */}
            {showEmailForm && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">Contact Details</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 bg-gray-100 dark:bg-black rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                  />
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-2.5 bg-gray-100 dark:bg-black rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                  />
                  <textarea
                    value={userProblem}
                    onChange={(e) => setUserProblem(e.target.value)}
                    placeholder="Describe your problem or question..."
                    rows={3}
                    className="w-full px-4 py-2.5 bg-gray-100 dark:bg-black rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 resize-none"
                  />
                  <button
                    onClick={() => sendToSupport(userEmail, userName)}
                    disabled={!userEmail.trim() || !userName.trim()}
                    className="w-full px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send to Support Team
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    Your conversation will be sent to contact@appnode.ai
                  </p>
                </div>
              </div>
            )}

            {/* Input */}
            {!showEmailForm && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 bg-gray-100 dark:bg-black rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 border border-transparent dark:border-gray-700"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center z-40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      <Footer />
    </div>
  );
}
