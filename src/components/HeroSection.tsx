'use client';

import { useState, useRef } from 'react';
import { useTranslation } from '@/context/LanguageContext';

// Sample project templates
const categories = ['AI Apps', 'Websites', 'Business Apps', 'Personal Software'];

const projectTemplates = {
  'AI Apps': [
    { id: 1, title: 'AI Chat', image: '/templates/AIAPPS1.png', author: 'AppNode' },
    { id: 2, title: 'Brainstorming Buddy', image: '/templates/AIAPPS2.png', author: 'AppNode' },
    { id: 3, title: 'Recipe Generator', image: '/templates/AIAPPS3.png', author: 'AppNode' },
  ],
  'Websites': [
    { id: 4, title: 'Portfolio Site', image: '/templates/WEBSITE5.png', author: 'AppNode' },
    { id: 5, title: 'Landing Page', image: '/templates/WEBSITE6.png', author: 'AppNode' },
    { id: 6, title: 'Blog Platform', image: '/templates/WEBSITE7.png', author: 'AppNode' },
  ],
  'Business Apps': [
    { id: 7, title: 'CRM Dashboard', image: '/templates/biznis2.png', author: 'AppNode' },
    { id: 8, title: 'Invoice Manager', image: '/templates/biznis5.png', author: 'AppNode' },
    { id: 9, title: 'Task Tracker', image: '/templates/biznis8.png', author: 'AppNode' },
  ],
  'Personal Software': [
    { id: 10, title: 'Budget Tracker', image: '/templates/personal5.png', author: 'AppNode' },
    { id: 11, title: 'Habit Tracker', image: '/templates/personal7.png', author: 'AppNode' },
    { id: 12, title: 'Notes App', image: '/templates/Personal8.png', author: 'AppNode' },
  ],
};

export default function HeroSection() {
  const [prompt, setPrompt] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [activeCategory, setActiveCategory] = useState('AI Apps');
  const [viewImage, setViewImage] = useState<{image: string; title: string} | null>(null);
  const { t } = useTranslation();
  
  const attachmentInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!prompt.trim() && attachments.length === 0 && images.length === 0) return;
    console.log('Submitting:', prompt);
    console.log('Attachments:', attachments);
    console.log('Images:', images);
    // Clear after submit
    setPrompt('');
    setAttachments([]);
    setImages([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleAttachmentClick = () => {
    attachmentInputRef.current?.click();
  };

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setAttachments(prev => [...prev, ...Array.from(files)]);
    }
    // Reset input so same file can be selected again
    e.target.value = '';
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setImages(prev => [...prev, ...Array.from(files)]);
    }
    // Reset input so same file can be selected again
    e.target.value = '';
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <section 
      className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-4 overflow-hidden bg-[#f8fafc] dark:bg-black transition-colors"
    >
      {/* Heading */}
      <div className="relative z-10 text-center" style={{ marginTop: '2vh' }}>
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          {t('hero.title')}
        </h1>
      </div>

      {/* Chat Input Box */}
      <div className="relative z-10 w-full max-w-[720px] mx-auto mt-4">
        <form className="w-full bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-[#1f1f1f] overflow-hidden">
          {/* Top bar with lightning icon and Ready badge */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-[#1f1f1f]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-[10px] flex items-center justify-center bg-black/5 dark:bg-white/10">
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-medium">{t('hero.ready')}</span>
            </div>
          </div>

          {/* Input Area */}
          <div className="flex-1 flex flex-col relative p-5 min-h-[100px]">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t('hero.placeholder')}
              rows={3}
              className="w-full resize-none ring-0 z-20 outline-0 bg-transparent text-base leading-relaxed placeholder:text-gray-500 text-[#1a1a1a] dark:text-white focus:outline-none"
            />
            
            {/* Display attached files and images */}
            {(attachments.length > 0 || images.length > 0) && (
              <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                {attachments.map((file, index) => (
                  <div key={`attachment-${index}`} className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm">
                    <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 max-w-[150px] truncate">{file.name}</span>
                    <button 
                      type="button" 
                      onClick={() => removeAttachment(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                ))}
                {images.map((file, index) => (
                  <div key={`image-${index}`} className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-sm">
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 max-w-[150px] truncate">{file.name}</span>
                    <button 
                      type="button" 
                      onClick={() => removeImage(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Hidden file inputs */}
          <input
            type="file"
            ref={attachmentInputRef}
            onChange={handleAttachmentChange}
            multiple
            className="hidden"
            accept=".pdf,.doc,.docx,.txt,.zip,.json,.csv,.xml,.md"
          />
          <input
            type="file"
            ref={imageInputRef}
            onChange={handleImageChange}
            multiple
            className="hidden"
            accept="image/*"
          />

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200 dark:border-[#1f1f1f]">
            <div className="flex items-center gap-3">
              {/* Attachment button */}
              <button 
                type="button" 
                onClick={handleAttachmentClick}
                className={`p-2 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10 ${attachments.length > 0 ? 'text-emerald-500' : 'text-gray-500 dark:text-gray-400'}`} 
                title="Add attachments"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
              </button>
              {/* Image button */}
              <button 
                type="button" 
                onClick={handleImageClick}
                className={`p-2 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10 ${images.length > 0 ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`} 
                title="Add image"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </button>
              <span className="text-xs text-gray-500 dark:text-gray-400">{t('hero.pressEnter')}</span>
            </div>
            {/* Generate button */}
            <button 
              type="submit"
              onClick={handleSubmit}
              disabled={!prompt.trim()}
              className="flex items-center gap-2 px-4 py-2 rounded font-medium text-sm transition-all duration-200 disabled:bg-gray-100 disabled:dark:bg-[#1f1f1f] disabled:text-gray-400 disabled:dark:text-gray-500 disabled:cursor-not-allowed enabled:bg-black enabled:dark:bg-white enabled:text-white enabled:dark:text-black enabled:hover:opacity-90"
            >
              {t('common.startBuilding')}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Start with an idea section - wider than chat */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto mt-4 mb-4 px-4">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Start with an idea</h3>
          
          {/* Category tabs */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                    : 'bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#1a1a1a]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-3 gap-4">
            {projectTemplates[activeCategory as keyof typeof projectTemplates].map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-black border border-gray-200 dark:border-[#2a2a2a] rounded-xl p-4 text-left hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-md"
              >
                {/* Template image */}
                <div 
                  className="aspect-[16/10] bg-gray-50 dark:bg-[#111111] rounded-lg mb-3 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setPrompt(`Create a ${project.title.toLowerCase()} app`)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    style={{ imageRendering: 'auto' }}
                    onError={(e) => {
                      // Show placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <svg className="w-6 h-6 text-gray-300 dark:text-gray-700 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5"/>
                    <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/>
                    <polyline points="21 15 16 10 5 21" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-medium text-gray-900 dark:text-white truncate">{project.title}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400">{project.author}</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewImage({ image: project.image, title: project.title });
                    }}
                    className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-[#1f1f1f] text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-colors"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Image Modal */}
      {viewImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setViewImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              onClick={() => setViewImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <img 
              src={viewImage.image} 
              alt={viewImage.title}
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-center text-white mt-4 text-lg font-medium">{viewImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
