import React from 'react';
import { personalData } from '../data/portfolioData';
import { UserCheck, Sparkles, Laptop, Compass, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-pill">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Passionate About <span className="bg-gradient-to-r from-purple-brand to-indigo-brand bg-clip-text text-transparent">Software & Innovation</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Discover my background as an Information Technology undergraduate, my career goals, and the technologies that drive my passion.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic & Background Narrative Card */}
          <div className="lg:col-span-7 portfolio-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-navy-700">
              <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Student of Information Technology
                </h3>
                <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                  {personalData.college}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-8">
              {personalData.aboutDetails.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-navy-700">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800">
                <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Academic CGPA</span>
                <span className="text-lg font-bold text-purple-600 dark:text-purple-300">8.99 / 10.0</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800">
                <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Branch</span>
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-300">Information Tech</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800">
                <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Target Role</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 block truncate">Software Developer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Interests & Engineering Focus */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Interests Card */}
            <div className="portfolio-card p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Technical Interests
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {personalData.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-navy-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-navy-700/60 hover:border-purple-brand/40 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-purple-500" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Aspirations Card */}
            <div className="portfolio-card p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-300">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Career Objective
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                As an aspiring software developer, my goal is to secure an impactful engineering position where I can apply my programming skills in Java, Python, and web technologies to build efficient, scalable, and user-centric software while actively expanding my knowledge.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
