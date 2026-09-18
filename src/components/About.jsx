import React from 'react';
import { 
  User, 
  Code, 
  Database, 
  Sparkles, 
  Trophy, 
  Briefcase, 
  CheckCircle2, 
  Lightbulb,
  GraduationCap
} from 'lucide-react';
import { personalInfo, achievements } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in building scalable MERN stack web applications and enterprise Java Spring Boot backend microservices."
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Experienced with PostgreSQL, MongoDB, and Oracle SQL designing role-based access schemas and efficient queries."
    },
    {
      icon: Sparkles,
      title: "AI & Real-Time Tech",
      description: "Implemented real-time WebSockets (STOMP/SockJS, Socket.io), OpenCV gesture control, and OpenAI GPT integrations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Passionate Software Engineer & Problem Solver
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Driven by curiosity, clean code practices, and building real-world digital products that solve complex problems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Biography & Story */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-amber-500" />
              <span>Building digital solutions with technical precision</span>
            </h3>

            <p className="leading-relaxed text-base">
              I am a Computer Science and Engineering student at <strong className="text-slate-900 dark:text-white">Lakireddy Bali Reddy College of Engineering (LBRCE)</strong> maintaining a <strong className="text-cyan-600 dark:text-cyan-400">CGPA of 8.48</strong>. My passion lies in full-stack development, combining modern frontend frameworks like React with robust backend microservices in Node.js and Java Spring Boot.
            </p>

            <p className="leading-relaxed text-base">
              Through my internships at <strong className="text-slate-900 dark:text-white">Infosys</strong> and <strong className="text-slate-900 dark:text-white">SmartBridge</strong>, I have gained hands-on expertise building enterprise-grade applications, such as real-time shipment visibility platforms with live GPS tracking and dynamic ETA calculations.
            </p>

            {/* Quick Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Strong foundation in Data Structures & OOP",
                "MERN & Java Spring Boot Full-Stack Stack",
                "Real-time WebSockets & RESTful APIs",
                "Cloud deployment (AWS S3 & Render)",
                "Hackathon winner & Team collaborator",
                "Clean, maintainable & documented code"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Core Feature Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Hackathon & Leadership Spotlight */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-900/90 via-indigo-950 to-slate-900 text-white shadow-xl relative overflow-hidden border border-cyan-800/40">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>Hackathons & Leadership</span>
              </div>
              <h3 className="text-2xl font-bold">Hackathon Winner & Fest Coordinator</h3>
              <p className="text-slate-300 text-sm max-w-2xl">
                Demonstrated rapid prototyping skills by winning 1st & 2nd place in competitive MERN Stack Hackathons, and served as Central Coordinator for Lakshya 2K24 18th National Level Fest.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {achievements.map((ach, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl text-center min-w-[140px]">
                  <div className="text-amber-400 font-extrabold text-sm">{ach.prize}</div>
                  <div className="text-xs text-slate-200 font-medium">{ach.title.split('-')[0]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
