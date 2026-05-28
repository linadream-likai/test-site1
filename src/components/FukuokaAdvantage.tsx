import React from 'react';
import { Language } from '../types';
import { Compass, Award, Users, Heart } from 'lucide-react';

interface FukuokaAdvantageProps {
  lang: Language;
}

export default function FukuokaAdvantage({ lang }: FukuokaAdvantageProps) {
  const advantages = [
    {
      icon: Compass,
      title: {
        ja: 'アジアの玄関口としての立地',
        en: 'Gateway to Asia'
      },
      description: {
        ja: '東京よりもソウルや上海に近く、アジア全域へのビジネス展開やグローバルな人材獲得に最適な地理的優位性を持っています。',
        en: 'Geographically closer to Seoul and Shanghai than Tokyo, offering unparalleled access to Asian markets and global talent.'
      }
    },
    {
      icon: Award,
      title: {
        ja: '国家戦略特区（スタートアップ都市）',
        en: 'National Strategic Special Zone'
      },
      description: {
        ja: '「スタートアップビザ」や税制優遇など、市を挙げた強力なIT・起業支援体制が整っており、イノベーションが生まれやすい環境です。',
        en: 'Fukuoka offers robust startup support, including startup visas and tax incentives, fostering a highly innovative ecosystem.'
      }
    },
    {
      icon: Users,
      title: {
        ja: '優秀なグローバルIT人材の集積',
        en: 'Elite Global Tech Talent'
      },
      description: {
        ja: '国内外から優秀なエンジニアが集まる街。多国籍なチーム編成により、多様な視点と高い技術力を両立した開発が可能です。',
        en: 'A magnet for top-tier domestic and international engineers, enabling diverse perspectives and world-class technical execution.'
      }
    },
    {
      icon: Heart,
      title: {
        ja: '抜群の住みやすさとクリエイティビティ',
        en: 'Exceptional Quality of Life'
      },
      description: {
        ja: '豊かな自然、美味しい食文化、コンパクトな都市設計。エンジニアがストレスフリーでクリエイティブに働ける最高の環境です。',
        en: 'Rich nature, world-famous food culture, and compact city design. The perfect environment for engineers to stay creative and inspired.'
      }
    }
  ];

  return (
    <section id="advantage" className="py-24 bg-[#262626] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9E7FFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-[#38bdf8] uppercase mb-3">
            {lang === 'ja' ? 'なぜ福岡なのか？' : 'WHY FUKUOKA?'}
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {lang === 'ja' ? '福岡から、世界基準のイノベーションを' : 'Global Innovation from Japan\'s Tech Hub'}
          </p>
          <p className="text-[#A3A3A3] text-lg">
            {lang === 'ja'
              ? '日本で最も活気のあるスタートアップ都市・福岡。この街ならではの強みを活かし、私たちは最高品質のITソリューションを生み出します。'
              : 'Fukuoka is Japan\'s fastest-growing startup city. Leveraging its unique advantages, we deliver world-class digital solutions.'}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="flex gap-6 p-8 bg-[#171717] border border-[#2F2F2F] rounded-2xl hover:border-[#38bdf8]/50 transition-all duration-300"
              >
                <div className="shrink-0">
                  <div className="p-4 bg-[#262626] rounded-xl border border-[#2F2F2F] text-[#38bdf8]">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {adv.title[lang]}
                  </h3>
                  <p className="text-[#A3A3A3] leading-relaxed text-sm sm:text-base">
                    {adv.description[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fukuoka Stats Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#9E7FFF]/10 to-[#38bdf8]/10 border border-[#2F2F2F] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-1">
              {lang === 'ja' ? '福岡市は「スタートアップ都市」推進中！' : 'Fukuoka: Japan\'s Official Startup City'}
            </h4>
            <p className="text-sm text-[#A3A3A3]">
              {lang === 'ja'
                ? '国家戦略特区に指定され、開業率日本一を誇る、今最もエネルギッシュな都市です。'
                : 'Designated as a National Strategic Special Zone, boasting the highest business opening rate in Japan.'}
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-colors text-sm shrink-0"
          >
            {lang === 'ja' ? '福岡での開発について相談する' : 'Consult with Our Fukuoka Team'}
          </a>
        </div>
      </div>
    </section>
  );
}
