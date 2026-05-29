import React from 'react';
import { Language } from '../types';
import { ArrowRight, MapPin } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 bg-white">
      {/* Subtle Dotted Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" 
        style={{
          backgroundImage: 'radial-gradient(#37352F 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} 
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        {/* Fukuoka Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#F1F1EF] border border-[#E9E9E6] mb-8">
          <MapPin className="w-3.5 h-3.5 text-[#787774]" />
          <span className="text-xs font-medium tracking-wide text-[#37352F]">
            {lang === 'ja' ? '福岡から世界へ、次世代のITソリューション' : 'From Fukuoka to the World: Next-Gen IT'}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#37352F] mb-6 leading-[1.15]">
          {lang === 'ja' ? (
            <>
              テクノロジーで、
              <span className="px-2 py-0.5 bg-[#FBF3DB] rounded-[4px] inline-block mt-1">
                未来のビジネスを紡ぐ。
              </span>
            </>
          ) : (
            <>
              Weaving the Future of
              <span className="px-2 py-0.5 bg-[#FBF3DB] rounded-[4px] inline-block mt-1">
                Business with Tech.
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#787774] mb-10 leading-[1.6]">
          {lang === 'ja'
            ? '福岡を拠点に、最先端のAI、クラウド、カスタムソフトウェア開発を提供。グローバルな開発体制で、お客様のデジタルトランスフォーメーション（DX）を加速させます。'
            : 'Based in Fukuoka, Japan\'s premier startup hub. We deliver cutting-edge AI, cloud, and custom software solutions with a global engineering team to accelerate your DX.'}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-[4px] bg-[#37352F] text-white font-medium hover:bg-[#4F4D47] transition-all duration-150 text-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          >
            {lang === 'ja' ? '無料相談・お問い合わせ' : 'Get in Touch'}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-[4px] bg-white text-[#37352F] font-medium border border-[#E9E9E6] hover:bg-[#F1F1EF] transition-all duration-150 text-sm"
          >
            {lang === 'ja' ? 'サービスを見る' : 'Explore Services'}
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-8 border-t border-[#E9E9E6] grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[#37352F]">99%</span>
            <span className="text-xs text-[#787774] mt-1">{lang === 'ja' ? '顧客満足度' : 'Client Satisfaction'}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[#37352F]">50+</span>
            <span className="text-xs text-[#787774] mt-1">{lang === 'ja' ? '開発実績プロジェクト' : 'Projects Delivered'}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[#37352F]">40%</span>
            <span className="text-xs text-[#787774] mt-1">{lang === 'ja' ? 'グローバルエンジニア比率' : 'Global Engineers'}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[#37352F]">24/7</span>
            <span className="text-xs text-[#787774] mt-1">{lang === 'ja' ? '安心の保守サポート' : 'Support & Maintenance'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
