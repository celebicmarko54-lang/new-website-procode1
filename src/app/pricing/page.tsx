'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingContent from '@/components/PricingContent';

export default function PricingPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] transition-colors">
      <Header />
      {mounted ? (
        <PricingContent />
      ) : (
        <div className="flex justify-center items-center py-32">
          <div className="animate-pulse text-gray-500">Loading...</div>
        </div>
      )}
      <Footer />
    </div>
  );
}
