'use client';

import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RoutePreloader from "@/components/RoutePreloader";
import VideoSection from "@/components/VideoSection";

// Lazy load below-fold components for faster initial page load
const LovecodeSection = dynamic(() => import("@/components/LovecodeSection"), {
  loading: () => <div className="h-96 bg-[#f8fafc] dark:bg-[#1A1A1A]" />,
  ssr: false, // Client-only to avoid hydration issues with language
});
const BuildAnythingSection = dynamic(() => import("@/components/BuildAnythingSection"), {
  loading: () => <div className="h-96 bg-[#f8fafc] dark:bg-[#1A1A1A]" />,
  ssr: false, // Client-only to avoid hydration issues with language
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] transition-colors">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <main className="pt-16">
        <HeroSection />
      </main>

      {/* Cards Animation Section */}
      <LovecodeSection />

      {/* How it works Section */}
      <VideoSection />

      {/* Build Anything Section */}
      <BuildAnythingSection />

      {/* Footer */}
      <Footer />
      
      {/* Prefetch routes for instant navigation */}
      <RoutePreloader />
    </div>
  );
}
