import React from 'react';
import { Briefcase, Calendar, Building, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Internships & Industry Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Real-world full-stack development experience in enterprise and industry collaboration environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-300 dark:border-slate-800 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 border-4 border-slate-100 dark:border-slate-900 shadow-md group-hover:scale-125 transition-transform" />

              {/* Main Card */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold mb-2">
                      <Award className="w-3 h-3" />
                      <span>{exp.badge}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium">
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Deliverables & Impact:
                  </h4>
                  {exp.achievements.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 mr-2">Technologies:</span>
                  {exp.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
