'use client';

// Website mockup components that generate realistic website UI previews
// Matching the style seen on AppNode community projects

interface MockupProps {
  type: 'dashboard' | 'ecommerce' | 'portfolio' | 'blog' | 'tasks' | 'social' | 'landing' | 'saas' | 'crm' | 'learning' | 'fitness' | 'realestate' | 'default';
  className?: string;
}

export function WebsiteMockup({ type, className = '' }: MockupProps) {
  const mockups: Record<string, React.ReactNode> = {
    dashboard: <DashboardMockup />,
    ecommerce: <EcommerceMockup />,
    portfolio: <PortfolioMockup />,
    blog: <BlogMockup />,
    tasks: <TasksMockup />,
    social: <SocialMockup />,
    landing: <LandingMockup />,
    saas: <SaasMockup />,
    crm: <CRMMockup />,
    learning: <LearningMockup />,
    fitness: <FitnessMockup />,
    realestate: <RealEstateMockup />,
    default: <DefaultMockup />,
  };

  return (
    <div className={`w-full h-full overflow-hidden ${className}`}>
      {mockups[type] || mockups.default}
    </div>
  );
}

// Trading/Finance Dashboard - Dark theme with charts (like trade-tune-journal)
function DashboardMockup() {
  return (
    <div className="w-full h-full bg-[#0a1628] p-2.5 flex flex-col text-white">
      {/* Header with logo and nav */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          <div className="w-14 h-2 bg-slate-600 rounded"></div>
        </div>
        <div className="flex gap-1.5">
          <div className="w-6 h-1.5 bg-slate-700 rounded"></div>
          <div className="w-6 h-1.5 bg-slate-700 rounded"></div>
          <div className="w-5 h-5 rounded-full bg-cyan-500/30"></div>
        </div>
      </div>
      
      {/* Hero text area */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg p-2 mb-2 border border-cyan-500/30">
        <div className="w-24 h-2.5 bg-white rounded mb-1"></div>
        <div className="w-32 h-2 bg-cyan-400 rounded mb-1.5"></div>
        <div className="w-20 h-1.5 bg-slate-400 rounded"></div>
      </div>
      
      {/* Stats cards row */}
      <div className="flex gap-1.5 mb-2">
        {[
          { color: 'from-green-500 to-emerald-600', label: '+24.5%' },
          { color: 'from-blue-500 to-cyan-500', label: '$12.4K' },
          { color: 'from-gray-700 to-gray-800', label: '89%' },
        ].map((stat, i) => (
          <div key={i} className="flex-1 bg-slate-800/80 rounded-md p-1.5 border border-slate-700">
            <div className="w-10 h-1 bg-slate-600 rounded mb-1"></div>
            <div className={`w-8 h-2 bg-gradient-to-r ${stat.color} rounded`}></div>
          </div>
        ))}
      </div>
      
      {/* Chart area */}
      <div className="flex-1 bg-slate-800/50 rounded-lg p-2 border border-slate-700 flex items-end gap-0.5">
        {[35, 55, 40, 70, 45, 80, 55, 65, 50, 85, 60, 75, 45, 90, 70].map((h, i) => (
          <div 
            key={i} 
            className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t"
            style={{ height: `${h}%`, opacity: 0.7 + (i * 0.02) }}
          ></div>
        ))}
      </div>
    </div>
  );
}

// E-commerce / Gateway store (like mnagateway)
function EcommerceMockup() {
  return (
    <div className="w-full h-full bg-[#0f0f0f] p-2.5 flex flex-col text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
          <div className="w-12 h-2 bg-white rounded"></div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-5 h-1.5 bg-gray-600 rounded"></div>
          <div className="w-5 h-1.5 bg-gray-600 rounded"></div>
          <div className="px-2 py-1 bg-green-500 rounded text-[6px] font-bold">Sign Up</div>
        </div>
      </div>
      
      {/* Hero section */}
      <div className="text-center mb-2">
        <div className="w-20 h-1.5 bg-gray-500 rounded mx-auto mb-1"></div>
        <div className="w-28 h-3 bg-gradient-to-r from-green-400 to-emerald-300 rounded mx-auto mb-1"></div>
        <div className="w-24 h-3 bg-white rounded mx-auto mb-2"></div>
        <div className="w-16 h-1.5 bg-gray-500 rounded mx-auto"></div>
      </div>
      
      {/* Feature cards */}
      <div className="flex-1 grid grid-cols-2 gap-1.5">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-2 border border-gray-700">
          <div className="w-6 h-6 rounded-lg bg-green-500/20 mb-1 flex items-center justify-center">
            <div className="w-3 h-3 bg-green-400 rounded"></div>
          </div>
          <div className="w-full h-1.5 bg-white rounded mb-1"></div>
          <div className="w-3/4 h-1 bg-gray-500 rounded"></div>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-2 border border-gray-700">
          <div className="w-6 h-6 rounded-lg bg-blue-500/20 mb-1 flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-400 rounded"></div>
          </div>
          <div className="w-full h-1.5 bg-white rounded mb-1"></div>
          <div className="w-3/4 h-1 bg-gray-500 rounded"></div>
        </div>
      </div>
    </div>
  );
}

// SaaS Content/Video agency (like contentfarm-video-agency)
function PortfolioMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#fdf4e3] to-[#fef3c7] p-2.5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="w-10 h-2.5 bg-gray-800 rounded"></div>
        <div className="flex gap-2">
          <div className="w-5 h-1.5 bg-gray-600 rounded"></div>
          <div className="w-5 h-1.5 bg-gray-600 rounded"></div>
          <div className="px-2 py-0.5 bg-orange-500 rounded text-[5px] text-white font-bold">Start</div>
        </div>
      </div>
      
      {/* Main heading */}
      <div className="mb-2">
        <div className="w-28 h-2 bg-gray-800 rounded mb-1"></div>
        <div className="w-24 h-2 bg-gray-800 rounded mb-1"></div>
        <div className="w-20 h-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded"></div>
      </div>
      
      {/* Feature boxes */}
      <div className="flex-1 flex gap-1.5">
        <div className="flex-1 bg-white rounded-lg p-1.5 shadow-sm border border-orange-200">
          <div className="w-full h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-1"></div>
          <div className="w-full h-1 bg-gray-300 rounded mb-0.5"></div>
          <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-1.5 shadow-sm border border-orange-200">
          <div className="w-full h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-1"></div>
          <div className="w-full h-1 bg-gray-300 rounded mb-0.5"></div>
          <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

// AI Tools directory (like ai-spark-toolkit-guide)
function BlogMockup() {
  return (
    <div className="w-full h-full bg-[#0d1117] p-2.5 flex flex-col text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-gradient-to-r from-gray-700 to-gray-800"></div>
          <div className="w-10 h-2 bg-white rounded"></div>
        </div>
        <div className="flex gap-1">
          <div className="w-12 h-4 bg-gray-800 rounded-full"></div>
        </div>
      </div>
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-2 mb-2 border border-gray-500/30">
        <div className="w-20 h-1 bg-gray-400 rounded mb-1"></div>
        <div className="w-28 h-2.5 bg-white rounded mb-1"></div>
        <div className="w-24 h-1.5 bg-gray-400 rounded"></div>
      </div>
      
      {/* Tool cards grid */}
      <div className="flex-1 grid grid-cols-3 gap-1">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-800/80 rounded p-1 border border-gray-700">
            <div className={`w-4 h-4 rounded mb-1 bg-gradient-to-br ${
              ['from-blue-400 to-cyan-400', 'from-green-400 to-emerald-400', 'from-orange-400 to-red-400',
               'from-gray-600 to-gray-700', 'from-yellow-400 to-orange-400', 'from-gray-500 to-gray-600'][i]
            }`}></div>
            <div className="w-full h-1 bg-white rounded mb-0.5"></div>
            <div className="w-2/3 h-0.5 bg-gray-500 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// CRM / Sales dashboard (like crm-growth-booster)  
function CRMMockup() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600"></div>
          <div className="w-14 h-2 bg-gray-800 rounded"></div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-16 h-4 bg-gray-100 rounded-full"></div>
          <div className="w-5 h-5 rounded-full bg-blue-100"></div>
        </div>
      </div>
      
      {/* Hero banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-2 mb-2 text-white">
        <div className="w-20 h-2 bg-white/80 rounded mb-1"></div>
        <div className="w-28 h-1.5 bg-white/50 rounded mb-1.5"></div>
        <div className="flex gap-1">
          <div className="px-2 py-0.5 bg-white rounded text-[5px] text-blue-600 font-bold">Get Started</div>
          <div className="px-2 py-0.5 bg-white/20 rounded text-[5px]">Learn More</div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="flex-1 grid grid-cols-2 gap-1.5">
        <div className="bg-gray-50 rounded-lg p-1.5 border border-gray-200">
          <div className="w-8 h-1 bg-gray-400 rounded mb-1"></div>
          <div className="w-10 h-2.5 bg-blue-600 rounded mb-1"></div>
          <div className="w-full h-4 flex items-end gap-0.5">
            {[30, 50, 40, 70, 60].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-200 rounded-t" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-1.5 border border-gray-200">
          <div className="w-8 h-1 bg-gray-400 rounded mb-1"></div>
          <div className="w-10 h-2.5 bg-green-600 rounded mb-1"></div>
          <div className="w-full h-4 bg-gradient-to-t from-green-200 to-transparent rounded"></div>
        </div>
      </div>
    </div>
  );
}

// Task manager / Kanban (like sorare-basic)
function TasksMockup() {
  return (
    <div className="w-full h-full bg-[#1a1f2e] p-2.5 flex flex-col text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
          <div className="w-16 h-2 bg-white rounded"></div>
        </div>
        <div className="flex gap-1">
          <div className="w-4 h-4 rounded bg-gray-700"></div>
          <div className="w-5 h-5 rounded-full bg-emerald-500"></div>
        </div>
      </div>
      
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg p-2 mb-2 border border-emerald-500/30">
        <div className="w-16 h-1.5 bg-emerald-400 rounded mb-1"></div>
        <div className="w-24 h-2 bg-white rounded mb-1"></div>
        <div className="w-20 h-1 bg-gray-400 rounded"></div>
      </div>
      
      {/* Cards */}
      <div className="flex-1 grid grid-cols-2 gap-1.5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-800/60 rounded-lg p-1.5 border border-gray-700">
            <div className="flex items-center gap-1 mb-1">
              <div className="w-3 h-3 rounded bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
              <div className="w-10 h-1 bg-white rounded"></div>
            </div>
            <div className="w-full h-1 bg-gray-600 rounded mb-0.5"></div>
            <div className="w-3/4 h-1 bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Social Network / Community (like miccoach-lab)
function SocialMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-2.5 flex flex-col text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gray-700 to-gray-800"></div>
          <div className="w-12 h-2 bg-white rounded"></div>
        </div>
        <div className="px-2 py-0.5 bg-gray-800 rounded text-[5px] font-bold">Personal</div>
      </div>
      
      {/* Profile section */}
      <div className="flex items-center gap-2 mb-2 bg-white/5 rounded-lg p-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700"></div>
        <div>
          <div className="w-14 h-2 bg-white rounded mb-1"></div>
          <div className="w-10 h-1 bg-gray-400 rounded"></div>
        </div>
      </div>
      
      {/* Content cards */}
      <div className="flex-1 space-y-1.5">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bg-white/10 rounded-lg p-1.5 border border-white/10">
            <div className="w-full h-1.5 bg-white rounded mb-1"></div>
            <div className="w-3/4 h-1 bg-gray-400 rounded mb-1"></div>
            <div className="flex gap-2">
              <div className="w-6 h-1 bg-gray-400 rounded"></div>
              <div className="w-6 h-1 bg-gray-500 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Landing page builder style (like mamut-rebuild-project)
function LandingMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-2.5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="w-8 h-3 bg-blue-600 rounded"></div>
        <div className="flex gap-1.5">
          <div className="w-5 h-1.5 bg-gray-500 rounded"></div>
          <div className="w-5 h-1.5 bg-gray-500 rounded"></div>
          <div className="px-1.5 py-0.5 bg-blue-600 rounded text-[5px] text-white font-bold">CTA</div>
        </div>
      </div>
      
      {/* Hero content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className="w-20 h-2 bg-gray-800 rounded mb-1"></div>
        <div className="w-28 h-2.5 bg-blue-600 rounded mb-1"></div>
        <div className="w-24 h-2.5 bg-blue-600 rounded mb-2"></div>
        <div className="w-20 h-1.5 bg-gray-500 rounded mb-2"></div>
        <div className="flex gap-1.5">
          <div className="px-3 py-1 bg-blue-600 rounded text-[5px] text-white font-bold">Get Started</div>
          <div className="px-3 py-1 bg-white rounded text-[5px] text-blue-600 font-bold border border-blue-200">Learn More</div>
        </div>
      </div>
      
      {/* Bottom decorative elements */}
      <div className="flex justify-center gap-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
        ))}
      </div>
    </div>
  );
}

// Sports/NBA style app (like two-way-talents)
function SaasMockup() {
  return (
    <div className="w-full h-full bg-[#0c1220] p-2.5 flex flex-col text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-orange-500"></div>
          <div className="w-14 h-2 bg-white rounded"></div>
        </div>
        <div className="flex gap-1">
          <div className="w-5 h-1.5 bg-gray-700 rounded"></div>
          <div className="w-5 h-1.5 bg-gray-700 rounded"></div>
        </div>
      </div>
      
      {/* Main content area with image placeholder */}
      <div className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-2 border border-gray-700 flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 mb-2 flex items-center justify-center">
          <div className="w-6 h-6 bg-white/20 rounded"></div>
        </div>
        <div className="w-20 h-2 bg-white rounded mb-1"></div>
        <div className="w-16 h-1.5 bg-orange-400 rounded mb-2"></div>
        <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded text-[6px] font-bold">Preview</div>
      </div>
    </div>
  );
}

// Learning platform (like greek-lessons)
function LearningMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-100 p-2.5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded bg-emerald-600"></div>
          <div className="w-12 h-2 bg-gray-800 rounded"></div>
        </div>
        <div className="px-2 py-0.5 bg-emerald-600 rounded text-[5px] text-white font-bold">Website</div>
      </div>
      
      {/* Hero with image */}
      <div className="flex-1 flex gap-2">
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-16 h-2 bg-gray-800 rounded mb-1"></div>
          <div className="w-20 h-2.5 bg-emerald-600 rounded mb-1"></div>
          <div className="w-14 h-1.5 bg-gray-500 rounded mb-2"></div>
          <div className="px-2 py-1 bg-emerald-600 rounded text-[5px] text-white font-bold w-fit">Start Learning</div>
        </div>
        <div className="w-16 h-full bg-gradient-to-br from-emerald-200 to-teal-300 rounded-lg"></div>
      </div>
    </div>
  );
}

// Fitness/Wellness app (like restrecoverywellness)
function FitnessMockup() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-2.5 flex flex-col text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="w-10 h-2.5 bg-white rounded"></div>
        <div className="flex gap-1">
          <div className="w-5 h-5 rounded-full bg-blue-500/30"></div>
        </div>
      </div>
      
      {/* Hero section */}
      <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg p-2 mb-2 border border-blue-500/30">
        <div className="w-16 h-2 bg-white rounded mb-1"></div>
        <div className="w-24 h-1.5 bg-blue-300 rounded"></div>
      </div>
      
      {/* Path options */}
      <div className="flex-1 space-y-1">
        {['Recovery', 'Training', 'Nutrition'].map((_, i) => (
          <div key={i} className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-1.5 border border-gray-700">
            <div className={`w-4 h-4 rounded bg-gradient-to-r ${
              ['from-blue-400 to-cyan-400', 'from-gray-600 to-gray-700', 'from-green-400 to-emerald-400'][i]
            }`}></div>
            <div>
              <div className="w-12 h-1.5 bg-white rounded mb-0.5"></div>
              <div className="w-16 h-1 bg-gray-500 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Real estate (like rentguarantee-haven)
function RealEstateMockup() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="w-12 h-2.5 bg-gray-800 rounded"></div>
        <div className="flex gap-1">
          <div className="w-5 h-1.5 bg-gray-400 rounded"></div>
          <div className="px-2 py-0.5 bg-blue-600 rounded text-[5px] text-white font-bold">Apply</div>
        </div>
      </div>
      
      {/* Property showcase */}
      <div className="flex-1 relative rounded-lg overflow-hidden mb-2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
          <div className="w-20 h-2 bg-white rounded mb-1"></div>
          <div className="w-14 h-1.5 bg-blue-300 rounded"></div>
        </div>
      </div>
      
      {/* Features */}
      <div className="flex gap-1">
        {['Guaranteed', 'No Fees', 'Fast'].map((_, i) => (
          <div key={i} className="flex-1 bg-blue-50 rounded p-1 text-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mx-auto mb-0.5"></div>
            <div className="w-full h-1 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Default mockup
function DefaultMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 p-2.5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="w-10 h-3 bg-gray-700 rounded"></div>
        <div className="flex gap-1">
          <div className="w-5 h-1.5 bg-gray-400 rounded"></div>
          <div className="w-5 h-1.5 bg-gray-400 rounded"></div>
          <div className="w-5 h-5 rounded-full bg-gray-400"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 bg-white rounded-lg p-2 shadow-sm">
        <div className="w-20 h-2.5 bg-gray-800 rounded mb-2"></div>
        <div className="w-full h-1.5 bg-gray-300 rounded mb-1"></div>
        <div className="w-3/4 h-1.5 bg-gray-300 rounded mb-3"></div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="h-10 bg-gray-100 rounded"></div>
          <div className="h-10 bg-gray-100 rounded"></div>
        </div>
      </div>
    </div>
  );
}

// Helper function to determine mockup type from project name
export function getMockupType(projectName: string): MockupProps['type'] {
  const name = projectName.toLowerCase();
  if (name.includes('dashboard') || name.includes('analytics') || name.includes('trading') || name.includes('finance')) return 'dashboard';
  if (name.includes('commerce') || name.includes('store') || name.includes('shop') || name.includes('gateway')) return 'ecommerce';
  if (name.includes('portfolio') || name.includes('agency') || name.includes('content')) return 'portfolio';
  if (name.includes('blog') || name.includes('ai') || name.includes('tool')) return 'blog';
  if (name.includes('task') || name.includes('kanban') || name.includes('todo') || name.includes('project')) return 'tasks';
  if (name.includes('social') || name.includes('network') || name.includes('community') || name.includes('coach')) return 'social';
  if (name.includes('landing') || name.includes('startup') || name.includes('saas')) return 'landing';
  if (name.includes('sport') || name.includes('game') || name.includes('nba')) return 'saas';
  if (name.includes('crm') || name.includes('sales') || name.includes('growth')) return 'crm';
  if (name.includes('learn') || name.includes('course') || name.includes('education') || name.includes('lesson')) return 'learning';
  if (name.includes('fitness') || name.includes('health') || name.includes('wellness') || name.includes('recovery')) return 'fitness';
  if (name.includes('real') || name.includes('estate') || name.includes('rent') || name.includes('property')) return 'realestate';
  return 'default';
}

export default WebsiteMockup;
