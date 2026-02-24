'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/context/LanguageContext';

// Documentation structure - will be translated dynamically
const getDocsSections = (t: (key: string) => string) => [
  {
    title: t('reportPage.sections.gettingStarted'),
    items: [
      { id: 'introduction', title: t('reportPage.items.introduction') },
      { id: 'quickstart', title: t('reportPage.items.quickstart') },
      { id: 'create-ai', title: t('reportPage.items.createAi') },
      { id: 'build-scratch', title: t('reportPage.items.buildScratch') },
      { id: 'import-github', title: t('reportPage.items.importGithub') },
    ],
  },
  {
    title: t('reportPage.sections.trustSafety'),
    items: [
      { id: 'trust-overview', title: t('reportPage.items.trustOverview') },
      { id: 'reporting-abuse', title: t('reportPage.items.reportingAbuse') },
      { id: 'copyright-claims', title: t('reportPage.items.copyrightClaims') },
    ],
  },
  {
    title: t('reportPage.sections.legal'),
    items: [
      { id: 'terms', title: t('reportPage.items.terms') },
      { id: 'privacy', title: t('reportPage.items.privacy') },
      { id: 'platform-rules', title: t('reportPage.items.platformRules') },
    ],
  },
  {
    title: t('reportPage.sections.security'),
    items: [
      { id: 'security-overview', title: t('reportPage.items.securityOverview') },
      { id: 'data-protection', title: t('reportPage.items.dataProtection') },
    ],
  },
  {
    title: t('reportPage.sections.tutorials'),
    items: [
      { id: 'generate-code', title: t('reportPage.items.generateCode') },
      { id: 'first-app', title: t('reportPage.items.firstApp') },
      { id: 'databases', title: t('reportPage.items.databases') },
      { id: 'deploying', title: t('reportPage.items.deploying') },
    ],
  },
  {
    title: t('reportPage.sections.teamsEnterprise'),
    items: [
      { id: 'teams-overview', title: t('reportPage.items.teamsOverview') },
      { id: 'enterprise-features', title: t('reportPage.items.enterpriseFeatures') },
      { id: 'collaboration', title: t('reportPage.items.collaboration') },
    ],
  },
  {
    title: t('reportPage.sections.changelog'),
    items: [
      { id: 'recent-updates', title: t('reportPage.items.recentUpdates') },
      { id: 'roadmap', title: t('reportPage.items.roadmap') },
    ],
  },
];

// Content for each documentation page - function that returns translated content
const getDocsContent = (t: (key: string) => string): Record<string, { title: string; breadcrumb: string[]; content: React.ReactNode }> => ({
  'introduction': {
    title: t('reportPage.content.welcomeTitle'),
    breadcrumb: [t('reportPage.sections.gettingStarted'), t('reportPage.items.introduction')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.welcomeDescription')}
        </p>
        <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-6 mb-8 bg-white dark:bg-[#1A1A1A]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.whatYouCanBuild')}</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.whatYouCanBuildItems.fullStack')}
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.whatYouCanBuildItems.landingPages')}
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.whatYouCanBuildItems.dashboards')}
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.whatYouCanBuildItems.ecommerce')}
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.whatYouCanBuildItems.saas')}
            </li>
          </ul>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.howItWorks')}</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          {t('reportPage.content.howItWorksDescription')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.steps.describe')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.steps.describeText')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.steps.generate')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.steps.generateText')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.steps.preview')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.steps.previewText')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.steps.deploy')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.steps.deployText')}</p>
          </div>
        </div>
      </>
    ),
  },
  'quickstart': {
    title: t('reportPage.content.quickstartTitle'),
    breadcrumb: [t('reportPage.sections.gettingStarted'), t('reportPage.items.quickstart')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.quickstartDescription')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.chooseStartingPoint')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">{t('reportPage.items.createAi')}</h3>
              <span className="text-xs text-gray-500">2 {t('reportPage.content.minutes')}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.bestForBeginners')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">{t('reportPage.items.buildScratch')}</h3>
              <span className="text-xs text-gray-500">5 {t('reportPage.content.minutes')}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.blankCanvas')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">{t('reportPage.items.importGithub')}</h3>
              <span className="text-xs text-gray-500">3 {t('reportPage.content.minutes')}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.bringExisting')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">{t('reportPage.content.useTemplate')}</h3>
              <span className="text-xs text-gray-500">1 {t('reportPage.content.minute')}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.useTemplateDesc')}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.examplePrompts')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-gray-100 dark:bg-[#1A1A1A] rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{t('reportPage.content.examplePrompt1')}</div>
          <div className="bg-gray-100 dark:bg-[#1A1A1A] rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{t('reportPage.content.examplePrompt2')}</div>
          <div className="bg-gray-100 dark:bg-[#1A1A1A] rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{t('reportPage.content.examplePrompt3')}</div>
          <div className="bg-gray-100 dark:bg-[#1A1A1A] rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{t('reportPage.content.examplePrompt4')}</div>
        </div>
      </>
    ),
  },
  'create-ai': {
    title: t('reportPage.content.createWithAiTitle'),
    breadcrumb: [t('reportPage.sections.gettingStarted'), t('reportPage.items.createAi')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.createWithAiDescription')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.stepByStepGuide')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">1</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.startNewProject')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.startNewProjectDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">2</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.describeYourIdea')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.describeYourIdeaDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">3</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.reviewBlueprint')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.reviewBlueprintDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">4</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.watchItBuild')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.watchItBuildDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">5</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.testIterate')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.testIterateDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">6</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.deployStep')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.deployStepDesc')}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.tipsForBetterResults')}</h2>
        <ul className="space-y-2">
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.tipSpecific')}</strong> {t('reportPage.content.tipSpecificDesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.tipFeatures')}</strong> {t('reportPage.content.tipFeaturesDesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.tipDesign')}</strong> {t('reportPage.content.tipDesignDesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.tipIterate')}</strong> {t('reportPage.content.tipIterateDesc')}</li>
        </ul>
      </>
    ),
  },
  'build-scratch': {
    title: t('reportPage.content.buildFromScratchTitle'),
    breadcrumb: [t('reportPage.sections.gettingStarted'), t('reportPage.items.buildScratch')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.buildFromScratchDesc')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.chooseTemplate')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('reportPage.content.chooseTemplateDesc')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.reactVite')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.reactViteDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.nextjs')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.nextjsDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.vue3')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.vue3Desc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.svelte')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.svelteDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.astro')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.astroDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.vanillaJs')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.vanillaJsDesc')}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.workspaceFeatures')}</h2>
        <ul className="space-y-2">
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.codeEditor')}</strong> {t('reportPage.content.codeEditorDesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.fileExplorer')}</strong> {t('reportPage.content.fileExplorerDesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.terminal')}</strong> {t('reportPage.content.terminalDesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.livePreview')}</strong> {t('reportPage.content.livePreviewDesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.aiChat')}</strong> {t('reportPage.content.aiChatDesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.versionControl')}</strong> {t('reportPage.content.versionControlDesc')}</li>
        </ul>
      </>
    ),
  },
  'import-github': {
    title: t('reportPage.content.importGithubTitle'),
    breadcrumb: [t('reportPage.sections.gettingStarted'), t('reportPage.items.importGithub')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.importGithubDesc')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.howToImport')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">1</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.connectGithub')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.connectGithubDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">2</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.selectRepository')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.selectRepositoryDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">3</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.configureSettings')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.configureSettingsDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">4</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.importBuild')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.importBuildDesc')}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.whatHappensAfterImport')}</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.afterImport1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.afterImport2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.afterImport3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.afterImport4')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.afterImport5')}
          </li>
        </ul>
        <p className="mt-6 text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.privateRepoNote')}</strong> {t('reportPage.content.privateRepoNoteDesc')}</p>
      </>
    ),
  },
  'trust-overview': {
    title: t('reportPage.content.trustOverviewTitle'),
    breadcrumb: [t('reportPage.sections.trustSafety'), t('reportPage.items.trustOverview')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.trustOverviewDesc')}
        </p>
        <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-6 mb-8 bg-white dark:bg-[#1A1A1A]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.ourCommitment')}</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.commitment1')}
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.commitment2')}
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.commitment3')}
            </li>
            <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.commitment4')}
            </li>
          </ul>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.howWeKeepYouSafe')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('reportPage.content.howWeKeepYouSafeDesc')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.automatedDetection')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.automatedDetectionDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.humanReview')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.humanReviewDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.userReports')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.userReportsDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.swiftAction')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.swiftActionDesc')}</p>
          </div>
        </div>
      </>
    ),
  },
  'reporting-abuse': {
    title: t('reportPage.content.reportingAbuseTitle'),
    breadcrumb: [t('reportPage.sections.trustSafety'), t('reportPage.items.reportingAbuse')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.reportingAbuseDesc')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.howToReport')}</h2>
        <ul className="space-y-2 mb-8">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.howToReport1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.howToReport2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.howToReport3')}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.whatWeInvestigate')}</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.investigate1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.investigate2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.investigate3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.investigate4')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.investigate5')}
          </li>
        </ul>
      </>
    ),
  },
  'copyright-claims': {
    title: t('reportPage.content.copyrightClaimsTitle'),
    breadcrumb: [t('reportPage.sections.trustSafety'), t('reportPage.items.copyrightClaims')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.copyrightClaimsDesc')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.filingClaim')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{t('reportPage.content.filingClaimDesc')}</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.claimItem1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.claimItem2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.claimItem3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.claimItem4')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.claimItem5')}
          </li>
        </ul>
      </>
    ),
  },
  'terms': {
    title: t('reportPage.content.termsTitle'),
    breadcrumb: [t('reportPage.sections.legal'), t('reportPage.items.terms')],
    content: (
      <>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{t('reportPage.content.termsLastUpdated')}</p>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.termsIntro')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.acceptanceOfTerms')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('reportPage.content.acceptanceOfTermsDesc')}</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.descriptionOfServices')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('reportPage.content.descriptionOfServicesDesc')}</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.userAccounts')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{t('reportPage.content.userAccountsDesc')}</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.userAccount1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.userAccount2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.userAccount3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.userAccount4')}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.acceptableUse')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{t('reportPage.content.acceptableUseDesc')}</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.acceptableUse1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.acceptableUse2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.acceptableUse3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.acceptableUse4')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.acceptableUse5')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.acceptableUse6')}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.intellectualProperty')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('reportPage.content.intellectualPropertyDesc')}</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.termination')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('reportPage.content.terminationDesc')}</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.disclaimers')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('reportPage.content.disclaimersDesc')}</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.termsContact')}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t('reportPage.content.termsContactDesc')}</p>
      </>
    ),
  },
  'privacy': {
    title: t('reportPage.content.privacyTitle'),
    breadcrumb: [t('reportPage.sections.legal'), t('reportPage.items.privacy')],
    content: (
      <>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{t('reportPage.content.privacyLastUpdated')}</p>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.privacyIntro')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.infoWeCollect')}</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.infoCollect1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.infoCollect2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.infoCollect3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.infoCollect4')}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.howWeUseInfo')}</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.useInfo1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.useInfo2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.useInfo3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.useInfo4')}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.privacyContact')}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t('reportPage.content.privacyContactDesc')}</p>
      </>
    ),
  },
  'platform-rules': {
    title: t('reportPage.content.platformRulesTitle'),
    breadcrumb: [t('reportPage.sections.legal'), t('reportPage.items.platformRules')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.platformRulesDesc')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.prohibitedContent')}</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.prohibited1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.prohibited2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.prohibited3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.prohibited4')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.prohibited5')}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.accountRules')}</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.accountRule1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.accountRule2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.accountRule3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.accountRule4')}
          </li>
        </ul>
      </>
    ),
  },
  'security-overview': {
    title: t('reportPage.content.securityOverviewTitle'),
    breadcrumb: [t('reportPage.sections.security'), t('reportPage.items.securityOverview')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.securityOverviewDesc')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.infrastructureSecurity')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.encryptionAtRest')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.encryptionAtRestDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.encryptionInTransit')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.encryptionInTransitDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.isolatedEnvironments')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.isolatedEnvironmentsDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.ddosProtection')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.ddosProtectionDesc')}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.applicationSecurity')}</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.appSecurity1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.appSecurity2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.appSecurity3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.appSecurity4')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.appSecurity5')}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.accountSecurity')}</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.accountSec1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.accountSec2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.accountSec3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.accountSec4')}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.compliance')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{t('reportPage.content.complianceDesc')}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-gray-100 dark:bg-[#1A1A1A] text-gray-700 dark:text-gray-300 rounded-full text-sm">SOC 2 Type II</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-[#1A1A1A] text-gray-700 dark:text-gray-300 rounded-full text-sm">GDPR</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-[#1A1A1A] text-gray-700 dark:text-gray-300 rounded-full text-sm">CCPA</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-[#1A1A1A] text-gray-700 dark:text-gray-300 rounded-full text-sm">ISO 27001</span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.reportVulnerability')}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t('reportPage.content.reportVulnerabilityDesc')}</p>
      </>
    ),
  },
  'data-protection': {
    title: t('reportPage.content.dataProtectionTitle'),
    breadcrumb: [t('reportPage.sections.security'), t('reportPage.items.dataProtection')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.dataProtectionDesc')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.yourDataRights')}</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.dataRight1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.dataRight2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.dataRight3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.dataRight4')}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.dataRetention')}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t('reportPage.content.dataRetentionDesc')}</p>
      </>
    ),
  },
  'generate-code': {
    title: t('reportPage.content.generateCodeTitle'),
    breadcrumb: [t('reportPage.sections.tutorials'), t('reportPage.items.generateCode')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Code generation is about describing what you want and letting AI handle the implementation. Learn how to get the best results from AppNode&apos;s AI-powered development.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">The AI Code Generation Mindset</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Traditional coding requires you to know syntax, frameworks, and implementation details. AI code generation flips this — you focus on <strong className="text-gray-900 dark:text-white">what</strong> you want, and AI figures out <strong className="text-gray-900 dark:text-white">how</strong> to build it.</p>
        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <p className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">Too Technical</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Create a React component with useState hook</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">AI Generated</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Create a counter that shows a number and has plus/minus buttons</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <p className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">Too Technical</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Add a fetch call to /api/users endpoint</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">AI Generated</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Show a list of users from the database</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <p className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">Too Technical</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Style the button with Tailwind classes</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">AI Generated</p>
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
    title: t('reportPage.content.firstAppTitle'),
    breadcrumb: [t('reportPage.sections.tutorials'), t('reportPage.items.firstApp')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.firstAppIntro')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.firstAppStep1Title')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('reportPage.content.firstAppStep1Text')}</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.firstAppStep2Title')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('reportPage.content.firstAppStep2Text')}</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.firstAppStep3Title')}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('reportPage.content.firstAppStep3Text')}</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.firstAppStep4Title')}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t('reportPage.content.firstAppStep4Text')}</p>
      </>
    ),
  },
  'databases': {
    title: t('reportPage.content.databasesTitle'),
    breadcrumb: [t('reportPage.sections.tutorials'), t('reportPage.items.databases')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.databasesIntro')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.databasesAvailable')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.databasesSqlite')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.databasesSqliteDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.databasesPostgres')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.databasesPostgresDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.databasesMongo')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.databasesMongoDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.databasesRedis')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.databasesRedisDesc')}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.databasesAdding')}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t('reportPage.content.databasesAddingText')}</p>
      </>
    ),
  },
  'deploying': {
    title: t('reportPage.content.deployingTitle'),
    breadcrumb: [t('reportPage.sections.tutorials'), t('reportPage.items.deploying')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.deployingIntro')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.deployingSteps')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">1</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.deployingStep1')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.deployingStep1Text')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">2</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.deployingStep2')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.deployingStep2Text')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <div className="text-2xl font-bold text-gray-300 dark:text-gray-700 mb-2">3</div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.deployingStep3')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.deployingStep3Text')}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.deployingCustom')}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t('reportPage.content.deployingCustomText')}</p>
      </>
    ),
  },
  'teams-overview': {
    title: t('reportPage.content.teamsTitle'),
    breadcrumb: [t('reportPage.sections.teamsEnterprise'), t('reportPage.items.teamsOverview')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.teamsIntro')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.teamsFeatures')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.teamsShared')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.teamsSharedDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.teamsRealtime')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.teamsRealtimeDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.teamsRole')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.teamsRoleDesc')}</p>
          </div>
          <div className="border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-[#1A1A1A]">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t('reportPage.content.teamsBilling')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('reportPage.content.teamsBillingDesc')}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.teamsGettingStarted')}</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.teamsStep1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.teamsStep2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.teamsStep3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.teamsStep4')}
          </li>
        </ul>
      </>
    ),
  },
  'enterprise-features': {
    title: t('reportPage.content.enterpriseTitle'),
    breadcrumb: [t('reportPage.sections.teamsEnterprise'), t('reportPage.items.enterpriseFeatures')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.enterpriseIntro')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.enterpriseBenefits')}</h2>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.enterpriseSSO')}:</strong> {t('reportPage.content.enterpriseSSODesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.enterpriseAudit')}:</strong> {t('reportPage.content.enterpriseAuditDesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.enterpriseContracts')}:</strong> {t('reportPage.content.enterpriseContractsDesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.enterpriseSupport')}:</strong> {t('reportPage.content.enterpriseSupportDesc')}</li>
          <li className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">{t('reportPage.content.enterpriseCloud')}:</strong> {t('reportPage.content.enterpriseCloudDesc')}</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400">{t('reportPage.content.enterpriseContact')}</p>
      </>
    ),
  },
  'collaboration': {
    title: t('reportPage.content.collaborationTitle'),
    breadcrumb: [t('reportPage.sections.teamsEnterprise'), t('reportPage.items.collaboration')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.collaborationIntro')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.collaborationRealtime')}</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.collaborationItem1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.collaborationItem2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.collaborationItem3')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.collaborationItem4')}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.collaborationComm')}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t('reportPage.content.collaborationCommText')}</p>
      </>
    ),
  },
  'recent-updates': {
    title: t('reportPage.content.changelogTitle'),
    breadcrumb: [t('reportPage.sections.changelog'), t('reportPage.items.recentUpdates')],
    content: (
      <div className="text-center py-12">
        <span className="text-6xl mb-6 block">🚀</span>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.changelogTitle')}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t('reportPage.content.changelogText')}</p>
      </div>
    ),
  },
  'roadmap': {
    title: t('reportPage.content.roadmapTitle'),
    breadcrumb: [t('reportPage.sections.changelog'), t('reportPage.items.roadmap')],
    content: (
      <>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {t('reportPage.content.roadmapIntro')}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.roadmapInProgress')}</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.roadmapItem1')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.roadmapItem2')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.roadmapItem3')}
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('reportPage.content.roadmapPlanned')}</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.roadmapItem4')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.roadmapItem5')}
          </li>
          <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 dark:text-gray-600">•</span>{t('reportPage.content.roadmapItem6')}
          </li>
        </ul>
      </>
    ),
  },
});

export default function DocsPage() {
  const { t, language} = useTranslation();
  const docsSections = getDocsSections(t);
  const docsContent = getDocsContent(t);
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState<string[]>([t('reportPage.sections.gettingStarted')]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Filter sections based on search query
  const filteredSections = searchQuery.trim().length < 2
    ? docsSections
    : docsSections
        .map(section => ({
          ...section,
          items: section.items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter(section => section.items.length > 0);

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
    <div key={language.code} className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] transition-colors">
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
          border-r border-gray-200 dark:border-r-2 dark:border-gray-800
          bg-[#f8fafc] dark:bg-[#1A1A1A]
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
                placeholder={t('reportPage.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-12 py-2 text-sm bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-gray-100 dark:bg-[#1a1a1a] px-1.5 py-0.5 rounded border border-gray-200 dark:border-2 dark:border-gray-800">⌘K</span>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {filteredSections.length === 0 && searchQuery.trim().length >= 2 ? (
                <div className="px-3 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  No results found
                </div>
              ) : filteredSections.map((section) => (
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
                  {(searchQuery.trim().length >= 2 || expandedSections.includes(section.title)) && (
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
              className="mt-8 flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-2 dark:border-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {t('reportPage.copyPage')}
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
