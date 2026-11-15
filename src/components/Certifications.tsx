import React from 'react';
import { certificationPlaceholders } from '../data/portfolioData';
import { Award, Calendar, ExternalLink, ShieldCheck, Building } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-pill">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Licenses & <span className="bg-gradient-to-r from-purple-brand to-indigo-brand bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Verified course certifications and technical credentials completed through recognized learning platforms.
          </p>
        </div>

        {/* Certifications Gallery Grid (2x2 on desktop for optimal certificate preview readability) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationPlaceholders.map((cert) => (
            <div
              key={cert.id}
              className="portfolio-card p-6 sm:p-7 flex flex-col justify-between group border border-slate-200 dark:border-navy-700/80 hover:border-purple-brand/50 transition-all duration-300"
            >
              <div>
                {/* Header Icon & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-navy-950 px-3 py-1 rounded-full border border-slate-200/80 dark:border-navy-800">
                    <Calendar className="w-3 h-3 text-purple-500" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Certificate Document Thumbnail Preview */}
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-48 sm:h-52 rounded-xl overflow-hidden mb-5 bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 group/img"
                  title="Click to view full certificate"
                >
                  <img
                    src={cert.certificateLink}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-navy-900/90 text-xs font-bold text-slate-900 dark:text-white shadow-md">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Preview</span>
                    </span>
                  </div>
                </a>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuing Organization */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  <Building className="w-4 h-4 flex-shrink-0" />
                  <span>{cert.organization}</span>
                </div>

                {/* Certificate ID if available */}
                {cert.certificateId && (
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-4">
                    ID: {cert.certificateId}
                  </p>
                )}
              </div>

              {/* Action / View Certificate Button */}
              <div className="pt-4 border-t border-slate-200 dark:border-navy-700/80">
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-sm transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
