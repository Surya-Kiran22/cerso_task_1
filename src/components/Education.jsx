import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Strong foundational computer science education with consistent academic distinction.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Year Badge & Score */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                    <Calendar className="w-3 h-3 text-cyan-500" />
                    <span>{edu.period}</span>
                  </span>

                  <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                    {edu.score}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Details */}
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {edu.details}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-500" />
                  Verified Credentials
                </span>
                <span className="font-semibold text-slate-400">Regular</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
