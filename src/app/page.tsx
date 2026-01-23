import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LovecodeSection from "@/components/LovecodeSection";
import StepDemo from "@/components/StepDemo";
import BuildAnythingSection from "@/components/BuildAnythingSection";
import Footer from "@/components/Footer";

export default function Home() {
  const stepVideos = [
    {
      step: 1,
      title: 'Describe Your Idea',
      subtitle: 'Natural Language Input',
      description: 'Simply tell us what you want to build in plain English. No coding experience required.',
      details: [
        'Write in any language you prefer',
        'Describe features, not code',
        'AI understands context and intent',
        'Supports complex multi-page apps',
      ],
    },
    {
      step: 2,
      title: 'AI Generates Code',
      subtitle: 'Real-time Code Generation',
      description: 'Watch as our AI transforms your idea into production-ready code in real-time.',
      details: [
        'Clean, maintainable React & TypeScript',
        'Follows modern best practices',
        'Responsive design out of the box',
        'Optimized for performance',
      ],
    },
    {
      step: 3,
      title: 'Customize & Iterate',
      subtitle: 'Visual Editing Tools',
      description: 'Refine your creation with real-time previews and instant edits.',
      details: [
        'Drag-and-drop component editing',
        'Live preview as you make changes',
        'Theme and color customization',
        'Add or remove features instantly',
      ],
    },
    {
      step: 4,
      title: 'Deploy & Share',
      subtitle: 'One-Click Deployment',
      description: 'Launch your app to the world with just one click. No DevOps needed.',
      details: [
        'Automatic SSL certificates',
        'Global CDN distribution',
        'Custom domain support',
        'Analytics and monitoring included',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <main className="pt-20">
        <HeroSection />
      </main>

      {/* LOVECODE Animation Section */}
      <LovecodeSection />

      {/* How it works Section */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-fuchsia-50 border border-pink-200 mb-6">
              <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-pink-700">How It Works</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              From idea to production
              <br />
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)', WebkitBackgroundClip: 'text' }}>in minutes</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              See how Lovecode transforms your ideas into fully functional applications with our AI-powered workflow.
            </p>
            
            <a 
              href="/videos" 
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Video Tutorials
            </a>
          </div>

          {/* Steps */}
          <div className="space-y-32">
            {stepVideos.map((video, index) => (
              <div 
                key={video.step}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                {/* Video/Demo Side */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#ec4899]/20 to-[#be185d]/20 rounded-[2.5rem] blur-2xl opacity-50"></div>
                    
                    {/* Video container */}
                    <div className="relative bg-[#0a0a0f] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                      {/* Browser chrome */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-white/5">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#28ca41]"></div>
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="bg-[#0a0a0f] rounded-lg px-4 py-1.5 text-gray-500 text-sm flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            lovecode.dev
                          </div>
                        </div>
                      </div>
                      
                      {/* Demo content */}
                      <div className="aspect-[4/3] relative">
                        <StepDemo step={video.step} />
                      </div>
                    </div>
                    
                    {/* Step badge */}
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-[#ec4899] to-[#be185d] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-500/30 border-2 border-white/20">
                      {video.step}
                    </div>
                  </div>
                </div>
                
                {/* Text Side */}
                <div className="flex-1 w-full lg:max-w-md">
                  <div className="space-y-6">
                    {/* Subtitle badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                      <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
                      <span className="text-sm font-medium text-pink-400">{video.subtitle}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {video.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {video.description}
                    </p>
                    
                    {/* Feature list */}
                    <ul className="space-y-4 pt-4">
                      {video.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#ec4899] to-[#be185d] flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
