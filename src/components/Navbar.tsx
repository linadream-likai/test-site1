import React from 'react';
import { Language } from '../types';
import { Terminal, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: lang === 'ja' ? 'サービス' : 'Services', href: '#services' },
    { name: lang === 'ja' ? '福岡の強み' : 'Fukuoka Advantage', href: '#advantage' },
    { name: lang === 'ja' ? '開発実績' : 'Portfolio', href: '#portfolio' },
    { name: lang === 'ja' ? '見積シミュレーター' : 'Estimator', href: '#estimator' },
    { name: lang === 'ja' ? '採用情報' : 'Careers', href: '#careers' },
    { name: lang === 'ja' ? 'お問い合わせ' : 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E9E9E6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-[#F1F1EF] border border-[#E9E9E6] rounded-[4px]">
              <Terminal className="w-4 h-4 text-[#37352F]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#37352F] lowercase leading-none">
                linadream
              </span>
              <span className="text-[9px] text-[#787774] tracking-wider uppercase font-medium mt-0.5">
                Tech Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-[#787774] hover:text-[#37352F] hover:bg-[rgba(55,53,47,0.04)] rounded-[4px] px-3 py-1.5 transition-all duration-150"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 bg-[#F1F1EF] p-0.5 rounded-[4px] border border-[#E9E9E6]">
              <button
                onClick={() => setLang('ja')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-[3px] transition-all duration-150 ${
                  lang === 'ja'
                    ? 'bg-white text-[#37352F] shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                    : 'text-[#787774] hover:text-[#37352F]'
                }`}
              >
                JP
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-[3px] transition-all duration-150 ${
                  lang === 'en'
                    ? 'bg-white text-[#37352F] shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                    : 'text-[#787774] hover:text-[#37352F]'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Switcher Mobile */}
            <div className="flex items-center gap-0.5 bg-[#F1F1EF] p-0.5 rounded-[4px] border border-[#E9E9E6]">
              <button
                onClick={() => setLang('ja')}
                className={`px-2 py-0.5 text-xs font-semibold rounded-[3px] ${
                  lang === 'ja' ? 'bg-white text-[#37352F] shadow-[0_1px_2px_rgba(0,0,0,0.05)]' : 'text-[#787774]'
                }`}
              >
                JP
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-xs font-semibold rounded-[3px] ${
                  lang === 'en' ? 'bg-white text-[#37352F] shadow-[0_1px_2px_rgba(0,0,0,0.05)]' : 'text-[#787774]'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-[4px] text-[#787774] hover:text-[#37352F] hover:bg-[rgba(55,53,47,0.04)] transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#E9E9E6] px-6 py-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-[4px] text-sm font-medium text-[#787774] hover:text-[#37352F] hover:bg-[rgba(55,53,47,0.04)] transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
