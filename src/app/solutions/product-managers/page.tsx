'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: 'Build Specs That Work',
    description: 'Turn PRDs into working prototypes. Validate requirements before a single line of code is written.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Align Stakeholders Faster',
    description: 'Show, don\'t tell. Interactive demos communicate your vision better than any document.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'User Testing Made Easy',
    description: 'Create clickable prototypes in minutes. Get real user feedback before development starts.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Data-Driven Decisions',
    description: 'Prototype multiple solutions and A/B test ideas. Let data guide your product roadmap.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Ship Features Faster',
    description: 'Reduce the gap between ideation and delivery. From concept to shipped feature in days.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Bridge Design & Dev',
    description: 'Speak both languages fluently. Create assets that designers and developers can use.',
  },
];

const testimonials = [
  {
    quote: "I used to spend weeks writing specs. Now I build the prototype and the spec writes itself.",
    author: "Rachel Kim",
    role: "Senior PM",
    company: "Dropbox",
    avatar: "RK",
  },
  {
    quote: "Stakeholder alignment went from 5 meetings to 1 demo. Game changer for our product velocity.",
    author: "David Okonkwo",
    role: "Product Lead",
    company: "Notion",
    avatar: "DO",
  },
  {
    quote: "Our engineers love it. I come to sprint planning with working prototypes instead of Figma links.",
    author: "Sophie Laurent",
    role: "Head of Product",
    company: "Linear",
    avatar: "SL",
  },
];

const workflow = [
  {
    step: '01',
    title: 'Define the Problem',
    description: 'Describe the user problem you\'re solving. Our AI understands context and edge cases.',
  },
  {
    step: '02',
    title: 'Explore Solutions',
    description: 'Generate multiple approaches quickly. Compare and combine the best ideas.',
  },
  {
    step: '03',
    title: 'Validate with Users',
    description: 'Share interactive prototypes with real users. Collect feedback in hours, not weeks.',
  },
  {
    step: '04',
    title: 'Hand Off to Engineering',
    description: 'Export clean, documented code. Give developers a head start on implementation.',
  },
];

const useCases = [
  {
    title: 'Feature Discovery',
    description: 'Rapidly prototype new feature ideas and validate them with users before committing engineering resources.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Sprint Planning',
    description: 'Come to planning with interactive demos. Eliminate ambiguity and reduce ticket back-and-forth.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Stakeholder Buy-in',
    description: 'Show executives and stakeholders exactly what you\'re building. Get approval faster.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Competitive Analysis',
    description: 'Quickly build clones of competitor features. Analyze what works and improve upon it.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function ProductManagersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-fuchsia-50 border border-pink-200 mb-8">
            <span className="text-sm font-medium text-pink-700">For Product Managers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            From PRD to
            <span className="block bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)', WebkitBackgroundClip: 'text' }}>
              Prototype in Minutes
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Stop describing features. Start building them. lovecode.dev helps product managers 
            validate ideas, align stakeholders, and ship faster than ever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
            >
              Start Building Free
            </Link>
            <Link
              href="/templates"
              className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-pink-300 hover:text-pink-600 transition-all duration-300"
            >
              View PM Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-fuchsia-50 border-y border-pink-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">10x</div>
              <div className="text-gray-600 mt-1">Faster validation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">75%</div>
              <div className="text-gray-600 mt-1">Less spec writing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">5,000+</div>
              <div className="text-gray-600 mt-1">PMs using lovecode</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">2 days</div>
              <div className="text-gray-600 mt-1">Avg time to prototype</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Product Thinking
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every feature is designed to help you move from idea to validated solution faster.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-fuchsia-100 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your New PM Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From problem to solution in four simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-pink-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-200 to-transparent -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Use Cases for Every Sprint
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how top PMs use lovecode.dev in their daily workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300 bg-white flex gap-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-fuchsia-100 rounded-2xl flex items-center justify-center text-pink-600 flex-shrink-0">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-pink-50 to-fuchsia-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Product Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what product managers at top companies are saying.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white shadow-lg border border-pink-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ec4899] to-[#be185d] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fits Into Your Stack
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                lovecode.dev integrates with the tools you already use. Export to Figma, 
                sync with Jira, share in Slack, and more.
              </p>
              <ul className="space-y-4">
                {['Export designs to Figma', 'Create Jira tickets from prototypes', 'Share demos via Slack or Notion', 'Sync with Linear and Asana', 'Generate documentation automatically'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#ec4899] to-[#be185d] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-fuchsia-100 rounded-3xl flex items-center justify-center p-8">
                <div className="grid grid-cols-3 gap-4">
                  {/* Figma */}
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none">
                      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                    </svg>
                  </div>
                  {/* Jira */}
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M11.571 11.513H0a5.218 5.218 0 005.232 5.215h2.13v2.057A5.215 5.215 0 0012.575 24V12.518a1.005 1.005 0 00-1.005-1.005z" fill="#2684FF"/>
                      <path d="M17.11 5.953H5.538a5.218 5.218 0 005.233 5.214h2.129v2.058a5.218 5.218 0 005.214 5.214V6.958a1.005 1.005 0 00-1.005-1.005z" fill="url(#jira1)"/>
                      <path d="M22.647.393H11.076a5.215 5.215 0 005.215 5.215h2.129v2.057A5.215 5.215 0 0023.633 12.88V1.398a1.005 1.005 0 00-1.005-1.005h.019z" fill="url(#jira2)"/>
                      <defs>
                        <linearGradient id="jira1" x1="12.295" y1="5.967" x2="7.951" y2="10.675" gradientUnits="userSpaceOnUse">
                          <stop offset="0.18" stopColor="#0052CC"/>
                          <stop offset="1" stopColor="#2684FF"/>
                        </linearGradient>
                        <linearGradient id="jira2" x1="18.063" y1="0.384" x2="13.389" y2="5.329" gradientUnits="userSpaceOnUse">
                          <stop offset="0.18" stopColor="#0052CC"/>
                          <stop offset="1" stopColor="#2684FF"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* Slack */}
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z" fill="#E01E5A"/>
                      <path d="M8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312z" fill="#36C5F0"/>
                      <path d="M18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 01-2.522 2.521 2.528 2.528 0 01-2.521-2.521V2.522A2.528 2.528 0 0115.164 0a2.528 2.528 0 012.521 2.522v6.312z" fill="#2EB67D"/>
                      <path d="M15.164 18.956a2.528 2.528 0 012.521 2.522A2.528 2.528 0 0115.164 24a2.527 2.527 0 01-2.521-2.522v-2.522h2.521zm0-1.27a2.527 2.527 0 01-2.521-2.522 2.527 2.527 0 012.521-2.521h6.314A2.528 2.528 0 0124 15.164a2.528 2.528 0 01-2.522 2.521h-6.314z" fill="#ECB22E"/>
                    </svg>
                  </div>
                  {/* Notion */}
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.313v13.927c0 .747.373 1.027 1.213.98l14.523-.84c.841-.046.934-.56.934-1.167V6.354c0-.606-.233-.933-.747-.886l-15.177.886c-.56.047-.746.327-.746.887zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.934-.234-1.495-.933l-4.577-7.186v6.952l1.449.327s0 .84-1.168.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.513.28-.886.747-.933l3.222-.186zM2.197.608l13.59-.887c1.681-.14 2.101-.047 3.149.7l4.344 3.033c.7.513.934.653.934 1.213v16.379c0 1.027-.373 1.634-1.68 1.727l-15.458.933c-.98.047-1.448-.093-1.961-.746l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.475c0-.84.373-1.54 1.494-1.634l-.49-.233z" fill="#000"/>
                    </svg>
                  </div>
                  {/* Linear */}
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M2.513 10.54a9.502 9.502 0 0110.946-10.95 9.541 9.541 0 00-10.95 10.95h.004z" fill="#5E6AD2"/>
                      <path d="M1.007 12.063c.095 1.254.378 2.456.831 3.58l6.694-6.695a.676.676 0 01.957 0l5.563 5.563a.676.676 0 010 .957l-6.695 6.694a9.434 9.434 0 003.58.832L23.999 11a9.5 9.5 0 00-11-11l-12 12.063z" fill="#5E6AD2"/>
                      <path d="M3.29 17.104a9.53 9.53 0 003.606 3.606l5.16-5.16-3.607-3.606-5.16 5.16z" fill="#5E6AD2"/>
                    </svg>
                  </div>
                  {/* Asana */}
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M18.79 12.772c-2.878 0-5.21 2.332-5.21 5.21A5.21 5.21 0 0018.79 23.19c2.877 0 5.21-2.331 5.21-5.209 0-2.878-2.333-5.21-5.21-5.21zm-13.58 0A5.21 5.21 0 000 17.981 5.21 5.21 0 005.21 23.19a5.21 5.21 0 005.21-5.209 5.21 5.21 0 00-5.21-5.21zm11.995-7.562a5.21 5.21 0 00-5.21-5.21 5.21 5.21 0 00-5.21 5.21 5.21 5.21 0 005.21 5.21 5.21 5.21 0 005.21-5.21z" fill="#F06A6A"/>
                    </svg>
                  </div>
                  {/* GitHub */}
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="#181717"/>
                    </svg>
                  </div>
                  {/* Miro */}
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M17.392 0H13.9L17 4.808 10.444 0H6.949l3.102 6.3L3.494 0H0l3.05 8.131L0 24h3.494L10.051 6.3 6.949 24h3.495L17 4.808 13.9 24h3.494L24 0h-6.608z" fill="#FFD02F"/>
                    </svg>
                  </div>
                  {/* Loom */}
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M24 10.836h-5.108l4.422-2.552-1.163-2.015-4.422 2.552 2.552-4.422-2.015-1.163-2.552 4.422V2.55h-2.327v5.108L10.836 3.236 8.82 4.399l2.552 4.422-4.422-2.552-1.163 2.015 4.422 2.552H5.1v2.327h5.108l-4.422 2.552 1.163 2.015 4.422-2.552-2.552 4.422 2.015 1.163 2.552-4.422v5.109h2.327v-5.109l2.552 4.422 2.015-1.163-2.552-4.422 4.422 2.552 1.163-2.015-4.422-2.552H24v-2.327zM12 14.163a2.163 2.163 0 110-4.326 2.163 2.163 0 010 4.326z" fill="#625DF5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#ec4899] to-[#be185d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ship Your Best Product Yet
          </h2>
          <p className="text-xl text-pink-100 mb-12 max-w-2xl mx-auto">
            Join thousands of product managers who've transformed their workflow. 
            Start building today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl hover:bg-pink-50 transition-all duration-300 shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/enterprise"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
