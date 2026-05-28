import React from 'react';
import { Language } from '../types';

interface TechStackProps {
  lang: Language;
}

export default function TechStack({ lang }: TechStackProps) {
  const categories = [
    {
      name: { ja: 'フロントエンド', en: 'Frontend' },
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Svelte']
    },
    {
      name: { ja: 'バックエンド', en: 'Backend' },
      techs: ['Go', 'Node.js', 'Python', 'FastAPI', 'Ruby on Rails', 'GraphQL']
    },
    {
      name: { ja: 'インフラ / クラウド', en: 'Cloud & DevOps' },
      techs: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']
    },
    {
      name: { ja: 'AI / データサイエンス', en: 'AI & Data' },
      techs: ['PyTorch', 'TensorFlow', 'OpenAI API', 'LangChain', 'PostgreSQL', 'Redis']
    }
  ];

  return (
    <section className="py-20 bg-[#171717] border-t border-[#2F2F2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#9E7FFF] uppercase mb-3">
            {lang === 'ja' ? '技術スタック' : 'TECH STACK'}
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            {lang === 'ja' ? 'モダンで堅牢なテクノロジーを採用' : 'Modern & Robust Technologies'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#262626] border border-[#2F2F2F] rounded-xl hover:border-[#9E7FFF]/30 transition-all duration-300"
            >
              <h3 className="text-sm font-bold text-[#38bdf8] uppercase tracking-wider mb-4 pb-2 border-b border-[#2F2F2F]">
                {cat.name[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 text-xs font-medium bg-[#171717] text-gray-300 rounded-md border border-[#2F2F2F] hover:border-[#9E7FFF]/50 hover:text-white transition-colors"
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
