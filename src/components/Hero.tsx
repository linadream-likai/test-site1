import React from 'react';
import { Language } from '../types';
import { ArrowRight, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
          alt="Fukuoka Night Skyline"
          className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_8s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/50 via-[#171717] to-[#171717]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-transparent to-[#171717]" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9E7FFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Fukuoka Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#262626]/80 border border-[#2F2F2F] mb-8 backdrop-blur-sm animate-fade-in">
          <MapPin className="w-4 h-4 text-[#38bdf8]" />
          <span className="text-xs font-semibold tracking-wider text-white uppercase">
            {lang === 'ja' ? '福岡から世界へ、次世代のITソリューション' : 'From Fukuoka to the World: Next-Gen IT'}
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
          {lang === 'ja' ? (
            <>
              テクノロジーで、
              <span className="block mt-2 bg-gradient-to-r from-[#9E7FFF] via-[#38bdf8] to-[#f472b6] bg-clip-text text-transparent">
                未来のビジネスを紡ぐ。
              </span>
            </>
          ) : (
            <>
              Weaving the Future of
              <span className="block mt-2 bg-gradient-to-r from-[#9E7FFF] via-[#38bdf8] to-[#f472b6] bg-clip-text text-transparent">
                Business with Tech.
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#A3A3A3] mb-12 leading-relaxed">
          {lang === 'ja'
            ? '福岡を拠点に、最先端のAI、クラウド、カスタムソフトウェア開発を提供。グローバルな開発体制で、お客様のデジタルトランスフォーメーション（DX）を加速させます。'
            : 'Based in Fukuoka, Japan\'s premier startup hub. We deliver cutting-edge AI, cloud, and custom software solutions with a global engineering team to accelerate your DX.'}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#9E7FFF] to-[#38bdf8] text-white font-bold hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#9E7FFF]/25 hover:scale-[1.02]"
          >
            {lang === 'ja' ? '無料相談・お問い合わせ' : 'Get in Touch'}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#262626] text-white font-bold border border-[#2F2F2F] hover:bg-[#2F2F2F] transition-all duration-300 hover:scale-[1.02]"
          >
            {lang === 'ja' ? 'サービスを見る' : 'Explore Services'}
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-10 border-t border-[#2F2F2F]/50 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">99%</span>
            <span className="text-xs text-[#A3A3A3] mt-1">{lang === 'ja' ? '顧客満足度' : 'Client Satisfaction'}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">50+</span>
            <span className="text-xs text-[#A3A3A3] mt-1">{lang === 'ja' ? '開発実績プロジェクト' : 'Projects Delivered'}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">40%</span>
            <span className="text-xs text-[#A3A3A3] mt-1">{lang === 'ja' ? 'グローバルエンジニア比率' : 'Global Engineers'}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">24/7</span>
            <span className="text-xs text-[#A3A3A3] mt-1">{lang === 'ja' ? '安心の保守サポート' : 'Support & Maintenance'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
