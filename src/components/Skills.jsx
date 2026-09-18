import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Terminal, 
  FileCode, 
  FileJson, 
  Smartphone, 
  Atom, 
  Palette, 
  Layout, 
  Boxes, 
  Server, 
  Network, 
  ShieldCheck, 
  Webhook, 
  Zap, 
  Database, 
  Leaf, 
  HardDrive, 
  Cloud, 
  GitBranch, 
  GitCommit, 
  Globe, 
  Bot, 
  MapPin,
  Wrench
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2, Cpu, Terminal, FileCode, FileJson, Smartphone, Atom, Palette, Layout, Boxes, 
  Server, Network, ShieldCheck, Webhook, Zap, Database, Leaf, HardDrive, Cloud, 
  GitBranch, GitCommit, Globe, Bot, MapPin
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'toolsCloud', label: 'Cloud & Tools' },
  ];

  const categoryTitles = {
    programming: "Programming Languages",
    frontend: "Frontend Development",
    backend: "Backend & Microservices",
    databases: "Databases & Storage",
    toolsCloud: "Cloud, DevOps & APIs"
  };

  const categoriesToShow = activeTab === 'all' 
    ? Object.keys(skillsData) 
    : [activeTab];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Proficiency
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive breakdown of technologies, frameworks, databases, and developer tools I work with.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="space-y-12">
          {categoriesToShow.map((catKey) => {
            const list = skillsData[catKey];
            return (
              <div key={catKey} className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="w-3 h-3 rounded-full bg-cyan-500" />
                  <span>{categoryTitles[catKey]}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {list.map((skill, idx) => {
                    const IconComp = iconMap[skill.icon] || Code2;
                    return (
                      <div 
                        key={idx} 
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-200 group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                              <IconComp className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
