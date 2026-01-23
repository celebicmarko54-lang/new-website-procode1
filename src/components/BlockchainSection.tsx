'use client';

import { useEffect, useRef } from 'react';

const blockchains = [
  { name: 'Ethereum', symbol: 'ETH', color: '#627EEA' },
  { name: 'Solana', symbol: 'SOL', color: '#14F195' },
  { name: 'Polygon', symbol: 'MATIC', color: '#8247E5' },
  { name: 'Arbitrum', symbol: 'ARB', color: '#28A0F0' },
  { name: 'Optimism', symbol: 'OP', color: '#FF0420' },
  { name: 'Base', symbol: 'BASE', color: '#0052FF' },
  { name: 'Avalanche', symbol: 'AVAX', color: '#E84142' },
  { name: 'BNB Chain', symbol: 'BNB', color: '#F0B90B' },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Deploy across any chain in seconds, not hours',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'No Code Required',
    description: 'Build complex dApps with natural language',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Battle Tested',
    description: 'Smart contracts audited and production-ready',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Multi-Chain Native',
    description: 'One codebase, every blockchain supported',
  },
];

const useCases = [
  'Landing Pages',
  'Token Presales',
  'NFT Drops',
  'DeFi Dashboards',
  'Web3 Apps',
  'DAO Tools',
  'Staking Platforms',
  'Meme Tokens',
];

export default function BlockchainSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(233, 30, 140, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(233, 30, 140, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#E91E8C]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#9B59B6]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#E91E8C] animate-pulse" />
            <span className="text-sm font-medium text-pink-600">Multi-Chain Ecosystem</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            BUILD ANYTHING ON{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)', 
                WebkitBackgroundClip: 'text' 
              }}
            >
              ANY BLOCKCHAIN
            </span>
            <br />
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)', 
                WebkitBackgroundClip: 'text' 
              }}
            >
              FASTER THAN EVER BEFORE
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Love Code unlocks the entire on-chain ecosystem with zero friction. From L1 giants to the newest L2s, 
            you get the power to create anything: landing pages, meme token presales, NFT drops, dashboards, 
            full Web3 apps, whatever you imagine. <span className="text-gray-900 font-medium">No limits. No complexity. Just pure creation.</span>
          </p>
        </div>

        {/* Blockchain logos marquee */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-hidden py-4"
          >
            {[...blockchains, ...blockchains].map((chain, index) => (
              <div 
                key={`${chain.symbol}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-pink-300 transition-all hover:bg-pink-50/50 group cursor-pointer shadow-sm"
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                  style={{ backgroundColor: `${chain.color}20`, color: chain.color }}
                >
                  {chain.symbol.slice(0, 2)}
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">{chain.name}</div>
                  <div className="text-gray-500 text-sm">{chain.symbol}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use cases pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {useCases.map((useCase) => (
            <div 
              key={useCase}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 text-gray-800 font-medium hover:from-pink-100 hover:to-purple-100 transition-all cursor-pointer"
            >
              {useCase}
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-pink-300 transition-all hover:shadow-lg hover:shadow-pink-100 shadow-sm"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-pink-500 bg-pink-50 group-hover:scale-110 transition-transform"
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="text-center">
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            If it exists on a blockchain, you can build it here — <br className="hidden md:block" />
            <span 
              className="font-bold bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)', 
                WebkitBackgroundClip: 'text' 
              }}
            >
              easier, faster, and on a completely new level.
            </span>
          </p>

          <a 
            href="/signup"
            className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 text-lg"
            style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
          >
            Start Building on Web3
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
