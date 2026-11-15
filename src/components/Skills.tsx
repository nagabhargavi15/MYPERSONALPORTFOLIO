import React from 'react';
import { technicalSkills } from '../data/portfolioData';
import { 
  Code2, 
  Coffee, 
  Layout, 
  Palette, 
  BarChart3, 
  Cpu, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

export const Skills: React.FC = () => {
  // Map skill icon string to Lucide icon component
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-8 h-8 text-amber-500 dark:text-amber-400" />;
      case 'coffee':
        return <Coffee className="w-8 h-8 text-rose-500 dark:text-rose-400" />;
      case 'layout':
        return <Layout className="w-8 h-8 text-orange-500 dark:text-orange-400" />;
      case 'palette':
        return <Palette className="w-8 h-8 text-sky-500 dark:text-sky-400" />;
      case 'bar-chart':
        return <BarChart3 className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />;
      default:
        return <Cpu className="w-8 h-8 text-purple-500 dark:text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-pill">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Technical <span className="bg-gradient-to-r from-purple-brand to-indigo-brand bg-clip-text text-transparent">Skills & Knowledge</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Core technologies and concepts learned through coursework, hands-on programming, and problem-solving practice.
          </p>
        </div>

        {/* Technical Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skill) => (
            <div
              key={skill.name}
              className="portfolio-card p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-navy-950/80 border border-slate-200/80 dark:border-navy-800 shadow-sm group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Status Badge */}
              <div className="pt-4 border-t border-slate-200 dark:border-navy-700/80 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Proficiency through coursework & practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Competencies Summary Card */}
        <div className="mt-12 portfolio-card p-6 sm:p-8 bg-gradient-to-r from-purple-900/10 via-indigo-900/10 to-transparent">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-600 text-white shadow-md">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Foundations in Information Technology
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Focused on object-oriented programming, modern web structure, and analytical reasoning.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white dark:bg-navy-950 text-purple-600 dark:text-purple-300 border border-slate-200 dark:border-navy-700">
                B.Tech (IT) • Sridevi Women's Eng. College
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
