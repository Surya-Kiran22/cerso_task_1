import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Download, 
  Award, 
  Code2, 
  Sparkles,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Radial Gradient Background Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/20 to-indigo-500/20 blur-3xl rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* Name Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Venkata Surya Kiran
              </span>
            </h1>

            {/* Title & Tagline */}
            <h2 className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-500" />
              <span>{personalInfo.title}</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {personalInfo.objective}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-sm shadow-sm transition-all"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 w-full">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white transition-all"
                  title="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all"
                  title="Call Me"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Interactive Profile & Code Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse-slow" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">surya-kiran.dev</span>
                </div>

                {/* Profile Badge Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-lg">
                    <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center text-white font-extrabold text-2xl">
                      VK
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      Venkata Surya Kiran M.
                    </h3>
                    <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                      Java & MERN Stack Developer
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      LBRCE • CSE (2023-Present)
                    </p>
                  </div>
                </div>

                {/* Developer Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {personalInfo.stats.map((stat, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800"
                    >
                      <div className="text-xl font-extrabold text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Code Snippet Preview */}
                <div className="rounded-xl bg-slate-950 p-4 font-mono text-xs text-slate-300 overflow-x-auto shadow-inner border border-slate-800">
                  <div className="text-slate-500">// Developer Profile</div>
                  <div><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = &#123;</div>
                  <div className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-400">'Surya Kiran'</span>,</div>
                  <div className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-400">'Full Stack Developer'</span>,</div>
                  <div className="pl-4"><span className="text-slate-400">tech:</span> [<span className="text-amber-400">'Spring Boot'</span>, <span className="text-amber-400">'React'</span>, <span className="text-amber-400">'Node'</span>],</div>
                  <div className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-400">'Ready for Impact 🚀'</span></div>
                  <div>&#125;;</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
