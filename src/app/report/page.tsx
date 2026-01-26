'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Documentation structure matching magicapptesting.com/docs exactly
const docsSections = [
  {
    title: 'Getting Started',
    items: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'quickstart', title: 'Quickstart Guides' },
      { id: 'create-ai', title: 'Create with AI' },
      { id: 'build-scratch', title: 'Build from Scratch' },
      { id: 'import-github', title: 'Import from GitHub' },
    ],
  },
  {
    title: 'Trust & Safety',
    items: [
      { id: 'trust-overview', title: 'Overview' },
      { id: 'reporting-abuse', title: 'Reporting Abuse' },
      { id: 'copyright-claims', title: 'Copyright Claims' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { id: 'terms', title: 'Terms of Service' },
      { id: 'privacy', title: 'Privacy Policy' },
      { id: 'platform-rules', title: 'Platform Rules' },
    ],
  },
  {
    title: 'Security',
    items: [
      { id: 'security-overview', title: 'Security Overview' },
      { id: 'data-protection', title: 'Data Protection' },
    ],
  },
  {
    title: 'Tutorials',
    items: [
      { id: 'vibe-code', title: 'How to Vibe Code' },
      { id: 'first-app', title: 'Building Your First App' },
      { id: 'databases', title: 'Building with Databases' },
      { id: 'deploying', title: 'Deploying Your App' },
    ],
  },
  {
    title: 'Teams & Enterprise',
    items: [
      { id: 'teams-overview', title: 'Teams Overview' },
      { id: 'enterprise-features', title: 'Enterprise Features' },
      { id: 'collaboration', title: 'Collaboration' },
    ],
  },
  {
    title: 'Changelog',
    items: [
      { id: 'recent-updates', title: 'Recent Updates' },
      { id: 'roadmap', title: 'Roadmap' },
    ],
  },
];

// Content for each documentation page
const docsContent: Record<string, { title: string; breadcrumb: string[]; content: React.ReactNode }> = {
  'introduction': {
    title: 'Welcome to AppNode',
    breadcrumb: ['Getting Started', 'Introduction'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          AppNode is an AI-powered development platform that lets you build complete web applications just by describing what you want. No coding experience required — it feels like having a whole team working for you.
        </p>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-8 bg-white dark:bg-[#0a0a0a]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What You Can Build</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>Full-stack web applications with databases
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>Landing pages and marketing websites
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>Dashboards and admin panels
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>E-commerce stores and portfolios
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>SaaS products and internal tools
            </li>
          </ul>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How It Works</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Simply describe your project in plain language. Our AI understands your requirements, generates a complete blueprint, and builds production-ready code in real-time. Watch your app come to life with instant previews.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Describe</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Tell AI what you want to build</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Generate</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI writes production-ready code</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Preview</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">See your app live instantly</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Deploy</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">One-click deployment to production</p>
          </div>
        </div>
      </>
    ),
  },
  'quickstart': {
    title: 'Quickstart Guides',
    breadcrumb: ['Getting Started', 'Quickstart Guides'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Get up and running with AppNode in minutes. Choose your path based on how you want to start building.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Choose Your Starting Point</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">Create with AI</h3>
              <span className="text-xs text-gray-500">2 minutes</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Best for beginners — describe your idea and let AI build it</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">Build from Scratch</h3>
              <span className="text-xs text-gray-500">5 minutes</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Start with a blank canvas and full control</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">Import from GitHub</h3>
              <span className="text-xs text-gray-500">3 minutes</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Bring your existing project and enhance it with AI</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">Use a Template</h3>
              <span className="text-xs text-gray-500">1 minute</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Start from a pre-built template and customize it</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Example Prompts to Try</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300">&quot;Create a todo list with drag and drop and dark mode&quot;</div>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300">&quot;Build a simple drawing app with different brush sizes and colors&quot;</div>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300">&quot;Make a memory card game with emojis&quot;</div>
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300">&quot;Create an expense tracker with charts and categories&quot;</div>
        </div>
      </>
    ),
  },
  'create-ai': {
    title: 'Create with AI',
    breadcrumb: ['Getting Started', 'Create with AI'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          The fastest way to build. Just describe what you want in plain language and watch AI create your complete application in real-time.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Step-by-Step Guide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">1</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Start a New Project</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Click &quot;Create New&quot; from your dashboard or the homepage</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">2</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Describe Your Idea</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Write a detailed description of what you want to build. The more context, the better results.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">3</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Review the Blueprint</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI generates a project blueprint with features, design, and architecture. You can refine it.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">4</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Watch It Build</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI writes code for each component. See files appear in real-time with live preview.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">5</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Test & Iterate</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Try your app in the preview. Ask AI to make changes or add features.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">6</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Deploy</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">When ready, deploy with one click to get a live URL.</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Tips for Better Results</h2>
        <ul className="space-y-2">
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Be specific:</strong> Instead of &quot;make a website&quot;, say &quot;create a portfolio website with a dark theme, project gallery, and contact form&quot;</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Describe features:</strong> List the key features you need — authentication, database, file uploads, etc.</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Mention design preferences:</strong> Colors, style (minimal, bold, playful), and layout preferences help AI match your vision</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Iterate:</strong> Start simple, then ask AI to add more features incrementally</li>
        </ul>
      </>
    ),
  },
  'build-scratch': {
    title: 'Build from Scratch',
    breadcrumb: ['Getting Started', 'Build from Scratch'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Start with a blank canvas and full control. Perfect for developers who want to structure their project their way while still leveraging AI assistance.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Choose Your Template</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Select a base template to start with. Each template comes pre-configured with the framework, build tools, and dependencies you need.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">React + Vite</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Fast, modern React setup</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Next.js</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Full-stack React framework</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Vue 3</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Progressive JavaScript framework</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Svelte</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Compile-time framework</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Astro</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Content-focused sites</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Vanilla JS</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">No framework, pure JavaScript</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Workspace Features</h2>
        <ul className="space-y-2">
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Code Editor:</strong> Full-featured editor with syntax highlighting, autocomplete, and multi-file editing</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">File Explorer:</strong> Navigate and manage your project files and folders</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Terminal:</strong> Run commands, install packages, and manage your environment</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Live Preview:</strong> See changes instantly as you code</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">AI Chat:</strong> Ask for help, generate code snippets, or debug issues</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Version Control:</strong> Built-in git integration to track changes</li>
        </ul>
      </>
    ),
  },
  'import-github': {
    title: 'Import from GitHub',
    breadcrumb: ['Getting Started', 'Import from GitHub'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Bring your existing projects to AppNode. Import any public or private repository and enhance it with AI-powered development tools.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How to Import</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">1</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Connect GitHub</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Authorize AppNode to access your GitHub account for seamless imports</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">2</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Select Repository</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Choose from your repositories or paste any public repo URL</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">3</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Configure Settings</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Select branch, set environment variables, and configure build settings</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">4</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Import & Build</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">We clone your repo, install dependencies, and start the dev server</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What Happens After Import</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Your code is cloned into a new AppNode workspace
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Dependencies are automatically installed
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Development server starts with live preview
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>AI analyzes your codebase to provide contextual help
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Changes can be pushed back to GitHub or exported
          </li>
        </ul>
        <p className="mt-6 text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Note:</strong> For private repositories, you&apos;ll need to authorize GitHub access. We only request the minimum permissions needed to clone your code.</p>
      </>
    ),
  },
  'trust-overview': {
    title: 'Trust & Safety at AppNode',
    breadcrumb: ['Trust & Safety', 'Overview'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          We&apos;re committed to maintaining a safe, trustworthy platform for all users. Our Trust & Safety team works around the clock to ensure AppNode remains a space where creators can build without fear.
        </p>
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-8 bg-white dark:bg-[#0a0a0a]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Commitment</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>24/7 monitoring of platform activity
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>Rapid response to abuse reports
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>Transparent enforcement policies
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>Regular security audits and updates
            </li>
          </ul>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Keep You Safe</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Our multi-layered approach to safety includes automated detection systems, human review processes, and community reporting tools. We continuously improve our systems based on emerging threats and user feedback.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Automated Detection</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered systems identify harmful content</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Human Review</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Expert team reviews flagged content</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">User Reports</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Community helps identify issues</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Swift Action</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Quick response to violations</p>
          </div>
        </div>
      </>
    ),
  },
  'reporting-abuse': {
    title: 'Reporting Abuse',
    breadcrumb: ['Trust & Safety', 'Reporting Abuse'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          If you encounter content or behavior that violates our policies, please report it immediately. We take all reports seriously and investigate promptly.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How to Report</h2>
        <ul className="space-y-2 mb-8">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Click the &quot;Report&quot; button on any project or user profile
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Email us directly at abuse@appnode.dev
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Use the contact form in your account settings
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What We Investigate</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Harassment or threats
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Malware or malicious code
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Copyright infringement
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Spam or phishing attempts
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Illegal content
          </li>
        </ul>
      </>
    ),
  },
  'copyright-claims': {
    title: 'Copyright Claims',
    breadcrumb: ['Trust & Safety', 'Copyright Claims'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          We respect intellectual property rights and respond promptly to valid copyright claims.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Filing a Claim</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">To file a DMCA takedown notice, please email <strong className="text-gray-900 dark:text-white">legal@appnode.dev</strong> with:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Identification of the copyrighted work
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>URL of the infringing content
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Your contact information
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>A statement of good faith belief
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Your physical or electronic signature
          </li>
        </ul>
      </>
    ),
  },
  'terms': {
    title: 'Terms of Service',
    breadcrumb: ['Legal', 'Terms of Service'],
    content: (
      <>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Last updated: January 2025</p>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of AppNode&apos;s services, websites, and applications (&quot;Services&quot;). By using our Services, you agree to be bound by these Terms.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our Services.</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Description of Services</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">AppNode provides an AI-powered development platform that enables users to build websites, applications, and digital products. Our Services include code generation, hosting, collaboration tools, and related features.</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. User Accounts</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">To use certain features, you must create an account. You agree to:</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Provide accurate and complete information
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Maintain the security of your account credentials
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Accept responsibility for all activities under your account
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Notify us immediately of any unauthorized use
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Acceptable Use</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">You agree not to use our Services to:</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Violate any applicable laws or regulations
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Infringe on intellectual property rights
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Distribute malware, spam, or harmful content
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Harass, threaten, or harm others
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Attempt to gain unauthorized access to our systems
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Use our Services for any illegal or unauthorized purpose
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Intellectual Property</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">You retain ownership of content you create using our Services. By using our Services, you grant us a limited license to host, display, and distribute your content as necessary to provide the Services.</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Termination</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">We reserve the right to suspend or terminate your account for violations of these Terms or for any other reason at our discretion. You may also terminate your account at any time.</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Disclaimers</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">OUR SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT OUR SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Contact</h2>
        <p className="text-gray-600 dark:text-gray-400">For questions about these Terms, contact us at <strong className="text-gray-900 dark:text-white">legal@appnode.dev</strong></p>
      </>
    ),
  },
  'privacy': {
    title: 'Privacy Policy',
    breadcrumb: ['Legal', 'Privacy Policy'],
    content: (
      <>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Last updated: January 2025</p>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          This Privacy Policy describes how AppNode collects, uses, and shares information about you when you use our services.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Account information (email, name, profile)
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Usage data (features used, projects created)
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Device information (browser, OS, IP address)
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Payment information (processed by secure providers)
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Provide and improve our services
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Process transactions and send related information
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Send technical notices and support messages
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Respond to your comments and questions
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
        <p className="text-gray-600 dark:text-gray-400">For privacy-related questions, contact us at <strong className="text-gray-900 dark:text-white">privacy@appnode.dev</strong></p>
      </>
    ),
  },
  'platform-rules': {
    title: 'Platform Rules',
    breadcrumb: ['Legal', 'Platform Rules'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          These rules help maintain a safe and productive environment for all AppNode users.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Prohibited Content</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Malware, viruses, or malicious code
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Phishing or scam websites
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Content that promotes violence or hate
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Illegal goods or services
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Copyright-infringing material
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Account Rules</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>One account per person
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>No sharing account credentials
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>No impersonating others
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>No automated account creation
          </li>
        </ul>
      </>
    ),
  },
  'security-overview': {
    title: 'Security at AppNode',
    breadcrumb: ['Security', 'Security Overview'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Security is foundational to everything we build. We implement industry-leading practices to protect your data, your projects, and your users.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Infrastructure Security</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Encryption at Rest</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">All data encrypted with AES-256</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Encryption in Transit</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">TLS 1.3 for all connections</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Isolated Environments</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sandboxed execution for all projects</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">DDoS Protection</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise-grade attack mitigation</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Application Security</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Regular penetration testing by third-party firms
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Automated vulnerability scanning in CI/CD pipeline
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Secure development lifecycle (SDL) practices
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Code review requirements for all changes
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Bug bounty program for responsible disclosure
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Account Security</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Multi-factor authentication (MFA) support
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Session management and device tracking
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Suspicious activity detection and alerts
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Secure password requirements with bcrypt hashing
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Compliance</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">We maintain compliance with industry standards and regulations:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm">SOC 2 Type II</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm">GDPR</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm">CCPA</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm">ISO 27001</span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Report a Vulnerability</h2>
        <p className="text-gray-600 dark:text-gray-400">Found a security issue? Please report it responsibly to <strong className="text-gray-900 dark:text-white">security@appnode.dev</strong>. We appreciate your help in keeping AppNode secure and offer rewards for valid reports.</p>
      </>
    ),
  },
  'data-protection': {
    title: 'Data Protection',
    breadcrumb: ['Security', 'Data Protection'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          We take data protection seriously. Your code, your projects, and your personal information are safeguarded with multiple layers of protection.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Data Rights</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Access your personal data
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Export your projects at any time
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Request deletion of your account
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Opt out of marketing communications
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Retention</h2>
        <p className="text-gray-600 dark:text-gray-400">We retain your data only as long as necessary to provide our services. When you delete your account, your data is permanently removed within 30 days.</p>
      </>
    ),
  },
  'vibe-code': {
    title: 'How to Vibe Code',
    breadcrumb: ['Tutorials', 'How to Vibe Code'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Vibe coding is about describing what you want and letting AI handle the implementation. Learn how to get the best results from AppNode&apos;s AI-powered development.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">The Vibe Coding Mindset</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Traditional coding requires you to know syntax, frameworks, and implementation details. Vibe coding flips this — you focus on <strong className="text-gray-900 dark:text-white">what</strong> you want, and AI figures out <strong className="text-gray-900 dark:text-white">how</strong> to build it.</p>
        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <p className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">Too Technical</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Create a React component with useState hook</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">Vibe Coding</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Create a counter that shows a number and has plus/minus buttons</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <p className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">Too Technical</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Add a fetch call to /api/users endpoint</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">Vibe Coding</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Show a list of users from the database</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <p className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">Too Technical</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Style the button with Tailwind classes</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">Vibe Coding</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Make the button look modern and stand out</p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Best Practices</h2>
        <ul className="space-y-2">
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Start with the end goal:</strong> Describe the user experience, not the code</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Be specific about design:</strong> Mention colors, layouts, and visual style</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Iterate gradually:</strong> Start simple, then add features one at a time</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Use references:</strong> Share screenshots or URLs of similar apps you like</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Test as you go:</strong> Try the preview after each change</li>
        </ul>
      </>
    ),
  },
  'first-app': {
    title: 'Building Your First App',
    breadcrumb: ['Tutorials', 'Building Your First App'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Follow this step-by-step guide to build your first application with AppNode.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Step 1: Start a New Project</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Click &quot;Create New&quot; from your dashboard and choose &quot;Create with AI&quot; for the easiest start.</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Step 2: Describe Your App</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Try this prompt: &quot;Create a simple todo list app with the ability to add, complete, and delete tasks. Use a clean, minimal design with a light theme.&quot;</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Step 3: Watch It Build</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">AI will generate your app in real-time. You&apos;ll see files being created and a live preview updating as code is written.</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Step 4: Make Changes</h2>
        <p className="text-gray-600 dark:text-gray-400">Try asking: &quot;Add a dark mode toggle&quot; or &quot;Make the completed tasks strikethrough&quot; to see how AI can iterate on your app.</p>
      </>
    ),
  },
  'databases': {
    title: 'Building with Databases',
    breadcrumb: ['Tutorials', 'Building with Databases'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Learn how to add persistent data storage to your AppNode applications.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Available Databases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">SQLite</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Simple, file-based database. Great for small apps.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">PostgreSQL</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Full-featured relational database for complex data.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">MongoDB</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Document database for flexible schemas.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Redis</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">In-memory store for caching and sessions.</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Adding a Database</h2>
        <p className="text-gray-600 dark:text-gray-400">Simply describe your data needs: &quot;I need to store users with name, email, and profile picture&quot; and AI will set up the database schema and connections for you.</p>
      </>
    ),
  },
  'deploying': {
    title: 'Deploying Your App',
    breadcrumb: ['Tutorials', 'Deploying Your App'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Get your application live with one click. AppNode handles hosting, SSL, and scaling automatically.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Deploy Steps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">1</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Click Deploy</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Hit the Deploy button in your workspace</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">2</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Choose a Domain</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Use our free subdomain or connect your own</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">3</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Go Live</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Your app is deployed in seconds with SSL included</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Custom Domains</h2>
        <p className="text-gray-600 dark:text-gray-400">Connect your own domain by adding a CNAME record pointing to AppNode. SSL certificates are automatically provisioned.</p>
      </>
    ),
  },
  'teams-overview': {
    title: 'Teams Overview',
    breadcrumb: ['Teams & Enterprise', 'Teams Overview'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Collaborate with your team on AppNode. Share projects, manage permissions, and build together in real-time.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Team Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Shared Projects</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">All team members can access and contribute to projects</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Real-time Collaboration</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">See changes from teammates instantly</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Role-based Access</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Control who can view, edit, or deploy</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Team Billing</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Consolidated billing for your organization</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Getting Started with Teams</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Create a team from your dashboard settings
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Invite team members via email
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Set permissions for each member
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Start collaborating on projects
          </li>
        </ul>
      </>
    ),
  },
  'enterprise-features': {
    title: 'Enterprise Features',
    breadcrumb: ['Teams & Enterprise', 'Enterprise Features'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Advanced features for large organizations with complex requirements.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Enterprise Benefits</h2>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">SSO Integration:</strong> Connect with your identity provider (Okta, Azure AD, etc.)</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Audit Logs:</strong> Track all actions across your organization</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Custom Contracts:</strong> Tailored agreements and SLAs</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Dedicated Support:</strong> Priority support with dedicated account manager</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Private Cloud:</strong> Run AppNode in your own infrastructure</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400">Contact <strong className="text-gray-900 dark:text-white">enterprise@appnode.dev</strong> to learn more.</p>
      </>
    ),
  },
  'collaboration': {
    title: 'Collaboration',
    breadcrumb: ['Teams & Enterprise', 'Collaboration'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Work together seamlessly with real-time collaboration features.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Real-time Features</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>See teammates&apos; cursors in the editor
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Live code changes sync instantly
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Built-in comments and discussions
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Activity feed shows recent changes
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Communication</h2>
        <p className="text-gray-600 dark:text-gray-400">Use the built-in chat or connect your Slack workspace for seamless team communication.</p>
      </>
    ),
  },
  'recent-updates': {
    title: 'Coming Soon',
    breadcrumb: ['Changelog', 'Recent Updates'],
    content: (
      <div className="text-center py-12">
        <span className="text-6xl mb-6 block">🚀</span>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Coming Soon</h2>
        <p className="text-gray-600 dark:text-gray-400">We&apos;re working on something exciting. Check back soon for updates on the latest features and improvements.</p>
      </div>
    ),
  },
  'roadmap': {
    title: 'Roadmap',
    breadcrumb: ['Changelog', 'Roadmap'],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          See what we&apos;re working on and what&apos;s coming next.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">In Progress</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Mobile app preview
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Enhanced AI models
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Plugin marketplace
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Planned</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Native mobile app builder
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>API marketplace
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>Advanced analytics dashboard
          </li>
        </ul>
      </>
    ),
  },
};

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState<string[]>(['Getting Started']);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionTitle)
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const handleNavClick = (itemId: string, sectionTitle: string) => {
    setActiveSection(itemId);
    if (!expandedSections.includes(sectionTitle)) {
      setExpandedSections(prev => [...prev, sectionTitle]);
    }
    setSidebarOpen(false);
  };

  const currentContent = docsContent[activeSection] || docsContent['introduction'];

  const copyPageContent = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-black transition-colors">
      <Header />
      
      <div className="pt-16 flex">
        {/* Mobile sidebar toggle */}
        <button
          className="lg:hidden fixed bottom-4 right-4 z-50 p-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {sidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky top-0 lg:top-16 z-40 lg:z-auto
          w-[280px] h-screen lg:h-auto lg:min-h-[calc(100vh-64px)]
          border-r border-gray-200 dark:border-gray-800
          bg-[#f8fafc] dark:bg-black
          overflow-y-auto flex-shrink-0
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-4">
            {/* Mobile close button */}
            <div className="lg:hidden flex justify-end mb-4">
              <button 
                className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-12 py-2 text-sm bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-gray-100 dark:bg-[#1a1a1a] px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-800">⌘K</span>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {docsSections.map((section) => (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
                  >
                    <span>{section.title}</span>
                    <svg 
                      className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.includes(section.title) ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedSections.includes(section.title) && (
                    <div className="ml-3 mt-1 space-y-0.5">
                      {section.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id, section.title)}
                          className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors ${
                            activeSection === item.id
                              ? 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-medium'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900'
                          }`}
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
              {currentContent.breadcrumb.map((crumb, index) => (
                <span key={index} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  <span className={index === currentContent.breadcrumb.length - 1 ? 'text-gray-900 dark:text-white' : ''}>
                    {crumb}
                  </span>
                </span>
              ))}
            </div>

            {/* Article */}
            <article>
              <h1 className="text-2xl sm:text-[32px] font-bold text-gray-900 dark:text-white mb-4">
                {currentContent.title}
              </h1>
              {currentContent.content}
            </article>

            {/* Copy button */}
            <button
              onClick={copyPageContent}
              className="mt-8 flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy page
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
