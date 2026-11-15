import React from 'react';
import { personalData } from '../data/portfolioData';
import { Download, FolderGit2, Mail, GraduationCap, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const Home: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Name, Intro, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-purple-100/80 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span>Available for Software Development Opportunities</span>
            </div>

            {/* Greeting */}
            <span className="text-sm sm:text-base font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 mb-2">
              Hello, I am
            </span>

            {/* Prominent Full Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 dark:from-white dark:via-purple-200 dark:to-indigo-300 bg-clip-text text-transparent">
                {personalData.fullName}
              </span>
            </h1>

            {/* Professional Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-5">
              {personalData.title}
            </h2>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              {personalData.bioIntroduction}
            </p>

            {/* Academic Highlights Quick Chips */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-700">
                <GraduationCap className="w-4 h-4 text-purple-500" />
                <span>{personalData.degree} – {personalData.branch}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>CGPA: {personalData.cgpa}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-700">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>{personalData.college}</span>
              </div>
            </div>

            {/* Action Buttons: View Projects, Contact Me, and Resume Download */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* View Projects Button */}
              <button
                onClick={() => scrollTo('projects')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-brand to-indigo-brand hover:from-purple-dark hover:to-indigo-600 shadow-lg shadow-purple-brand/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </button>

              {/* Contact Me Button */}
              <button
                onClick={() => scrollTo('contact')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-white bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 hover:border-purple-brand/60 hover:text-purple-600 dark:hover:text-purple-300 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>

              {/* Resume Download Button with Editable File Path */}
              <a
                href={personalData.resumePath}
                download="BODLA_NAGABHARGAVI_Resume.pdf"
                title="Download Resume PDF (Editable Path: /public/resume.pdf)"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Photo in Professional Rounded Portrait Frame with Lavender Glow */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Subtle Lavender Glow Layer */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-400 via-indigo-400 to-purple-300 opacity-30 dark:opacity-40 blur-2xl pointer-events-none"></div>

              {/* Main Profile Showcase Card */}
              <div className="relative portfolio-card p-4 sm:p-5 flex flex-col items-center text-center shadow-[0_10px_35px_rgba(168,85,247,0.15)] dark:shadow-[0_15px_40px_rgba(168,85,247,0.25)] border-2 border-purple-200/80 dark:border-purple-500/30">
                
                {/* Professional Rounded Portrait Frame */}
                <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.8] rounded-2xl overflow-hidden mb-4 bg-slate-100 dark:bg-navy-950 border border-purple-100 dark:border-navy-700/80 shadow-md">
                  <img
                    src="/profile.jpg"
                    alt={personalData.fullName}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Verified Student Badge on Photo */}
                  <div 
                    className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 dark:bg-navy-900/95 backdrop-blur-md text-purple-700 dark:text-purple-300 text-xs font-semibold shadow-lg border border-purple-200/80 dark:border-purple-700/60"
                    title="Verified Information Technology Student"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>Verified Profile</span>
                  </div>
                </div>

                {/* Identity Details */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-0.5">
                  {personalData.fullName}
                </h3>
                <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
                  {personalData.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {personalData.degree} • {personalData.branch}
                </p>

                {/* Quick Academic Metric */}
                <div className="w-full grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-200 dark:border-navy-700/80">
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/60 dark:border-navy-800">
                    <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 block">Overall CGPA</span>
                    <span className="text-base font-bold text-purple-600 dark:text-purple-300">{personalData.cgpa}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/60 dark:border-navy-800">
                    <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 block">Department</span>
                    <span className="text-base font-bold text-indigo-600 dark:text-indigo-300">IT</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
