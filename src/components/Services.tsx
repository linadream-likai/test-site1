import React from 'react';
import { Language } from '../types';
import { services } from '../data';
import * as Icons from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-[#FBFBFA] border-t border-[#E9E9E6]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#787774] uppercase mb-2">
            {lang === 'ja' ? '提供サービス' : 'OUR SERVICES'}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-[#37352F] tracking-tight">
            {lang === 'ja' ? 'ビジネスの成長を加速する技術力' : 'Accelerating Growth with Technology'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            // Dynamically resolve icon component
            const IconComponent = (Icons as any)[service.icon];

            return (
              <div
                key={service.id}
                className="bg-white border border-[#E9E9E6] rounded-[6px] p-6 hover:bg-[#F1F1EF]/40 transition-all duration-150 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex p-2 bg-[#F1F1EF] border border-[#E9E9E6] rounded-[4px] text-[#37352F] mb-4">
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                  </div>
                  <h3 className="text-lg font-bold text-[#37352F] mb-2">
                    {service.title[lang]}
                  </h3>
                  <p className="text-sm text-[#787774] leading-[1.6] mb-6">
                    {service.description[lang]}
                  </p>
                </div>

                <ul className="space-y-2 border-t border-[#E9E9E6] pt-4">
                  {service.details[lang].map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs text-[#37352F]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#787774]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
