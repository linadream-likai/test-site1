import React from 'react';
import { Language } from '../types';
import { jobs } from '../data';
import { Briefcase, MapPin, DollarSign, ArrowUpRight } from 'lucide-react';

interface CareersProps {
  lang: Language;
}

export default function Careers({ lang }: CareersProps) {
  return (
    <section id="careers" className="py-24 bg-[#262626] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#f472b6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-[#f472b6] uppercase mb-3">
            {lang === 'ja' ? '採用情報' : 'CAREERS'}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {lang === 'ja' ? '福岡から、世界を変える仲間を募集' : 'Join Our Global Team in Fukuoka'}
          </p>
          <p className="text-[#A3A3A3] text-lg">
            {lang === 'ja'
              ? '私たちは、国籍やバックグラウンドを問わず、技術への情熱を持ったエンジニアを募集しています。福岡の素晴らしい環境で、一緒に働きませんか？'
              : 'We are looking for passionate engineers regardless of nationality. Work with us in the beautiful, vibrant city of Fukuoka.'}
          </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group bg-[#171717] border border-[#2F2F2F] rounded-2xl p-6 sm:p-8 hover:border-[#f472b6]/50 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="space-y-4">
                {/* Department & Type Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-semibold bg-[#262626] text-[#f472b6] rounded-full border border-[#2F2F2F]">
                    {job.department[lang]}
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-[#262626] text-white rounded-full border border-[#2F2F2F]">
                    {job.type[lang]}
                  </span>
                </div>

                {/* Job Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#f472b6] transition-colors">
                  {job.title[lang]}
                </h3>

                {/* Job Details */}
                <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-[#A3A3A3]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#38bdf8]" />
                    <span>{job.location[lang]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#10b981]" />
                    <span>{job.salary[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#262626] text-white font-bold border border-[#2F2F2F] group-hover:bg-[#f472b6] group-hover:text-white group-hover:border-[#f472b6] transition-all duration-300 shrink-0"
              >
                {lang === 'ja' ? '応募する' : 'Apply Now'}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Culture / Benefits Banner */}
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-[#171717] border border-[#2F2F2F] rounded-2xl">
            <h4 className="font-bold text-white mb-2">{lang === 'ja' ? 'ハイブリッドワーク' : 'Hybrid Work'}</h4>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              {lang === 'ja' ? 'リモートワークと天神オフィス出社の柔軟なハイブリッドスタイル。' : 'Flexible hybrid model combining remote work and our Tenjin office.'}
            </p>
          </div>
          <div className="p-6 bg-[#171717] border border-[#2F2F2F] rounded-2xl">
            <h4 className="font-bold text-white mb-2">{lang === 'ja' ? 'ビザサポート完備' : 'Visa Sponsorship'}</h4>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              {lang === 'ja' ? '海外からのエンジニア向けに、就労ビザの取得・更新を完全サポート。' : 'Full support for obtaining and renewing work visas for global talent.'}
            </p>
          </div>
          <div className="p-6 bg-[#171717] border border-[#2F2F2F] rounded-2xl">
            <h4 className="font-bold text-white mb-2">{lang === 'ja' ? 'スキルアップ支援' : 'Skill Development'}</h4>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              {lang === 'ja' ? '書籍購入、セミナー参加、資格取得費用を会社が全額負担。' : 'Company-covered books, seminars, and certification exam fees.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
