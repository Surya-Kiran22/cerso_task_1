import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Tag, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          aria-label="Close Project Detail Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold">
              {project.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              project.status === 'Ongoing'
                ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
            }`}>
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto pr-2 space-y-6 flex-1 text-slate-700 dark:text-slate-300">
          
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Overview:
            </h4>
            <p className="text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features & Achievements */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Features & Architectural Highlights:
            </h4>
            <div className="space-y-2.5">
              {project.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              <span>Technologies & Tools Used:</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Action Links */}
        <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-medium">
            Project ID: <span className="font-mono text-slate-500">{project.id}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold text-xs hover:bg-slate-800 dark:hover:bg-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-white font-semibold text-xs hover:bg-cyan-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
