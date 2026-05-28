import React from 'react';
import { Language } from '../types';
import { projects } from '../data';
import { ExternalLink } from 'lucide-react';

interface PortfolioProps {
  lang: Language;
}

export default function Portfolio({ lang }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-24 bg-[#262626] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-[#9E7FFF] uppercase mb-3">
            {lang === 'ja' ? '開発実績' : 'PORTFOLIO'}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {lang === 'ja' ? '確かな実績と信頼のクオリティ' : 'Proven Track Record of Excellence'}
          </p>
          <p className="text-[#A3A3A3] text-lg">
            {lang === 'ja'
              ? 'スタートアップから大企業まで、私たちが手がけた代表的なプロジェクトをご紹介します。'
              : 'Explore some of our key projects delivered to startups and enterprise clients alike.'}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#171717] border border-[#2F2F2F] rounded-2xl overflow-hidden hover:border-[#9E7FFF]/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-[#262626]">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold bg-[#9E7FFF] text-white rounded-full">
                  {project.category[lang]}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#38bdf8] transition-colors">
                    {project.title[lang]}
                  </h3>
                  <p className="text-[#A3A3A3] text-sm leading-relaxed mb-6">
                    {project.description[lang]}
                  </p>
                </div>

                {/* Tags & Link */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-[10px] font-semibold bg-[#262626] text-gray-300 rounded border border-[#2F2F2F]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#2F2F2F] flex items-center justify-between text-xs font-bold text-[#38bdf8] group-hover:text-white transition-colors">
                    <span>{lang === 'ja' ? 'ケーススタディを見る' : 'View Case Study'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
