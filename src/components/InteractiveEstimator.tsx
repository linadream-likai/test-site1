import React, { useState } from 'react';
import { Language } from '../types';
import { Calculator, Check } from 'lucide-react';

interface InteractiveEstimatorProps {
  lang: Language;
}

export default function InteractiveEstimator({ lang }: InteractiveEstimatorProps) {
  const [platform, setPlatform] = useState<'web' | 'mobile' | 'both'>('web');
  const [features, setFeatures] = useState<string[]>([]);
  const [complexity, setComplexity] = useState<'simple' | 'medium' | 'complex'>('medium');

  const featureOptions = [
    { id: 'auth', label: { ja: 'ユーザー認証・ログイン', en: 'User Auth & Login' }, price: 150000 },
    { id: 'payment', label: { ja: '決済システム連携', en: 'Payment Integration' }, price: 250000 },
    { id: 'ai', label: { ja: 'AI・チャットボット機能', en: 'AI & Chatbot Integration' }, price: 400000 },
    { id: 'admin', label: { ja: '管理画面・ダッシュボード', en: 'Admin Dashboard' }, price: 300000 },
    { id: 'multilingual', label: { ja: '多言語対応 (日英など)', en: 'Multi-language Support' }, price: 150000 },
  ];

  const toggleFeature = (id: string) => {
    if (features.includes(id)) {
      setFeatures(features.filter((f) => f !== id));
    } else {
      setFeatures([...features, id]);
    }
  };

  const calculateTotal = () => {
    let base = platform === 'both' ? 1200000 : 800000;
    
    const featureSum = features.reduce((sum, fId) => {
      const feat = featureOptions.find((f) => f.id === fId);
      return sum + (feat ? feat.price : 0);
    }, 0);

    let multiplier = 1;
    if (complexity === 'simple') multiplier = 0.8;
    if (complexity === 'complex') multiplier = 1.4;

    return Math.round((base + featureSum) * multiplier);
  };

  return (
    <section id="estimator" className="py-20 bg-[#FBFBFA] border-t border-[#E9E9E6]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#787774] uppercase mb-2">
            {lang === 'ja' ? '簡易見積シミュレーター' : 'COST ESTIMATOR'}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-[#37352F] tracking-tight">
            {lang === 'ja' ? '開発費用の目安を今すぐシミュレーション' : 'Estimate Your Project Cost Instantly'}
          </p>
        </div>

        <div className="bg-white border border-[#E9E9E6] rounded-[6px] p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left: Controls */}
          <div className="md:col-span-7 space-y-6">
            {/* Platform */}
            <div>
              <label className="block text-xs font-bold text-[#787774] uppercase tracking-wider mb-3">
                {lang === 'ja' ? '1. プラットフォーム' : '1. Platform'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['web', 'mobile', 'both'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`px-3 py-2 text-xs font-semibold rounded-[4px] border transition-all duration-150 ${
                      platform === p
                        ? 'bg-[#EBF5FE] text-[#1D4ED8] border-[#BFDBFE]'
                        : 'bg-white text-[#37352F] border-[#E9E9E6] hover:bg-[#F1F1EF]'
                    }`}
                  >
                    {p === 'web' && (lang === 'ja' ? 'Webアプリ' : 'Web App')}
                    {p === 'mobile' && (lang === 'ja' ? 'スマホアプリ' : 'Mobile App')}
                    {p === 'both' && (lang === 'ja' ? '両方' : 'Both')}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <label className="block text-xs font-bold text-[#787774] uppercase tracking-wider mb-3">
                {lang === 'ja' ? '2. 追加機能' : '2. Additional Features'}
              </label>
              <div className="space-y-2">
                {featureOptions.map((feat) => {
                  const isSelected = features.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-[4px] border text-left transition-all duration-150 ${
                        isSelected
                          ? 'bg-[#EBF5FE] text-[#1D4ED8] border-[#BFDBFE]'
                          : 'bg-white text-[#37352F] border-[#E9E9E6] hover:bg-[#F1F1EF]'
                      }`}
                    >
                      <span className="text-xs font-medium">{feat.label[lang]}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#787774]">
                          +{feat.price.toLocaleString()}円
                        </span>
                        <div className={`w-4 h-4 rounded-[3px] border flex items-center justify-center ${
                          isSelected ? 'bg-[#1D4ED8] border-[#1D4ED8] text-white' : 'border-[#E9E9E6]'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Complexity */}
            <div>
              <label className="block text-xs font-bold text-[#787774] uppercase tracking-wider mb-3">
                {lang === 'ja' ? '3. デザイン・要件の複雑さ' : '3. Complexity'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['simple', 'medium', 'complex'] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setComplexity(c)}
                    className={`px-3 py-2 text-xs font-semibold rounded-[4px] border transition-all duration-150 ${
                      complexity === c
                        ? 'bg-[#EBF5FE] text-[#1D4ED8] border-[#BFDBFE]'
                        : 'bg-white text-[#37352F] border-[#E9E9E6] hover:bg-[#F1F1EF]'
                    }`}
                  >
                    {c === 'simple' && (lang === 'ja' ? 'シンプル' : 'Simple')}
                    {c === 'medium' && (lang === 'ja' ? '標準的' : 'Standard')}
                    {c === 'complex' && (lang === 'ja' ? '高度・複雑' : 'Complex')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Result */}
          <div className="md:col-span-5 bg-[#F1F1EF] border border-[#E9E9E6] rounded-[4px] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#37352F] mb-4">
                <Calculator className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'ja' ? '概算見積結果' : 'ESTIMATED TOTAL'}
                </span>
              </div>
              <p className="text-xs text-[#787774] mb-2">
                {lang === 'ja' ? '開発費用の目安 (税別)' : 'Estimated Cost (Excl. Tax)'}
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#37352F]">
                  ¥{calculateTotal().toLocaleString()}
                </span>
                <span className="text-xs text-[#787774]">〜</span>
              </div>
              <p className="text-[11px] text-[#787774] mt-4 leading-[1.5]">
                {lang === 'ja'
                  ? '※本シミュレーションは概算です。詳細な要件定義により前後する場合がございます。'
                  : '*This is a rough estimate. Final pricing depends on detailed requirements.'}
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-[4px] bg-[#37352F] text-white text-xs font-bold hover:bg-[#4F4D47] transition-colors text-center"
            >
              {lang === 'ja' ? 'この構成で詳細を相談する' : 'Discuss This Estimate'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
