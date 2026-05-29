import React from 'react';
import { Language } from '../types';
import { projects } from '../data';

interface PortfolioProps {
  lang: Language;
}

export default function Portfolio({ lang }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-20 bg-white border-t border-[#E9E9E6]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#787774] uppercase mb-2">
            {lang === 'ja' ? '開発実績' : 'PORTFOLIO'}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-[#37352F] tracking-tight">
            {lang === 'ja' ? 'これまでの実績・プロジェクト' : 'Our Delivered Projects'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E9E9E6] rounded-[6px] overflow-hidden hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-200 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative bg-[#F1F1EF]">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm text-[#37352F] px-2 py-0.5 rounded-[3px] border border-[#E9E9E6]">
                    {project.category[lang]}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#37352F] mb-2 leading-snug">
                    {project.title[lang]}
                  </h3>
                  <p className="text-xs text-[#787774] leading-[1.6] mb-4">
                    {project.description[lang]}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-[#E9E9E6]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-[#787774] bg-[#F1F1EF] px-1.5 py-0.5 rounded-[3px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
