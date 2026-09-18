import React from 'react';
import { Award, Cloud, Code, Terminal, Trophy, Medal, Users, CheckCircle2 } from 'lucide-react';
import { certifications, achievements } from '../data/portfolioData';

const certIcons = {
  Cloud,
  Code,
  Terminal,
  Award
};

const achIcons = {
  Trophy,
  Medal,
  Users
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Honors & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Industry recognized cloud certifications, full-stack programming credentials, and hackathon wins.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-500" />
            <span>Professional Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => {
              const IconComp = certIcons[cert.icon] || Award;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex items-start gap-5 group"
                >
                  <div className="p-4 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold">
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hackathons & Leadership Achievements */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span>Hackathon Awards & Coordination</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((ach, idx) => {
              const IconComp = achIcons[ach.icon] || Trophy;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/80 text-amber-500 dark:text-amber-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-extrabold mb-3">
                      {ach.prize}
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {ach.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {ach.context}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Competition Award</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
