'use client';

import { useState } from 'react';
import { WebsiteMockup, getMockupType } from '@/components/WebsiteMockup';

const initialProjects = [
  {
    id: 1,
    name: 'SCIRA',
    image: '/projects/scira.png',
    type: 'Website',
    lastEdited: '2 hours ago',
  },
  {
    id: 2,
    name: 'Dashboard Pro',
    image: '/projects/dashboard.png',
    type: 'Dashboard',
    lastEdited: '1 day ago',
  },
  {
    id: 3,
    name: 'E-commerce Store',
    image: '/projects/ecommerce.png',
    type: 'Website',
    lastEdited: '3 days ago',
  },
];

type SortOption = 'lastEdited' | 'name' | 'type';

export default function UserProjects() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('lastEdited');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showProjectMenu, setShowProjectMenu] = useState<number | null>(null);

  const filteredProjects = projects
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(p => !filterType || p.type === filterType);

  const handleDeleteProject = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
      setShowProjectMenu(null);
    }
  };

  const handleDuplicateProject = (id: number) => {
    const project = projects.find(p => p.id === id);
    if (project) {
      const newProject = {
        ...project,
        id: Date.now(),
        name: `${project.name} (Copy)`,
        lastEdited: 'Just now',
      };
      setProjects([newProject, ...projects]);
      setShowProjectMenu(null);
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-full">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-gray-900">lovecode.dev&apos;s Projects</h2>
            <span className="text-xs text-gray-400">({filteredProjects.length})</span>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="pl-8 pr-3 py-1.5 w-36 text-xs border border-gray-200 rounded-md focus:outline-none focus:border-gray-300 focus:ring-0 bg-white transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                title="Grid view"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                title="List view"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            {/* Filter */}
            <div className="relative">
              <button 
                onClick={() => setShowFilterMenu(!showFilterMenu)}
                className={`flex items-center gap-2 px-3 py-2 text-sm border rounded-lg transition-colors ${
                  filterType 
                    ? 'text-orange-600 border-orange-200 bg-orange-50' 
                    : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                {filterType || 'Filter'}
              </button>
              
              {showFilterMenu && (
                <div className="absolute top-full right-0 mt-2 w-40 rounded-lg bg-white border border-gray-100 shadow-lg py-1 z-10">
                  <button 
                    onClick={() => { setFilterType(null); setShowFilterMenu(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${!filterType ? 'text-orange-600' : 'text-gray-600'}`}
                  >
                    All types
                  </button>
                  {['Website', 'Dashboard', 'App'].map(type => (
                    <button 
                      key={type}
                      onClick={() => { setFilterType(type); setShowFilterMenu(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${filterType === type ? 'text-orange-600' : 'text-gray-600'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Sort */}
            <div className="relative">
              <button 
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {sortBy === 'lastEdited' ? 'Last edited' : sortBy === 'name' ? 'Name' : 'Type'}
                <svg className={`w-4 h-4 transition-transform ${showSortMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showSortMenu && (
                <div className="absolute top-full right-0 mt-2 w-40 rounded-lg bg-white border border-gray-100 shadow-lg py-1 z-10">
                  {(['lastEdited', 'name', 'type'] as SortOption[]).map(option => (
                    <button 
                      key={option}
                      onClick={() => { setSortBy(option); setShowSortMenu(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${sortBy === option ? 'text-orange-600' : 'text-gray-600'}`}
                    >
                      {option === 'lastEdited' ? 'Last edited' : option === 'name' ? 'Name' : 'Type'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {/* New Project Card */}
            <button 
              onClick={() => setShowNewProjectModal(true)}
              className="group aspect-[4/3] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-orange-300 hover:bg-orange-50 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-300 transition-all">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="text-xs text-gray-500 group-hover:text-orange-600 font-medium">New project</span>
            </button>

            {/* Project Cards */}
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className={`group relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all ${
                  selectedProject === project.id ? 'ring-2 ring-orange-400' : ''
                }`}
              >
                {/* Project preview image */}
                <div className="absolute inset-0">
                  <WebsiteMockup type={getMockupType(project.name)} />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                
                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-medium text-xs truncate">{project.name}</p>
                  <p className="text-white/70 text-[10px]">{project.lastEdited}</p>
                </div>
                
                {/* More Options */}
                <div className="relative">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setShowProjectMenu(showProjectMenu === project.id ? null : project.id); }}
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                  
                  {showProjectMenu === project.id && (
                    <div className="absolute top-10 right-2 w-36 rounded-lg bg-white border border-gray-100 shadow-lg py-1 z-20">
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Open</button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleDuplicateProject(project.id); }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        Duplicate
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Rename</button>
                      <hr className="my-1 border-gray-100" />
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleDeleteProject(project.id); }}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Name</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Type</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Last edited</th>
                  <th className="text-right px-4 py-3 text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">{project.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{project.type}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{project.lastEdited}</td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-gray-400 hover:text-gray-600 p-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500">No projects found</p>
            <button 
              onClick={() => { setSearchQuery(''); setFilterType(null); }}
              className="mt-2 text-sm text-orange-600 hover:text-orange-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      {/* New Project Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowNewProjectModal(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 animate-fade-in" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Create new project</h3>
            <input 
              type="text" 
              placeholder="Project name" 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 mb-4"
            />
            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 mb-6 text-gray-600">
              <option>Website</option>
              <option>Dashboard</option>
              <option>App</option>
            </select>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowNewProjectModal(false)}
                className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setProjects([{ id: Date.now(), name: 'New Project', type: 'Website', lastEdited: 'Just now', image: '' }, ...projects]);
                  setShowNewProjectModal(false);
                }}
                className="flex-1 px-4 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
