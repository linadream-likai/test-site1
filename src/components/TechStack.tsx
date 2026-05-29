import React from 'react';
import { Language } from '../types';

interface TechStackProps {
  lang: Language;
}

export default function TechStack({ lang }: TechStackProps) {
  const categories = [
    {
      title: { ja: 'フロントエンド', en: 'Frontend' },
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL']
    },
    {
      title: { ja: 'バックエンド', en: 'Backend' },
      techs: ['Go', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL']
    },
    {
      title: { ja: 'インフラ / DevOps', en: 'Infrastructure' },
      techs: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: { ja: 'AI / データ解析', en: 'AI & Data' },
      techs: ['PyTorch', 'TensorFlow', 'OpenAI API', 'LangChain', 'Pandas']
    }
  ];

  return (
    <section className="py-20 bg-[#FBFBFA] border-t border-[#E9E9E6]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#787774] uppercase mb-2">
            {lang === 'ja' ? '技術スタック' : 'TECH STACK'}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-[#37352F] tracking-tight">
            {lang === 'ja' ? 'モダンで堅牢な開発を支える技術' : 'Modern & Robust Technologies'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white border border-[#E9E9E6] rounded-[6px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <h3 className="text-xs font-bold text-[#787774] uppercase tracking-wider mb-4 pb-2 border-b border-[#E9E9E6]">
                {cat.title[lang]}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.techs.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-medium text-[#37352F] bg-[#F1F1EF] px-2 py-1 rounded-[3px] border border-[#E9E9E6]/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
