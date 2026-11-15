import React from 'react';
import { personalData, navItems } from '../data/portfolioData';
import { ArrowUp, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 bg-white dark:bg-navy-950 border-t border-slate-200 dark:border-navy-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-navy-800">
          
          {/* Brand & Introduction */}
          <div className="md:col-span-6 flex flex-col items-start">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-1">
              {personalData.fullName}
            </span>
            <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-4">
              {personalData.title} • {personalData.branch}
            </span>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md mb-6">
              {personalData.college} (CGPA: {personalData.cgpa}). Passionate about building software with Java, Python, and web technologies.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{personalData.degree} in Information Technology</span>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-6 flex flex-col items-start md:items-end">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 text-right">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            &copy; {currentYear} <strong className="text-slate-700 dark:text-slate-300">{personalData.fullName}</strong>. All rights reserved. Built with React, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 hover:border-purple-brand/50 hover:text-purple-600 dark:hover:text-purple-300 transition-all shadow-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-500" />
          </button>
        </div>

      </div>
    </footer>
  );
};
