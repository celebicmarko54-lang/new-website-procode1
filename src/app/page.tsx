import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

// Lazy load below-fold components for faster initial page load
const LovecodeSection = dynamic(() => import("@/components/LovecodeSection"), {
  loading: () => <div className="h-96 bg-[#f8fafc] dark:bg-black" />,
  ssr: true,
});
const BuildAnythingSection = dynamic(() => import("@/components/BuildAnythingSection"), {
  loading: () => <div className="h-96 bg-[#f8fafc] dark:bg-black" />,
  ssr: true,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black transition-colors">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <main className="pt-16">
        <HeroSection />
      </main>

      {/* Cards Animation Section */}
      <LovecodeSection />

      {/* How it works Section */}
      <section className="py-24 bg-[#f8fafc] dark:bg-black transition-colors">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 mb-6">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">How It Works</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              See AppNode in Action
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Watch how developers build production-ready apps in minutes using natural language.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gray-200/50 dark:bg-black/50 rounded-[2.5rem] blur-2xl opacity-50"></div>
            
            {/* Video container */}
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl">
              <div className="aspect-video w-full">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Anything Section */}
      <BuildAnythingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
