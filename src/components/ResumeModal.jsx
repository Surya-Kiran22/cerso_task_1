import React from 'react';
import { X, Download, Printer, CheckCircle, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, education, experiences, skillsData, projects, certifications, achievements } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-500" />
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">
              Resume Viewer - Venkata Surya Kiran Maddipudi
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Content */}
        <div className="overflow-y-auto pr-2 space-y-6 flex-1 py-6 text-slate-800 dark:text-slate-200 print:text-black">
          
          {/* Resume Header */}
          <div className="text-center border-b pb-6 border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-slate-900 dark:text-white">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border-b pb-1 border-slate-200 dark:border-slate-800 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {personalInfo.objective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border-b pb-1 border-slate-200 dark:border-slate-800 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{edu.degree}</div>
                    <div className="text-slate-500 dark:text-slate-400">{edu.institution} ({edu.score})</div>
                  </div>
                  <div className="font-semibold text-slate-400 text-xs">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border-b pb-1 border-slate-200 dark:border-slate-800 mb-3">
              Internships & Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                    <span>{exp.role} | {exp.company}</span>
                    <span className="text-slate-400 font-normal">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-600 dark:text-slate-300 text-xs">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Top Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border-b pb-1 border-slate-200 dark:border-slate-800 mb-3">
              Key Projects (14 Projects Total)
            </h2>
            <div className="space-y-3">
              {projects.slice(0, 6).map((proj, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {proj.title} <span className="font-mono text-xs font-normal text-indigo-500">({proj.tech.join(', ')})</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border-b pb-1 border-slate-200 dark:border-slate-800 mb-2">
              Certifications & Achievements
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-1 text-slate-600 dark:text-slate-300">
              {certifications.map((c, idx) => (
                <li key={idx}><strong>{c.title}</strong> - {c.issuer} ({c.date})</li>
              ))}
              {achievements.map((a, idx) => (
                <li key={idx}><strong>{a.title}</strong>: {a.prize}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Format: ATS Friendly PDF / Web Resume</span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}
