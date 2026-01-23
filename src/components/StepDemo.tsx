'use client';

import { useState, useEffect } from 'react';

// Step 1: Typing animation demo - Your actual Lovecode interface
function TypingDemo() {
  const [text, setText] = useState('');
  const fullText = "Create a recipe sharing";
  
  useEffect(() => {
    let i = 0;
    
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        setTimeout(() => {
          setText('');
          i = 0;
        }, 3000);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const templates = ['Reporting Dashboard', 'Gaming Platform', 'Onboarding Portal', 'Room Visualizer'];

  return (
    <div className="w-full h-full flex bg-white">
      {/* Sidebar */}
      <div className="w-44 bg-gray-50 border-r border-gray-200 flex flex-col">
        {/* New Chat Button */}
        <div className="p-3">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-medium" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
            <span>+</span> New Chat
          </button>
        </div>
        
        {/* Search */}
        <div className="px-3 mb-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-400">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </div>
        </div>
        
        {/* Menu items */}
        <div className="px-3 space-y-1">
          {['Projects', 'Recent Chats', 'Design Systems', 'Templates'].map((item) => (
            <div key={item} className="flex items-center gap-2 px-2 py-1.5 text-gray-700 text-xs hover:bg-gray-100 rounded cursor-pointer">
              <div className="w-3 h-3 bg-gray-300 rounded"></div>
              {item}
            </div>
          ))}
        </div>
        
        {/* Favorites section */}
        <div className="mt-4 px-3">
          <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Favorites</div>
        </div>
        
        {/* Recent chats */}
        <div className="mt-2 px-3">
          <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Recent Chats</div>
          <div className="space-y-1">
            <div className="text-xs text-gray-600 py-1">Aether Landing</div>
            <div className="text-xs text-gray-600 py-1">Zenith Landing</div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-auto p-3 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>⚡</span> Discover
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>⚙️</span> Settings
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* New badge */}
        <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-6">
          <span className="px-2 py-0.5 bg-pink-500 text-white text-[10px] rounded-full font-medium">New</span>
          <span className="text-xs text-gray-600">Introducing Lovecode AI</span>
          <span className="text-gray-400">›</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Dream it. <span className="text-pink-500">Ship it.</span>
        </h1>
        
        <p className="text-sm text-gray-500 mb-8">
          The #1 AI platform to build production-ready apps in minutes
        </p>
        
        {/* Chat Input */}
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-6">
          <div className="text-gray-400 text-sm min-h-[40px]">
            {text}
            <span className="animate-pulse text-pink-500">|</span>
          </div>
          <div className="flex items-center justify-end gap-2 mt-4">
            <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs">📎</div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
              <span className="text-white text-sm">↑</span>
            </div>
          </div>
        </div>
        
        {/* Templates */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-3">
            <span>✨</span> Launch faster with proven blueprints
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {templates.map((template) => (
              <button key={template} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:border-pink-300 transition-colors">
                {template}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 2: Code generation - Lovecode generating code view
function CodeGenDemo() {
  const [lines, setLines] = useState<number[]>([]);
  const totalLines = 12;
  
  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < totalLines) {
        setLines(prev => [...prev, currentLine]);
        currentLine++;
      } else {
        setTimeout(() => {
          setLines([]);
          currentLine = 0;
        }, 2000);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const codeLines = [
    { text: "import { useState } from 'react';", color: 'text-pink-600' },
    { text: "import RecipeCard from './RecipeCard';", color: 'text-pink-600' },
    { text: '', color: '' },
    { text: 'export default function RecipeApp() {', color: 'text-blue-600' },
    { text: '  const [recipes, setRecipes] = useState([]);', color: 'text-purple-600' },
    { text: '  const [search, setSearch] = useState("");', color: 'text-purple-600' },
    { text: '', color: '' },
    { text: '  return (', color: 'text-blue-600' },
    { text: '    <main className="min-h-screen">', color: 'text-green-600' },
    { text: '      <Header />', color: 'text-orange-600' },
    { text: '      <RecipeGrid recipes={recipes} />', color: 'text-orange-600' },
    { text: '    </main>', color: 'text-green-600' },
  ];

  return (
    <div className="w-full h-full flex bg-white">
      {/* Sidebar */}
      <div className="w-44 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-3">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-medium" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
            <span>+</span> New Chat
          </button>
        </div>
        <div className="px-3 space-y-1">
          {['Projects', 'Recent Chats', 'Design Systems', 'Templates'].map((item) => (
            <div key={item} className="flex items-center gap-2 px-2 py-1.5 text-gray-700 text-xs hover:bg-gray-100 rounded">
              <div className="w-3 h-3 bg-gray-300 rounded"></div>
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4 px-3">
          <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Recent Chats</div>
          <div className="space-y-1">
            <div className="text-xs text-pink-600 py-1 bg-pink-50 px-2 rounded">Recipe Sharing App</div>
            <div className="text-xs text-gray-600 py-1">Aether Landing</div>
          </div>
        </div>
      </div>
      
      {/* Main Content - Split View */}
      <div className="flex-1 flex">
        {/* Chat/Code Panel */}
        <div className="flex-1 flex flex-col border-r border-gray-200">
          {/* AI Response */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
                <span className="text-white text-sm">✨</span>
              </div>
              <div>
                <p className="text-sm text-gray-700">Creating your recipe sharing app...</p>
                <div className="flex items-center gap-2 mt-1 text-pink-500 text-xs">
                  <div className="w-3 h-3 border-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                  Generating components...
                </div>
              </div>
            </div>
          </div>
          
          {/* Code Editor */}
          <div className="flex-1 bg-gray-900 p-4 font-mono text-xs overflow-hidden">
            <div className="flex items-center gap-2 mb-3 text-gray-400 text-[10px]">
              <span className="px-2 py-1 bg-gray-800 rounded">RecipeApp.tsx</span>
              <span className="px-2 py-1 bg-gray-800/50 rounded">RecipeCard.tsx</span>
            </div>
            <div className="space-y-0.5">
              {codeLines.map((line, i) => (
                <div 
                  key={i}
                  className={`transition-all duration-300 ${lines.includes(i) ? 'opacity-100' : 'opacity-0'}`}
                >
                  <span className="text-gray-500 mr-3">{i + 1}</span>
                  <span className={line.color.replace('text-', 'text-').replace('-600', '-400')}>{line.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Preview Panel */}
        <div className="w-64 bg-gray-50 p-4">
          <div className="text-xs text-gray-500 mb-3">Live Preview</div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
            <div className="h-6 bg-pink-100 rounded mb-2"></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-16 bg-gray-100 rounded"></div>
              <div className="h-16 bg-gray-100 rounded"></div>
              <div className="h-16 bg-gray-100 rounded"></div>
              <div className="h-16 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 3: Customization demo - Lovecode design customization view
function CustomizeDemo() {
  const [activeColor, setActiveColor] = useState(0);
  const [activeLayout, setActiveLayout] = useState(0);
  
  const colors = [
    { name: 'Pink', value: '#ec4899' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Green', value: '#10b981' },
    { name: 'Orange', value: '#f59e0b' },
  ];
  
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setActiveColor(prev => (prev + 1) % colors.length);
    }, 2000);
    const layoutInterval = setInterval(() => {
      setActiveLayout(prev => (prev + 1) % 3);
    }, 2500);
    
    return () => {
      clearInterval(colorInterval);
      clearInterval(layoutInterval);
    };
  }, []);

  return (
    <div className="w-full h-full flex bg-white">
      {/* Sidebar */}
      <div className="w-44 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-3">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-medium" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
            <span>+</span> New Chat
          </button>
        </div>
        <div className="px-3 space-y-1">
          {['Projects', 'Recent Chats', 'Design Systems', 'Templates'].map((item) => (
            <div key={item} className="flex items-center gap-2 px-2 py-1.5 text-gray-700 text-xs hover:bg-gray-100 rounded">
              <div className="w-3 h-3 bg-gray-300 rounded"></div>
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4 px-3">
          <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Recent Chats</div>
          <div className="space-y-1">
            <div className="text-xs text-pink-600 py-1 bg-pink-50 px-2 rounded">Recipe Sharing App</div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Chat Panel */}
        <div className="w-72 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
                <span className="text-white text-sm">✨</span>
              </div>
              <div>
                <p className="text-sm text-gray-700">Choose your design preferences:</p>
              </div>
            </div>
          </div>
          
          {/* Design Options */}
          <div className="p-4 space-y-4">
            <div>
              <div className="text-xs text-gray-500 mb-2">Theme Color</div>
              <div className="flex gap-2">
                {colors.map((color, i) => (
                  <div 
                    key={color.name}
                    className={`w-8 h-8 rounded-lg cursor-pointer transition-all ${activeColor === i ? 'ring-2 ring-offset-2 ring-pink-500 scale-110' : ''}`}
                    style={{ backgroundColor: color.value }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-xs text-gray-500 mb-2">Layout Style</div>
              <div className="space-y-2">
                {['Grid Layout', 'List Layout', 'Masonry'].map((layout, i) => (
                  <div 
                    key={layout}
                    className={`px-3 py-2 rounded-lg text-xs cursor-pointer transition-all ${activeLayout === i ? 'bg-pink-50 text-pink-600 border border-pink-200' : 'bg-gray-50 text-gray-600 border border-transparent'}`}
                  >
                    {layout}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Preview */}
        <div className="flex-1 bg-gray-100 p-6">
          <div className="text-xs text-gray-500 mb-3">Live Preview</div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
            {/* Preview Header */}
            <div 
              className="h-10 transition-colors duration-500 flex items-center px-4"
              style={{ backgroundColor: colors[activeColor].value }}
            >
              <span className="text-white text-sm font-medium">🍳 Recipe Share</span>
            </div>
            
            {/* Preview Content */}
            <div className="p-4">
              {activeLayout === 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="bg-gray-50 rounded-lg p-3">
                      <div className="h-12 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              )}
              {activeLayout === 1 && (
                <div className="space-y-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex gap-3 bg-gray-50 rounded-lg p-2">
                      <div className="w-12 h-12 bg-gray-200 rounded"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeLayout === 2 && (
                <div className="columns-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 mb-3 break-inside-avoid">
                    <div className="h-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 mb-3 break-inside-avoid">
                    <div className="h-12 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 break-inside-avoid">
                    <div className="h-16 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 4: Deploy - Lovecode deployment view
function DeployDemo() {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  
  const logMessages = [
    '▶ Building application...',
    '✓ Build completed',
    '▶ Optimizing assets...',
    '✓ Assets optimized',
    '▶ Deploying to cloud...',
    '✓ Deployed successfully',
    '🚀 Your app is live!',
  ];
  
  useEffect(() => {
    let logIndex = 0;
    setLogs([]);
    setProgress(0);
    setStage(0);
    
    const interval = setInterval(() => {
      if (logIndex < logMessages.length) {
        setLogs(prev => [...prev, logMessages[logIndex]]);
        setProgress(((logIndex + 1) / logMessages.length) * 100);
        
        if (logIndex >= 2) setStage(1);
        if (logIndex >= 4) setStage(2);
        if (logIndex >= 6) setStage(3);
        
        logIndex++;
      } else {
        setTimeout(() => {
          setLogs([]);
          setProgress(0);
          setStage(0);
          logIndex = 0;
        }, 3000);
      }
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex bg-white">
      {/* Sidebar */}
      <div className="w-44 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-3">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-medium" style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}>
            <span>+</span> New Chat
          </button>
        </div>
        <div className="px-3 space-y-1">
          {['Projects', 'Recent Chats', 'Design Systems', 'Templates'].map((item) => (
            <div key={item} className="flex items-center gap-2 px-2 py-1.5 text-gray-700 text-xs hover:bg-gray-100 rounded">
              <div className="w-3 h-3 bg-gray-300 rounded"></div>
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4 px-3">
          <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Recent Chats</div>
          <div className="space-y-1">
            <div className="text-xs text-pink-600 py-1 bg-pink-50 px-2 rounded">Recipe Sharing App</div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Deploy Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${stage === 3 ? 'bg-green-100' : 'bg-pink-100'}`}>
              {stage === 3 ? '✓' : '🚀'}
            </div>
            <div>
              <div className="font-medium text-gray-900">Recipe Sharing App</div>
              <div className="text-xs text-gray-500">Deploying to production</div>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${stage === 3 ? 'bg-green-100 text-green-600' : 'bg-pink-100 text-pink-600'}`}>
            {stage === 3 ? 'Deployed' : 'Deploying...'}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-300 rounded-full"
              style={{ width: `${progress}%`, background: 'linear-gradient(135deg, #E91E8C 0%, #9B59B6 100%)' }}
            ></div>
          </div>
        </div>
        
        {/* Terminal */}
        <div className="flex-1 bg-gray-900 rounded-xl p-4 font-mono text-xs overflow-hidden">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-700">
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-500">Build Output</span>
          </div>
          <div className="space-y-1">
            {logs.map((log, i) => (
              <div 
                key={i} 
                className={`${log?.startsWith('✓') ? 'text-green-400' : log?.startsWith('🚀') ? 'text-pink-400 font-semibold' : 'text-gray-400'}`}
              >
                {log}
              </div>
            ))}
            {logs.length > 0 && logs.length < logMessages.length && (
              <div className="text-gray-600 animate-pulse">_</div>
            )}
          </div>
        </div>
        
        {/* URL */}
        {stage === 3 && (
          <div className="mt-4 flex items-center gap-2 p-3 bg-green-50 rounded-xl border border-green-200">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-700 text-sm font-medium">https://recipe-share.lovecode.dev</span>
            <button className="ml-auto text-xs text-gray-500 hover:text-gray-700">Copy</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Main component that renders the appropriate demo based on step
export default function StepDemo({ step }: { step: number }) {
  switch (step) {
    case 1:
      return <TypingDemo />;
    case 2:
      return <CodeGenDemo />;
    case 3:
      return <CustomizeDemo />;
    case 4:
      return <DeployDemo />;
    default:
      return <TypingDemo />;
  }
}
