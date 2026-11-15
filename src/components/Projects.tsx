import React from 'react';
import { projectPlaceholders } from '../data/portfolioData';
import { FolderGit2, Github, ExternalLink, Code2 } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-100/50 dark:bg-navy-950/40 border-y border-slate-200/80 dark:border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-pill">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Academic & <span className="bg-gradient-to-r from-purple-brand to-indigo-brand bg-clip-text text-transparent">Personal Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            A structured section highlighting software implementations. Details can be edited in <code className="text-xs px-2 py-1 rounded bg-purple-100 dark:bg-navy-800 text-purple-700 dark:text-purple-300">src/data/portfolioData.ts</code>.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectPlaceholders.map((project) => (
            <div
              key={project.id}
              className="portfolio-card flex flex-col justify-between overflow-hidden group border border-slate-200 dark:border-navy-700/80 hover:border-purple-brand/50 transition-all duration-300"
            >
              {/* Card Header & Mock Visual Preview */}
              <div className="relative h-44 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-navy-900 dark:to-navy-800 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-200 dark:border-navy-700/80">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-navy-950 text-purple-600 dark:text-purple-300 shadow-sm border border-slate-200/60 dark:border-navy-700">
                    <Code2 className="w-5 h-5" />
                  </div>
                  {project.statusBadge && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                      {project.statusBadge}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Project Template
                  </span>
                  <span className="text-base font-bold text-slate-900 dark:text-white truncate">
                    {project.title}
                  </span>
                </div>

                {/* Subtle Background Glow */}
                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-purple-500/10 rounded-full blur-xl pointer-events-none"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-navy-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions / Buttons */}
                  <div className="pt-4 border-t border-slate-200 dark:border-navy-700/80 flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-navy-950 hover:bg-slate-200 dark:hover:bg-navy-800 border border-slate-200 dark:border-navy-700 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-sm transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Info Note on Customizing Projects */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400">
          💡 You can easily replace the placeholders above with your real academic mini/major projects in <code className="font-mono text-purple-600 dark:text-purple-400">src/data/portfolioData.ts</code>.
        </div>

      </div>
    </section>
  );
};
