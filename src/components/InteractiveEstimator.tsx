import React, { useState } from 'react';
import { Language } from '../types';
import { Calculator, Check, Sparkles } from 'lucide-react';

interface InteractiveEstimatorProps {
  lang: Language;
}

interface Option {
  id: string;
  name: { ja: string; en: string };
  price: number;
}

export default function InteractiveEstimator({ lang }: InteractiveEstimatorProps) {
  const [projectType, setProjectType] = useState<string>('web-app');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<number>(3); // months

  const projectTypes = [
    { id: 'web-app', name: { ja: 'Webアプリケーション', en: 'Web Application' }, basePrice: 1500000 },
    { id: 'mobile-app', name: { ja: 'モバイルアプリ (iOS/Android)', en: 'Mobile App (iOS/Android)' }, basePrice: 2000000 },
    { id: 'ai-integration', name: { ja: 'AI・LLMシステム構築', en: 'AI & LLM Integration' }, basePrice: 2500000 },
    { id: 'landing-page', name: { ja: '高機能LP・コーポレートサイト', en: 'Premium Landing Page' }, basePrice: 600000 },
  ];

  const features: Option[] = [
    { id: 'auth', name: { ja: 'ユーザー認証・権限管理', en: 'User Auth & Roles' }, price: 200000 },
    { id: 'payment', name: { ja: '決済システム連携 (Stripe等)', en: 'Payment Integration (Stripe)' }, price: 300000 },
    { id: 'multilingual', name: { ja: '多言語対応 (日英等)', en: 'Multi-language Support' }, price: 150000 },
    { id: 'admin-panel', name: { ja: '管理画面・ダッシュボード', en: 'Admin Dashboard' }, price: 400000 },
    { id: 'realtime', name: { ja: 'リアルタイムチャット・通知', en: 'Real-time Chat & Notifications' }, price: 350000 },
    { id: 'seo-speed', name: { ja: 'SEO・表示速度最適化', en: 'SEO & Speed Optimization' }, price: 100000 },
  ];

  const handleFeatureToggle = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculate Total
  const selectedTypeObj = projectTypes.find((t) => t.id === projectType);
  const basePrice = selectedTypeObj ? selectedTypeObj.basePrice : 0;
  const featuresPrice = selectedFeatures.reduce((sum, fId) => {
    const feature = features.find((f) => f.id === fId);
    return sum + (feature ? feature.price : 0);
  }, 0);

  // Timeline discount/premium factor
  // Shorter timeline = higher cost (rush fee)
  const timelineFactor = timeline <= 2 ? 1.2 : timeline >= 6 ? 0.9 : 1.0;
  const totalPrice = Math.round((basePrice + featuresPrice) * timelineFactor);

  const formatPrice = (price: number) => {
    if (lang === 'ja') {
      return `¥${(price / 10000).toLocaleString()} 万円〜`;
    } else {
      return `$${Math.round(price / 150).toLocaleString()} USD+`;
    }
  };

  return (
    <section id="estimator" className="py-24 bg-[#171717] relative overflow-hidden border-t border-[#2F2F2F]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#9E7FFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262626] border border-[#2F2F2F] mb-4">
            <Calculator className="w-4 h-4 text-[#9E7FFF]" />
            <span className="text-xs font-semibold text-white">
              {lang === 'ja' ? '1分で完了！簡易見積シミュレーター' : '1-Min Cost Estimator'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {lang === 'ja' ? '開発費用の目安をシミュレーション' : 'Estimate Your Project Cost'}
          </h2>
          <p className="text-[#A3A3A3]">
            {lang === 'ja'
              ? 'ご希望のプロジェクトタイプと機能を選択するだけで、概算の開発費用をその場で算出します。'
              : 'Select your project type and desired features to get an instant rough estimate.'}
          </p>
        </div>

        {/* Estimator Card */}
        <div className="bg-[#262626] border border-[#2F2F2F] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          {/* Left: Configuration */}
          <div className="p-8 lg:col-span-7 space-y-8 border-b lg:border-b-0 lg:border-r border-[#2F2F2F]">
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-sm font-bold text-white mb-4">
                {lang === 'ja' ? '1. プロジェクトの種類を選択' : '1. Select Project Type'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                      projectType === type.id
                        ? 'bg-[#9E7FFF]/10 border-[#9E7FFF] text-white'
                        : 'bg-[#171717] border-[#2F2F2F] text-[#A3A3A3] hover:border-gray-600'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">{type.name[lang]}</span>
                    <span className="block text-xs text-[#38bdf8]">{formatPrice(type.basePrice)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Features */}
            <div>
              <label className="block text-sm font-bold text-white mb-4">
                {lang === 'ja' ? '2. 追加したい機能（複数選択可）' : '2. Select Features (Multiple)'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature) => {
                  const isSelected = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      onClick={() => handleFeatureToggle(feature.id)}
                      className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#38bdf8]/10 border-[#38bdf8] text-white'
                          : 'bg-[#171717] border-[#2F2F2F] text-[#A3A3A3] hover:border-gray-600'
                      }`}
                    >
                      <div>
                        <span className="block font-bold text-xs mb-1">{feature.name[lang]}</span>
                        <span className="block text-[11px] text-[#A3A3A3]">{formatPrice(feature.price)}</span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                          isSelected ? 'bg-[#38bdf8] border-[#38bdf8]' : 'border-[#2F2F2F]'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold text-white">
                  {lang === 'ja' ? '3. 希望の開発期間' : '3. Desired Timeline'}
                </label>
                <span className="text-sm font-bold text-[#9E7FFF]">
                  {timeline} {lang === 'ja' ? 'ヶ月' : 'Months'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={timeline}
                onChange={(e) => setTimeline(Number(e.target.value))}
                className="w-full h-2 bg-[#171717] rounded-lg appearance-none cursor-pointer accent-[#9E7FFF]"
              />
              <div className="flex justify-between text-xs text-[#A3A3A3] mt-2">
                <span>1 {lang === 'ja' ? 'ヶ月 (特急)' : 'Month (Express)'}</span>
                <span>6 {lang === 'ja' ? 'ヶ月 (標準)' : 'Months (Standard)'}</span>
                <span>12 {lang === 'ja' ? 'ヶ月 (長期)' : 'Months (Long-term)'}</span>
              </div>
            </div>
          </div>

          {/* Right: Result Summary */}
          <div className="p-8 lg:col-span-5 bg-[#171717] flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 pb-4 border-b border-[#2F2F2F]">
                {lang === 'ja' ? 'お見積り結果' : 'Estimation Summary'}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-[#A3A3A3]">{lang === 'ja' ? '基本開発費' : 'Base Cost'}</span>
                  <span className="text-white font-semibold">{formatPrice(basePrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#A3A3A3]">{lang === 'ja' ? 'オプション機能' : 'Selected Features'}</span>
                  <span className="text-white font-semibold">{formatPrice(featuresPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#A3A3A3]">{lang === 'ja' ? '開発期間調整' : 'Timeline Factor'}</span>
                  <span className="text-white font-semibold">
                    {timelineFactor === 1.2 ? 'x 1.2 (特急)' : timelineFactor === 0.9 ? 'x 0.9 (長期)' : '1.0'}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-[#262626] rounded-2xl border border-[#2F2F2F] text-center mb-8">
                <span className="block text-xs text-[#A3A3A3] uppercase tracking-wider mb-2">
                  {lang === 'ja' ? '概算開発費用' : 'Estimated Total Cost'}
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9E7FFF] to-[#38bdf8]">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#9E7FFF] to-[#38bdf8] text-white font-bold hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#9E7FFF]/20"
              >
                <Sparkles className="w-4 h-4" />
                {lang === 'ja' ? 'この構成で詳細を相談する' : 'Consult with this Estimate'}
              </a>
              <p className="text-[11px] text-[#A3A3A3] text-center leading-relaxed">
                {lang === 'ja'
                  ? '※本シミュレーションは概算です。要件定義により前後する場合がございます。'
                  : '*This is a rough estimate. Final pricing depends on detailed requirements.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
