import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  Filter, 
  Star,
  Info
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Full-Stack', 'AI & IoT', 'Real-Time', 'Utilities', 'Mobile'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCat = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Software Engineering Showcase
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A curated list of 14 projects spanning full-stack web platforms, real-time collaboration, AI models, and mobile development.
          </p>
        </div>

        {/* Controls Bar: Category Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by keyword or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-slate-400"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-base font-semibold">
              No projects found matching "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-cyan-500 text-white text-xs font-semibold hover:bg-cyan-600"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  
                  {/* Category & Featured Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 text-[11px] font-bold border border-amber-200 dark:border-amber-800">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          Featured
                        </span>
                      )}
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        project.status === 'Ongoing'
                          ? 'bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400'
                          : 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-500 transition-colors">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Description Snippet */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-[11px] font-medium border border-slate-100 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 text-[11px] font-medium">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                </div>

                {/* Footer Action Buttons */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
                        title="View GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
