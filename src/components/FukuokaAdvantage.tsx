import React from 'react';
import { Language } from '../types';
import { Map, Shield, Users, Zap } from 'lucide-react';

interface FukuokaAdvantageProps {
  lang: Language;
}

export default function FukuokaAdvantage({ lang }: FukuokaAdvantageProps) {
  const advantages = [
    {
      icon: Map,
      title: {
        ja: 'アジアの玄関口としての立地',
        en: 'Gateway to Asia'
      },
      desc: {
        ja: '東京よりもソウルや上海、台北に近く、アジア市場への展開やグローバルチームとの連携に最適な地理的優位性を持っています。',
        en: 'Closer to Seoul, Shanghai, and Taipei than Tokyo, offering unmatched geographical advantages for Asian market expansion.'
      }
    },
    {
      icon: Shield,
      title: {
        ja: '国家戦略特区の恩恵',
        en: 'National Strategic Special Zone'
      },
      desc: {
        ja: '「グローバル創業・雇用創出特区」として、スタートアップビザや税制優遇など、グローバルな挑戦を後押しする制度が整っています。',
        en: 'Benefiting from startup visas and tax incentives designed to foster global entrepreneurship and innovation.'
      }
    },
    {
      icon: Users,
      title: {
        ja: '優秀なグローバル人材の集積',
        en: 'Elite Global Talent Pool'
      },
      desc: {
        ja: '住みやすさ世界トップクラスの福岡には、国内外から優秀なエンジニアが集まります。多国籍で多様な視点を持つチームを編成可能です。',
        en: 'Ranked among the world\'s most livable cities, Fukuoka attracts top-tier domestic and international engineering talent.'
      }
    },
    {
      icon: Zap,
      title: {
        ja: '高いコストパフォーマンス',
        en: 'Cost-Effective Operations'
      },
      desc: {
        ja: '東京と比較してオフィス賃料や生活コストが低いため、開発クオリティを妥協することなく、最適なコストでの開発が可能です。',
        en: 'Lower operating and living costs compared to Tokyo allow us to deliver premium quality development at optimized rates.'
      }
    }
  ];

  return (
    <section id="advantage" className="py-20 bg-white border-t border-[#E9E9E6]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#787774] uppercase mb-2">
            {lang === 'ja' ? '福岡の強み' : 'FUKUOKA ADVANTAGE'}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-[#37352F] tracking-tight">
            {lang === 'ja' ? 'なぜ、福岡から世界を目指すのか' : 'Why We Build from Fukuoka'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-[#F1F1EF] border border-[#E9E9E6] rounded-[4px] text-[#37352F]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#37352F] mb-1.5">
                    {item.title[lang]}
                  </h3>
                  <p className="text-sm text-[#787774] leading-[1.6]">
                    {item.desc[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
