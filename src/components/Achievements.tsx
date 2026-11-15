import React from 'react';
import { achievementPlaceholders } from '../data/portfolioData';
import { Trophy, Star, Calendar, CheckCircle } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-slate-100/50 dark:bg-navy-950/40 border-y border-slate-200/80 dark:border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-pill">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Key <span className="bg-gradient-to-r from-purple-brand to-indigo-brand bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Academic milestones and recognitions earned through diligence, technical curiosity, and performance.
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementPlaceholders.map((achievement, idx) => (
            <div
              key={achievement.id}
              className={`portfolio-card p-6 sm:p-7 flex flex-col justify-between ${
                idx === 0
                  ? 'border-purple-300 dark:border-purple-700/80 ring-1 ring-purple-400/20 shadow-glow-purple/20'
                  : ''
              }`}
            >
              <div>
                {/* Header Icon & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-sm">
                    {idx === 0 ? <Star className="w-6 h-6 text-amber-500 fill-amber-500/20" /> : <Trophy className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-navy-950 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-navy-800">
                    {achievement.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {achievement.title}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{achievement.date}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {achievement.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 border-t border-slate-200 dark:border-navy-700/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Status</span>
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-300 inline-flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-500" />
                  <span>{achievement.isPlaceholder ? "Editable Template" : "Verified Academic Milestone"}</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
