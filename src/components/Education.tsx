import React from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, Building2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 bg-slate-100/50 dark:bg-navy-950/40 border-y border-slate-200/80 dark:border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-pill">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            My <span className="bg-gradient-to-r from-purple-brand to-indigo-brand bg-clip-text text-transparent">Education Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Details of my formal engineering education and foundational academic background.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationList.map((edu, idx) => (
            <div
              key={edu.id}
              className={`portfolio-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden ${
                idx === 0
                  ? 'border-purple-300 dark:border-purple-700/80 ring-1 ring-purple-400/20 shadow-glow-purple/20'
                  : ''
              }`}
            >
              {/* Highlight ribbon for B.Tech */}
              {idx === 0 && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-brand to-indigo-brand text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-bl-xl shadow-sm">
                  Current Program
                </div>
              )}

              <div>
                {/* Header Icon & Duration */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  {edu.duration && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-navy-950 px-2.5 py-1 rounded-full border border-slate-200/80 dark:border-navy-800">
                      <Calendar className="w-3 h-3 text-purple-500" />
                      <span>{edu.duration}</span>
                    </div>
                  )}
                </div>

                {/* Degree & Institution */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {edu.degree}
                </h3>
                {edu.institution && (
                  <div className="flex items-start gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 mb-4">
                    <Building2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{edu.institution}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Bottom Score Badge */}
              <div className="pt-4 border-t border-slate-200 dark:border-navy-700/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">Score / Performance:</span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold border border-purple-200 dark:border-purple-800">
                  <Award className="w-3.5 h-3.5" />
                  <span>{edu.cgpaOrGrade}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
