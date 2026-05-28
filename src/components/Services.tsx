import React from 'react';
import { Language } from '../types';
import { services } from '../data';
import { Code2, Brain, Cloud, Globe, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Code2,
  Brain,
  Cloud,
  Globe,
};

export default function Services({ lang }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-[#171717] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#38bdf8]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-[#9E7FFF] uppercase mb-3">
            {lang === 'ja' ? '提供サービス' : 'OUR SERVICES'}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {lang === 'ja' ? 'ビジネスを加速させる技術力' : 'Empowering Your Business with Tech'}
          </p>
          <p className="text-[#A3A3A3] text-lg">
            {lang === 'ja'
              ? '最先端のテクノロジーと、アジャイルな開発プロセスを組み合わせ、高品質なソリューションをスピーディーに提供します。'
              : 'Combining cutting-edge technology with agile development processes to deliver high-quality solutions rapidly.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="group relative bg-[#262626] border border-[#2F2F2F] rounded-2xl p-8 hover:border-[#9E7FFF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#9E7FFF]/5 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="inline-flex p-4 bg-[#171717] rounded-xl border border-[#2F2F2F] text-[#9E7FFF] group-hover:text-[#38bdf8] group-hover:border-[#38bdf8]/30 transition-colors duration-300 mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#9E7FFF] transition-colors duration-200">
                    {service.title[lang]}
                  </h3>
                  <p className="text-[#A3A3A3] leading-relaxed mb-6">
                    {service.description[lang]}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3 mb-8">
                    {service.details[lang].map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
                <div className="pt-4 border-t border-[#2F2F2F] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#A3A3A3] group-hover:text-white transition-colors">
                    {lang === 'ja' ? '詳細を見る' : 'Learn More'}
                  </span>
                  <span className="text-[#9E7FFF] group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
