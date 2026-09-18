import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-white transition-colors duration-300">
      
      {/* Sticky Header Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResume={() => setResumeModalOpen(true)} 
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {resumeModalOpen && (
        <ResumeModal 
          onClose={() => setResumeModalOpen(false)} 
        />
      )}

    </div>
  );
}
