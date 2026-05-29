import React from 'react';
import { Language } from '../types';
import { jobs } from '../data';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

interface CareersProps {
  lang: Language;
}

export default function Careers({ lang }: CareersProps) {
  return (
    <section id="careers" className="py-20 bg-white border-t border-[#E9E9E6]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#787774] uppercase mb-2">
            {lang === 'ja' ? '採用情報' : 'CAREERS'}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-[#37352F] tracking-tight">
            {lang === 'ja' ? 'グローバルなチームで、未来を創る' : 'Build the Future with a Global Team'}
          </p>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-[#E9E9E6] rounded-[6px] p-6 hover:bg-[#F1F1EF]/40 transition-all duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#787774] bg-[#F1F1EF] px-2 py-0.5 rounded-[3px] border border-[#E9E9E6]">
                    {job.department[lang]}
                  </span>
                  <span className="text-xs font-bold text-[#787774] bg-[#F1F1EF] px-2 py-0.5 rounded-[3px] border border-[#E9E9E6]">
                    {job.type[lang]}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#37352F]">
                  {job.title[lang]}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#787774]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location[lang]}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5" />
                    {job.salary[lang]}
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-[4px] border border-[#E9E9E6] text-xs font-bold text-[#37352F] hover:bg-[#F1F1EF] transition-colors"
              >
                {lang === 'ja' ? '詳細・応募' : 'Apply Now'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
